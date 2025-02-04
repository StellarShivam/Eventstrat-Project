import React from "react";

const tabs = [
  "Eligibility Criteria",
  "Certifications",
  "Tests and Inspections",
  "Packaging and Labelling",
  "Pre-Shipping Banking",
  "Shipping",
];

const TabNavigation = () => {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-11 px-4 sm:px-6 lg:px-8  mx-auto">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`py-4 px-1 border-b-2 text-lg font-medium ${
              index === 0
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;
