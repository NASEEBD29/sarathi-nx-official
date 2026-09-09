import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaMapMarkerAlt,
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
import otherInternationalTradeFairsImage from "../../assets/images/exhibitions/otherInternationalTradeFairs.jpg";

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
    external: true,
  },

  {
    title: "MEDICA",
    description:
      "World's leading trade fair for the medical sector, bringing together healthcare professionals and innovators.",
    location: "Düsseldorf, Germany",
    image: medicaImage,
    link: "https://www.medica-tradefair.com/",
    external: true,
  },

  {
    title: "ARAB HEALTH",
    description:
      "One of the largest healthcare exhibitions in the Middle East featuring global medical technology and solutions.",
    location: "Dubai, UAE",
    image: arabHealthImage,
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
    external: true,
  },

  {
    title: "WELDING & CUTTING",
    description:
      "Beijing Essen Welding & Cutting Fair showcasing advanced welding, cutting and industrial technologies.",
    location: "Beijing, China",
    image: weldingImage,
    link: "#",
    external: false,
  },

  {
    title: "MEDLAB",
    description:
      "A leading laboratory and diagnostics exhibition connecting professionals with the latest healthcare technologies.",
    location: "Dubai, UAE",
    image: medlabImage,
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
    external: true,
  },

  {
    title: "CANTON FAIR",
    description:
      "China Import & Export Fair connecting international buyers with manufacturers and suppliers from China.",
    location: "Guangzhou, China",
    image: cantonFairImage,
    link: "#",
    external: false,
  },

  {
    title: "ITMA ASIA + CITME",
    description:
      "Asia's leading textile machinery exhibition showcasing innovative textile and garment manufacturing technologies.",
    location: "Shanghai, China",
    image: itmaImage,
    link: "#",
    external: false,
  },

  {
    title: "OTHER INTERNATIONAL TRADE FAIRS",
    description:
      "We manage travel for various international exhibitions worldwide.",
    location: "International Exhibitions Worldwide",
    image: otherInternationalTradeFairsImage,
    link: "/exhibitions",
    external: false,
  },
];

// =====================================================
// DUPLICATE DATA FOR INFINITE MARQUEE
// =====================================================

const marqueeExhibitions = [
  ...exhibitions,
  ...exhibitions,
];

// =====================================================
// COMPONENT
// =====================================================

export default function InternationalExhibitions() {
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


        {/* =================================================
            HEADING
        ================================================== */}

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


        {/* =================================================
            DESCRIPTION
        ================================================== */}

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
            RUNNING CARDS
        ================================================== */}

        <div
          className="
            relative
            mt-10
            w-full
            overflow-hidden
            py-5
          "
        >

          {/* LEFT FADE */}

          <div
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-16
              md:w-24
              z-20
              pointer-events-none
              bg-gradient-to-r
              from-[#F8FBFF]
              to-transparent
            "
          />

          {/* RIGHT FADE */}

          <div
            className="
              absolute
              right-0
              top-0
              bottom-0
              w-16
              md:w-24
              z-20
              pointer-events-none
              bg-gradient-to-l
              from-[#F8FBFF]
              to-transparent
            "
          />


          {/* =================================================
              MARQUEE TRACK
          ================================================== */}

          <div className="exhibition-marquee">

            {marqueeExhibitions.map((item, index) => (

              <motion.div
                key={`${item.title}-${index}`}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="
                  exhibition-card
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
                  shrink-0
                  w-[85vw]
                  sm:w-[420px]
                  md:w-[calc((100vw-72px)/2)]
                  lg:w-[390px]
                  xl:w-[400px]
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


                  {/* DARK GRADIENT */}

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


                  {/* BLUE + ORANGE OVERLAY */}

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


                  {/* LOCATION */}

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

                  {/* Decorative Circle */}

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

                    {/* SMALL LABEL */}

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


                    {/* TITLE */}

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


                    {/* DESCRIPTION */}

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

                    {/* EVENT TYPE */}

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


                    {/* EXPLORE BUTTON */}

                    <a
                      href={item.link}
                      target={
                        item.external
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.external
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

          </div>

        </div>

      </div>


      {/* =================================================
          MARQUEE CSS
      ================================================== */}

      <style>{`

        /* ================================================
           CONTINUOUS RUNNING ANIMATION
        ================================================ */

        @keyframes exhibitionMarquee {

          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }

        }


        .exhibition-marquee {

          display: flex;

          align-items: stretch;

          gap: 24px;

          width: max-content;

          animation:
            exhibitionMarquee
            45s
            linear
            infinite;

          will-change: transform;

        }


        /* ================================================
           PAUSE WHEN CURSOR IS ON ANY CARD
        ================================================ */

        .exhibition-marquee:has(.exhibition-card:hover) {

          animation-play-state: paused;

        }


        /* ================================================
           CARD HOVER
        ================================================ */

        .exhibition-card {

          transition:
            box-shadow 0.4s ease,
            border-color 0.4s ease;

        }


        .exhibition-card:hover {

          border-color: rgba(0, 87, 184, 0.18);

        }


        /* ================================================
           MOBILE
        ================================================ */

        @media (max-width: 640px) {

          .exhibition-marquee {

            gap: 16px;

            animation-duration: 38s;

          }

        }


        /* ================================================
           TABLET
        ================================================ */

        @media (min-width: 641px) and (max-width: 1023px) {

          .exhibition-marquee {

            gap: 20px;

            animation-duration: 42s;

          }

        }


        /* ================================================
           REDUCED MOTION
        ================================================ */

        @media (prefers-reduced-motion: reduce) {

          .exhibition-marquee {

            animation-play-state: paused;

          }

        }

      `}</style>

    </section>
  );
}
