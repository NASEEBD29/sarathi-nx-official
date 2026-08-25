import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../common/Reveal";

import {
  FaPlaneDeparture,
  FaBuilding,
  FaPassport,
  FaHotel,
  FaUsers,
  FaGlobeAsia,
  FaGlobe,
  FaBriefcase,
  FaSuitcaseRolling,
  FaArrowRight,
  FaShieldAlt,
  FaCar,
  FaUmbrellaBeach,
  FaShip,
  FaHandshake,
  FaUserTie,
} from "react-icons/fa";

// ======================================================
// SERVICE IMAGES
// ======================================================

import internationalExhibition from "../../assets/images/services/internationalExhibition.jpg";
import bussnies from "../../assets/images/services/bussnies.jpg";
import corporateTravel from "../../assets/images/services/corporateTravel.jpg";
import visa from "../../assets/images/services/visa.jpg";
import mice from "../../assets/images/services/mice.jpg";
import group from "../../assets/images/services/group.jpg";
import globalTourisam from "../../assets/images/services/globalTourisam.jpg";
import hotel from "../../assets/images/services/hotel.jpg";
import otherInternationalTradeFairs from "../../assets/images/services/otherInternationalTradeFairs.jpg";

// ======================================================
// SERVICES DATA
// ======================================================

const services = [
  {
    icon: FaPlaneDeparture,
    title: "Flights & Air Travel",
    shortTitle: "Flights & Air Travel",
    description:
      "Book domestic and international flights with reliable travel planning, flexible options and professional assistance for a smooth journey.",
    image: internationalExhibition,
  },

  {
    icon: FaHotel,
    title: "Hotels & Accommodation",
    shortTitle: "Hotels & Accommodation",
    description:
      "Find comfortable and convenient accommodation options carefully selected around your destination, budget and travel requirements.",
    image: hotel,
  },

  {
    icon: FaPassport,
    title: "Visa & Travel Documentation",
    shortTitle: "Visa & Travel Documentation",
    description:
      "Get professional guidance with visa applications, documentation requirements and other essential travel formalities.",
    image: visa,
  },

  {
    icon: FaShieldAlt,
    title: "Travel Insurance & Forex",
    shortTitle: "Travel Insurance & Forex",
    description:
      "Travel with greater confidence through travel insurance assistance and convenient foreign exchange support for your journey.",
    image: globalTourisam,
  },

  {
    icon: FaCar,
    title: "Transfers & Car Rentals",
    shortTitle: "Transfers & Car Rentals",
    description:
      "Arrange airport transfers, private transportation and car rentals for convenient and comfortable travel at your destination.",
    image: bussnies,
  },

  {
    icon: FaUmbrellaBeach,
    title: "Domestic & International Holidays",
    shortTitle: "Domestic & International Holidays",
    description:
      "Explore memorable destinations with thoughtfully planned holiday packages, customized itineraries, hotels and complete travel support.",
    image: group,
  },

  {
    icon: FaShip,
    title: "Cruise & Ferry Bookings",
    shortTitle: "Cruise & Ferry Bookings",
    description:
      "Plan your cruise and ferry journeys with booking assistance and travel arrangements designed for a comfortable experience.",
    image: otherInternationalTradeFairs,
  },

  {
    icon: FaBriefcase,
    title: "Business & Corporate Travel",
    shortTitle: "Business & Corporate Travel",
    description:
      "Make every business trip simple and efficient with carefully planned flights, hotels, transfers and personalized corporate travel support.",
    image: corporateTravel,
  },

  {
    icon: FaBuilding,
    title: "MICE & Exhibition Travel",
    shortTitle: "MICE & Exhibition Travel",
    description:
      "From meetings and conferences to exhibitions and incentive programs, we manage professional travel arrangements with complete attention to detail.",
    image: mice,
  },

  {
    icon: FaUsers,
    title: "Group & Customized Tours",
    shortTitle: "Group & Customized Tours",
    description:
      "Enjoy well-organized group journeys and customized tours with personalized itineraries, accommodation, transportation and complete travel assistance.",
    image: group,
  },

  {
    icon: FaUserTie,
    title: "Meet & Greet & Concierge Services",
    shortTitle: "Meet & Greet & Concierge",
    description:
      "Enjoy personalized meet and greet, concierge and destination assistance designed to make every part of your journey more comfortable and convenient.",
    image: internationalExhibition,
  },
];

// ======================================================
// SERVICES COMPONENT
// ======================================================

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  // ====================================================
  // AUTO SLIDER
  // ====================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const service = services[activeService];

  const Icon = service.icon;

  // ====================================================
  // UI
  // ====================================================

  return (
    <section
      id="services"
      className="
        bg-gradient-to-b
        from-white
        via-[#F8FBFF]
        to-white
        pt-10
        pb-10
        lg:pt-10
        lg:pb-12
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ==================================================
            HEADING
        ================================================== */}

        <div className="text-center mb-8">

          {/* EYEBROW */}

          <Reveal>
            <div className="flex items-center justify-center gap-[10px] mb-[7px]">

              <span
                className="
                  block
                  w-[49px]
                  h-[2px]
                  bg-gradient-to-r
                  from-[#0057B8]
                  to-[#F16A24]
                "
              />

              <span
                className="
                  text-[13px]
                  font-bold
                  tracking-[3px]
                  uppercase
                  leading-none
                  bg-gradient-to-r
                  from-[#0057B8]
                  via-[#0057B8]
                  to-[#F16A24]
                  bg-clip-text
                  text-transparent
                "
              >
                Our Services
              </span>

              <span
                className="
                  block
                  w-[49px]
                  h-[2px]
                  bg-gradient-to-r
                  from-[#F16A24]
                  to-[#0057B8]
                "
              />

            </div>
          </Reveal>

          {/* HEADING */}

          <Reveal delay={0.05}>
            <h2
              className="
                text-center
                font-extrabold
                tracking-[-1.8px]
                leading-[1.02]
                text-[48px]
                md:text-[52px]
                lg:text-[58px]
                text-[#071B41]
              "
            >
              Complete Travel{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-[#0057B8]
                  via-[#1454D8]
                  to-[#F16A24]
                  bg-clip-text
                  text-transparent
                "
              >
                Solutions.
              </span>
            </h2>
          </Reveal>

          {/* DESCRIPTION */}

          <p
            className="
              text-gray-600
              max-w-2xl
              mx-auto
              mt-3
              text-sm
              md:text-base
              leading-6
            "
          >
            From international exhibitions and corporate journeys to visas,
            hotels and group tours, we take care of every important detail
            so you can travel with confidence.
          </p>

        </div>

        {/* ==================================================
            SERVICE AREA
        ================================================== */}

        <div
          className="
            grid
            lg:grid-cols-[270px_1fr]
            gap-5
            items-stretch
          "
        >

          {/* ==================================================
              LEFT SERVICE MENU
          ================================================== */}

          <div
            className="
              bg-white
              rounded-2xl
              border
              border-gray-100
              shadow-lg
              overflow-hidden
              lg:h-[500px]
              flex
              flex-col
            "
          >

            {/* MENU HEADER */}

            <div
              className="
                px-5
                py-4
                shrink-0
                bg-gradient-to-r
                from-[#0057B8]
                via-[#0057B8]
                to-[#fc6602]
                text-white
              "
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[2px]
                  text-blue-100
                  font-semibold
                "
              >
                What We Offer
              </p>

              <h3 className="text-lg font-bold mt-1">
                Our Services
              </h3>

            </div>

            {/* ==================================================
                SCROLLABLE MENU ITEMS
            ================================================== */}

            <div
              className="
                p-2
                flex-1
                overflow-y-auto
                overscroll-contain
                [scrollbar-width:thin]
                [scrollbar-color:#0057B8_transparent]
              "
            >

              {services.map((item, index) => {

                const MenuIcon = item.icon;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveService(index)}
                    className={`
                      group
                      w-full
                      flex
                      items-center
                      gap-3
                      px-4
                      py-3
                      rounded-xl
                      text-left
                      transition-all
                      duration-300

                      ${
                        activeService === index
                          ? `
                            bg-gradient-to-r
                            from-[#0057B8]
                            via-[#0057B8]
                            to-[#fc6602]
                            text-white
                            shadow-md
                            scale-[1.01]
                          `
                          : `
                            text-gray-600
                            hover:bg-[#F1F6FF]
                            hover:text-[#0057B8]
                          `
                      }
                    `}
                  >

                    {/* ICON */}

                    <span
                      className={`
                        w-9
                        h-9
                        shrink-0
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300

                        ${
                          activeService === index
                            ? `
                              bg-white/20
                              text-white
                              border
                              border-white/20
                            `
                            : `
                              bg-[#F1F6FF]
                              text-[#0057B8]
                            `
                        }
                      `}
                    >
                      <MenuIcon className="text-sm" />
                    </span>

                    {/* TITLE */}

                    <span
                      className={`
                        text-sm
                        font-semibold
                        leading-5

                        ${
                          activeService === index
                            ? "text-white"
                            : "text-gray-600"
                        }
                      `}
                    >
                      {item.shortTitle}
                    </span>

                  </button>
                );

              })}

            </div>

          </div>

          {/* ==================================================
              MAIN SERVICE CARD
          ================================================== */}

          <div
            className="
              relative
              h-[500px]
            "
          >

            <AnimatePresence mode="wait">

              <motion.div
                key={activeService}
                initial={{
                  opacity: 0,
                  rotateY: -12,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  rotateY: 0,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  rotateY: 12,
                  x: -30,
                }}
                transition={{
                  duration: 0.55,
                  ease: "easeInOut",
                }}
                className="h-full"
              >

                {/* ==================================================
                    IMAGE CARD
                ================================================== */}

                <div
                  className="
                    relative
                    h-full
                    rounded-2xl
                    overflow-hidden
                    shadow-xl
                    group
                  "
                >

                  {/* ==================================================
                      BACKGROUND IMAGE
                  ================================================== */}

                  <motion.img
                    key={service.image}
                    src={service.image}
                    alt={service.title}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                    initial={{
                      scale: 1.08,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 4.5,
                      ease: "easeOut",
                    }}
                  />

                  {/* ==================================================
                      DARK OVERLAY
                  ================================================== */}

                  <div className="absolute inset-0 bg-black/35" />

                  {/* ==================================================
                      LEFT DARK GRADIENT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-black/85
                      via-black/55
                      to-black/15
                    "
                  />

                  {/* ==================================================
                      BLUE + ORANGE COLOR OVERLAY
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-tr
                      from-[#0057B8]/30
                      via-transparent
                      to-[#fc6602]/25
                    "
                  />

                  {/* ==================================================
                      BOTTOM GRADIENT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-2/3
                      bg-gradient-to-t
                      from-black/75
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* ==================================================
                      TOP COLOR LINE
                  ================================================== */}

                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      h-1.5
                      z-20
                      bg-gradient-to-r
                      from-[#0057B8]
                      via-[#0057B8]
                      to-[#fc6602]
                    "
                  />

                  {/* ==================================================
                      CONTENT
                  ================================================== */}

                  <div
                    className="
                      relative
                      z-10
                      h-full
                      flex
                      flex-col
                      justify-center
                      p-6
                      md:p-8
                      lg:p-10
                    "
                  >

                    {/* ==================================================
                        ICON
                    ================================================== */}

                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-gradient-to-br
                        from-[#0057B8]/70
                        to-[#fc6602]/70
                        backdrop-blur-md
                        border
                        border-white/30
                        text-white
                        flex
                        items-center
                        justify-center
                        text-2xl
                        shadow-xl
                        mb-4
                        group-hover:scale-105
                        transition-transform
                        duration-300
                      "
                    >
                      <Icon />
                    </div>

                    {/* ==================================================
                        LABEL
                    ================================================== */}

                    <span
                      className="
                        text-[#fc6602]
                        text-xs
                        font-bold
                        uppercase
                        tracking-[2px]
                      "
                    >
                      Sarathi NX
                    </span>

                    {/* ==================================================
                        TITLE
                    ================================================== */}

                    <h3
                      className="
                        text-2xl
                        md:text-3xl
                        lg:text-4xl
                        font-extrabold
                        text-white
                        mt-2
                        max-w-2xl
                        leading-tight
                        drop-shadow-lg
                      "
                    >
                      {service.title}
                    </h3>

                    {/* ==================================================
                        DESCRIPTION
                    ================================================== */}

                    <p
                      className="
                        text-white/90
                        text-sm
                        md:text-base
                        leading-6
                        mt-3
                        max-w-2xl
                        drop-shadow-md
                        line-clamp-2
                      "
                    >
                      {service.description}
                    </p>

                    {/* ==================================================
                        BUTTON + SUPPORT
                    ================================================== */}

                    <div
                      className="
                        flex
                        flex-wrap
                        items-center
                        gap-4
                        mt-5
                      "
                    >

                      {/* ==================================================
                          EXPLORE BUTTON
                      ================================================== */}

                      <a
                        href="#contact"
                        className="
                          group/explore
                          inline-flex
                          items-center
                          gap-3
                          bg-gradient-to-r
                          from-[#0057B8]
                          via-[#0057B8]
                          to-[#fc6602]
                          text-white
                          px-5
                          py-3
                          rounded-full
                          font-semibold
                          text-sm
                          transition-all
                          duration-300
                          shadow-lg
                          hover:shadow-2xl
                          hover:-translate-y-1
                          hover:scale-105
                        "
                      >
                        Explore Service

                        <FaArrowRight
                          className="
                            text-sm
                            transition-transform
                            duration-300
                            group-hover/explore:translate-x-1
                          "
                        />
                      </a>

                      {/* ==================================================
                          SUPPORT TEXT
                      ================================================== */}

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-xs
                          md:text-sm
                          text-white/90
                        "
                      >

                        <span
                          className="
                            w-2
                            h-2
                            rounded-full
                            bg-[#fc6602]
                            shadow-[0_0_10px_rgba(252,102,2,0.9)]
                          "
                        />

                        Professional Travel Assistance

                      </div>

                    </div>

                    {/* ==================================================
                        SLIDER INDICATORS
                    ================================================== */}

                    <div className="flex gap-2 mt-5">

                      {services.map((_, index) => (

                        <button
                          key={index}
                          type="button"
                          onClick={() =>
                            setActiveService(index)
                          }
                          aria-label={`Show service ${index + 1}`}
                          className={`
                            h-1.5
                            rounded-full
                            transition-all
                            duration-500

                            ${
                              activeService === index
                                ? `
                                  w-10
                                  bg-gradient-to-r
                                  from-[#0057B8]
                                  to-[#fc6602]
                                `
                                : `
                                  w-5
                                  bg-white/40
                                  hover:bg-white/70
                                `
                            }
                          `}
                        />

                      ))}

                    </div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}