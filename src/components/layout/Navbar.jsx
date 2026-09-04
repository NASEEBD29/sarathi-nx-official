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
  FaBriefcase,
  FaShieldAlt,
  FaCar,
  FaShip,
} from "react-icons/fa";

import { navLinks } from "../../data/navLinks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // =====================================================
  // NORMAL MENU
  // =====================================================

  const mainNavLinks = navLinks.filter(
    (item) => item.title !== "More Service"
  );

  // =====================================================
  // MORE SERVICES
  // =====================================================

  const moreServices = [
    {
      title: "Business & Corporate Travel",
      href: "/business-corporate-travel",
      icon: FaBriefcase,
    },
    {
      title: "MICE & Exhibition Travel",
      href: "/mice-exhibition-travel",
      icon: FaHandshake,
    },
    {
      title: "Travel Insurance",
      href: "/travel-insurance",
      icon: FaShieldAlt,
    },
    {
      title: "Transfer & Car Rental",
      href: "/transfer-car-rental",
      icon: FaCar,
    },
    {
      title: "Cruise & Ferry Booking",
      href: "/cruise-ferry-booking",
      icon: FaShip,
    },
    {
      title: "Group & Customized Tours",
      href: "/group-customized-tours",
      icon: FaUsers,
    },
  ];

  // =====================================================
  // ICONS
  // =====================================================

  const getMenuIcon = (title = "") => {
    const text = title.toLowerCase();

    if (text.includes("home")) return FaHome;

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

    if (text.includes("about")) return FaUsers;

    if (text.includes("contact")) return FaPhoneAlt;

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

    window.addEventListener("resize", handleResize);

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
        z-[100]

        w-full

        bg-[#F5F7F2]

        border-b
        border-[#03182B]/10

        shadow-[0_4px_18px_rgba(3,24,43,0.10)]
      "
    >
      {/* =====================================================
          MAIN NAVBAR
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
            h-[78px]

            flex
            items-center
          "
        >
          {/* =================================================
              LOGO COLUMN
          ================================================= */}

          <div
            className="
              shrink-0

              w-[260px]
              sm:w-[285px]
              lg:w-[310px]
              xl:w-[340px]

              h-full

              flex
              items-center

              pr-6
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

                w-full
                h-full
              "
            >
              <img
                src={`${import.meta.env.BASE_URL}sarathi-logo.png`}
                alt="Sarathi NX"
                className="
                  block

                  w-auto
                  h-auto

                  max-w-full
                  max-h-[150px]

                  object-contain

                  object-left
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
            {mainNavLinks.map((item) => {
              const Icon = getMenuIcon(item.title);

              return (
                <div
                  key={item.id}
                  className="
                    relative

                    h-full

                    min-w-0

                    border-l
                    border-[#03182B]/10

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

                      h-full
                      w-full

                      flex
                      flex-col

                      items-center
                      justify-center

                      gap-[5px]

                      px-4
                      xl:px-5

                      text-center
                    "
                  >
                    {({ isActive }) => (
                      <>
                        {/* ICON */}

                        <Icon
                          className={`
                            shrink-0

                            text-[25px]
                            xl:text-[27px]

                            transition-colors
                            duration-200

                            ${
                              isActive
                                ? "text-[#76A82D]"
                                : "text-[#668F2C]"
                            }

                            group-hover:text-[#76A82D]
                          `}
                        />

                        {/* TITLE */}

                        <span
                          className={`
                            block

                            w-full

                            text-[9px]
                            xl:text-[10px]
                            2xl:text-[11px]

                            font-semibold

                            leading-[1.25]

                            whitespace-nowrap

                            transition-colors
                            duration-200

                            ${
                              isActive
                                ? "text-[#03182B]"
                                : "text-[#33495A]"
                            }

                            group-hover:text-[#03182B]
                          `}
                        >
                          {item.title}
                        </span>

                        {/* ACTIVE LINE */}

                        <span
                          className={`
                            absolute

                            bottom-[8px]

                            left-1/2
                            -translate-x-1/2

                            h-[3px]

                            rounded-full

                            bg-[#8BC63E]

                            transition-all
                            duration-200

                            ${
                              isActive
                                ? "w-[42px]"
                                : "w-0 group-hover:w-[32px]"
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
                MORE SERVICE
            ================================================= */}

            <div
              className="
                relative

                shrink-0

                w-[125px]
                xl:w-[135px]

                h-full

                border-l
                border-[#03182B]/10

                flex
                items-center
                justify-center
              "
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                type="button"
                onClick={() =>
                  setMoreOpen((prev) => !prev)
                }
                className="
                  group

                  relative

                  h-full
                  w-full

                  flex
                  flex-col

                  items-center
                  justify-center

                  gap-[5px]

                  px-4
                "
              >
                {/* ICON */}

                <FaThLarge
                  className="
                    text-[25px]
                    xl:text-[27px]

                    text-[#668F2C]

                    group-hover:text-[#76A82D]

                    transition-colors
                    duration-200
                  "
                />

                {/* TEXT */}

                <span
                  className="
                    flex
                    items-center

                    gap-1

                    text-[9px]
                    xl:text-[10px]
                    2xl:text-[11px]

                    font-semibold

                    leading-[1.2]

                    text-[#33495A]

                    group-hover:text-[#03182B]

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

                {/* ACTIVE LINE */}

                <span
                  className={`
                    absolute

                    bottom-[8px]

                    left-1/2
                    -translate-x-1/2

                    h-[3px]

                    rounded-full

                    bg-[#8BC63E]

                    transition-all
                    duration-200

                    ${
                      moreOpen
                        ? "w-[48px]"
                        : "w-0 group-hover:w-[36px]"
                    }
                  `}
                />
              </button>

              {/* =================================================
                  MORE SERVICES DROPDOWN
              ================================================= */}

              <div
                className={`
                  absolute

                  top-[calc(100%+1px)]
                  right-0

                  w-[315px]

                  overflow-hidden

                  rounded-b-[6px]

                  bg-[#FFFFFF]

                  border
                  border-[#03182B]/10

                  shadow-[0_22px_55px_rgba(3,24,43,0.18)]

                  transition-all
                  duration-200

                  ${
                    moreOpen
                      ? "opacity-100 translate-y-0 visible pointer-events-auto"
                      : "opacity-0 -translate-y-2 invisible pointer-events-none"
                  }
                `}
              >
                {/* DROPDOWN HEADER */}

                <div
                  className="
                    px-5
                    py-4

                    border-b
                    border-[#03182B]/10

                    bg-[#F5F7F2]
                  "
                >
                  <p
                    className="
                      m-0

                      text-[12px]

                      uppercase
                      tracking-[1.2px]

                      font-bold

                      text-[#668F2C]
                    "
                  >
                    More Services
                  </p>

                  <p
                    className="
                      mt-1

                      text-[11px]

                      text-[#536474]
                    "
                  >
                    Explore our additional travel services
                  </p>
                </div>

                {/* SERVICE ITEMS */}

                <div className="py-2">
                  {moreServices.map((service) => {
                    const ServiceIcon = service.icon;

                    return (
                      <NavLink
                        key={service.title}
                        to={service.href}
                        onClick={() => {
                          setMoreOpen(false);
                          setMenuOpen(false);
                        }}
                        className="
                          group

                          flex
                          items-center

                          gap-3

                          w-full

                          px-5
                          py-[13px]

                          text-[#33495A]

                          transition-all
                          duration-200

                          hover:bg-[#8BC63E]/10
                          hover:text-[#03182B]
                        "
                      >
                        <span
                          className="
                            shrink-0

                            w-[32px]
                            h-[32px]

                            rounded-full

                            flex
                            items-center
                            justify-center

                            bg-[#8BC63E]/10

                            border
                            border-[#8BC63E]/20

                            group-hover:bg-[#8BC63E]/20
                          "
                        >
                          <ServiceIcon
                            className="
                              text-[13px]

                              text-[#668F2C]

                              group-hover:text-[#527C20]
                            "
                          />
                        </span>

                        <span
                          className="
                            min-w-0

                            text-[12px]
                            xl:text-[13px]

                            font-semibold

                            leading-[1.35]

                            whitespace-normal
                          "
                        >
                          {service.title}
                        </span>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            </div>
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
              onClick={() => {
                setMenuOpen((prev) => !prev);
                setMoreOpen(false);
              }}
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
              className="
                w-[42px]
                h-[42px]

                flex
                items-center
                justify-center

                rounded-[4px]

                border
                border-[#668F2C]

                bg-[#8BC63E]/5

                text-[#668F2C]

                text-[18px]

                transition-all
                duration-200

                hover:bg-[#8BC63E]/10
              "
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
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

          z-[110]

          bg-[#F5F7F2]

          border-t
          border-[#03182B]/10

          shadow-[0_20px_45px_rgba(3,24,43,0.18)]

          transition-all
          duration-300

          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      >
        <div
          className="
            max-h-[calc(100vh-78px)]

            overflow-y-auto

            overscroll-contain

            px-3
            py-3
          "
        >
          {/* NORMAL MOBILE LINKS */}

          {mainNavLinks.map((item) => {
            const Icon = getMenuIcon(item.title);

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

                  min-h-[52px]

                  px-4
                  py-3

                  rounded-[4px]

                  border-b
                  border-[#03182B]/10

                  ${
                    isActive
                      ? "text-[#527C20] bg-[#8BC63E]/10"
                      : "text-[#33495A] hover:text-[#527C20] hover:bg-[#8BC63E]/5"
                  }
                `}
              >
                <Icon
                  className="
                    text-[18px]
                    shrink-0
                  "
                />

                <span
                  className="
                    text-[13px]
                    font-semibold

                    leading-[1.3]
                  "
                >
                  {item.title}
                </span>
              </NavLink>
            );
          })}

          {/* MOBILE MORE SERVICE */}

          <button
            type="button"
            onClick={() =>
              setMoreOpen((prev) => !prev)
            }
            className="
              w-full

              min-h-[54px]

              flex
              items-center
              justify-between

              px-4
              py-3

              text-[#33495A]

              border-b
              border-[#03182B]/10
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
                  text-[18px]
                  shrink-0

                  text-[#668F2C]
                "
              />

              <span
                className="
                  text-[13px]
                  font-semibold
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

          {/* MOBILE MORE SERVICES */}

          <div
            className={`
              overflow-hidden

              transition-all
              duration-300

              ${
                moreOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div
              className="
                mt-2
                mb-1
                mx-1

                rounded-[5px]

                bg-white

                border
                border-[#03182B]/10

                overflow-hidden
              "
            >
              {moreServices.map((service) => {
                const ServiceIcon = service.icon;

                return (
                  <NavLink
                    key={service.title}
                    to={service.href}
                    onClick={() => {
                      setMenuOpen(false);
                      setMoreOpen(false);
                    }}
                    className="
                      flex
                      items-center

                      gap-3

                      min-h-[52px]

                      px-4
                      py-3

                      border-b
                      border-[#03182B]/10

                      last:border-b-0

                      text-[#33495A]

                      hover:text-[#527C20]
                      hover:bg-[#8BC63E]/10

                      transition-colors
                      duration-200
                    "
                  >
                    <span
                      className="
                        shrink-0

                        w-[30px]
                        h-[30px]

                        rounded-full

                        flex
                        items-center
                        justify-center

                        bg-[#8BC63E]/10
                      "
                    >
                      <ServiceIcon
                        className="
                          text-[12px]

                          text-[#668F2C]
                        "
                      />
                    </span>

                    <span
                      className="
                        text-[12px]

                        font-semibold

                        leading-[1.35]
                      "
                    >
                      {service.title}
                    </span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
