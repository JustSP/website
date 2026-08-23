/**
 * Content for the ScreenshotTabs component
 * (src/components/ScreenshotTabs.tsx) — the horizontal tab strip
 * in the "Custom ERPNext Solutions Tailored to Your Business" section.
 */

export interface ScreenshotTab {
  /** Tab label, e.g. "Tab 1" */
  title: string;
  /** Image path for this tab */
  image: string;
  /** Alt text describing the screenshot */
  alt?: string;
}

export const screenshotTabsData: ScreenshotTab[] = [
  {
    title: "Finance & Accounts",
    image: "/assets/images/erpnext/screenshots/screenshot-01.png",
    alt: "ERPNext screenshot 1",
  },
  {
    title: "Sales",
    image: "/assets/images/erpnext/screenshots/screenshot-02.png",
    alt: "ERPNext screenshot 2",
  },
  {
    title: "Projects",
    image: "/assets/images/erpnext/screenshots/screenshot-03.png",
    alt: "ERPNext screenshot 3",
  },
  {
    title: "Purchase",
    image: "/assets/images/erpnext/screenshots/screenshot-04.png",
    alt: "ERPNext screenshot 4",
  },
  {
    title: "Inventory",
    image: "/assets/images/erpnext/screenshots/screenshot-05.png",
    alt: "ERP and dashboard screenshot 5",
  },
  {
    title: "Quality",
    image: "/assets/images/erpnext/screenshots/screenshot-06.png",
    alt: "ERP and dashboard screenshot 6",
  },
  {
    title: "HR",
    image: "/assets/images/erpnext/screenshots/screenshot-07.png",
    alt: "ERP and dashboard screenshot 7",
  },
];
