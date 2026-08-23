import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaPlaneDeparture,
  FaBuilding,
  FaPassport,
  FaHotel,
  FaUsers,
  FaGlobeAsia,
  FaBriefcase,
  FaSuitcaseRolling,
  FaArrowRight,
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

// ======================================================
// SERVICES DATA
// ======================================================

const services = [
  {
    icon: FaPlaneDeparture,
    title: "International Exhibition Travel",
    shortTitle: "Exhibition Travel",
    description:
      "Travel confidently to international exhibitions, trade fairs and business events with complete planning, documentation and travel assistance.",
    image: internationalExhibition,
  },

  {
    icon: FaBriefcase,
    title: "Business Travel",
    shortTitle: "Business Travel",
    description:
      "Make every business trip simple and efficient with carefully planned flights, hotels, transfers and personalized travel support.",
    image: bussnies,
  },

  {
    icon: FaBuilding,
    title: "Corporate Travel",
    shortTitle: "Corporate Travel",
    description:
      "Customized corporate travel solutions designed around your company's requirements, schedules and business objectives.",
    image: corporateTravel,
  },

  {
    icon: FaPassport,
    title: "Visa Assistance",
    shortTitle: "Visa Assistance",
    description:
      "Get professional guidance with visa documentation, application requirements and travel-related formalities for international destinations.",
    image: visa,
  },

  {
    icon: FaUsers,
    title: "MICE",
    shortTitle: "MICE",
    description:
      "From meetings and conferences to incentive programs and corporate events, we manage travel arrangements with professional attention.",
    image: mice,
  },

  {
    icon: FaSuitcaseRolling,
    title: "Group Tours",
    shortTitle: "Group Tours",
    description:
      "Enjoy well-organized group journeys with customized itineraries, accommodation, transportation and complete travel assistance.",
    image: group,
  },

  {
    icon: FaGlobeAsia,
    title: "Global Tourism",
    shortTitle: "Global Tourism",
    description:
      "Discover destinations around the world through thoughtfully planned leisure travel experiences designed around your preferences.",
    image: globalTourisam,
  },

  {
    icon: FaHotel,
    title: "Hotel & Travel Assistance",
    shortTitle: "Hotel & Assistance",
    description:
      "From comfortable hotel bookings to transfers and other travel arrangements, we take care of the details for a smooth journey.",
    image: hotel,
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

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-gradient-to-r
              from-[#0057B8]
              via-[#0057B8]
              to-[#fc6602]
              text-white
              text-xs
              md:text-sm
              font-bold
              uppercase
              tracking-[2px]
              shadow-md
            "
          >
            <FaGlobeAsia />

            Our Services
          </div>

          {/* HEADING */}

          <h2
            className="
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-extrabold
              text-gray-800
              mt-4
              leading-tight
            "
          >
            Complete Travel Solutions
          </h2>

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
              h-fit
            "
          >

            {/* MENU HEADER */}

            <div
              className="
                px-5
                py-4
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

            {/* MENU ITEMS */}

            <div className="p-2">

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

          <div className="relative min-h-[520px] lg:min-h-0">

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
                    min-h-[520px]
                    lg:min-h-0
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
                      p-8
                      md:p-10
                      lg:p-12
                    "
                  >

                    {/* ==================================================
                        ICON
                    ================================================== */}

                    <div
                      className="
                        w-20
                        h-20
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
                        text-3xl
                        shadow-xl
                        mb-7
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
                        text-sm
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
                        text-3xl
                        md:text-4xl
                        lg:text-5xl
                        font-extrabold
                        text-white
                        mt-3
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
                        text-base
                        md:text-lg
                        leading-8
                        mt-5
                        max-w-2xl
                        drop-shadow-md
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
                        gap-5
                        mt-8
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
                          px-6
                          py-3.5
                          rounded-full
                          font-semibold
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
                          text-sm
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

                    <div className="flex gap-2 mt-9">

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