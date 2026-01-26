import { Fragment, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { IoLogoBuffer } from "react-icons/io5";
import { FaCrown} from "react-icons/fa";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <Fragment>
      <nav className="flex items-center justify-between fixed bg-gradient-to-r from-gray-900 to-gray-800 p-4 w-full top-0 z-50 shadow-lg border-b border-gray-700">
        {/* Logo on left */}
        <div className="w-1/4 flex justify-start items-center">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => {
              window.location.href = "#home";
              setActiveLink("home");
            }}
          >
            <FaCrown  className="text-cyan-400 text-3xl mr-2 group-hover:text-cyan-300 transition-all duration-500 hover:rotate-360" />
            <span className="text-white font-bold text-xl hidden sm:block group-hover:text-cyan-300 transition-colors duration-300">
              Fizza Amjad
            </span>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex justify-end items-center w-1/4">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none hover:text-cyan-400 transition-all duration-300 hover:scale-110"
          >
            {isMenuOpen ? (
              <IoCloseSharp className="cursor-pointer" size={28} />
            ) : (
              <IoMdMenu className="cursor-pointer" size={28} />
            )}
          </button>
        </div>

        {/* Desktop menu - centered */}
        <div className="hidden lg:flex justify-center items-center flex-1">
          <ul className="flex justify-center items-center gap-8">
            {["Home", "About", "Skills", "Resume", "Services", "Projects"].map((item, index) => {
              const lowercaseItem = item.toLowerCase();
              return (
                <li
                  onClick={() => handleLinkClick(lowercaseItem)}
                  key={index}
                  className="font-medium cursor-pointer relative group"
                >
                  <a
                    href={`#${lowercaseItem}`}
                    className={`transition-all duration-300 ${activeLink === lowercaseItem ? "text-cyan-400" : "text-gray-300 hover:text-white"}`}
                  >
                    <span className="relative inline-block overflow-hidden">
                      <span className="block group-hover:-translate-y-7 transition-transform duration-300">
                        {item}
                      </span>
                      <span className="absolute left-0 top-0 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-7 transition-all duration-300">
                        {item}
                      </span>
                    </span>
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${activeLink === lowercaseItem ? "bg-cyan-400 w-full" : "bg-white"} transition-all duration-500 group-hover:w-full group-hover:bg-cyan-400`}></span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact button on right */}
        <div className="hidden lg:flex justify-end items-center w-1/4">
          <button
            onClick={() => {
              window.location.href = "#contact";
              setActiveLink("contact");
            }}
            className="relative overflow-hidden text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full cursor-pointer hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 font-medium group"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
            <span className="absolute -inset-1 bg-white blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
          </button>
        </div>

        {/* Mobile/Tablet Dropdown Menu */}
        <div
          className={`lg:hidden absolute top-16 left-0 w-full bg-gray-800 p-4 transition-all duration-300 shadow-xl ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-4">
            {["Home", "About", "Skills", "Resume", "Services", "Projects", "Contact"].map(
              (item, index) => {
                const lowercaseItem = item.toLowerCase();
                return (
                  <li
                    key={index}
                    className="font-medium cursor-pointer relative group w-full text-center"
                  >
                    <a
                      onClick={() => handleLinkClick(lowercaseItem)}
                      href={`#${lowercaseItem}`}
                      className={`block py-2 transition-all duration-300 ${activeLink === lowercaseItem ? "text-cyan-400" : "text-gray-300 hover:text-white"}`}
                    >
                      <span className="relative inline-block overflow-hidden">
                        <span className="block group-hover:-translate-y-7 transition-transform duration-300">
                          {item}
                        </span>
                        <span className="absolute left-0 top-0 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-7 transition-all duration-300">
                          {item}
                        </span>
                      </span>
                      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 ${activeLink === lowercaseItem ? "bg-cyan-400 w-3/4" : "bg-white"} transition-all duration-500 group-hover:w-3/4 group-hover:bg-cyan-400`}></span>
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;