import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/Logo (1).png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", hasDropdown: false },
    { name: "Agri Trade 101", hasDropdown: true },
    { name: "Exporters Handbook", hasDropdown: true },
    { name: "Commodity Focus", hasDropdown: true },
    { name: "Resources", hasDropdown: true, isHighlighted: true },
  ];

  return (
    <nav className="bg-white shadow-sm relative">
      <div className="max-w-[100%] sm:max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="CultiVate" className="h-8 w-auto" />
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className={`flex items-center text-sm lg:text-base ${
                    item.isHighlighted ? "text-[#124673]" : "text-gray-600"
                  } hover:text-gray-900`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
              </div>
            ))}
          </div>

          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-600 text-sm lg:text-base hover:text-gray-900">
              Log in
            </button>
            <button className="bg-[#124673] text-sm lg:text-base text-white px-4 py-2 rounded hover:bg-[#1f2937]">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              className="flex items-center w-full px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              {item.name}
              {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
            </button>
          ))}
          <div className="pt-4 border-t border-gray-200">
            <button className="w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Log in
            </button>
            <button className="w-full text-left px-3 py-2 mt-2 bg-[#124673] text-white hover:bg-[#1f2937]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
