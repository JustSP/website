/**
 * Example Newsletter Subscription Component using Brevo Service
 *
 * This demonstrates how to use the Brevo newsletter hook in a React component.
 */

import { useState } from "react";
import { useNewsletter } from "../services/brevo-hooks";

export function NewsletterFormExample() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { subscribe, loading, error, success, reset } = useNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    const result = await subscribe(email.trim(), name.trim() || undefined);

    if (result.success) {
      setEmail("");
      setName("");
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter-form" noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="newsletter-name">Name (optional)</label>
          <input
            type="text"
            id="newsletter-name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            disabled={loading}
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="newsletter-email">Email *</label>
          <input
            type="email"
            id="newsletter-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
            disabled={loading}
            placeholder="your@email.com"
          />
        </div>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {success && (
        <div className="alert alert-success" role="alert">
          🎉 Thanks for subscribing! Check your inbox for a confirmation email.
        </div>
      )}

      <button
        type="submit"
        className="btn btn-orange-red hover:btn-tra-white rounded-lg"
        disabled={loading || !email.trim()}
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>

      <p className="form-text text-muted mt-2">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
}

export default NewsletterFormExample;
