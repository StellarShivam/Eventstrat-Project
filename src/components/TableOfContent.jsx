import {
  ChevronDown,
  ChevronUp,
  LinkIcon,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const tocItems = [
  "Registered company",
  "GST registration",
  "PAN registration",
  "Importer Exporter Code (IEC)",
  "Authorized Dealer (AD) code",
  "FSSAI registration",
];

const TableOfContents = () => {
  return (
    <div className="w-64 pr-8">
      <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
        TABLE OF CONTENTS
      </h2>
      <nav className="border-l border-black pl-4">
        {tocItems.map((item, index) => (
          <a
            key={item}
            href="#"
            className={`block py-1 text-sm ${
              index === 0
                ? "text-[#124673] font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex space-x-4 mt-8">
        <LinkIcon className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
        <Facebook className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
        <Twitter className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
        <Linkedin className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default TableOfContents;
