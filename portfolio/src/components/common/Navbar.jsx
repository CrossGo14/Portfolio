import React from 'react'
import logo from '/Users/aaryagandhi/Desktop/MiniByte_Portfolio/portfolio/src/assets/logo.png'

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Minibytes" className="h-10 w-auto" />
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-10">
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

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
