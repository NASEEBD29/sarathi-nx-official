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
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        sticky top-0 left-0 w-full z-50
        bg-white
        border-b border-gray-100
        transition-all duration-300
        ${scrolled ? "shadow-lg" : "shadow-sm"}
      `}
    >

      {/* ================= NAVBAR ================= */}

      <div className="w-full">

        <div
          className="
            max-w-[1440px]
            mx-auto
            px-5
            sm:px-8
            lg:px-10
            h-[84px]
            flex
            items-center
            justify-between
            gap-8
          "
        >

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            className="flex items-center shrink-0"
          >
            <img
              src={`${import.meta.env.BASE_URL}sarathi-logo.png`}
              alt="Sarathi NX"
              className="
                w-[135px]
                sm:w-[150px]
                lg:w-[165px]
                h-auto
                object-contain
              "
            />
          </Link>


          {/* ================= DESKTOP MENU ================= */}

          <ul className="hidden lg:flex items-center gap-8 xl:gap-10">

            {navLinks.map((item) => (
              <li key={item.id}>

                <Link
                  to={item.href}
                  className="
                    relative
                    text-[17px]
                    xl:text-[18px]
                    font-semibold
                    text-gray-700
                    hover:text-[#003DA5]
                    transition-colors
                    duration-300
                    whitespace-nowrap
                    py-3
                  "
                >
                  {item.title}

                  {/* Hover Line */}
                  <span
                    className="
                      absolute
                      left-0
                      bottom-0
                      w-0
                      h-[2px]
                      bg-[#003DA5]
                      transition-all
                      duration-300
                      hover:w-full
                    "
                  />

                </Link>

              </li>
            ))}

          </ul>


          {/* ================= PHONE BUTTON ================= */}

          <a
            href="tel:+917666984626"
            className="
              hidden
              lg:flex
              items-center
              justify-center
              gap-3
              bg-[#003DA5]
              hover:bg-[#002B73]
              text-white
              px-6
              py-3.5
              rounded-full
              text-[16px]
              xl:text-[17px]
              font-bold
              whitespace-nowrap
              shadow-md
              hover:shadow-lg
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
          >
            <FaPhoneAlt className="text-[15px]" />

            <span>
              +91 766 698 4626
            </span>

          </a>


          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              lg:hidden
              w-12
              h-12
              flex
              items-center
              justify-center
              rounded-lg
              bg-[#EAF2FF]
              text-[#003DA5]
              text-xl
              hover:bg-[#003DA5]
              hover:text-white
              transition-all
              duration-300
            "
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>


      {/* ================= MOBILE MENU ================= */}

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ${
            menuOpen
              ? "max-h-[700px] border-t border-gray-100"
              : "max-h-0"
          }
        `}
      >

        <div className="bg-white shadow-lg">

          <ul className="flex flex-col py-3">

            {navLinks.map((item) => (
              <li key={item.id}>

                <Link
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block
                    px-6
                    py-4
                    text-[18px]
                    font-semibold
                    text-gray-700
                    hover:bg-[#EAF2FF]
                    hover:text-[#003DA5]
                    transition-colors
                    duration-300
                  "
                >
                  {item.title}
                </Link>

              </li>
            ))}


            {/* ================= MOBILE PHONE ================= */}

            <li className="px-6 pt-4 pb-3">

              <a
                href="tel:+917666984626"
                onClick={() => setMenuOpen(false)}
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-3
                  bg-[#003DA5]
                  hover:bg-[#002B73]
                  text-white
                  py-4
                  rounded-full
                  text-[17px]
                  font-bold
                  transition-all
                  duration-300
                "
              >

                <FaPhoneAlt />

                <span>
                  +91 766 698 4626
                </span>

              </a>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}