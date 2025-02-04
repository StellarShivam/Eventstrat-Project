import GridContent from "../GridContent";
import AccordionContent from "../AccordionContent";

const GSTRegistration = () => {
  const sections = [
    {
      id: "Legal Compliance ",
      title: "Legal Compliance",
      content:
        "GST registration is mandatory for most businesses involved in the supply of goods and services, including spice exporters. Operating without GST registration can lead to penalties and legal repercussions.",
    },
    {
      id: "Input Tax Credit (ITC): ",
      title: "Input Tax Credit (ITC):",
      content:
        "Input Tax Credit (ITC) is a mechanism under the Goods and Services Tax (GST) system that allows businesses to claim a credit for the tax paid on purchases (inputs) against their output tax liability.",
    },
    {
      id: "Input Tax Credit (ITC)2:",
      title: "Input Tax Credit (ITC):",
      content:
        "Input Tax Credit (ITC) is a mechanism under the Goods and Services Tax (GST) system that allows businesses to claim a credit for the tax paid on purchases (inputs) against their output tax liability.",
    },
    {
      id: "Enhanced Credibility:",
      title: "Enhanced Credibility:",
      content:
        "Access various government schemes and benefits available for registered exporters.",
    },
  ];

  const aspectsOfGST = [
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

  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold text-[#124673] mb-4">
        GST registration
      </h1>
      <p className="text-gray-600 mb-8">
        Goods and Services Tax (GST) is a comprehensive, multi-stage tax levied
        on the supply of goods and services within India. For spice exporters,
        GST registration is a major compliance requirement.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Why is GST Registration Crucial for Spice Exporters?
      </h2>

      <AccordionContent content={sections} />

      <h2 className="text-2xl font-bold text-gray-900 py-8">
        Key Aspects of GST for Spice Exporters:
      </h2>

      <GridContent content={aspectsOfGST} />
    </div>
  );
};

export default GSTRegistration;
