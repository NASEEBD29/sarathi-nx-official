import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa";

import { navLinks } from "../../data/navLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // =====================================================
  // SCROLL EFFECT
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // CLOSE MOBILE MENU ON RESIZE
  // =====================================================

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

  // =====================================================
  // BODY SCROLL LOCK
  // =====================================================

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

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
            ? "shadow-lg"
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

                    text-[16px]
                    xl:text-[17px]

                    font-bold
                    whitespace-nowrap

                    text-[#26364F]

                    transition-all
                    duration-300

                    hover:text-[#0057B8]
                  `}
                >

                  {({ isActive }) => (
                    <>

                      {/* MENU TITLE */}

                      <span className="relative z-10">
                        {item.title}
                      </span>


                      {/* =================================================
                          ORANGE ACTIVE / HOVER UNDERLINE
                      ================================================= */}

                      <span
                        className={`
                          absolute
                          left-1/2
                          -translate-x-1/2

                          bottom-[3px]

                          h-[3px]

                          rounded-full

                          bg-[#fc6602]

                          transition-all
                          duration-300
                          ease-out

                          ${
                            isActive
                              ? "w-[65%]"
                              : "w-0 group-hover:w-[65%]"
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
              DESKTOP CALL NOW BUTTON
          ================================================= */}

          <a
            href="tel:+917666984626"
            className="
              hidden
              lg:flex

              items-center
              justify-center
              gap-2.5

              bg-[#0057B8]
              hover:bg-[#004694]

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

              hover:shadow-lg
              hover:-translate-y-0.5

              transition-all
              duration-300
            "
          >

            <FaPhoneAlt className="text-[16px]" />

            <span>
              Call Now
            </span>

          </a>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

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

              rounded-xl

              bg-gradient-to-r
              from-[#0057B8]
              to-[#fc6602]

              text-white
              text-xl

              shadow-md

              transition-all
              duration-300
            "
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
                className="px-4"
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

                    px-3
                    py-3

                    text-[16px]
                    font-bold

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "text-[#0057B8]"
                        : "text-[#26364F]"
                    }
                  `}
                >

                  {({ isActive }) => (
                    <>

                      {/* MENU TITLE */}

                      <span>
                        {item.title}
                      </span>


                      {/* =================================================
                          MOBILE ORANGE UNDERLINE
                      ================================================= */}

                      <span
                        className={`
                          absolute

                          left-3
                          bottom-[5px]

                          h-[3px]

                          rounded-full

                          bg-[#fc6602]

                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "w-[45px]"
                              : "w-0 group-hover:w-[45px]"
                          }
                        `}
                      />

                    </>
                  )}

                </NavLink>

              </li>

            ))}


            {/* =================================================
                MOBILE CALL NOW
            ================================================= */}

            <li className="px-4 pt-3 pb-2">

              <a
                href="tel:+917666984626"
                onClick={() => setMenuOpen(false)}
                className="
                  w-full

                  flex
                  items-center
                  justify-center
                  gap-2.5

                  bg-[#0057B8]
                  hover:bg-[#004694]

                  text-white

                  py-3.5

                  rounded-xl

                  text-[16px]
                  font-bold

                  shadow-md

                  transition-all
                  duration-300
                "
              >

                <FaPhoneAlt className="text-[15px]" />

                <span>
                  Call Now
                </span>

              </a>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}