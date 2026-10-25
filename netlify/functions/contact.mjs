const json = (status, body) => new Response(JSON.stringify(body), {
  status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
});

export default async function contact(request) {
  if (request.method !== 'POST') {
    return new Response(null, { status: 405, headers: { Allow: 'POST' } });
  }
  const googleApiKey = process.env.RECAPTCHA_GOOGLE_API_KEY;
  const projectId = process.env.RECAPTCHA_PROJECT_ID;
  const siteKey = process.env.VITE_RECAPTCHA_SITE_KEY;
  const minimumScore = Number(process.env.RECAPTCHA_MIN_SCORE || '0.5');
  const apiKey = process.env.BREVO_API_KEY;
  const hosts = (process.env.RECAPTCHA_ALLOWED_HOSTNAMES || '').split(',').map(s => s.trim()).filter(Boolean);
  if (!googleApiKey || !projectId || !siteKey || !apiKey || !hosts.length || !Number.isFinite(minimumScore) || minimumScore < 0 || minimumScore > 1) {
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
    const verification = await fetch(`https://recaptchaenterprise.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/assessments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': googleApiKey },
      body: JSON.stringify({ event: { token: data.token, siteKey, expectedAction: 'contact' } }),
      signal: AbortSignal.timeout(10000),
    });
    if (!verification.ok) {
      console.warn('reCAPTCHA assessment API failed', JSON.stringify({ status: verification.status }));
      return json(502, { error: 'Verification is unavailable. Please try again or email connect@ww-hub.com.' });
    }
    const result = await verification.json();
    const properties = result.tokenProperties || {};
    const score = result.riskAnalysis?.score;
    const hostnameAllowed = hosts.includes(properties.hostname);
    const actionAllowed = properties.action === 'contact';
    if (properties.valid !== true || !hostnameAllowed || !actionAllowed ||
        typeof score !== 'number' || !Number.isFinite(score) || score < minimumScore) {
      // Never log tokens, API keys, or submitted form data.
      console.warn('reCAPTCHA assessment rejected', JSON.stringify({
        valid: properties.valid === true,
        reason: properties.invalidReason || null,
        hostname: properties.hostname || null,
        hostnameAllowed, actionAllowed, score: score ?? null,
      }));
      if (properties.valid === true && (!hostnameAllowed || !actionAllowed)) {
        return json(503, { error: 'The contact form verification settings need attention. Please email connect@ww-hub.com.' });
      }
      return json(400, { error: 'Google could not verify this submission. Please reload and try again or email connect@ww-hub.com.' });
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
