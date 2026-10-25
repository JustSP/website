import { useRef, useState } from "react";
import Recaptcha, { type RecaptchaHandle } from "./Recaptcha";

export default function ContactForm() {
  const captcha = useRef<RecaptchaHandle>(null);
  const submitting = useRef(false);
  const [ready, setReady] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current || !ready || !captcha.current) return;
    submitting.current = true;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      setVerifying(true);
      const token = await captcha.current.execute();
      setVerifying(false);
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, token }),
        signal: AbortSignal.timeout(30000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error(result.error || "Your message could not be sent.");
      form.reset();
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Your message could not be sent. Please try again.");
    } finally {
      captcha.current?.reset();
      submitting.current = false;
      setVerifying(false);
      setLoading(false);
    }
  }
  const inputClass = "w-full border border-gray-300 rounded-lg p-3 bg-white text-heading";
  return <form onSubmit={submit} className="space-y-5">
    <fieldset disabled={loading} className="space-y-5">
      <div><label htmlFor="contact-name" className="block mb-2">Name *</label><input id="contact-name" name="name" autoComplete="name" required maxLength={100} className={inputClass} /></div>
      <div><label htmlFor="contact-email" className="block mb-2">Email *</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} /></div>
      <div><label htmlFor="contact-subject" className="block mb-2">Subject *</label><input id="contact-subject" name="subject" required maxLength={200} className={inputClass} /></div>
      <div><label htmlFor="contact-message" className="block mb-2">Message *</label><textarea id="contact-message" name="message" required maxLength={5000} rows={6} className={inputClass} /></div>
    </fieldset>
    <Recaptcha ref={captcha} onReady={setReady} />
    <p className="text-sm">Google reCAPTCHA helps protect this form. Google’s <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="underline">Terms of Service</a> apply.</p>
    {error && <p role="alert">{error}</p>}
    {success && <p role="status">Thank you! Your message has been sent. We’ll get back to you within one business day.</p>}
    <button type="submit" disabled={loading || !ready} className="btn btn-orange-red hover:btn-tra-white rounded-lg disabled:opacity-50">{verifying ? "Verifying…" : loading ? "Sending…" : "Send Message"}</button>
  </form>;
}
