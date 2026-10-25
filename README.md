# Northstar — React + TypeScript Starter

A polished, responsive landing page built with React, TypeScript, and Vite.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## New Relic browser monitoring

Create a browser application in New Relic and add its values to `.env.local`:

```bash
VITE_NEW_RELIC_LICENSE_KEY=your_browser_license_key
VITE_NEW_RELIC_APP_NAME=WISH-Website
VITE_NEW_RELIC_APPLICATION_ID=your_application_id
```

The browser agent is initialized only when the license key and Browser application ID are present. The app name is informational; it cannot replace the application ID. Create a Browser application in New Relic, copy its application ID into `.env.local`, and restart Vite after changing environment variables. The Node command shown by New Relic (`node -r newrelic ...`) does not apply to this static Vite site.

## Production build

```bash
npm run build
npm run preview
```

## Customize

- `src/App.tsx` — page content and components
- `src/styles.css` — layout, typography, responsive styling
- `index.html` — page title and metadata

## Contact form and reCAPTCHA on Netlify

The `/contact` form displays a bottom-right reCAPTCHA badge and runs verification
when the visitor clicks Send Message. Google may display a challenge if needed.
Use a key registered for **v2 Invisible reCAPTCHA**, rather than a checkbox or v3 key.

The `/contact` form submits to `POST /.netlify/functions/contact`. The function
verifies the invisible reCAPTCHA v2 token with Google, checks the returned hostname against
an explicit allowlist, and only then sends the message using Brevo. Email sender
and recipient are server configuration; visitors cannot override them.

In Netlify **Project configuration → Environment variables**, set:

- `VITE_RECAPTCHA_SITE_KEY`: your public v2 Invisible reCAPTCHA site key (available to builds).
- `RECAPTCHA_SECRET_KEY`: the matching secret (Functions scope only).
- `RECAPTCHA_ALLOWED_HOSTNAMES`: comma-separated exact hostnames, e.g.
  `ww-hub.com,www.ww-hub.com` (Functions scope).
- `BREVO_API_KEY`: your Brevo API key (Functions scope only).
- Optional `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL`: both default to
  `connect@ww-hub.com`. The sender must be verified in Brevo.

Register the same website domains in Google's reCAPTCHA admin console. Add any
Netlify hostname you actually use to both Google's domain settings and the
function's allowlist. Redeploy after configuration. Do not put either secret in
a `VITE_` variable. The older unused Brevo example components use a browser key;
the live contact form does not import those examples or services.

For local full-stack development, run `npx netlify-cli dev` with the server
variables configured in an ignored `.env` file or through the linked Netlify
project. Plain `npm run dev` serves only the frontend. For local CAPTCHA testing,
allow `localhost` in Google and `RECAPTCHA_ALLOWED_HOSTNAMES`.

### Submission contract

JSON fields: `name` (1–100 chars), `email` (valid email, up to 254), `subject`
(1–200), `message` (1–5000), `token` (fresh reCAPTCHA response, up to 4096).
The endpoint accepts POST with `Content-Type: application/json` and returns
`200 { "success": true }` once Brevo accepts the email. Errors return
`{ "error": "user-facing message" }` with status 400 (validation/CAPTCHA),
405 (method), 413 (size), 415 (content type), 503 (missing configuration),
or 502 (upstream failure). Google tokens are single use: the client resets the
challenge after every submission attempt. Acceptance by Brevo does not confirm
inbox delivery.

Production verification still requires the real Netlify environment, a completed
Google challenge, and confirmation that the resulting email arrives.
