import { useState } from "react";
import {
  screenshotTabsData,
  type ScreenshotTab,
} from "../content/screenshotTabs";

interface ScreenshotTabsProps {
  /** Tab data (title + image per tab); defaults to screenshotTabsData */
  tabs?: ScreenshotTab[];
}

/**
 * Horizontal tab strip showing one screenshot per tab.
 * Pure React (no jQuery/Owl dependency) so it re-mounts safely on SPA navigation.
 */
export default function ScreenshotTabs({
  tabs = screenshotTabsData,
}: ScreenshotTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (tabs.length === 0) return null;

  const activeTab = tabs[activeIndex];

  return (
    <div className="w-full">
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="ERPNext screenshots"
        className="flex flex-wrap justify-center"
        style={{ gap: "8px" }}
      >
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              role="tab"
              id={`screenshot-tab-${index}`}
              aria-selected={isActive}
              aria-controls={`screenshot-panel-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="font-main rounded-lg wow animate__animated animate__fadeInUp"
              style={{
                padding: "10px 22px",
                fontSize: "15px",
                lineHeight: 1.2,
                cursor: "pointer",
                transition:
                  "background-color 200ms ease, color 200ms ease, border-color 200ms ease",
                backgroundColor: isActive ? "#f83e0f" : "transparent",
                color: isActive ? "#ffffff" : "#ffffff",
                border: `1px solid ${isActive ? "#f83e0f" : "rgba(255,255,255,0.45)"}`,
                animationDelay: `${index * 60}ms`,
              }}
            >
              {tab.title}
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <div
        role="tabpanel"
        id={`screenshot-panel-${activeIndex}`}
        aria-labelledby={`screenshot-tab-${activeIndex}`}
        className="mt-8 sm:mt-10 lg:mt-12 xl:mt-15"
      >
        <img
          key={activeIndex}
          src={activeTab.image}
          alt={activeTab.alt ?? activeTab.title}
          className="inline-block w-full md:rounded-2xl"
          style={{
            maxWidth: "960px",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.45)",
          }}
        />
      </div>
    </div>
  );
}
