import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaGlobeAsia,
  FaHeartbeat,
  FaCapsules,
  FaIndustry,
  FaCar,
  FaCogs,
  FaMicrochip,
  FaUtensils,
  FaSolarPanel,
} from "react-icons/fa";

import Reveal from "../common/Reveal";

// =====================================================
// INDUSTRY IMAGES
// =====================================================

import healthcareImage from "../../assets/images/industries/healthcare.jpg";
import pharmaceuticalImage from "../../assets/images/industries/pharmaceutical.jpg";
import textileImage from "../../assets/images/industries/textile.jpg";
import automotiveImage from "../../assets/images/industries/automotive.jpg";
import engineeringImage from "../../assets/images/industries/engineering.jpg";
import electronicsImage from "../../assets/images/industries/electronics.jpg";
import foodBeverageImage from "../../assets/images/industries/foodBeverage.jpg";
import renewableEnergyImage from "../../assets/images/industries/renewableEnergy.jpg";

// =====================================================
// INDUSTRIES DATA
// =====================================================

const industries = [
  {
    title: "Healthcare & Medical",
    description:
      "Travel solutions for healthcare professionals, medical companies and global healthcare exhibitions.",
    image: healthcareImage,
    icon: FaHeartbeat,
  },

  {
    title: "Pharmaceuticals",
    description:
      "Complete business travel assistance for pharmaceutical companies and industry professionals.",
    image: pharmaceuticalImage,
    icon: FaCapsules,
  },

  {
    title: "Textile & Garments",
    description:
      "Specialized travel support for textile manufacturers, garment businesses and textile machinery companies.",
    image: textileImage,
    icon: FaIndustry,
  },

  {
    title: "Automotive",
    description:
      "Business travel solutions for automotive manufacturers, suppliers and mobility professionals.",
    image: automotiveImage,
    icon: FaCar,
  },

  {
    title: "Engineering & Manufacturing",
    description:
      "Global travel assistance for engineering companies, manufacturers and industrial technology businesses.",
    image: engineeringImage,
    icon: FaCogs,
  },

  {
    title: "Electronics & Technology",
    description:
      "Travel support for technology companies, electronics manufacturers and innovation-driven businesses.",
    image: electronicsImage,
    icon: FaMicrochip,
  },

  {
    title: "Food & Beverage",
    description:
      "International travel solutions for food manufacturers, beverage companies and industry professionals.",
    image: foodBeverageImage,
    icon: FaUtensils,
  },

  {
    title: "Energy & Renewable",
    description:
      "Business travel support for renewable energy, solar, wind and energy technology companies.",
    image: renewableEnergyImage,
    icon: FaSolarPanel,
  },
];

// =====================================================
// COMPONENT
// =====================================================

export default function IndustriesWeServe() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // ===================================================
  // NEXT
  // ===================================================

  const handleNext = () => {
    setDirection(1);

    setStartIndex(
      (prev) => (prev + 1) % industries.length
    );
  };

  // ===================================================
  // PREVIOUS
  // ===================================================

  const handlePrevious = () => {
    setDirection(-1);

    setStartIndex(
      (prev) =>
        (prev - 1 + industries.length) %
        industries.length
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
    industries[startIndex % industries.length],

    industries[
      (startIndex + 1) % industries.length
    ],

    industries[
      (startIndex + 2) % industries.length
    ],
  ];

  // ===================================================
  // CARD ANIMATION
  // ===================================================

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
      id="industries"
      className="
        relative
        py-16
        md:py-20
        bg-white
        overflow-hidden
      "
    >
      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div
        className="
          absolute
          -top-24
          -left-24
          w-80
          h-80
          rounded-full
          bg-[#0057B8]/5
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-24
          -right-24
          w-80
          h-80
          rounded-full
          bg-[#fc6602]/5
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <Reveal>
          <div
            className="
              text-center
              max-w-4xl
              mx-auto
              mb-11
            "
          >

            {/* Eyebrow */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-[#FFF2EA]
                text-[#fc6602]
                text-xs
                md:text-sm
                font-bold
                uppercase
                tracking-[2px]
              "
            >
              <FaGlobeAsia />

              Industries We Serve
            </div>

            {/* Heading */}

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                text-gray-800
                mt-4
                leading-tight
              "
            >
              Travel Solutions For

              <span
                className="
                  block
                  mt-1
                  bg-gradient-to-r
                  from-[#fc6602]
                  via-[#fc6602]
                  to-[#0057B8]
                  bg-clip-text
                  text-transparent
                "
              >
                Every Industry
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-4
                text-gray-600
                max-w-3xl
                mx-auto
                leading-7
                text-sm
                md:text-base
              "
            >
              From healthcare and pharmaceuticals to
              manufacturing and technology, Sarathi NX
              provides reliable business travel solutions
              for professionals across diverse industries.
            </p>
          </div>
        </Reveal>

        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div className="relative">

          {/* =================================================
              LEFT ARROW
          ================================================= */}

          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous industries"
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
              hover:bg-[#0057B8]
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
          ================================================= */}

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
                    INDUSTRY CARDS
                ================================================= */}

                {visibleCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
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
                        h-[390px]
                        rounded-3xl
                        overflow-hidden
                        bg-gray-900
                        shadow-[0_12px_40px_rgba(0,0,0,0.10)]
                        hover:shadow-[0_25px_60px_rgba(0,87,184,0.20)]
                        transition-shadow
                        duration-500
                      "
                    >

                      {/* =================================================
                          IMAGE
                      ================================================= */}

                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          absolute
                          inset-0
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-110
                        "
                      />

                      {/* =================================================
                          DARK OVERLAY
                      ================================================= */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/90
                          via-black/45
                          to-black/5
                        "
                      />

                      {/* =================================================
                          BRAND GRADIENT OVERLAY
                      ================================================= */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-br
                          from-[#0057B8]/20
                          via-transparent
                          to-[#fc6602]/30
                          opacity-80
                          group-hover:opacity-100
                          transition-opacity
                          duration-500
                        "
                      />

                      {/* =================================================
                          TOP GRADIENT LINE
                      ================================================= */}

                      <div
                        className="
                          absolute
                          top-0
                          left-0
                          right-0
                          h-1.5
                          bg-gradient-to-r
                          from-[#fc6602]
                          via-[#fc6602]
                          to-[#0057B8]
                          z-20
                        "
                      />

                      {/* =================================================
                          NUMBER
                      ================================================= */}

                      <div
                        className="
                          absolute
                          top-5
                          right-5
                          z-20
                          w-11
                          h-11
                          rounded-2xl
                          bg-white/15
                          backdrop-blur-md
                          border
                          border-white/25
                          text-white
                          flex
                          items-center
                          justify-center
                          font-black
                          text-sm
                          group-hover:bg-[#fc6602]
                          group-hover:border-[#fc6602]
                          transition-all
                          duration-500
                        "
                      >
                        {String(
                          (startIndex + index) %
                            industries.length +
                            1
                        ).padStart(2, "0")}
                      </div>

                      {/* =================================================
                          CONTENT
                      ================================================= */}

                      <div
                        className="
                          absolute
                          inset-x-0
                          bottom-0
                          p-6
                          md:p-7
                          z-20
                        "
                      >

                        {/* ICON */}

                        <motion.div
                          whileHover={{
                            rotate: 8,
                            scale: 1.08,
                          }}
                          className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-white/15
                            backdrop-blur-md
                            border
                            border-white/25
                            text-white
                            flex
                            items-center
                            justify-center
                            text-xl
                            mb-4
                            group-hover:bg-[#fc6602]
                            group-hover:border-[#fc6602]
                            transition-all
                            duration-500
                          "
                        >
                          <Icon />
                        </motion.div>

                        {/* TITLE */}

                        <h3
                          className="
                            text-xl
                            md:text-2xl
                            font-extrabold
                            text-white
                            leading-tight
                          "
                        >
                          {item.title}
                        </h3>

                        {/* DESCRIPTION */}

                        <p
                          className="
                            mt-2
                            text-white/80
                            text-sm
                            leading-6
                            line-clamp-2
                          "
                        >
                          {item.description}
                        </p>

                        {/* BUTTON */}

                        <div className="mt-5">

                          <a
                            href="#contact"
                            className="
                              inline-flex
                              items-center
                              gap-2
                              px-5
                              py-2.5
                              rounded-full
                              bg-white
                              text-[#0057B8]
                              font-bold
                              text-xs
                              shadow-lg
                              hover:bg-gradient-to-r
                              hover:from-[#fc6602]
                              hover:to-[#0057B8]
                              hover:text-white
                              hover:scale-105
                              transition-all
                              duration-300
                            "
                          >
                            Explore Industry

                            <FaArrowRight
                              className="
                                text-[10px]
                                group-hover:translate-x-1
                                transition-transform
                              "
                            />
                          </a>

                        </div>
                      </div>

                      {/* =================================================
                          HOVER BORDER
                      ================================================= */}

                      <div
                        className="
                          absolute
                          inset-0
                          rounded-3xl
                          border-2
                          border-transparent
                          group-hover:border-white/20
                          transition-all
                          duration-500
                          pointer-events-none
                        "
                      />

                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =================================================
              RIGHT ARROW
          ================================================= */}

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next industries"
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
              hover:bg-[#0057B8]
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
        ================================================= */}

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
              hover:bg-[#0057B8]
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
              hover:bg-[#0057B8]
              hover:text-white
              transition-all
            "
          >
            <FaChevronRight />
          </button>
        </div>

        {/* =================================================
            DOTS
        ================================================= */}

        <div
          className="
            flex
            justify-center
            gap-2
            mt-5
          "
        >
          {industries.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setDirection(
                  index >= startIndex ? 1 : -1
                );

                setStartIndex(index);
              }}
              aria-label={`Go to industry ${index + 1}`}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  startIndex === index
                    ? "w-8 bg-gradient-to-r from-[#fc6602] to-[#0057B8]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }
              `}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

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

            <div
              className="
                absolute
                -left-16
                -bottom-16
                w-36
                h-36
                rounded-full
                bg-white/10
              "
            />

            {/* CTA TEXT */}

            <div className="relative z-10">

              <div className="flex items-center gap-2">

                <FaGlobeAsia className="text-blue-100" />

                <p
                  className="
                    text-blue-100
                    uppercase
                    tracking-[2px]
                    text-xs
                    font-bold
                  "
                >
                  Global Business Travel
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
                Your Industry. Our Global Travel Expertise.
              </h3>

              <p className="text-blue-50 mt-1 text-sm">
                Let Sarathi NX take care of your business travel requirements.
              </p>
            </div>

            {/* CTA BUTTON */}

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
              Talk To Our Experts

              <FaArrowRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}