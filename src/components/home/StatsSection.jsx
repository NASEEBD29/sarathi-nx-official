import {
  FaUsers,
  FaGlobeAsia,
  FaSuitcase,
  FaHeadset,
} from "react-icons/fa";

import { motion } from "framer-motion";

import Reveal from "../common/Reveal";
import AnimatedNumber from "../common/AnimatedNumber";

// =====================================================
// STATS DATA
// =====================================================

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Businesses & travelers who trust us",
    icon: FaUsers,
  },
  {
    number: 25,
    suffix: "+",
    label: "Countries Covered",
    description: "Global destinations & travel network",
    icon: FaGlobeAsia,
  },
  {
    number: 1200,
    suffix: "+",
    label: "Successful Tours",
    description: "Business & leisure journeys managed",
    icon: FaSuitcase,
  },
  {
    number: 24,
    suffix: "/7",
    label: "Customer Support",
    description: "Assistance whenever you need us",
    icon: FaHeadset,
  },
];

// =====================================================
// COMPONENT
// =====================================================

export default function StatsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-10
        md:py-12
        bg-gradient-to-br
        from-[#003D8F]
        via-[#0057B8]
        to-[#00346F]
      "
    >
      {/* =================================================
          SOFT BACKGROUND DECORATION
      ================================================= */}

      <div
        className="
          absolute
          -top-32
          -left-32
          w-80
          h-80
          rounded-full
          bg-white/5
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -right-32
          w-80
          h-80
          rounded-full
          bg-[#fc6602]/10
          blur-3xl
          pointer-events-none
        "
      />

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* =================================================
            HEADING
        ================================================= */}

        <Reveal>
          <div
            className="
              text-center
              max-w-3xl
              mx-auto
              mb-8
              md:mb-9
            "
          >
            {/* Label */}

            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-[#fc6602]" />

              <span
                className="
                  uppercase
                  tracking-[3px]
                  text-[11px]
                  md:text-xs
                  font-bold
                  text-white/80
                "
              >
                Sarathi NX At A Glance
              </span>

              <span className="w-8 h-[2px] bg-white/50" />
            </div>

            {/* Heading */}

            <h2
              className="
                text-2xl
                md:text-3xl
                lg:text-4xl
                font-extrabold
                text-white
                leading-tight
              "
            >
              Trusted Travel.
              <span className="text-[#fc6602]">
                {" "}Proven Experience.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                text-white/70
                max-w-2xl
                mx-auto
                mt-2
                text-xs
                md:text-sm
                leading-6
              "
            >
              Our experience, global network and dedicated team help
              businesses and travelers enjoy smooth, reliable and
              stress-free journeys worldwide.
            </p>
          </div>
        </Reveal>

        {/* =================================================
            STATS CARDS
        ================================================= */}

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-3
            md:gap-4
          "
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Reveal
                key={stat.label}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    h-full
                    min-h-[175px]
                    md:min-h-[185px]
                    rounded-2xl
                    bg-white
                    border
                    border-white/20
                    p-4
                    md:p-5
                    text-center
                    shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                    hover:shadow-[0_18px_40px_rgba(0,0,0,0.20)]
                    transition-all
                    duration-500
                  "
                >
                  {/* =================================================
                      CARD DECORATION
                  ================================================= */}

                  <div
                    className="
                      absolute
                      -top-12
                      -right-12
                      w-28
                      h-28
                      rounded-full
                      bg-gradient-to-br
                      from-[#0057B8]/10
                      to-[#fc6602]/10
                      group-hover:scale-150
                      transition-transform
                      duration-700
                    "
                  />

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="relative z-10">

                    {/* ICON */}

                    <div
                      className="
                        relative
                        w-11
                        h-11
                        md:w-12
                        md:h-12
                        mx-auto
                        rounded-xl
                        bg-gradient-to-br
                        from-[#0057B8]
                        to-[#0074D9]
                        text-white
                        flex
                        items-center
                        justify-center
                        text-lg
                        shadow-md
                        group-hover:from-[#fc6602]
                        group-hover:to-[#ff8a3d]
                        group-hover:scale-110
                        group-hover:rotate-3
                        transition-all
                        duration-500
                      "
                    >
                      <Icon />

                      {/* Orange Accent */}

                      <span
                        className="
                          absolute
                          -right-1
                          -bottom-1
                          w-3.5
                          h-3.5
                          rounded-full
                          bg-[#fc6602]
                          border-2
                          border-white
                        "
                      />
                    </div>

                    {/* COUNTER */}

                    <h3
                      className="
                        mt-3
                        text-2xl
                        md:text-3xl
                        lg:text-4xl
                        font-black
                        tracking-tight
                        text-[#0057B8]
                        group-hover:text-[#fc6602]
                        transition-colors
                        duration-300
                      "
                    >
                      <AnimatedNumber
                        end={stat.number}
                        duration={1800}
                      />

                      <span>{stat.suffix}</span>
                    </h3>

                    {/* LABEL */}

                    <p
                      className="
                        mt-1
                        text-xs
                        md:text-sm
                        font-extrabold
                        text-gray-800
                      "
                    >
                      {stat.label}
                    </p>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-1
                        text-[10px]
                        md:text-[11px]
                        text-gray-500
                        leading-4
                        max-w-[180px]
                        mx-auto
                      "
                    >
                      {stat.description}
                    </p>
                  </div>

                  {/* =================================================
                      HOVER LINE
                  ================================================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-1
                      w-0
                      bg-gradient-to-r
                      from-[#fc6602]
                      to-[#0057B8]
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

      </div>
    </section>
  );
}