import { BrowserAgent } from "@newrelic/browser-agent/loaders/browser-agent";

const licenseKey = import.meta.env.VITE_NEW_RELIC_LICENSE_KEY;
const applicationID = import.meta.env.VITE_NEW_RELIC_APPLICATION_ID;

if (licenseKey && applicationID) {
  new BrowserAgent({
    info: {
      applicationID,
      beacon: "bam.nr-data.net",
      errorBeacon: "bam.nr-data.net",
      licenseKey,
      sa: 1,
    },
    init: {
      ajax: {
        deny_list: ["bam.nr-data.net"],
      },
      browser_consent_mode: {
        enabled: false,
      },
      distributed_tracing: {
        enabled: true,
      },
      performance: {
        capture_detail: false,
        capture_marks: false,
        capture_measures: true,
      },
      privacy: {
        cookies_enabled: true,
      },
    },
    loader_config: {
      accountID: 8450084,
      agentID: applicationID,
      applicationID,
      licenseKey,
      trustKey: 8450084,
    },
  });
} else if (import.meta.env.DEV) {
  console.warn(
    "New Relic Browser monitoring is disabled: set VITE_NEW_RELIC_APPLICATION_ID to the ID from a New Relic Browser application.",
  );
}
