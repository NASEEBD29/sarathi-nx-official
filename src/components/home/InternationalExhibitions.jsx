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

// =====================================================
// EXHIBITION IMAGES
// =====================================================

import cmefImage from "../../assets/images/exhibitions/cmef.jpg";
import medicaImage from "../../assets/images/exhibitions/medica.jpg";
import arabHealthImage from "../../assets/images/exhibitions/arabHealth.jpg";
import weldingImage from "../../assets/images/exhibitions/welding.jpg";
import medlabImage from "../../assets/images/exhibitions/medlab.jpg";
import cantonFairImage from "../../assets/images/exhibitions/cantonFair.jpg";
import itmaImage from "../../assets/images/exhibitions/itma.jpg";

// =====================================================
// EXHIBITION DATA
// =====================================================

const exhibitions = [
  {
    title: "CMEF",
    description:
      "China International Medical Equipment Fair connecting global healthcare technology and medical equipment leaders.",
    location: "Shanghai & Beijing, China",
    image: cmefImage,
    link: "https://www.cmef.com.cn/en",
  },

  {
    title: "MEDICA",
    description:
      "World's leading trade fair for the medical sector, bringing together healthcare professionals and innovators.",
    location: "Düsseldorf, Germany",
    image: medicaImage,
    link: "https://www.medica-tradefair.com/",
  },

  {
    title: "ARAB HEALTH",
    description:
      "One of the largest healthcare exhibitions in the Middle East featuring global medical technology and solutions.",
    location: "Dubai, UAE",
    image: arabHealthImage,
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
  },

  {
    title: "WELDING & CUTTING",
    description:
      "Beijing Essen Welding & Cutting Fair showcasing advanced welding, cutting and industrial technologies.",
    location: "Beijing, China",
    image: weldingImage,
    link: "#",
  },

  {
    title: "MEDLAB",
    description:
      "A leading laboratory and diagnostics exhibition connecting professionals with the latest healthcare technologies.",
    location: "Dubai, UAE",
    image: medlabImage,
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
  },

  {
    title: "CANTON FAIR",
    description:
      "China Import & Export Fair connecting international buyers with manufacturers and suppliers from China.",
    location: "Guangzhou, China",
    image: cantonFairImage,
    link: "#",
  },

  {
    title: "ITMA ASIA + CITME",
    description:
      "Asia's leading textile machinery exhibition showcasing innovative textile and garment manufacturing technologies.",
    location: "Shanghai, China",
    image: itmaImage,
    link: "#",
  },
];

// =====================================================
// COMPONENT
// =====================================================

export default function InternationalExhibitions() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // ===================================================
  // NEXT
  // ===================================================

  const handleNext = () => {
    setDirection(1);

    setStartIndex(
      (prev) => (prev + 1) % exhibitions.length
    );
  };

  // ===================================================
  // PREVIOUS
  // ===================================================

  const handlePrevious = () => {
    setDirection(-1);

    setStartIndex(
      (prev) =>
        (prev - 1 + exhibitions.length) %
        exhibitions.length
    );
  };

  // ===================================================
  // AUTO SLIDER
  // ===================================================

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // ===================================================
  // 3 VISIBLE CARDS
  // ===================================================

  const visibleCards = [
    exhibitions[startIndex % exhibitions.length],

    exhibitions[
      (startIndex + 1) % exhibitions.length
    ],

    exhibitions[
      (startIndex + 2) % exhibitions.length
    ],
  ];

  // ===================================================
  // SLIDE ANIMATION
  // ===================================================

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 420 : -420,
      opacity: 0,
      scale: 0.95,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? -420 : 420,
      opacity: 0,
      scale: 0.95,
    }),
  };

  // ===================================================
  // RETURN
  // ===================================================

  return (
    <section
      id="exhibitions"
      className="
        relative
        py-16
        md:py-20
        bg-gradient-to-b
        from-white
        via-[#F8FBFF]
        to-white
        overflow-hidden
      "
    >
      {/* =================================================
          DECORATIVE BACKGROUND
      ================================================== */}

      <div
        className="
          absolute
          top-10
          -left-24
          w-72
          h-72
          bg-[#0057B8]/5
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-10
          -right-24
          w-72
          h-72
          bg-[#fc6602]/5
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* =================================================
            SECTION HEADING
        ================================================== */}

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
      International Exhibitions
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
    Your Gateway to{" "}

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
      Global Exhibitions
    </span>
  </h2>
</Reveal>

{/* DESCRIPTION */}
<Reveal delay={0.1}>
  <p
    className="
      text-center
      max-w-3xl
      mx-auto
      mt-5
      text-gray-600
      leading-7
      text-sm
      md:text-base
    "
  >
    Discover leading international exhibitions and trade fairs
    with complete travel assistance from Sarathi NX. We make
    your business journey simple, comfortable and stress-free.
  </p>
</Reveal>

        {/* =================================================
            CAROUSEL
        ================================================== */}

        <div className="relative">

          {/* =================================================
              LEFT DESKTOP ARROW
          ================================================== */}

          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous exhibitions"
            className="
              hidden
              lg:flex
              absolute
              -left-6
              top-1/2
              -translate-y-1/2
              z-30
              w-12
              h-12
              rounded-full
              bg-white
              text-[#0057B8]
              shadow-xl
              border
              border-gray-100
              items-center
              justify-center
              hover:bg-gradient-to-r
              hover:from-[#0057B8]
              hover:via-[#0057B8]
              hover:to-[#fc6602]
              hover:text-white
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaChevronLeft />
          </button>

          {/* =================================================
              CARD VIEWPORT
          ================================================== */}

          <div
            className="
              relative
              overflow-hidden
              px-1
              py-4
            "
          >
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

                {/* =================================================
                    CARDS
                ================================================== */}

                {visibleCards.map((item, index) => (
                  <motion.div
                    key={`${item.title}-${startIndex}-${index}`}
                    whileHover={{
                      y: -10,
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
                      shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                      hover:shadow-[0_25px_55px_rgba(0,87,184,0.18)]
                      overflow-hidden
                      flex
                      flex-col
                      transition-all
                      duration-500
                    "
                  >

                    {/* =================================================
                        TOP GRADIENT LINE
                    ================================================== */}

                    <div
                      className="
                        absolute
                        top-0
                        left-0
                        right-0
                        h-1.5
                        z-30
                        bg-gradient-to-r
                        from-[#0057B8]
                        via-[#0057B8]
                        to-[#fc6602]
                      "
                    />

                    {/* =================================================
                        IMAGE AREA
                    ================================================== */}

                    <div
                      className="
                        relative
                        h-[205px]
                        overflow-hidden
                      "
                    >

                      {/* Image */}

                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-110
                        "
                      />

                      {/* Dark Gradient */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/75
                          via-black/20
                          to-transparent
                        "
                      />

                      {/* Blue + Orange Overlay */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-tr
                          from-[#0057B8]/20
                          via-transparent
                          to-[#fc6602]/20
                          opacity-70
                        "
                      />

                      {/* =================================================
                          LOCATION BADGE
                      ================================================== */}

                      <div
                        className="
                          absolute
                          bottom-4
                          left-4
                          right-4
                          flex
                          items-center
                          gap-2
                          text-white
                          text-xs
                          md:text-sm
                          font-semibold
                        "
                      >
                        <div
                          className="
                            w-8
                            h-8
                            rounded-full
                            bg-white/20
                            backdrop-blur-md
                            border
                            border-white/30
                            flex
                            items-center
                            justify-center
                            shrink-0
                          "
                        >
                          <FaMapMarkerAlt />
                        </div>

                        <span className="drop-shadow-md">
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                        CARD CONTENT
                    ================================================== */}

                    <div
                      className="
                        relative
                        p-6
                        md:p-7
                        flex
                        flex-col
                        flex-1
                      "
                    >

                      {/* Decorative background */}

                      <div
                        className="
                          absolute
                          -right-10
                          -bottom-10
                          w-32
                          h-32
                          rounded-full
                          bg-[#F1F7FF]
                          group-hover:bg-[#E8F1FF]
                          transition-colors
                          duration-500
                          pointer-events-none
                        "
                      />

                      <div className="relative z-10">

                        {/* =================================================
                            SMALL LABEL
                        ================================================== */}

                        <div
                          className="
                            inline-flex
                            items-center
                            gap-2
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[1.5px]
                            text-[#0057B8]
                            mb-2
                          "
                        >
                          <span
                            className="
                              w-5
                              h-[2px]
                              bg-gradient-to-r
                              from-[#0057B8]
                              to-[#fc6602]
                              rounded-full
                            "
                          />

                          International Event
                        </div>

                        {/* =================================================
                            TITLE
                        ================================================== */}

                        <h3
                          className="
                            text-xl
                            md:text-2xl
                            font-extrabold
                            text-gray-800
                            leading-tight
                            group-hover:text-[#0057B8]
                            transition-colors
                            duration-300
                          "
                        >
                          {item.title}
                        </h3>

                        {/* =================================================
                            DESCRIPTION
                        ================================================== */}

                        <p
                          className="
                            mt-3
                            text-gray-600
                            text-sm
                            leading-6
                            line-clamp-3
                          "
                        >
                          {item.description}
                        </p>
                      </div>

                      {/* =================================================
                          BOTTOM
                      ================================================== */}

                      <div
                        className="
                          relative
                          z-10
                          mt-auto
                          pt-6
                          flex
                          items-center
                          justify-between
                          gap-3
                        "
                      >

                        {/* Event */}

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

                          <span>
                            Global Exhibition
                          </span>
                        </div>

                        {/* =================================================
                            EXPLORE BUTTON - EVERY CARD
                        ================================================== */}

                        <a
                          href={item.link}
                          target={
                            item.link !== "#"
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.link !== "#"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          onClick={(e) => {
                            if (item.link === "#") {
                              e.preventDefault();
                            }
                          }}
                          className="
                            group/explore
                            shrink-0
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-2.5
                            rounded-full
                            bg-gradient-to-r
                            from-[#0057B8]
                            via-[#0057B8]
                            to-[#fc6602]
                            text-white
                            font-bold
                            text-xs
                            shadow-md
                            hover:shadow-xl
                            hover:scale-105
                            transition-all
                            duration-300
                          "
                        >
                          Explore

                          <FaArrowRight
                            className="
                              text-[10px]
                              transition-transform
                              duration-300
                              group-hover/explore:translate-x-1
                            "
                          />
                        </a>

                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =================================================
              RIGHT DESKTOP ARROW
          ================================================== */}

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next exhibitions"
            className="
              hidden
              lg:flex
              absolute
              -right-6
              top-1/2
              -translate-y-1/2
              z-30
              w-12
              h-12
              rounded-full
              bg-white
              text-[#0057B8]
              shadow-xl
              border
              border-gray-100
              items-center
              justify-center
              hover:bg-gradient-to-r
              hover:from-[#0057B8]
              hover:via-[#0057B8]
              hover:to-[#fc6602]
              hover:text-white
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaChevronRight />
          </button>
        </div>

        {/* =================================================
            MOBILE ARROWS
        ================================================== */}

        <div
          className="
            flex
            lg:hidden
            justify-center
            gap-3
            mt-5
          "
        >
          <button
            type="button"
            onClick={handlePrevious}
            className="
              w-11
              h-11
              rounded-full
              bg-white
              text-[#0057B8]
              border
              border-gray-200
              shadow-md
              flex
              items-center
              justify-center
              hover:bg-gradient-to-r
              hover:from-[#0057B8]
              hover:via-[#0057B8]
              hover:to-[#fc6602]
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
              w-11
              h-11
              rounded-full
              bg-white
              text-[#0057B8]
              border
              border-gray-200
              shadow-md
              flex
              items-center
              justify-center
              hover:bg-gradient-to-r
              hover:from-[#0057B8]
              hover:via-[#0057B8]
              hover:to-[#fc6602]
              hover:text-white
              transition-all
            "
          >
            <FaChevronRight />
          </button>
        </div>

        {/* =================================================
            DOTS
        ================================================== */}

        <div
          className="
            flex
            justify-center
            gap-2
            mt-5
          "
        >
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
                    ? `
                      w-8
                      bg-gradient-to-r
                      from-[#0057B8]
                      via-[#0057B8]
                      to-[#fc6602]
                    `
                    : `
                      w-2
                      bg-gray-300
                      hover:bg-[#0057B8]
                    `
                }
              `}
            />
          ))}
        </div>

        {/* =================================================
            CTA
        ================================================== */}

        <Reveal delay={0.3}>
          <div
            className="
              mt-10
              rounded-3xl
              bg-gradient-to-r
              from-[#0057B8]
              via-[#0057B8]
              to-[#fc6602]
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

            {/* Decorative circles */}

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

            <div
              className="
                absolute
                -left-20
                -bottom-20
                w-40
                h-40
                rounded-full
                bg-white/10
              "
            />

            {/* CTA Content */}

            <div className="relative z-10">

              <div className="flex items-center gap-2">

                <FaPlaneDeparture className="text-blue-100" />

                <p
                  className="
                    text-blue-100
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

              <p className="text-blue-50 mt-1 text-sm">
                Let Sarathi NX manage your complete travel requirements.
              </p>
            </div>

            {/* CTA Button */}

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
                text-[#0057B8]
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