// "use client"
// import { useState, useEffect } from "react";

// // const navLinks = [ "About", "Courses", "Results"," Blog" , "Centres",  "Contact"];

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Courses", href: "/courses" },
//   { name: "Results", href: "/results" },
//   { name: "Blog", href: "/blog" },

//   {
//     name: "Centres",
//     dropdown: [
//       {
//         name: "Majiwada",
//         href: "/centres/majiwada",
//       },
//       {
//         name: "Highland Dhokali",
//         href: "/centres/highland-dhokali",
//       },
//       {
//         name: "Kapurbawdi",
//         href: "/centres/kapurbawdi",
//       },
//       {
//         name: "Lodha-amara",
//         href: "/centres/lodha-amara",
//       },
//       {
//         name: "Kasheli",
//         href: "/centres/kasheli",
//       },
//       {
//         name: "Gokul Nagar",
//         href: "/centres/gokul-nagar",
//       },
//     ],
//   },
//   { name: "Study Resources ", href: "/students-hub" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [navScrolled, setNavScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handler = () => setNavScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", handler);
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   return (
//     <>
      

//       <nav
//         className={`fixed top-0 w-full z-50 transition-all duration-500 ${navScrolled
//           ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
//           : "bg-transparent py-5"
//           }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//           <a
//             href="/"
//             className="flex items-center gap-3 group transition-all duration-300"
//           >

//             <div className="flex items-center justify-center w-20 h-20 md:w-22 md:h-22 rounded-xl overflow-hidden shadow-md bg-white/10 backdrop-blur">
//               <img
//                 src="/logo.svg"
//                 alt="Saraswati Educare Logo"
//                 className="w-full h-full object-cover"
//               />
//             </div>


//           </a>

//           <div
//             className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${navScrolled ? "text-gray-700" : "text-white/90"
//               }`}
//           >


//             {navLinks.map((item) => (
//               <div key={item.name} className="relative group">
//                 {item.dropdown ? (
//                   <>
//                     <button className="hover:text-amber-500 transition-colors duration-200 flex items-center gap-1">
//                       {item.name}
//                       <span className="text-xs">▼</span>
//                     </button>

//                     <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
//                       {item.dropdown.map((subItem) => (
//                         <a
//                           key={subItem.name}
//                           href={subItem.href}
//                           className="block px-5 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
//                         >
//                           {subItem.name}
//                         </a>
//                       ))}
//                     </div>
//                   </>
//                 ) : (
//                   <a
//                     href={item.href}
//                     className="hover:text-amber-500 transition-colors duration-200"
//                   >
//                     {item.name}
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>

//           <a
//             href="#"
//             className="hidden md:block shine-btn gold-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-amber-300/40 transition-all duration-300"
//           >
//             Book Free Demo →
//           </a>

//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className={`md:hidden text-2xl transition-colors duration-300 ${navScrolled ? "text-gray-900" : "text-white"
//               }`}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? "✕" : "☰"}
//           </button>
//         </div>

//         <div
//           className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//             }`}
//         >
//           <div className="bg-white shadow-xl border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-gray-800 text-sm font-medium">

//             {navLinks.map((item) => (
//               <div key={item.name}>
//                 {item.dropdown ? (
//                   <div className="flex flex-col gap-2">
//                     <div className="font-semibold text-amber-600">
//                       {item.name}
//                     </div>

//                     <div className="ml-4 flex flex-col gap-2">
//                       {item.dropdown.map((subItem) => (
//                         <a
//                           key={subItem.name}
//                           href={subItem.href}
//                           onClick={() => setMenuOpen(false)}
//                           className="hover:text-amber-600 transition-colors"
//                         >
//                           {subItem.name}
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 ) : (
//                   <a
//                     href={item.href}
//                     onClick={() => setMenuOpen(false)}
//                     className="hover:text-amber-600 transition-colors"
//                   >
//                     {item.name}
//                   </a>
//                 )}
//               </div>
//             ))}
//             <a
//               href="#"
//               className="gold-gradient text-white text-center py-3 rounded-full font-semibold mt-2"
//             >
//               Book Free Demo
//             </a>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }




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