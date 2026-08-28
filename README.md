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
