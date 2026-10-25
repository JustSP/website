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

The `/contact` form uses the Google Cloud reCAPTCHA Enterprise JavaScript API
with an invisible widget and the `contact` action. It submits JSON to
`POST /.netlify/functions/contact`. The function creates an assessment and
requires a valid token, an allowed hostname, the expected action, and a risk
score of at least 0.5 before sending via Brevo. A visible badge alone does not
establish that backend verification works.

Set these production environment variables in Netlify:

- `VITE_RECAPTCHA_SITE_KEY`: public invisible site key, available to Builds and Functions.
- `RECAPTCHA_PROJECT_ID`: `wish-website`, available to Functions.
- `RECAPTCHA_GOOGLE_API_KEY`: private Google Cloud API key from that project,
  available to Functions only. Restrict it to the reCAPTCHA Enterprise API.
- `RECAPTCHA_ALLOWED_HOSTNAMES`: `ww-hub.com,www.ww-hub.com`, available to Functions.
- `RECAPTCHA_MIN_SCORE`: optional threshold from 0 to 1; defaults to 0.5.
- `BREVO_API_KEY`: private Brevo key, available to Functions only.
- `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL`: optional, both default to
  `connect@ww-hub.com`. The sender must be verified in Brevo.

Enable the reCAPTCHA Enterprise API in the Google Cloud project containing the
site key. The Google Cloud API key is a different credential from the old
reCAPTCHA legacy secret. The function no longer uses `RECAPTCHA_SECRET_KEY`.
Do not prefix either private API key with `VITE_`. Public configuration may use
Any scope, but private credentials should use Functions scope where available.

Register the site's domains in Google's key settings. Add any Netlify hostname
you use to both Google and the function allowlist. Deploy after setting variables.
Plain `npm run dev` serves only the frontend; use `npx netlify-cli dev` for the
function, with server variables configured privately in your local environment.

JSON submission fields: `name` (up to 100 chars), `email` (254), `subject` (200),
`message` (5000), and a fresh `token` (4096). Success is `200 { "success": true }`
after Brevo accepts the email, which does not confirm inbox delivery. Errors
return `{ "error": "user-facing message" }` with status 400 (invalid input or
assessment rejection), 405 (method), 413 (size), 415 (content type), 503 (missing
or incompatible settings), or 502 (upstream failure). Challenges reset after
each submission attempt. Server logs contain only assessment status, rejection
reason, hostname check, action check, and score, never tokens or form content.

Live verification requires a real challenge, a successful assessment, and
confirmation that the email arrives. Tune the score threshold using real traffic.
