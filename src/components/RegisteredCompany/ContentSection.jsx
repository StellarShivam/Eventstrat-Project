import CompanyTypes from "./CompanyTypes";
import AccordionContent from "../AccordionContent";
import GSTRegistration from "../GSTRegistration/GSTRegistration";
import PANRegistration from "../PANRegistration/PANRegistration";

const ContentSection = () => {
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
      <h1 className="text-2xl font-bold text-[#124673] mb-4">
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

      <AccordionContent content={sections} />

      <CompanyTypes />
      <GSTRegistration />
      <PANRegistration />
    </div>
  );
};

export default ContentSection;
