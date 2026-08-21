import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaGlobeAsia,
  FaChevronLeft,
  FaChevronRight,
  FaPlaneDeparture,
  FaCalendarAlt,
} from "react-icons/fa";

import Reveal from "../common/Reveal";

const exhibitions = [
  {
    title: "CMEF",
    description:
      "China International Medical Equipment Fair",
    location: "Shanghai & Beijing, China",
    link: "https://www.cmef.com.cn/en",
  },
  {
    title: "MEDICA",
    description:
      "World's Leading Trade Fair for the Medical Sector",
    location: "Düsseldorf, Germany",
    link: "https://www.medica-tradefair.com/",
  },
  {
    title: "ARAB HEALTH",
    description:
      "The Largest Healthcare Exhibition in the Middle East",
    location: "Dubai, UAE",
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
  },
  {
    title: "WELDING & CUTTING",
    description:
      "Beijing Essen Welding & Cutting Fair",
    location: "Beijing, China",
    link: "#",
  },
  {
    title: "MEDLAB",
    description:
      "Laboratory & Diagnostics Exhibition",
    location: "Dubai, UAE",
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
  },
  {
    title: "CANTON FAIR",
    description:
      "China Import & Export Fair",
    location: "Guangzhou, China",
    link: "#",
  },
  {
    title: "ITMA ASIA + CITME",
    description:
      "Asia's Leading Textile Machinery Exhibition",
    location: "Shanghai, China",
    link: "#",
  },
];

export default function InternationalExhibitions() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // ==========================================
  // NEXT SLIDE
  // ==========================================

  const handleNext = () => {
    setDirection(1);

    setStartIndex(
      (prev) => (prev + 1) % exhibitions.length
    );
  };

  // ==========================================
  // PREVIOUS SLIDE
  // ==========================================

  const handlePrevious = () => {
    setDirection(-1);

    setStartIndex(
      (prev) =>
        (prev - 1 + exhibitions.length) %
        exhibitions.length
    );
  };

  // ==========================================
  // AUTO SLIDER
  // ==========================================

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // ==========================================
  // 3 VISIBLE CARDS
  // ==========================================

  const visibleCards = [
    exhibitions[startIndex % exhibitions.length],

    exhibitions[
      (startIndex + 1) % exhibitions.length
    ],

    exhibitions[
      (startIndex + 2) % exhibitions.length
    ],
  ];

  // ==========================================
  // CARD ANIMATION
  // ==========================================

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 420 : -420,
      opacity: 0,
      scale: 0.94,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? -420 : 420,
      opacity: 0,
      scale: 0.94,
    }),
  };

  return (
    <section
      id="exhibitions"
      className="relative py-16 md:py-20 bg-gradient-to-b from-white via-[#F8FBFF] to-white overflow-hidden"
    >

      {/* ==========================================
          DECORATIVE BACKGROUND
      ========================================== */}

      <div className="absolute top-10 -left-24 w-72 h-72 bg-[#0057B8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 -right-24 w-72 h-72 bg-[#00A6A6]/5 rounded-full blur-3xl pointer-events-none" />


      <div className="relative max-w-7xl mx-auto px-6">

        {/* ==========================================
            SECTION HEADING
        ========================================== */}

        <Reveal>

          <div className="text-center max-w-4xl mx-auto mb-10">

            {/* Eyebrow */}

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF2FF] text-[#003DA5] text-xs md:text-sm font-bold uppercase tracking-[2px]">

              <FaGlobeAsia />

              International Exhibitions

            </div>


            {/* Heading */}

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mt-4 leading-tight">

              Your Gateway to

              <span className="block text-[#003DA5] mt-1">
                Global Exhibitions
              </span>

            </h2>


            {/* Description */}

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7 text-sm md:text-base">

              Discover leading international exhibitions and
              trade fairs with complete travel assistance from
              Sarathi NX. We make your business journey
              simple, comfortable and stress-free.

            </p>

          </div>

        </Reveal>


        {/* ==========================================
            CAROUSEL AREA
        ========================================== */}

        <div className="relative">

          {/* ==========================================
              LEFT ARROW
          ========================================== */}

          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous exhibitions"
            className="
              hidden lg:flex
              absolute
              -left-6
              top-1/2
              -translate-y-1/2
              z-30
              w-12
              h-12
              rounded-full
              bg-white
              text-[#003DA5]
              shadow-xl
              border
              border-gray-100
              items-center
              justify-center
              hover:bg-[#003DA5]
              hover:text-white
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaChevronLeft />
          </button>


          {/* ==========================================
              CARD VIEWPORT
          ========================================== */}

          <div className="relative overflow-hidden px-1 py-3">

            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >

              <motion.div
                key={startIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: "spring",
                    stiffness: 180,
                    damping: 25,
                  },
                  opacity: {
                    duration: 0.35,
                  },
                  scale: {
                    duration: 0.35,
                  },
                }}
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-3
                  gap-6
                  w-full
                "
              >

                {visibleCards.map((item, index) => (

                  <motion.div
                    key={`${item.title}-${startIndex}-${index}`}
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      group
                      relative
                      bg-white
                      rounded-3xl
                      border
                      border-gray-100
                      shadow-[0_10px_35px_rgba(0,0,0,0.07)]
                      hover:shadow-[0_20px_50px_rgba(0,61,165,0.16)]
                      min-h-[330px]
                      flex
                      flex-col
                      overflow-hidden
                      transition-shadow
                      duration-500
                    "
                  >

                    {/* ==================================
                        TOP GRADIENT
                    ================================== */}

                    <div
                      className="
                        absolute
                        top-0
                        left-0
                        right-0
                        h-1.5
                        bg-gradient-to-r
                        from-[#003DA5]
                        via-[#0084D6]
                        to-[#00A6A6]
                      "
                    />


                    {/* ==================================
                        DECORATIVE CIRCLE
                    ================================== */}

                    <div
                      className="
                        absolute
                        -top-16
                        -right-16
                        w-36
                        h-36
                        rounded-full
                        bg-[#EAF2FF]
                        group-hover:bg-[#DDEBFF]
                        transition-colors
                        duration-500
                      "
                    />


                    <div
                      className="
                        absolute
                        -bottom-20
                        -left-20
                        w-40
                        h-40
                        rounded-full
                        bg-[#F4FAFF]
                        group-hover:bg-[#EAF2FF]
                        transition-colors
                        duration-500
                      "
                    />


                    {/* ==================================
                        CARD CONTENT
                    ================================== */}

                    <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">

                      {/* ==================================
                          NUMBER + ICON
                      ================================== */}

                      <div className="flex items-center justify-between">

                        {/* Icon */}

                        <motion.div
                          whileHover={{
                            rotate: 8,
                            scale: 1.08,
                          }}
                          className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-gradient-to-br
                            from-[#EAF2FF]
                            to-[#DCEBFF]
                            text-[#003DA5]
                            flex
                            items-center
                            justify-center
                            text-xl
                            shadow-sm
                            group-hover:bg-[#003DA5]
                            group-hover:text-white
                            transition-all
                            duration-500
                          "
                        >
                          <FaGlobeAsia />
                        </motion.div>


                        {/* Number */}

                        <div
                          className="
                            text-4xl
                            font-black
                            text-gray-100
                            group-hover:text-[#EAF2FF]
                            transition-colors
                            duration-500
                          "
                        >
                          {String(
                            (startIndex + index) %
                              exhibitions.length +
                              1
                          ).padStart(2, "0")}
                        </div>

                      </div>


                      {/* ==================================
                          TITLE
                      ================================== */}

                      <h3
                        className="
                          mt-6
                          text-xl
                          md:text-2xl
                          font-extrabold
                          text-gray-800
                          leading-tight
                          group-hover:text-[#003DA5]
                          transition-colors
                          duration-300
                        "
                      >
                        {item.title}
                      </h3>


                      {/* ==================================
                          DESCRIPTION
                      ================================== */}

                      <p
                        className="
                          mt-3
                          text-gray-600
                          text-sm
                          md:text-[15px]
                          leading-6
                        "
                      >
                        {item.description}
                      </p>


                      {/* ==================================
                          LOCATION
                      ================================== */}

                      <div
                        className="
                          mt-5
                          inline-flex
                          items-center
                          gap-2
                          w-fit
                          px-3
                          py-2
                          rounded-full
                          bg-[#F3F7FC]
                          text-[#003DA5]
                          text-xs
                          md:text-sm
                          font-semibold
                          group-hover:bg-[#EAF2FF]
                          transition-colors
                          duration-300
                        "
                      >

                        <FaMapMarkerAlt />

                        <span>
                          {item.location}
                        </span>

                      </div>


                      {/* ==================================
                          BOTTOM
                      ================================== */}

                      <div className="mt-auto pt-6 flex items-center justify-between">

                        {/* Exhibition type */}

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            text-gray-400
                            text-xs
                            font-medium
                          "
                        >
                          <FaCalendarAlt />

                          International Event

                        </div>


                        {/* Explore */}

                        {item.link !== "#" ? (

                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              inline-flex
                              items-center
                              gap-2
                              text-[#003DA5]
                              font-bold
                              text-sm
                              group/link
                              hover:text-[#002B73]
                              transition
                            "
                          >

                            Explore

                            <FaArrowRight
                              className="
                                text-xs
                                group-hover/link:translate-x-1
                                transition-transform
                              "
                            />

                          </a>

                        ) : (

                          <span
                            className="
                              text-gray-400
                              font-semibold
                              text-xs
                            "
                          >
                            Coming Soon
                          </span>

                        )}

                      </div>

                    </div>

                  </motion.div>

                ))}

              </motion.div>

            </AnimatePresence>

          </div>


          {/* ==========================================
              RIGHT ARROW
          ========================================== */}

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next exhibitions"
            className="
              hidden lg:flex
              absolute
              -right-6
              top-1/2
              -translate-y-1/2
              z-30
              w-12
              h-12
              rounded-full
              bg-white
              text-[#003DA5]
              shadow-xl
              border
              border-gray-100
              items-center
              justify-center
              hover:bg-[#003DA5]
              hover:text-white
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaChevronRight />
          </button>

        </div>


        {/* ==========================================
            MOBILE ARROWS
        ========================================== */}

        <div className="flex lg:hidden justify-center gap-3 mt-5">

          <button
            type="button"
            onClick={handlePrevious}
            className="
              w-10
              h-10
              rounded-full
              bg-white
              text-[#003DA5]
              border
              border-gray-200
              shadow-md
              flex
              items-center
              justify-center
              hover:bg-[#003DA5]
              hover:text-white
              transition-all
            "
          >
            <FaChevronLeft />
          </button>


          <button
            type="button"
            onClick={handleNext}
            className="
              w-10
              h-10
              rounded-full
              bg-white
              text-[#003DA5]
              border
              border-gray-200
              shadow-md
              flex
              items-center
              justify-center
              hover:bg-[#003DA5]
              hover:text-white
              transition-all
            "
          >
            <FaChevronRight />
          </button>

        </div>


        {/* ==========================================
            DOTS
        ========================================== */}

        <div className="flex justify-center gap-2 mt-5">

          {exhibitions.map((_, index) => (

            <button
              key={index}
              type="button"
              onClick={() => {
                setDirection(
                  index >= startIndex ? 1 : -1
                );

                setStartIndex(index);
              }}
              aria-label={`Go to exhibition ${index + 1}`}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  startIndex === index
                    ? "w-8 bg-[#003DA5]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }
              `}
            />

          ))}

        </div>


        {/* ==========================================
            CTA
        ========================================== */}

        <Reveal delay={0.3}>

          <div
            className="
              mt-10
              rounded-3xl
              bg-gradient-to-r
              from-[#fc6602]
              via-[#fc6602]
              to-[#0057B8]
              px-6
              py-7
              md:px-10
              md:py-8
              text-white
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-5
              shadow-xl
              overflow-hidden
              relative
            "
          >

            {/* Decorative circle */}

            <div
              className="
                absolute
                -right-16
                -top-16
                w-40
                h-40
                rounded-full
                bg-white/10
              "
            />


            <div className="relative z-10">

              <div className="flex items-center gap-2">

                <FaPlaneDeparture className="text-blue-200" />

                <p
                  className="
                    text-blue-200
                    uppercase
                    tracking-[2px]
                    text-xs
                    font-bold
                  "
                >
                  Exhibition Travel Made Easy
                </p>

              </div>


              <h3
                className="
                  text-xl
                  md:text-2xl
                  font-extrabold
                  mt-2
                "
              >
                Planning to attend an international exhibition?
              </h3>


              <p className="text-blue-100 mt-1 text-sm">
                Let Sarathi NX manage your complete travel requirements.
              </p>

            </div>


            <a
              href="#contact"
              className="
                relative
                z-10
                shrink-0
                inline-flex
                items-center
                gap-2
                bg-white
                text-[#a53400]
                px-6
                py-3
                rounded-full
                font-bold
                hover:bg-blue-50
                hover:scale-105
                transition-all
                duration-300
                shadow-lg
              "
            >
              Plan Exhibition Travel

              <FaArrowRight />

            </a>

          </div>

        </Reveal>

      </div>

    </section>
  );
}