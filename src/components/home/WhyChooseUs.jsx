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

const features = [
  {
    number: "01",
    icon: FaCheckCircle,
    title: "Complete Travel Management",
    desc: "Flights, hotels, visas and travel assistance managed seamlessly under one roof.",
  },
  {
    number: "02",
    icon: FaPlaneDeparture,
    title: "Exhibition Travel Experts",
    desc: "Specialized support for international exhibitions, business delegations and trade events.",
  },
  {
    number: "03",
    icon: FaGlobeAsia,
    title: "Global Travel Network",
    desc: "Strong international partnerships helping you travel confidently across destinations.",
  },
  {
    number: "04",
    icon: FaUserTie,
    title: "Dedicated Travel Consultant",
    desc: "A dedicated travel expert to understand your requirements and manage every detail.",
  },
  {
    number: "05",
    icon: FaPassport,
    title: "Visa & Documentation Support",
    desc: "Professional guidance for visa applications, documentation and international travel requirements.",
  },
  {
    number: "06",
    icon: FaHandshake,
    title: "Transparent Pricing",
    desc: "Competitive and transparent pricing with clear communication and no hidden surprises.",
  },
  {
    number: "07",
    icon: FaHeadset,
    title: "24×7 Travel Assistance",
    desc: "Reliable assistance before, during and after your journey whenever you need us.",
  },
  {
    number: "08",
    icon: FaUsers,
    title: "Tailored Business Solutions",
    desc: "Customized travel solutions designed around your business, team and travel requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-white py-24 md:py-28"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="absolute top-20 -left-32 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= SECTION HEADING ================= */}

        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">

            {/* Small Label */}

            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[#fc6602]" />

              <span className="uppercase tracking-[4px] text-sm font-bold text-[#0057B8]">
                Why Choose Sarathi NX
              </span>

              <span className="w-10 h-[2px] bg-[#0057B8]" />
            </div>

            {/* Heading */}

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Travel With
              <span className="text-[#0057B8]"> Confidence.</span>
            </h2>

            <h3 className="text-2xl md:text-3xl font-bold mt-3">
              <span className="text-[#fc6602]">
                We Take Care of Every Detail.
              </span>
            </h3>

            {/* Description */}

            <p className="mt-6 text-gray-600 leading-8 text-base md:text-lg">
              From business travel and international exhibitions to visas,
              hotels and complete travel management, Sarathi NX ensures a
              smooth, reliable and hassle-free journey.
            </p>

          </div>
        </Reveal>


        {/* ================= FEATURE CARDS ================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 0.08}
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
                    h-full
                    min-h-[300px]
                    overflow-hidden
                    rounded-3xl
                    bg-white
                    border
                    border-gray-100
                    p-7
                    shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                    hover:shadow-[0_20px_50px_rgba(0,87,184,0.15)]
                    transition-all
                    duration-500
                  "
                >

                  {/* ================= CARD DECORATION ================= */}

                  <div
                    className="
                      absolute
                      -top-16
                      -right-16
                      w-40
                      h-40
                      rounded-full
                      bg-gradient-to-br
                      from-[#0057B8]/10
                      to-[#fc6602]/10
                      group-hover:scale-[1.8]
                      transition-transform
                      duration-700
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-0
                      right-0
                      w-24
                      h-24
                      bg-gradient-to-tl
                      from-[#0057B8]/5
                      to-transparent
                      rounded-tl-full
                    "
                  />


                  {/* ================= CARD NUMBER ================= */}

                  <div className="relative flex items-center justify-between mb-7">

                    <span
                      className="
                        text-sm
                        font-extrabold
                        tracking-[3px]
                        text-gray-300
                        group-hover:text-[#fc6602]
                        transition-colors
                        duration-300
                      "
                    >
                      {item.number}
                    </span>

                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-widest
                        text-gray-400
                        group-hover:text-[#0057B8]
                        transition-colors
                      "
                    >
                      Sarathi NX
                    </span>

                  </div>


                  {/* ================= ICON ================= */}

                  <div className="relative mb-7">

                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        bg-gradient-to-br
                        from-[#0057B8]
                        to-[#0074D9]
                        text-white
                        text-2xl
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
                    </div>

                    {/* Small Accent */}

                    <div
                      className="
                        absolute
                        -bottom-1
                        -right-1
                        w-5
                        h-5
                        rounded-full
                        bg-[#fc6602]
                        border-4
                        border-white
                        group-hover:scale-125
                        transition-transform
                      "
                    />

                  </div>


                  {/* ================= TITLE ================= */}

                  <h3
                    className="
                      relative
                      text-xl
                      font-extrabold
                      text-gray-900
                      leading-snug
                      mb-3
                      group-hover:text-[#0057B8]
                      transition-colors
                      duration-300
                    "
                  >
                    {item.title}
                  </h3>


                  {/* ================= DESCRIPTION ================= */}

                  <p
                    className="
                      relative
                      text-sm
                      text-gray-600
                      leading-7
                    "
                  >
                    {item.desc}
                  </p>


                  {/* ================= BOTTOM ARROW ================= */}

                  <div
                    className="
                      relative
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-[#0057B8]
                      group-hover:text-[#fc6602]
                      transition-colors
                    "
                  >
                    <span>Explore</span>

                    <span
                      className="
                        inline-block
                        group-hover:translate-x-2
                        transition-transform
                        duration-300
                      "
                    >
                      →
                    </span>
                  </div>


                  {/* ================= HOVER LINE ================= */}

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


        {/* ================= OUR PROMISE ================= */}

        <Reveal delay={0.4}>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="
              relative
              overflow-hidden
              mt-16
              rounded-[2rem]
              bg-gradient-to-r
              from-[#fc6602]
              via-[#fc6602]
              to-[#0057B8]
              p-[1px]
              shadow-xl
            "
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                bg-gradient-to-r
                from-[#fc6602]
                to-[#0057B8]
                px-8
                py-12
                md:px-14
                md:py-14
                text-center
                text-white
              "
            >

              {/* Decorative Circle */}

              <div
                className="
                  absolute
                  -top-20
                  -left-20
                  w-56
                  h-56
                  rounded-full
                  bg-white/10
                "
              />

              <div
                className="
                  absolute
                  -bottom-24
                  -right-16
                  w-64
                  h-64
                  rounded-full
                  bg-white/10
                "
              />

              <div className="relative z-10">

                <p className="uppercase tracking-[5px] text-xs md:text-sm font-bold text-white/80">
                  Our Promise
                </p>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4">
                  We Plan. You Travel. We Care.
                </h3>

                <p className="max-w-2xl mx-auto mt-5 text-white/90 leading-7 text-sm md:text-base">
                  Your journey is our responsibility. We take care of every
                  detail so you can focus on your business, exhibition or
                  travel experience.
                </p>

                {/* Bottom Accent */}

                <div className="flex justify-center items-center gap-3 mt-7">

                  <span className="w-12 h-[2px] bg-white/60" />

                  <FaPlaneDeparture className="text-xl" />

                  <span className="w-12 h-[2px] bg-white/60" />

                </div>

              </div>

            </div>

          </motion.div>

        </Reveal>

      </div>
    </section>
  );
}