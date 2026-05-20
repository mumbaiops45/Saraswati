"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Results", href: "/results" },
  { name: "Blog", href: "/blog" },

  {
    name: "Centres",
    dropdown: [
      { name: "Majiwada", href: "/centres/majiwada" },
      { name: "Highland Dhokali", href: "/centres/highland-dhokali" },
      { name: "Kapurbawdi", href: "/centres/kapurbawdi" },
      { name: "Lodha Amara", href: "/centres/lodha-amara" },
      { name: "Kasheli", href: "/centres/kasheli" },
      { name: "Gokul Nagar", href: "/centres/gokul-nagar" },
    ],
  },

  { name: "Study Resources", href: "/students-hub" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        navScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

       
          <Link href="/" className="flex items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-xl overflow-hidden bg-white shadow-md">
              <img
                src="/logo.svg"
                alt="Saraswati Educare Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((item) => (
              <div
                key={item.name}
                className="relative group"
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition ${
                        navScrolled
                          ? "text-gray-800"
                          : "text-white"
                      } hover:text-amber-500`}
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>

                    {/* DROPDOWN */}
                    <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white shadow-xl rounded-xl mt-3 w-60 overflow-hidden">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-5 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition ${
                      navScrolled
                        ? "text-gray-800"
                        : "text-white"
                    } hover:text-amber-500`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA BUTTON */}
            <Link
              href="/contact"
              className="gold-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-transform"
            >
              Book Free Demo
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden transition ${
              navScrolled ? "text-black" : "text-white"
            }`}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t shadow-lg px-5 py-5 space-y-4">

          {navLinks.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() =>
                      setOpenDropdown(!openDropdown)
                    }
                    className="flex items-center justify-between w-full text-left font-semibold text-gray-800"
                  >
                    {item.name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        openDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown
                        ? "max-h-96 mt-3"
                        : "max-h-0"
                    }`}
                  >
                    <div className="ml-4 flex flex-col gap-3">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMenuOpen(false)}
                          className="text-gray-600 hover:text-amber-600"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-800 hover:text-amber-600 font-medium"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            className="block text-center bg-amber-500 text-white py-3 rounded-full font-semibold mt-4"
          >
            Book Free Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}