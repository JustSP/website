import { BrowserAgent } from "@newrelic/browser-agent/loaders/browser-agent";

const licenseKey = import.meta.env.VITE_NEW_RELIC_LICENSE_KEY;
const applicationID = import.meta.env.VITE_NEW_RELIC_APPLICATION_ID;

if (licenseKey && applicationID) {
  new BrowserAgent({
    info: {
      beacon: "bam.nr-data.net",
      errorBeacon: "bam.nr-data.net",
      licenseKey,
      applicationID,
    },
    init: {
      privacy: {
        cookies_enabled: true,
      },
      ajax: {
        deny_list: ["bam.nr-data.net"],
      },
    },
    loader_config: {
      licenseKey,
      applicationID,
    },
  });
}
