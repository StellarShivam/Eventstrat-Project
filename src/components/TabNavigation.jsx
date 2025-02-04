import { useState, useEffect, useCallback } from "react";

const tabs = [
  "Eligibility Criteria",
  "Certifications",
  "Tests and Inspections",
  "Packaging and Labelling",
  "Pre-Shipping Banking",
  "Shipping",
];

const TabNavigation = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = useCallback(() => {
    const tabNav = document.getElementById("tab-nav");
    if (tabNav) {
      const stickyOffset = tabNav.offsetTop;
      const shouldBeSticky = window.pageYOffset >= stickyOffset;

      if (shouldBeSticky !== isSticky) {
        setIsSticky(shouldBeSticky);
      }
    }
  }, [isSticky]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      id="tab-nav"
      className={`border-b border-gray-200 bg-white transform-gpu ${
        isSticky ? "sticky top-0 z-30 shadow-sm" : ""
      }`}
    >
      <div
        className="mx-auto overflow-x-auto"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <nav
          className="flex whitespace-nowrap min-w-max px-4 sm:px-6 lg:px-8"
          style={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`py-4 px-1 border-b-2 text-sm sm:text-base lg:text-lg font-medium shrink-0 mr-8 lg:mr-11 last:mr-0 ${
                index === 0
                  ? "border-[#124673] text-[#1E1E1E]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } transition-colors duration-200`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default TabNavigation;
