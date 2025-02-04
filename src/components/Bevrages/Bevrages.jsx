import {
  Coffee,
  ExternalLink,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ArrowUpCircleIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Bevrages() {
  return (
    <div className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="col-span-3">
              <nav className="space-y-4">
                <Link
                  href="#"
                  className="flex items-center gap-3 text-black font-medium"
                >
                  <Coffee className="w-5 h-5" />
                  Coffee
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 text-gray-500 hover:text-gray-900"
                >
                  <ExternalLink className="w-5 h-5" />
                  Spices
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 text-gray-500 hover:text-gray-900"
                >
                  <span className="w-5 h-5">☕</span>
                  Tea
                </Link>
              </nav>
            </div>

            {/* Main Content */}
            <div className="col-span-9">
              <div className="space-y-4">
                <Link
                  href="#"
                  className="block border-b border-yellow-400 pb-4 group"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl text-gray-900">
                      Coffee Board of India
                    </h2>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                  </div>
                </Link>

                <Link
                  href="#"
                  className="block border-b border-gray-200 pb-4 group"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl text-gray-900">
                      Global Coffee Trade
                    </h2>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                  </div>
                </Link>

                <Link
                  href="#"
                  className="block border-b border-gray-200 pb-4 group"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl text-gray-900">
                      India's Coffee Exports
                    </h2>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                  </div>
                </Link>

                <Link
                  href="#"
                  className="block border-b border-gray-200 pb-4 group"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl text-gray-900">
                      Introduction to Coffee
                    </h2>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center py-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex gap-2 items-center text-gray-500 hover:text-gray-900"
          >
            <span>Back to top</span>
            <ArrowUpCircleIcon className="w-5 h-5 font-extralight" />
          </button>
        </div>

        <div className="mt-12 flex justify-between">
          <Link href="#" className="group border-b border-black">
            <div className="text-sm text-gray-500 text-right">Previous</div>
            <div className="flex items-center gap-2 text-gray-900 pb-2">
              <ChevronLeft className="w-5 h-5" />
              <span>Definition and Classification</span>
            </div>
          </Link>

          <Link href="#" className="group text-right border-b border-black">
            <div className="text-sm text-gray-500 text-left">Next</div>
            <div className="flex items-center justify-end gap-2 text-gray-900 pb-2">
              <span>Spices in the Age of Colonialism</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
