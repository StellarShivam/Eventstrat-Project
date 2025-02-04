import { useState, useEffect, useRef } from "react";

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
  const stickyRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Create a sentinel element that will be placed just above the nav
    const sentinel = document.createElement("div");
    stickyRef.current.parentNode.insertBefore(sentinel, stickyRef.current);

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        threshold: [1.0],
        rootMargin: "0px",
      }
    );

    observerRef.current.observe(sentinel);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      sentinel.remove();
    };
  }, []);

  return (
    <div
      ref={stickyRef}
      id="tab-nav"
      className={`border-b border-gray-200 bg-white will-change-transform ${
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
