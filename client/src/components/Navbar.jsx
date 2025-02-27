import React from "react";
import { Download } from "lucide-react";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm border-b-4 border-black spacefont">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div className="inline-block bg-white border-4 border-black px-4 py-1 transform  shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-lg codefont">
                Blockchain Club SRM
              </h2>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="relative text-black hover:text-orange-500 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="relative text-black hover:text-orange-500 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              SCHEDULE
            </a>
            <a
              href="#"
              className="relative text-black  hover:text-orange-500 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              REGISTER
            </a>
            <a
              href="#"
              className="relative text-black  hover:text-orange-500 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              FAQ
            </a>

            <a
              href="#"
              className="inline-block bg-orange-500 border-4 border-black px-4 py-1 transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex justify-center items-center gap-2">
                <Download className="h-4 w-4" />
                <div>BROCHURE</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
