const json = (status, body) => new Response(JSON.stringify(body), {
  status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
});

export default async function contact(request) {
  if (request.method !== 'POST') {
    return new Response(null, { status: 405, headers: { Allow: 'POST' } });
  }
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const apiKey = process.env.BREVO_API_KEY;
  const hosts = (process.env.RECAPTCHA_ALLOWED_HOSTNAMES || '').split(',').map(s => s.trim()).filter(Boolean);
  if (!secret || !apiKey || !hosts.length) {
    return json(503, { error: 'The contact form is temporarily unavailable. Please email connect@ww-hub.com.' });
  }
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return json(415, { error: 'Expected a JSON submission.' });
  }
  let data;
  try {
    const raw = await request.text();
    if (raw.length > 20000) return json(413, { error: 'Your message is too long.' });
    data = JSON.parse(raw);
  } catch {
    return json(400, { error: 'Invalid submission.' });
  }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return json(400, { error: 'Invalid submission.' });
  const limits = { name: 100, email: 254, subject: 200, message: 5000, token: 4096 };
  for (const [field, limit] of Object.entries(limits)) {
    if (typeof data[field] !== 'string' || !data[field].trim() || data[field].length > limit) {
      return json(400, { error: 'Please complete all fields and the reCAPTCHA challenge.' });
    }
    data[field] = data[field].trim();
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || /[\r\n]/.test(data.subject + data.name)) {
    return json(400, { error: 'Please check your name, email address and subject.' });
  }
  try {
    const verification = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret, response: data.token }),
      signal: AbortSignal.timeout(10000),
    });
    if (!verification.ok) return json(502, { error: 'Verification is unavailable. Please try again.' });
    const result = await verification.json();
    if (result.success !== true || !hosts.includes(result.hostname)) {
      // Log only Google's error codes and hostname checks; never tokens, secrets or form data.
      console.warn('reCAPTCHA rejected', JSON.stringify({
        success: result.success === true,
        codes: result['error-codes'] || [],
        hostname: result.hostname || null,
        hostnameAllowed: hosts.includes(result.hostname),
      }));
      return json(400, { error: 'reCAPTCHA verification failed. Please complete the challenge again.' });
    }
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        sender: { name: 'WISH Website', email: process.env.CONTACT_FROM_EMAIL || 'connect@ww-hub.com' },
        to: [{ email: process.env.CONTACT_TO_EMAIL || 'connect@ww-hub.com' }],
        replyTo: { name: data.name, email: data.email },
        subject: `Website inquiry: ${data.subject}`,
        textContent: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
        tags: ['contact-form', 'website'],
      }),
    });
    if (!response.ok) return json(502, { error: 'Your message could not be sent. Please email connect@ww-hub.com.' });
    return json(200, { success: true });
  } catch {
    return json(502, { error: 'The service is temporarily unavailable. Please try again or email connect@ww-hub.com.' });
  }
}
