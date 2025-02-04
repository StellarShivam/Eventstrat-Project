import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onToggle}
      >
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const ContentSection = () => {
  const [openSection, setOpenSection] = React.useState("legal");

  const sections = [
    {
      id: "legal",
      title: "Legal Entity",
      content:
        "A registered company provides a legal framework for your business operations. It distinguishes your business entity from your personal assets, offering protection from personal liabilities",
    },
    {
      id: "credibility",
      title: "Credibility and Trust",
      content:
        "Registration enhances your credibility with customers, suppliers, and financial institutions.",
    },
    {
      id: "funding",
      title: "Access to Funding",
      content:
        "Registered companies have better access to bank loans and investment opportunities.",
    },
    {
      id: "benefits",
      title: "Government Benefits",
      content:
        "Access various government schemes and benefits available for registered exporters.",
    },
    {
      id: "compliance",
      title: "Legal Compliance",
      content:
        "Ensures compliance with Indian laws and regulations regarding international trade.",
    },
  ];

  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Registered company
      </h1>
      <p className="text-gray-600 mb-8">
        To legally engage in exporting spices from India, it is essential to
        establish a registered company. This crucial step lays the groundwork
        for your export business and ensures compliance with Indian laws and
        regulations.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Why Company Registration Matters for Spice Exporters?
      </h2>

      <div className="space-y-2">
        {sections.map((section) => (
          <AccordionItem
            key={section.id}
            title={section.title}
            content={section.content}
            isOpen={openSection === section.id}
            onToggle={() =>
              setOpenSection(openSection === section.id ? "" : section.id)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
