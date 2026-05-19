"use client"
import { useState, useEffect } from "react";

// const navLinks = [ "About", "Courses", "Results"," Blog" , "Centres",  "Contact"];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Results", href: "/results" },
  { name: "Blog", href: "/blog" },

  {
    name: "Centres",
    dropdown: [
      {
        name: "Majiwada",
        href: "/centres/majiwada",
      },
      {
        name: "Highland Dhokali",
        href: "/centres/highland-dhokali",
      },
      {
        name: "Kapurbawdi",
        href: "/centres/kapurbawdi",
      },
      {
        name: "Lodha-amara",
        href: "/centres/lodha-amara",
      },
      {
        name: "Kasheli",
        href: "/centres/kasheli",
      },
      {
        name: "Gokul Nagar",
        href: "/centres/gokul-nagar",
      },
    ],
  },
  { name: "Study Resources ", href: "/students-hub" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${navScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-3 group transition-all duration-300"
          >

            <div className="flex items-center justify-center w-18 h-11 md:w-18 md:h-12 rounded-xl overflow-hidden shadow-md bg-white/10 backdrop-blur">
              <img
                src="/logo.svg"
                alt="Saraswati Educare Logo"
                className="w-full h-full object-cover"
              />
            </div>


          </a>

          <div
            className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${navScrolled ? "text-gray-700" : "text-white/90"
              }`}
          >


            {navLinks.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="hover:text-amber-500 transition-colors duration-200 flex items-center gap-1">
                      {item.name}
                      <span className="text-xs">▼</span>
                    </button>

                    <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-5 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="hover:text-amber-500 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          <a
            href="#"
            className="hidden md:block shine-btn gold-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-amber-300/40 transition-all duration-300"
          >
            Book Free Demo →
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden text-2xl transition-colors duration-300 ${navScrolled ? "text-gray-900" : "text-white"
              }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="bg-white shadow-xl border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-gray-800 text-sm font-medium">

            {navLinks.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold text-amber-600">
                      {item.name}
                    </div>

                    <div className="ml-4 flex flex-col gap-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMenuOpen(false)}
                          className="hover:text-amber-600 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-amber-600 transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <a
              href="#"
              className="gold-gradient text-white text-center py-3 rounded-full font-semibold mt-2"
            >
              Book Free Demo
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}