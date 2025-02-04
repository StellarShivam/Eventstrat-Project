import { Search, Twitter, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/Cultivaite-logo-white.png";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <img src={logo} alt="CultivAlte Logo" className="w-auto h-20" />
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search CultivAlte"
                className="w-full bg-[#2C2C2C] border border-gray-700 rounded-full py-2 px-4 pl-5 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Commodity finder
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="#" className="hover:text-gray-300">
                  Market Insights
                </Link>
                <span className="bg-[#2C2C2C] text-xs px-2 py-0.5 rounded">
                  New
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pb-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Global ispice platforms pvt ltd
            </div>

            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F2B90F]">
          <div className="flex flex-wrap px-2 gap-4 justify-center md:justify-between mt-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-white">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Cookie Settings | Your Privacy Choices
            </Link>
            <Link href="#" className="hover:text-white">
              Disclaimer
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-gray-400">
              CultivAlte® is part of Global Ispice Platforms Pvt Ltd
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
