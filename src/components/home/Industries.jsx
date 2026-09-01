import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaGlobeAsia,
  FaHeartbeat,
  FaUtensils,
  FaCar,
  FaCogs,
  FaMicrochip,
  FaSolarPanel,
  FaLaptopCode,
  FaHardHat,
  FaPaintBrush,
  FaTshirt,
  FaCouch,
  FaGem,
  FaPlaneDeparture,
  FaTruck,
  FaLeaf,
  FaGraduationCap,
  FaEye,
  FaIndustry,
} from "react-icons/fa";

import Reveal from "../common/Reveal";

// =====================================================
// INDUSTRY IMAGES
// =====================================================

import healthcareImage from "../../assets/images/industries/healthcare.jpg";
import textileImage from "../../assets/images/industries/textile.jpg";
import automotiveImage from "../../assets/images/industries/automotive.jpg";
import electronicsImage from "../../assets/images/industries/electronics.jpg";
import renewableEnergyImage from "../../assets/images/industries/renewableEnergy.jpg";

import agricultureImage from "../../assets/images/industries/agriculture.jpg";
import beautyCosmeticsImage from "../../assets/images/industries/beautyCosmetics.jpg";
import construction from "../../assets/images/industries/construction.jpg";
import industrialManufacturingImage from "../../assets/images/industries/industrialManufacturing.jpg";
import technologyAI from "../../assets/images/industries/technologyAI.jpg";
import metalSteelImage from "../../assets/images/industries/metalSteel.jpg";
import packagingPrintingImage from "../../assets/images/industries/packagingPrinting.jpg";
import furnitureInteriorImage from "../../assets/images/industries/furnitureInterior.jpg";
import jewelleryImage from "../../assets/images/industries/jewellery.jpg";
import tourismHospitalityImage from "../../assets/images/industries/tourismHospitality.jpg";
import logisticsTransportationImage from "../../assets/images/industries/logisticsTransportation.jpg";
import environmentGreenTechImage from "../../assets/images/industries/environmentGreenTech.jpg";
import plasticsRubberImage from "../../assets/images/industries/plasticsRubber.jpg";
import educationBusinessImage from "../../assets/images/industries/educationBusiness.jpg";
import opticsPrecisionImage from "../../assets/images/industries/opticsPrecision.jpg";

// =====================================================
// INDUSTRIES DATA
// =====================================================

const industries = [
  {
    title: "Medical, Healthcare & Pharmaceuticals",
    image: healthcareImage,
    icon: FaHeartbeat,
  },

  {
    title: "Agriculture, Food & Beverage",
    image: agricultureImage,
    icon: FaUtensils,
  },

  {
    title: "Automotive & Mobility",
    image: automotiveImage,
    icon: FaCar,
  },

  {
    title: "Beauty, Cosmetics & Personal Care",
    image: beautyCosmeticsImage,
    icon: FaPaintBrush,
  },

  {
    title: "Construction, Building & Architecture",
    image: construction,
    icon: FaHardHat,
  },

  {
    title: "Industrial Manufacturing & Machinery",
    image: industrialManufacturingImage,
    icon: FaIndustry,
  },

  {
    title: "Electronics, Electrical & Semiconductors",
    image: electronicsImage,
    icon: FaMicrochip,
  },

  {
    title: "Information Technology & AI",
    image: technologyAI,
    icon: FaLaptopCode,
  },

  {
    title: "Energy & Renewable Energy",
    image: renewableEnergyImage,
    icon: FaSolarPanel,
  },

  {
    title: "Metal, Steel & Engineering",
    image: metalSteelImage,
    icon: FaCogs,
  },

  {
    title: "Packaging, Printing & Publishing",
    image: packagingPrintingImage,
    icon: FaIndustry,
  },

  {
    title: "Textiles, Apparel & Fashion",
    image: textileImage,
    icon: FaTshirt,
  },

  {
    title: "Furniture, Interior & Home Living",
    image: furnitureInteriorImage,
    icon: FaCouch,
  },

  {
    title: "Jewellery, Watches & Gifts",
    image: jewelleryImage,
    icon: FaGem,
  },

  {
    title: "Tourism, Hospitality & Leisure",
    image: tourismHospitalityImage,
    icon: FaPlaneDeparture,
  },

  {
    title: "Logistics & Transportation",
    image: logisticsTransportationImage,
    icon: FaTruck,
  },

  {
    title: "Environment & Green Technology",
    image: environmentGreenTechImage,
    icon: FaLeaf,
  },

  {
    title: "Plastics, Rubber & Materials",
    image: plasticsRubberImage,
    icon: FaIndustry,
  },

  {
    title: "Education, Licensing & Business Services",
    image: educationBusinessImage,
    icon: FaGraduationCap,
  },

  {
    title: "Optics & Precision Technology",
    image: opticsPrecisionImage,
    icon: FaEye,
  },
];

// =====================================================
// COMPONENT
// =====================================================

export default function IndustriesWeServe() {
  const [paused, setPaused] = useState(false);

  // Duplicate cards for seamless infinite flow
  const carouselIndustries = [
    ...industries,
    ...industries,
  ];

  return (
    <section
      id="industries"
      className="
        relative
        pt-10
        sm:pt-11
        md:pt-12
        lg:pt-12
        pb-14
        sm:pb-16
        md:pb-20
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
          w-64
          h-64
          sm:w-72
          sm:h-72
          md:w-80
          md:h-80
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
          w-64
          h-64
          sm:w-72
          sm:h-72
          md:w-80
          md:h-80
          rounded-full
          bg-[#F16A24]/5
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative">

        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <Reveal>
          <div
            className="
              flex
              items-center
              justify-center
              gap-[6px]
              sm:gap-[8px]
              md:gap-[10px]
              mb-[7px]
              px-4
            "
          >

            <span
              className="
                block
                w-[28px]
                sm:w-[38px]
                md:w-[49px]
                h-[2px]
                bg-gradient-to-r
                from-[#0057B8]
                to-[#F16A24]
                shrink-0
              "
            />

            <span
              className="
                text-[10px]
                sm:text-[11px]
                md:text-[13px]
                font-bold
                tracking-[2px]
                sm:tracking-[2.5px]
                md:tracking-[3px]
                uppercase
                leading-none
                text-center
                bg-gradient-to-r
                from-[#0057B8]
                via-[#0057B8]
                to-[#F16A24]
                bg-clip-text
                text-transparent
              "
            >
              Industries We Serve
            </span>

            <span
              className="
                block
                w-[28px]
                sm:w-[38px]
                md:w-[49px]
                h-[2px]
                bg-gradient-to-r
                from-[#F16A24]
                to-[#0057B8]
                shrink-0
              "
            />

          </div>
        </Reveal>

        {/* =================================================
            HEADING
        ================================================= */}

        <Reveal delay={0.05}>
          <h2
            className="
              text-center
              font-extrabold
              tracking-[-1px]
              sm:tracking-[-1.3px]
              md:tracking-[-1.8px]
              leading-[1.05]
              text-[32px]
              sm:text-[40px]
              md:text-[48px]
              lg:text-[58px]
              px-4
              text-[#071B41]
            "
          >
            Travel Solutions For{" "}

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
              Every Industry.
            </span>
          </h2>
        </Reveal>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <Reveal delay={0.1}>
          <p
            className="
              text-center
              max-w-3xl
              mx-auto
              mt-4
              sm:mt-5
              px-5
              sm:px-6
              text-gray-600
              leading-6
              sm:leading-7
              text-xs
              sm:text-sm
              md:text-base
            "
          >
            From healthcare and pharmaceuticals to manufacturing
            and technology, Sarathi NX provides reliable business
            travel solutions for professionals across diverse
            industries.
          </p>
        </Reveal>

        {/* =================================================
            INFINITE INDUSTRY FLOW
        ================================================= */}

        <div
          className="
            relative
            mt-8
            sm:mt-10
            md:mt-12
            overflow-hidden
            w-full
          "
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* LEFT FADE */}

          <div
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-10
              sm:w-16
              md:w-28
              bg-gradient-to-r
              from-white
              to-transparent
              z-20
              pointer-events-none
            "
          />

          {/* RIGHT FADE */}

          <div
            className="
              absolute
              right-0
              top-0
              bottom-0
              w-10
              sm:w-16
              md:w-28
              bg-gradient-to-l
              from-white
              to-transparent
              z-20
              pointer-events-none
            "
          />

          {/* =================================================
              MOVING TRACK
          ================================================= */}

          <motion.div
            className="
              flex
              gap-3
              sm:gap-4
              md:gap-5
              w-max
              px-3
              sm:px-4
            "
            animate={{
              x: paused ? undefined : ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 55,
                ease: "linear",
                repeat: Infinity,
              },
            }}
          >

            {carouselIndustries.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  whileHover={{
                    y: -7,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    relative
                    shrink-0

                    w-[220px]
                    sm:w-[250px]
                    md:w-[280px]
                    lg:w-[300px]

                    h-[250px]
                    sm:h-[260px]
                    md:h-[275px]

                    rounded-[20px]
                    md:rounded-[22px]

                    overflow-hidden
                    bg-gray-900

                    shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                    hover:shadow-[0_20px_45px_rgba(0,87,184,0.20)]

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
                      via-black/40
                      to-black/5
                    "
                  />

                  {/* =================================================
                      BRAND OVERLAY
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-[#0057B8]/20
                      via-transparent
                      to-[#F16A24]/30
                      opacity-80
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />

                  {/* =================================================
                      TOP LINE
                  ================================================= */}

                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      h-1
                      bg-gradient-to-r
                      from-[#0057B8]
                      via-[#1454D8]
                      to-[#F16A24]
                      z-20
                    "
                  />

                  {/* =================================================
                      ICON
                  ================================================= */}

                  <div
                    className="
                      absolute
                      top-3
                      right-3
                      sm:top-4
                      sm:right-4

                      w-9
                      h-9
                      sm:w-10
                      sm:h-10

                      rounded-full
                      bg-white/90
                      backdrop-blur-sm
                      flex
                      items-center
                      justify-center
                      text-[#0057B8]
                      shadow-lg
                      z-20
                      group-hover:scale-110
                      group-hover:text-[#F16A24]
                      transition-all
                      duration-300
                    "
                  >
                    <Icon className="text-sm sm:text-base" />
                  </div>

                  {/* =================================================
                      CARD CONTENT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      p-4
                      sm:p-5
                      z-20
                    "
                  >

                    <h3
                      className="
                        text-base
                        sm:text-lg
                        md:text-xl
                        font-extrabold
                        text-white
                        leading-[1.15]
                        max-w-[240px]
                      "
                    >
                      {item.title}
                    </h3>

                    <div
                      className="
                        mt-2
                        sm:mt-3
                        w-10
                        h-[2px]
                        bg-gradient-to-r
                        from-[#0057B8]
                        to-[#F16A24]
                        group-hover:w-16
                        transition-all
                        duration-300
                      "
                    />

                    <a
                      href="#contact"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        mt-2
                        sm:mt-3
                        text-white/90
                        text-[11px]
                        sm:text-xs
                        font-bold
                        hover:text-white
                        transition-colors
                      "
                    >
                      Explore Industry

                      <FaArrowRight
                        className="
                          text-[9px]
                          sm:text-[10px]
                          group-hover:translate-x-1
                          transition-transform
                        "
                      />
                    </a>

                  </div>

                  {/* =================================================
                      BORDER
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-[20px]
                      md:rounded-[22px]
                      border
                      border-white/20
                      group-hover:border-white/50
                      transition-all
                      duration-500
                      pointer-events-none
                    "
                  />

                </motion.div>
              );
            })}

          </motion.div>
        </div>

        {/* =================================================
            FLOW INDICATOR
        ================================================= */}

        <Reveal delay={0.2}>
          <div className="flex justify-center mt-6 sm:mt-7 px-4">

            <div
              className="
                flex
                items-center
                gap-2
                px-3
                sm:px-4
                py-2
                rounded-full
                bg-[#071B41]/5
                text-[#071B41]
                text-[9px]
                sm:text-[11px]
                font-bold
                uppercase
                tracking-[1.5px]
                sm:tracking-[2px]
                text-center
              "
            >
              <FaGlobeAsia className="text-[#0057B8] shrink-0" />

              Connecting Industries Globally

            </div>

          </div>
        </Reveal>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <Reveal delay={0.3}>

          <div
            className="
              max-w-7xl
              mx-auto

              mt-8
              sm:mt-9
              md:mt-10

              mx-4
              sm:mx-5
              md:mx-8

              rounded-2xl
              sm:rounded-3xl

              bg-gradient-to-r
              from-[#0057B8]
              via-[#0057B8]
              to-[#F16A24]

              px-5
              sm:px-6
              md:px-10

              py-6
              sm:py-7
              md:py-8

              text-white

              flex
              flex-col
              md:flex-row

              items-center
              md:items-center

              justify-between

              gap-5

              shadow-xl
              overflow-hidden
              relative
            "
          >

            {/* DECORATIVE CIRCLES */}

            <div
              className="
                absolute
                -right-16
                -top-16
                w-36
                h-36
                sm:w-40
                sm:h-40
                rounded-full
                bg-white/10
              "
            />

            <div
              className="
                absolute
                -left-16
                -bottom-16
                w-32
                h-32
                sm:w-36
                sm:h-36
                rounded-full
                bg-white/10
              "
            />

            {/* CTA TEXT */}

            <div
              className="
                relative
                z-10
                text-center
                md:text-left
              "
            >

              <div className="flex items-center justify-center md:justify-start gap-2">

                <FaGlobeAsia className="text-blue-100" />

                <p
                  className="
                    text-blue-100
                    uppercase
                    tracking-[1.5px]
                    sm:tracking-[2px]
                    text-[10px]
                    sm:text-xs
                    font-bold
                  "
                >
                  Global Business Travel
                </p>

              </div>

              <h3
                className="
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-extrabold
                  mt-2
                  leading-tight
                "
              >
                Your Industry. Our Global Travel Expertise.
              </h3>

              <p className="text-blue-50 mt-1 text-xs sm:text-sm">
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

                px-5
                sm:px-6

                py-2.5
                sm:py-3

                rounded-full

                font-bold
                text-xs
                sm:text-sm

                hover:bg-gradient-to-r
                hover:from-[#0057B8]
                hover:via-[#0057B8]
                hover:to-[#F16A24]

                hover:text-white
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