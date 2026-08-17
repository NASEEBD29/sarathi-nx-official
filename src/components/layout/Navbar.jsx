import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
          ? "bg-white shadow-lg py-2"
          : "bg-white shadow-md py-2"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="flex items-center shrink-0"
        >
          <img
            src={`${import.meta.env.BASE_URL}sarathi-logo.png`}
            alt="Sarathi NX"
            className="w-32 sm:w-36 md:w-40 h-auto object-contain"
          />
        </Link>


        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden lg:flex items-center gap-7">

          {navLinks.map((item) => (
            <li key={item.id}>

              <Link
                to={item.href}
                className="font-medium text-gray-700 hover:text-[#003DA5] transition-colors duration-300"
              >
                {item.title}
              </Link>

            </li>
          ))}

        </ul>


        {/* ================= CALL BUTTON ================= */}
        <a
          href="tel:+917666984626"
          className="hidden lg:flex items-center gap-2 bg-[#003DA5] hover:bg-[#002B73] text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
        >
          <FaPhoneAlt className="text-sm" />

          <span>
            Call Now
          </span>
        </a>


        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-xl text-[#003DA5]"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">

          <ul className="flex flex-col py-3">

            {navLinks.map((item) => (
              <li key={item.id}>

                <Link
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-gray-700 hover:bg-[#EAF2FF] hover:text-[#003DA5] transition"
                >
                  {item.title}
                </Link>

              </li>
            ))}


            {/* ================= MOBILE CALL BUTTON ================= */}
            <li className="px-6 mt-3">

              <a
                href="tel:+917666984626"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#003DA5] hover:bg-[#002B73] text-white py-2.5 rounded-full transition"
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