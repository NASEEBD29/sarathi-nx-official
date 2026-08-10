import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa";

import { navLinks } from "../../data/navLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
  className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white shadow-lg py-3"
      : "bg-white shadow-md py-3"
  }`}
>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <a
          href="/sarathi-nx-official/"
          className="flex items-center shrink-0"
        >
          <img
            src="/sarathi-nx-official/sarathi-logo.png"
            alt="Sarathi NX"
            className="w-40 sm:w-44 md:w-52 h-auto object-contain"
          />
        </a>


        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (
            <li key={item.id}>

              <a
                href={item.href}
                className="font-medium text-gray-700 hover:text-[#003DA5] transition-colors duration-300"
              >
                {item.title}
              </a>

            </li>
          ))}

        </ul>


        {/* ================= CALL BUTTON ================= */}
        <a
          href="tel:+917666984626"
          className="hidden lg:flex items-center gap-3 bg-[#003DA5] hover:bg-[#002B73] text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <FaPhoneAlt />

          <span>
            Call Now
          </span>
        </a>


        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-[#003DA5]"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">

          <ul className="flex flex-col py-4">

            {navLinks.map((item) => (
              <li key={item.id}>

                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 text-gray-700 hover:bg-[#EAF2FF] hover:text-[#003DA5] transition"
                >
                  {item.title}
                </a>

              </li>
            ))}


            {/* Mobile Call Button */}
            <li className="px-6 mt-4">

              <a
                href="tel:+917666984626"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#003DA5] hover:bg-[#002B73] text-white py-3 rounded-full transition"
              >
                <FaPhoneAlt />

                <span>
                  Call Now
                </span>
              </a>

            </li>

          </ul>

        </div>
      )}

    </nav>
  );
}