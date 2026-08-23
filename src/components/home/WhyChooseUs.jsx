import {
  FaCheckCircle,
  FaGlobeAsia,
  FaHeadset,
  FaHandshake,
  FaUserTie,
  FaPassport,
  FaPlaneDeparture,
  FaUsers,
} from "react-icons/fa";

import { motion } from "framer-motion";
import Reveal from "../common/Reveal";

// ======================================================
// FEATURES DATA
// ======================================================

const features = [
  {
    icon: FaCheckCircle,
    title: "Experienced Travel Experts",
    desc: "Industry professionals with proven expertise.",
  },

  {
    icon: FaPlaneDeparture,
    title: "Transparent Pricing",
    desc: "Honest pricing with no hidden charges.",
  },

  {
    icon: FaGlobeAsia,
    title: "Dedicated Travel Consultants",
    desc: "Personalized guidance for every journey.",
  },

  {
    icon: FaUserTie,
    title: "Worldwide Network",
    desc: "Reliable global travel partnerships.",
  },

  {
    icon: FaPassport,
    title: "Fast Visa Assistance",
    desc: "Quick and hassle-free visa support.",
  },

  {
    icon: FaHandshake,
    title: "Personalized Travel Solutions",
    desc: "Travel plans tailored to your needs.",
  },

  {
    icon: FaHeadset,
    title: "24×7 Travel Assistance",
    desc: "Assistance whenever you need it.",
  },

  {
    icon: FaUsers,
    title: "Tailored Business Solutions",
    desc: "Customized travel solutions designed around your business, team and travel requirements.",
  },
];

// ======================================================
// WHY CHOOSE US
// ======================================================

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="
        relative
        overflow-hidden
        bg-white
        py-10
      "
    >
      {/* ==================================================
          BACKGROUND DECORATION
      ================================================== */}

      <div
        className="
          absolute
          -top-24
          -left-24
          w-72
          h-72
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ==================================================
            SECTION HEADING
        ================================================== */}

        <Reveal>
          <div
            className="
              text-center
              max-w-3xl
              mx-auto
              mb-8
            "
          >

            {/* TOP LABEL */}

            <div className="flex items-center justify-center gap-3 mb-3">

              <span
                className="
                  w-8
                  h-[2px]
                  bg-gradient-to-r
                  from-[#0057B8]
                  to-[#fc6602]
                "
              />

              <span
                className="
                  uppercase
                  tracking-[3px]
                  text-xs
                  md:text-sm
                  font-bold
                  bg-gradient-to-r
                  from-[#0057B8]
                  via-[#0057B8]
                  to-[#fc6602]
                  bg-clip-text
                  text-transparent
                "
              >
                Why Choose Sarathi NX
              </span>

              <span
                className="
                  w-8
                  h-[2px]
                  bg-gradient-to-r
                  from-[#fc6602]
                  to-[#0057B8]
                "
              />

            </div>

            {/* MAIN HEADING */}

            <h2
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-extrabold
                text-gray-900
                leading-tight
              "
            >
              Travel With{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-[#0057B8]
                  via-[#0057B8]
                  to-[#fc6602]
                  bg-clip-text
                  text-transparent
                "
              >
                Confidence.
              </span>
            </h2>

            {/* SUB HEADING */}

            <h3
              className="
                text-lg
                md:text-xl
                font-bold
                mt-1
                bg-gradient-to-r
                from-[#fc6602]
                via-[#fc6602]
                to-[#0057B8]
                bg-clip-text
                text-transparent
              "
            >
              End-to-End Travel Solutions
Complete travel management under one roof.

            </h3>

            {/* DESCRIPTION */}

            <p
              className="
                mt-3
                text-gray-600
                leading-6
                text-sm
                md:text-base
              "
            >
              From business travel and international exhibitions to visas,
              hotels and complete travel management, Sarathi NX ensures a
              smooth, reliable and hassle-free journey.
            </p>

          </div>
        </Reveal>


        {/* ==================================================
            FEATURES SINGLE ROW
        ================================================== */}

        <div
          className="
            flex
            gap-4
            overflow-x-auto
            pb-4
            snap-x
            snap-mandatory
            scrollbar-thin
            scrollbar-thumb-[#0057B8]/30
            scrollbar-track-transparent
          "
        >

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 0.05}
              >

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                  className="
                    group
                    relative
                    flex-shrink-0
                    snap-start
                    w-[230px]
                    sm:w-[240px]
                    lg:w-[245px]
                    h-[245px]
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    border
                    border-gray-100
                    p-5
                    shadow-[0_8px_25px_rgba(0,0,0,0.07)]
                    hover:shadow-[0_18px_40px_rgba(0,87,184,0.16)]
                    transition-all
                    duration-500
                  "
                >

                  {/* ==================================================
                      TOP GRADIENT LINE
                  ================================================== */}

                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      h-1
                      bg-gradient-to-r
                      from-[#0057B8]
                      via-[#0057B8]
                      to-[#fc6602]
                    "
                  />


                  {/* ==================================================
                      DECORATIVE CIRCLE
                  ================================================== */}

                  <div
                    className="
                      absolute
                      -top-14
                      -right-14
                      w-32
                      h-32
                      rounded-full
                      bg-gradient-to-br
                      from-[#0057B8]/10
                      to-[#fc6602]/10
                      group-hover:scale-150
                      transition-transform
                      duration-700
                    "
                  />


                  {/* ==================================================
                      ICON
                  ================================================== */}

                  <div className="relative mb-4">

                    <div
                      className="
                        w-14
                        h-14
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        bg-gradient-to-r
                        from-[#0057B8]
                        via-[#0057B8]
                        to-[#fc6602]
                        text-white
                        text-xl
                        shadow-lg
                        group-hover:scale-110
                        group-hover:rotate-3
                        transition-all
                        duration-500
                      "
                    >
                      <Icon />
                    </div>

                  </div>


                  {/* ==================================================
                      TITLE
                  ================================================== */}

                  <h3
                    className="
                      relative
                      text-base
                      md:text-lg
                      font-extrabold
                      text-gray-900
                      leading-snug
                      mb-2
                      group-hover:text-[#0057B8]
                      transition-colors
                      duration-300
                    "
                  >
                    {item.title}
                  </h3>


                  {/* ==================================================
                      DESCRIPTION
                  ================================================== */}

                  <p
                    className="
                      relative
                      text-xs
                      md:text-sm
                      text-gray-600
                      leading-5
                      line-clamp-4
                    "
                  >
                    {item.desc}
                  </p>


                  {/* ==================================================
                      BOTTOM GRADIENT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-1
                      w-0
                      bg-gradient-to-r
                      from-[#0057B8]
                      via-[#0057B8]
                      to-[#fc6602]
                      group-hover:w-full
                      transition-all
                      duration-500
                    "
                  />

                </motion.div>

              </Reveal>
            );
          })}

        </div>


        {/* ==================================================
            SCROLL HINT - MOBILE
        ================================================== */}

        <div
          className="
            flex
            lg:hidden
            justify-center
            items-center
            gap-2
            mt-3
            text-xs
            text-gray-400
          "
        >

          <span
            className="
              w-8
              h-[2px]
              bg-gradient-to-r
              from-transparent
              to-[#0057B8]
            "
          />

          <span>
            Swipe to explore
          </span>

          <span
            className="
              w-8
              h-[2px]
              bg-gradient-to-r
              from-[#fc6602]
              to-transparent
            "
          />

        </div>

      </div>
    </section>
  );
}