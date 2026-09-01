import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaPlane,
  FaHotel,
  FaPassport,
  FaHandshake,
  FaUmbrellaBeach,
  FaUsers,
  FaPhoneAlt,
  FaThLarge,
  FaChevronDown,
} from "react-icons/fa";

import { navLinks } from "../../data/navLinks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // =====================================================
  // NORMAL MENU = FIRST 8 ITEMS
  // MORE SERVICE = LAST ITEM
  // =====================================================

  const mainNavLinks = navLinks.filter(
    (item) =>
      item.title !== "More Service"
  );

  const moreService = navLinks.find(
    (item) =>
      item.title === "More Service"
  );

  // =====================================================
  // ICONS
  // =====================================================

  const getMenuIcon = (title = "") => {
    const text = title.toLowerCase();

    if (text.includes("home")) {
      return FaHome;
    }

    if (
      text.includes("flight") ||
      text.includes("air")
    ) {
      return FaPlane;
    }

    if (
      text.includes("hotel") ||
      text.includes("accommodation")
    ) {
      return FaHotel;
    }

    if (
      text.includes("visa") ||
      text.includes("documentation")
    ) {
      return FaPassport;
    }

    if (
      text.includes("trade") ||
      text.includes("fair") ||
      text.includes("exhibition")
    ) {
      return FaHandshake;
    }

    if (
      text.includes("holiday") ||
      text.includes("package")
    ) {
      return FaUmbrellaBeach;
    }

    if (text.includes("about")) {
      return FaUsers;
    }

    if (text.includes("contact")) {
      return FaPhoneAlt;
    }

    return FaThLarge;
  };

  // =====================================================
  // CLOSE MOBILE MENU ON DESKTOP
  // =====================================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setMoreOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  // =====================================================
  // BODY SCROLL LOCK
  // =====================================================

  useEffect(() => {
    document.body.style.overflow =
      menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className="
        relative
        z-[60]

        w-full

        bg-[#03182B]

        border-b
        border-white/[0.10]
      "
    >
      {/* =====================================================
          DESKTOP NAVBAR
      ====================================================== */}

      <div
        className="
          w-full
          max-w-[1600px]
          mx-auto

          px-4
          sm:px-5
          lg:px-6
          xl:px-7
        "
      >
        <div
          className="
            h-[142px]

            flex
            items-stretch
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <div
            className="
              shrink-0

              w-[250px]
              xl:w-[285px]

              flex
              items-center

              pr-5
              xl:pr-8
            "
          >
            <NavLink
              to="/"
              end
              onClick={() => {
                setMenuOpen(false);
                setMoreOpen(false);
              }}
              className="
                flex
                items-center
                justify-center
              "
            >
              <img
                src={`${import.meta.env.BASE_URL}sarathi-logo.png`}
                alt="Sarathi NX"
                className="
                  w-[220px]
                  xl:w-[235px]
                  2xl:w-[240px]

                  h-auto

                  object-contain
                "
              />
            </NavLink>
          </div>

          {/* =================================================
              DESKTOP MENU
          ================================================= */}

          <div
            className="
              hidden
              lg:flex

              flex-1
              min-w-0

              h-full

              items-stretch
            "
          >
            {/* =================================================
                1 - 8 NORMAL MENU
            ================================================= */}

            {mainNavLinks.map((item) => {
              const Icon = getMenuIcon(
                item.title
              );

              return (
                <div
                  key={item.id}
                  className="
                    relative

                    flex-1
                    min-w-0

                    h-full

                    border-l
                    border-white/[0.12]

                    flex
                    items-center
                    justify-center
                  "
                >
                  <NavLink
                    to={item.href}
                    end={item.href === "/"}
                    className="
                      group

                      relative

                      w-full
                      h-full

                      flex
                      flex-col

                      items-center
                      justify-center

                      gap-[9px]

                      px-1

                      text-center
                    "
                  >
                    {({ isActive }) => (
                      <>
                        {/* ICON */}

                        <Icon
                          className={`
                            text-[28px]
                            xl:text-[30px]

                            transition-colors
                            duration-200

                            ${
                              isActive
                                ? "text-[#9CCB42]"
                                : "text-[#83A941]"
                            }

                            group-hover:text-[#9CCB42]
                          `}
                        />

                        {/* TITLE */}

                        <span
                          className={`
                            text-[9px]
                            xl:text-[10px]
                            2xl:text-[11px]

                            font-medium

                            leading-[1.25]

                            whitespace-nowrap

                            transition-colors
                            duration-200

                            ${
                              isActive
                                ? "text-[#9CCB42]"
                                : "text-[#91B34E]"
                            }

                            group-hover:text-[#A4CD55]
                          `}
                        >
                          {item.title}
                        </span>

                        {/* ACTIVE LINE */}

                        <span
                          className={`
                            absolute

                            bottom-[17px]

                            left-1/2
                            -translate-x-1/2

                            h-[3px]

                            rounded-full

                            bg-[#9CCB42]

                            transition-all
                            duration-200

                            ${
                              isActive
                                ? "w-[46px]"
                                : "w-0 group-hover:w-[35px]"
                            }
                          `}
                        />
                      </>
                    )}
                  </NavLink>
                </div>
              );
            })}

            {/* =================================================
                9 - MORE SERVICE
            ================================================= */}

            {moreService && (
              <div
                className="
                  relative

                  shrink-0

                  w-[115px]
                  xl:w-[125px]

                  h-full

                  border-l
                  border-white/[0.12]

                  flex
                  items-center
                  justify-center
                "
                onMouseEnter={() =>
                  setMoreOpen(true)
                }
                onMouseLeave={() =>
                  setMoreOpen(false)
                }
              >
                <button
                  type="button"
                  onClick={() =>
                    setMoreOpen(
                      (prev) => !prev
                    )
                  }
                  className="
                    group

                    relative

                    w-full
                    h-full

                    flex
                    flex-col

                    items-center
                    justify-center

                    gap-[9px]

                    px-1
                  "
                >
                  {/* MORE ICON */}

                  <FaThLarge
                    className="
                      text-[28px]
                      xl:text-[30px]

                      text-[#83A941]

                      group-hover:text-[#9CCB42]

                      transition-colors
                      duration-200
                    "
                  />

                  {/* MORE TEXT */}

                  <span
                    className="
                      flex
                      items-center

                      gap-1

                      text-[9px]
                      xl:text-[10px]
                      2xl:text-[11px]

                      font-medium

                      leading-[1.25]

                      text-[#91B34E]

                      group-hover:text-[#A4CD55]

                      whitespace-nowrap
                    "
                  >
                    More Service

                    <FaChevronDown
                      className={`
                        text-[7px]

                        transition-transform
                        duration-200

                        ${
                          moreOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </span>

                  {/* LINE */}

                  <span
                    className={`
                      absolute

                      bottom-[17px]

                      left-1/2
                      -translate-x-1/2

                      h-[3px]

                      rounded-full

                      bg-[#9CCB42]

                      transition-all
                      duration-200

                      ${
                        moreOpen
                          ? "w-[50px]"
                          : "w-0 group-hover:w-[38px]"
                      }
                    `}
                  />
                </button>

                {/* =================================================
                    MORE DROPDOWN
                ================================================= */}

                <div
                  className={`
                    absolute

                    top-full
                    right-0

                    w-[260px]

                    bg-[#03182B]

                    border
                    border-white/[0.12]

                    shadow-[0_18px_45px_rgba(0,0,0,0.45)]

                    overflow-hidden

                    transition-all
                    duration-200

                    ${
                      moreOpen
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }
                  `}
                >
                  {/* Future More Services
                      yahan apne additional services
                      add kar sakte ho
                  */}

                  <div
                    className="
                      px-5
                      py-4

                      text-[13px]

                      text-white/70
                    "
                  >
                    More Services
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <div
            className="
              lg:hidden

              ml-auto

              flex
              items-center
            "
          >
            <button
              type="button"
              onClick={() =>
                setMenuOpen(
                  (prev) => !prev
                )
              }
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
              className="
                w-11
                h-11

                flex
                items-center
                justify-center

                border
                border-[#91C63F]/60

                text-[#91C63F]

                text-xl

                rounded-sm
              "
            >
              {menuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`
          lg:hidden

          absolute

          top-full
          left-0
          right-0

          bg-[#03182B]

          border-t
          border-white/[0.10]

          shadow-[0_20px_40px_rgba(0,0,0,0.45)]

          overflow-hidden

          transition-all
          duration-300

          ${
            menuOpen
              ? "max-h-[85vh] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }
        `}
      >
        <div
          className="
            max-h-[85vh]
            overflow-y-auto

            px-3
            py-3
          "
        >
          {/* 1 - 8 */}

          {mainNavLinks.map((item) => {
            const Icon = getMenuIcon(
              item.title
            );

            return (
              <NavLink
                key={item.id}
                to={item.href}
                end={item.href === "/"}
                onClick={() => {
                  setMenuOpen(false);
                  setMoreOpen(false);
                }}
                className={({ isActive }) => `
                  flex
                  items-center

                  gap-4

                  px-4
                  py-[15px]

                  border-b
                  border-white/[0.08]

                  ${
                    isActive
                      ? "text-[#9CCB42] bg-[#9CCB42]/10"
                      : "text-white/80 hover:text-[#9CCB42]"
                  }
                `}
              >
                <Icon
                  className="
                    text-[19px]
                    shrink-0
                  "
                />

                <span
                  className="
                    text-[13px]
                    font-medium
                  "
                >
                  {item.title}
                </span>
              </NavLink>
            );
          })}

          {/* 9 - MORE SERVICE */}

          <button
            type="button"
            onClick={() =>
              setMoreOpen(
                (prev) => !prev
              )
            }
            className="
              w-full

              flex
              items-center
              justify-between

              px-4
              py-[15px]

              text-white/80

              border-b
              border-white/[0.08]
            "
          >
            <span
              className="
                flex
                items-center
                gap-4
              "
            >
              <FaThLarge
                className="
                  text-[19px]
                "
              />

              <span
                className="
                  text-[13px]
                  font-medium
                "
              >
                More Service
              </span>
            </span>

            <FaChevronDown
              className={`
                text-[9px]

                transition-transform

                ${
                  moreOpen
                    ? "rotate-180"
                    : ""
                }
              `}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}