import { Fragment, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { GiLaurelCrown } from "react-icons/gi";

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
      {/* ✅ Responsive Left/Right Padding Added */}
      <nav className="flex items-center justify-between fixed bg-black w-full py-4 px-5 sm:px-8 lg:px-12 top-0 z-50 shadow-lg border-b border-gray-700">
        
        {/* Logo on left */}
        <div className="w-1/4 flex justify-start items-center">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => {
              window.location.href = "#home";
              setActiveLink("home");
            }}
          >
            <GiLaurelCrown className="text-yellow-400 text-3xl mr-2 group-hover:text-yellow-300 transition-all duration-500" />

            <span className="text-white font-bold text-xl hidden sm:block group-hover:text-yellow-300 transition-colors duration-300">
              Fizza Amjad
            </span>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex justify-end items-center w-1/4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-yellow-400 transition-all duration-300 hover:scale-110"
          >
            {isMenuOpen ? (
              <IoCloseSharp size={28} />
            ) : (
              <IoMdMenu size={28} />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex justify-center items-center flex-1">
          <ul className="flex justify-center items-center gap-8">
            {["Home", "About", "Skills", "Resume", "Services", "Projects"].map(
              (item, index) => {
                const lowercaseItem = item.toLowerCase();
                return (
                  <li
                    onClick={() => handleLinkClick(lowercaseItem)}
                    key={index}
                    className="font-medium cursor-pointer relative group"
                  >
                    <a
                      href={`#${lowercaseItem}`}
                      className={`transition-all duration-300 ${
                        activeLink === lowercaseItem
                          ? "text-yellow-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item}

                      <span
                        className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
                          activeLink === lowercaseItem
                            ? "bg-yellow-400 w-full"
                            : "bg-yellow-400 w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        {/* Contact button */}
        <div className="hidden lg:flex justify-end items-center w-1/4">
          <button
            onClick={() => {
              window.location.href = "#contact";
              setActiveLink("contact");
            }}
            className="text-black bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-2 rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg font-medium"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden absolute top-16 left-0 w-full bg-black px-6 py-4 transition-all duration-300 shadow-xl ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-4">
            {[
              "Home",
              "About",
              "Skills",
              "Resume",
              "Services",
              "Projects",
              "Contact",
            ].map((item, index) => {
              const lowercaseItem = item.toLowerCase();

              return (
                <li key={index} className="w-full text-center">
                  <a
                    onClick={() => handleLinkClick(lowercaseItem)}
                    href={`#${lowercaseItem}`}
                    className={`block py-2 transition-all duration-300 ${
                      activeLink === lowercaseItem
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;