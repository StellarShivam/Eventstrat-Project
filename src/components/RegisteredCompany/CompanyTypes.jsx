import React from "react";
import { Check } from "lucide-react";
import GridContent from "../GridContent";

const CompanyTypes = () => {
  const companyTypes = [
    {
      title: "Private Limited Company",
      description:
        "A popular choice for most businesses, offering limited liability and flexibility in terms of ownership and management.",
    },
    {
      title: "Public Limited Company",
      description:
        "Suitable for large-scale businesses that plan to raise capital through public offerings.",
    },
    {
      title: "Partnership",
      description:
        "A simpler form of business structure suitable for smaller businesses with a few partners",
    },
    {
      title: "Proprietorship",
      description:
        "A single-owner business, relatively easy to set up but offers limited liability protection.",
    },
  ];

  const registrationSteps = [
    "Choosing a unique company name",
    "Obtaining necessary documents (e.g., identity proofs, address proofs, PAN card).",
    "Filing the required forms with the Registrar of Companies (ROC).",
    "Paying the prescribed fees.",
  ];

  return (
    <div className="max-w-3xl  py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Types of Companies
      </h2>

      <GridContent content={companyTypes} />

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Registration Process:
        </h2>
        <p className="text-gray-600 mb-6">
          The specific registration process varies depending on the chosen
          company type. Generally, it involves:
        </p>

        <div className="bg-[#DAE3EA] rounded-lg p-6 mb-6 max-w-xl">
          <div className="space-y-4">
            {registrationSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="min-w-[20px] min-h-[20px] w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#E5F3E5] rounded-lg p-4 text-gray-600">
          <p>
            To know more, read our comprehensive guide on{" "}
            <a href="#" className="text-blue-600 hover:underline">
              how to register a company
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyTypes;
