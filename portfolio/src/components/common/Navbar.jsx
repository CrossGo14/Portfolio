import React, { useState } from "react";
import logo from "/Users/aaryagandhi/Desktop/MiniByte_Portfolio/portfolio/src/assets/logo.png";
import { RxCross2 } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const navItems = [
    { name: "Home", sectionId: "home" },
    { name: "AboutUs", sectionId: "aboutus" },
    { name: "Services", sectionId: "services" },
    { name: "Projects", sectionId: "projects" },
    { name: "Contact", sectionId: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Minibytes" className="h-40 w-auto" />
          </div>

          {/* Desktop Navigation Links */}
          <ul className="sm:hidden md:flex space-x-10">
            {navItems.map((item) => (
              <li key={item.sectionId}>
                <button
                  aria-label={`Scroll to ${item.name}`}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-white transition-all duration-300 ease-in-out transform hover:text-yellow-400 hover:scale-105 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-400 transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <RxCross2 size={28} /> : <CiMenuBurger size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
              {navItems.map((item) => (
                <li key={item.sectionId}>
                  <button
                    aria-label={`Scroll to ${item.name}`}
                    onClick={() => {
                      scrollToSection(item.sectionId);
                      setIsOpen(false); // Close menu after clicking
                    }}
                    className="block w-full text-left text-white transition-all duration-300 ease-in-out hover:text-yellow-400 px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
