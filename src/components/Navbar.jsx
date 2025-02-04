import { ChevronDown } from "lucide-react";
import logo from "../assets/Logo (1).png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="CultiVate" className="h-8 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>

            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                Agri Trade 101
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                Exporters Handbook
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                Commodity Focus
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              Log in
            </button>
            <button className="bg-[#27374D] text-white px-4 py-2 rounded hover:bg-[#1f2937]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
