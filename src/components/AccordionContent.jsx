import { useState } from "react";
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

const AccordionContent = ({ content }) => {
  const [openSection, setOpenSection] = useState("legal");

  return (
    <div className="space-y-2">
      {content.map((section) => (
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
  );
};

export default AccordionContent;
