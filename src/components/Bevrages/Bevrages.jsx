import {
  Coffee,
  ExternalLink,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ArrowUpCircleIcon,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Beverages() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarLinks = [
    { icon: <Coffee className="w-5 h-5" />, text: "Coffee", active: true },
    { icon: <ExternalLink className="w-5 h-5" />, text: "Spices" },
    { icon: <span className="w-5 h-5">☕</span>, text: "Tea" },
  ];

  const mainLinks = [
    "Coffee Board of India",
    "Global Coffee Trade",
    "India's Coffee Exports",
    "Introduction to Coffee",
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-4 sm:py-8">
        <div className="bg-gray-50 rounded-lg p-4 sm:p-8">
          {/* Mobile Menu Button */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
              <span>Menu</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Sidebar */}
            <div
              className={`md:col-span-3 ${
                isMobileMenuOpen ? "block" : "hidden md:block"
              }`}
            >
              <nav className="space-y-4">
                {sidebarLinks.map((link, index) => (
                  <Link
                    key={index}
                    href="#"
                    className={`flex items-center gap-3 ${
                      link.active
                        ? "text-black font-medium"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {link.icon}
                    {link.text}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="md:col-span-9">
              <div className="space-y-4">
                {mainLinks.map((title, index) => (
                  <Link
                    key={index}
                    href="#"
                    className={`block border-b-2 ${
                      index === 0 ? "border-yellow-400" : "border-gray-200"
                    } pb-4 group`}
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg sm:text-xl text-gray-900">
                        {title}
                      </h2>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center py-4 sm:py-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex gap-2 items-center text-gray-500 hover:text-gray-900"
          >
            <span>Back to top</span>
            <ArrowUpCircleIcon className="w-5 h-5 font-extralight" />
          </button>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between gap-6 sm:gap-0">
          <Link href="#" className="group border-b border-black">
            <div className="text-sm text-gray-500 sm:text-end">Previous</div>
            <div className="flex items-center gap-2 text-gray-900 pb-2">
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm sm:text-base">
                Definition and Classification
              </span>
            </div>
          </Link>

          <Link href="#" className="group text-right border-b border-black">
            <div className="text-sm text-gray-500 sm:text-start">Next</div>
            <div className="flex items-center justify-end gap-2 text-gray-900 pb-2">
              <span className="text-sm sm:text-base">
                Spices in the Age of Colonialism
              </span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
