import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../../data/navLinks";
import {  FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "top-0 bg-white/95 backdrop-blur-md shadow-lg py-4"
      : "top-11 bg-transparent py-6"
  }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <h1
          className={`text-3xl font-bold transition ${
            scrolled ? "text-[#0F766E]" : "text-white"
          }`}
        >
          Sarathi <span className="text-[#14B8A6]">NX</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`font-medium transition ${
                  scrolled
                    ? "text-gray-700 hover:text-[#0F766E]"
                    : "text-white hover:text-[#14B8A6]"
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Quote Button */}
        <a
  href="tel:+917666984626"
  className="hidden lg:flex items-center gap-3 bg-[#0F766E] hover:bg-[#115E59] text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
>
  <FaPhoneAlt className="text-lg" />

  <div className="leading-tight">
    <p className="text-xs opacity-80">Call Now</p>
    <p className="font-semibold">+91 766 698 4626</p>
  </div>
</a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden text-2xl ${
            scrolled ? "text-[#0F766E]" : "text-white"
          }`}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-4">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 hover:bg-gray-100 text-gray-700"
                >
                  {item.title}
                </a>
              </li>
            ))}

            <div className="px-6 mt-4">
              <a
  href="tel:+917666984626"
  className="w-full flex items-center justify-center gap-2 bg-[#0F766E] text-white py-3 rounded-full"
>
  <FaPhoneAlt />
  Call Now
</a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}