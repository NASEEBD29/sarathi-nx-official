import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaChevronDown,
} from "react-icons/fa";

import { navLinks } from "../../data/navLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ================================
  // SCROLL EFFECT
  // ================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ================================
  // CLOSE MOBILE MENU ON RESIZE
  // ================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ================================
  // CLOSE MENU WHEN CLICKING OUTSIDE
  // ================================

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`
        sticky
        top-0
        left-0
        w-full
        z-50
        bg-white
        border-b
        border-gray-100
        transition-all
        duration-300

        ${
          scrolled
            ? "shadow-xl"
            : "shadow-sm"
        }
      `}
    >

      {/* =====================================================
          NAVBAR MAIN
      ====================================================== */}

      <div className="w-full">

        <div
          className={`
            max-w-[1440px]
            mx-auto
            px-5
            sm:px-8
            lg:px-10
            flex
            items-center
            justify-between
            gap-6
            transition-all
            duration-300

            ${
              scrolled
                ? "h-[72px]"
                : "h-[84px]"
            }
          `}
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <NavLink
            to="/"
            end
            className="
              flex
              items-center
              shrink-0
              group
            "
            onClick={() => setMenuOpen(false)}
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
                transition-all
                duration-300
                group-hover:scale-[1.03]
              "
            />

          </NavLink>


          {/* =================================================
              DESKTOP MENU
          ================================================= */}

          <ul
            className="
              hidden
              lg:flex
              items-center
              justify-center
              gap-1
              xl:gap-2
              flex-1
            "
          >

            {navLinks.map((item) => (

              <li
                key={item.id}
                className="relative"
              >

                <NavLink
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) => `
                    group
                    relative
                    flex
                    items-center
                    justify-center
                    px-4
                    xl:px-5
                    py-3
                    rounded-xl
                    text-[16px]
                    xl:text-[17px]
                    font-bold
                    whitespace-nowrap
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          text-[#F28C28]
                          bg-[#FFF4E8]
                          shadow-sm
                        `
                        : `
                          text-gray-700
                          hover:text-[#F28C28]
                          hover:bg-[#FFF8F2]
                        `
                    }
                  `}
                >

                  {({ isActive }) => (
                    <>

                      {/* MENU TITLE */}

                      <span className="relative z-10">
                        {item.title}
                      </span>


                      {/* =====================================
                          ACTIVE / HOVER UNDERLINE
                      ====================================== */}

                      <span
                        className={`
                          absolute
                          left-1/2
                          -translate-x-1/2
                          bottom-[4px]
                          h-[3px]
                          rounded-full
                          bg-[#F28C28]
                          transition-all
                          duration-300
                          ease-out

                          ${
                            isActive
                              ? "w-[55%]"
                              : "w-0 group-hover:w-[55%]"
                          }
                        `}
                      />

                    </>
                  )}

                </NavLink>

              </li>

            ))}

          </ul>


          {/* =================================================
              PHONE CTA
          ================================================= */}

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
              px-5
              xl:px-6
              py-3
              xl:py-3.5
              rounded-full
              text-[15px]
              xl:text-[16px]
              font-bold
              whitespace-nowrap
              shadow-md
              hover:shadow-xl
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
          >

            <FaPhoneAlt className="text-[14px]" />

            {/* <span>
              +91 766 698 4626
            </span> */}

          </a>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`
              lg:hidden
              w-12
              h-12
              flex
              items-center
              justify-center
              rounded-xl
              text-xl
              transition-all
              duration-300

              ${
                menuOpen
                  ? `
                    bg-[#F28C28]
                    text-white
                    shadow-lg
                  `
                  : `
                    bg-[#FFF4E8]
                    text-[#F28C28]
                    hover:bg-[#F28C28]
                    hover:text-white
                  `
              }
            `}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >

            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}

          </button>

        </div>

      </div>


      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-500
          ease-in-out

          ${
            menuOpen
              ? "max-h-[800px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div
          className="
            bg-white
            border-t
            border-gray-100
            shadow-xl
          "
        >

          <ul
            className="
              flex
              flex-col
              py-3
            "
          >

            {navLinks.map((item) => (

              <li
                key={item.id}
                className="px-3"
              >

                <NavLink
                  to={item.href}
                  end={item.href === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `
                    group
                    relative
                    flex
                    items-center
                    px-5
                    py-4
                    rounded-xl
                    text-[17px]
                    font-bold
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          bg-[#FFF4E8]
                          text-[#F28C28]
                          shadow-sm
                        `
                        : `
                          text-gray-700
                          hover:bg-[#FFF8F2]
                          hover:text-[#F28C28]
                        `
                    }
                  `}
                >

                  {({ isActive }) => (
                    <>

                      {/* LEFT ACTIVE BAR */}

                      <span
                        className={`
                          absolute
                          left-0
                          top-1/2
                          -translate-y-1/2
                          w-[4px]
                          rounded-r-full
                          bg-[#F28C28]
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "h-8"
                              : "h-0"
                          }
                        `}
                      />


                      {/* MENU TITLE */}

                      <span>
                        {item.title}
                      </span>


                      {/* RIGHT ACTIVE DOT */}

                      {isActive && (
                        <span
                          className="
                            ml-auto
                            w-2
                            h-2
                            rounded-full
                            bg-[#F28C28]
                          "
                        />
                      )}

                    </>
                  )}

                </NavLink>

              </li>

            ))}


            {/* =================================================
                MOBILE PHONE BUTTON
            ================================================= */}

            <li className="px-3 pt-4 pb-3">

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
                  rounded-xl
                  text-[17px]
                  font-bold
                  shadow-md
                  hover:shadow-xl
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