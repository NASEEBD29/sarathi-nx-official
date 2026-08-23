import {
  FaUsers,
  FaGlobeAsia,
  FaSuitcase,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

import { motion } from "framer-motion";

import Reveal from "../common/Reveal";
import AnimatedNumber from "../common/AnimatedNumber";

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

export default function StatsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        md:py-24
        bg-gradient-to-br
        from-[#003D8F]
        via-[#0057B8]
        to-[#00346F]
      "
    >

      {/* ================= BACKGROUND DECORATION ================= */}

      <div
        className="
          absolute
          -top-32
          -left-32
          w-96
          h-96
          rounded-full
          bg-white/5
          blur-2xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-32
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#fc6602]/10
          blur-3xl
          pointer-events-none
        "
      />

      {/* Small decorative dots */}

      <div className="absolute top-20 right-[12%] w-2 h-2 rounded-full bg-white/30" />
      <div className="absolute bottom-20 left-[10%] w-3 h-3 rounded-full bg-[#fc6602]/60" />
      <div className="absolute top-1/2 right-[5%] w-1.5 h-1.5 rounded-full bg-white/40" />


      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= HEADING ================= */}

        <Reveal>

          <div className="text-center max-w-3xl mx-auto mb-14">

            <div className="flex items-center justify-center gap-3 mb-5">

              <span className="w-10 h-[2px] bg-[#fc6602]" />

              <span className="uppercase tracking-[4px] text-xs md:text-sm font-bold text-white/80">
                Sarathi NX At A Glance
              </span>

              <span className="w-10 h-[2px] bg-white/50" />

            </div>


            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Trusted Travel.
              <span className="text-[#fc6602]">
                {" "}Proven Experience.
              </span>
            </h2>


            <p className="text-white/70 max-w-2xl mx-auto mt-5 text-sm md:text-base leading-7">
              Our experience, global network and dedicated team help
              businesses and travelers enjoy smooth, reliable and
              stress-free journeys worldwide.
            </p>

          </div>

        </Reveal>


        {/* ================= STATS CARDS ================= */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (
              <Reveal
                key={stat.label}
                delay={index * 0.1}
              >

                <motion.div
                  whileHover={{ y: -10 }}
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
                    min-h-[245px]
                    rounded-3xl
                    bg-white/[0.97]
                    border
                    border-white/20
                    p-5
                    md:p-7
                    text-center
                    shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                    hover:shadow-[0_25px_60px_rgba(0,0,0,0.22)]
                    transition-shadow
                    duration-500
                  "
                >

                  {/* ================= CARD DECORATION ================= */}

                  <div
                    className="
                      absolute
                      -top-16
                      -right-16
                      w-36
                      h-36
                      rounded-full
                      bg-gradient-to-br
                      from-[#0057B8]/10
                      to-[#fc6602]/10
                      group-hover:scale-150
                      transition-transform
                      duration-700
                    "
                  />


                  {/* ================= NUMBER ================= */}

                  <div className="relative z-10">

                    {/* Icon */}

                    <div
                      className="
                        relative
                        w-14
                        h-14
                        md:w-16
                        md:h-16
                        mx-auto
                        rounded-2xl
                        bg-gradient-to-br
                        from-[#0057B8]
                        to-[#0074D9]
                        text-white
                        flex
                        items-center
                        justify-center
                        text-xl
                        md:text-2xl
                        shadow-lg
                        shadow-blue-200
                        group-hover:from-[#fc6602]
                        group-hover:to-[#ff8a3d]
                        group-hover:shadow-orange-200
                        group-hover:scale-110
                        group-hover:rotate-3
                        transition-all
                        duration-500
                      "
                    >
                      <Icon />

                      {/* Accent Dot */}

                      <span
                        className="
                          absolute
                          -right-1
                          -bottom-1
                          w-4
                          h-4
                          rounded-full
                          bg-[#fc6602]
                          border-[3px]
                          border-white
                        "
                      />

                    </div>


                    {/* Counter */}

                    <h3
                      className="
                        mt-6
                        text-3xl
                        md:text-4xl
                        lg:text-5xl
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
                        duration={2000}
                      />

                      <span>
                        {stat.suffix}
                      </span>
                    </h3>


                    {/* Label */}

                    <p
                      className="
                        mt-2
                        text-sm
                        md:text-base
                        font-extrabold
                        text-gray-800
                      "
                    >
                      {stat.label}
                    </p>


                    {/* Description */}

                    <p
                      className="
                        mt-2
                        text-[11px]
                        md:text-xs
                        text-gray-500
                        leading-5
                        max-w-[190px]
                        mx-auto
                      "
                    >
                      {stat.description}
                    </p>

                  </div>


                  {/* ================= BOTTOM LINE ================= */}

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


        {/* ================= BOTTOM TRUST STRIP ================= */}

        <Reveal delay={0.5}>

          <div
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-3
              text-center
              text-white/70
            "
          >

            <div className="flex items-center gap-2">

              <span className="w-2 h-2 rounded-full bg-[#fc6602]" />

              <span className="text-xs md:text-sm font-medium">
                Business Travel
              </span>

            </div>


            <span className="hidden sm:block text-white/30">
              •
            </span>


            <div className="flex items-center gap-2">

              <span className="w-2 h-2 rounded-full bg-white/70" />

              <span className="text-xs md:text-sm font-medium">
                International Exhibitions
              </span>

            </div>


            <span className="hidden sm:block text-white/30">
              •
            </span>


            <div className="flex items-center gap-2">

              <span className="w-2 h-2 rounded-full bg-[#fc6602]" />

              <span className="text-xs md:text-sm font-medium">
                Corporate Travel
              </span>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}