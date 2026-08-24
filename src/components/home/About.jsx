import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "../common/Reveal";
import sajid from "../../assets/images/about/sajid.jpeg";

export default function About() {
  const features = [
    "International Exhibition Travel",
    "Business & Corporate Travel",
    "MICE & Group Tours",
    "Visa & Travel Assistance",
  ];

  return (
    <section
      id="about"
      className="relative py-12 md:py-16 bg-white overflow-hidden"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#0057B8]/5 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#fc6602]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* =====================================================
              LEFT IMAGE
          ===================================================== */}

          <Reveal direction="left">

            <div className="relative max-w-xl mx-auto lg:max-w-none">

              {/* Orange/Blue Back Shape */}

              <div
                className="
                  absolute
                  -top-4
                  -left-4
                  w-full
                  h-full
                  rounded-[2rem]
                  border-2
                  border-[#fc6602]/20
                "
              />

              <div
                className="
                  absolute
                  -bottom-4
                  -right-4
                  w-28
                  h-28
                  rounded-3xl
                  bg-gradient-to-br
                  from-[#fc6602]
                  to-[#0057B8]
                  opacity-90
                "
              />

              {/* Image */}

              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,87,184,0.18)]">

                <img
                  src={sajid}
                  alt="Sarathi NX Business Travel"
                  className="
                    w-full
                    h-[420px]
                    md:h-[470px]
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#003D8F]/45
                    via-transparent
                    to-transparent
                  "
                />

                {/* Small Image Label */}

                <div
                  className="
                    absolute
                    top-5
                    left-5
                    px-4
                    py-2
                    rounded-full
                    bg-white/95
                    backdrop-blur
                    text-[#0057B8]
                    text-xs
                    font-extrabold
                    uppercase
                    tracking-[2px]
                    shadow-lg
                  "
                >
                  Sarathi NX
                </div>

              </div>


              {/* ================= EXPERIENCE CARD ================= */}

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="
                  absolute
                  -bottom-6
                  right-5
                  md:right-8
                  bg-gradient-to-br
                  from-[#0057B8]
                  to-[#003D8F]
                  text-white
                  rounded-2xl
                  px-6
                  py-4
                  md:px-7
                  md:py-5
                  shadow-[0_15px_40px_rgba(0,61,165,0.30)]
                  border
                  border-white/20
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      bg-[#fc6602]
                      flex
                      items-center
                      justify-center
                      font-black
                      text-sm
                      shadow-lg
                    "
                  >
                    NX
                  </div>

                  <div>

                    <p className="text-3xl md:text-4xl font-black leading-none">
                      2012
                    </p>

                    <p className="text-blue-100 text-xs md:text-sm mt-1">
                      Travel Legacy
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </Reveal>


          {/* =====================================================
              RIGHT CONTENT
          ===================================================== */}

          <div>

            <Reveal direction="right">

              {/* Section Label */}

              <div className="flex items-center gap-3 mb-4">

                <span className="w-10 h-[2px] bg-[#fc6602]" />

                <span className="text-[#0057B8] uppercase tracking-[4px] font-bold text-xs md:text-sm">
                  Who We Are
                </span>

                <span className="w-10 h-[2px] bg-[#0057B8]" />

              </div>


              {/* Heading */}

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  lg:text-5xl
                  font-extrabold
                  text-gray-900
                  mt-2
                  leading-tight
                "
              >
                Connecting People,
                <span className="block text-[#0057B8]">
                  Business & Destinations
                </span>
              </h2>


              {/* Orange Accent */}

              <div className="flex items-center gap-2 mt-5">

                <span className="w-16 h-1 rounded-full bg-[#0057B8]" />

                <span className="w-8 h-1 rounded-full bg-[#fc6602]" />

              </div>


              {/* Paragraph 1 */}

              <p className="mt-6 text-gray-600 leading-7 text-sm md:text-base">
                Sarathi NX Pvt. Ltd. is a professionally established travel company with a journey that began in 2012 and was formally incorporated in 2020. We operate across the full spectrum of travel, serving both individual travellers and businesses with diverse travel requirements.
              </p>


              {/* Paragraph 2 */}

              <p className="mt-4 text-gray-600 leading-7 text-sm md:text-base">
                Our expertise spans Domestic & International Travel, Holiday Packages, Group Tours, Global Tourism, International Exhibitions, Business & Corporate Travel, and MICE. We also manage the essential travel components that bring these journeys together, including Flights, Hotels, Visas, Transfers, Travel Insurance, and related travel services.
              </p>


              {/* Paragraph 3 */}

              <p className="mt-4 text-gray-600 leading-7 text-sm md:text-base">
                From an international trade exhibition and corporate delegation to a family holiday, group journey, or a trip to a new destination, Sarathi NX manages travel across purposes, destinations, and scales.
              </p>


              {/* Paragraph 4 */}

              <p className="mt-4 text-gray-600 leading-7 text-sm md:text-base">
                With a broad service portfolio and a global outlook, we aim to be the single travel partner clients can rely on for journeys that extend beyond boundaries.
              </p>


              {/* ================= TAGLINE ================= */}

              <div
                className="
                  mt-5
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#0057B8]/10
                  bg-gradient-to-r
                  from-[#0057B8]/5
                  to-[#fc6602]/5
                  px-5
                  py-4
                "
              >

                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0057B8] to-[#fc6602]" />

                <h3 className="pl-2 text-lg md:text-xl font-extrabold text-[#0057B8]">
                  We Plan.
                  <span className="text-[#fc6602]"> You Travel.</span>
                  <span className="text-[#0057B8]"> We Care.</span>
                </h3>

              </div>

            </Reveal>


            {/* =====================================================
                FEATURES
            ===================================================== */}

            {/* <div className="grid sm:grid-cols-2 gap-3 mt-7">

              {features.map((feature, index) => (

                <Reveal
                  key={feature}
                  delay={0.1 * index}
                >

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.25 }}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      p-3.5
                      rounded-xl
                      bg-white
                      border
                      border-gray-100
                      shadow-[0_5px_20px_rgba(0,0,0,0.04)]
                      hover:border-[#0057B8]/20
                      hover:shadow-[0_10px_25px_rgba(0,87,184,0.10)]
                      transition-all
                      duration-300
                    "
                  >

                    <div
                      className="
                        w-8
                        h-8
                        shrink-0
                        rounded-lg
                        bg-gradient-to-br
                        from-[#0057B8]
                        to-[#0074D9]
                        flex
                        items-center
                        justify-center
                        shadow-sm
                        group-hover:from-[#fc6602]
                        group-hover:to-[#ff8a3d]
                        transition-all
                        duration-300
                      "
                    >

                      <FaCheckCircle className="text-white text-sm" />

                    </div>

                    <span className="text-gray-700 text-sm font-semibold leading-5">
                      {feature}
                    </span>

                  </motion.div>

                </Reveal>

              ))}

            </div> */}


            {/* =====================================================
                BUTTON
            ===================================================== */}

            <Reveal delay={0.5}>

              <motion.a
                href="/sarathi-nx-official/about"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  mt-7
                  bg-gradient-to-r
                  from-[#0057B8]
                  via-[#0057B8]
                  to-[#fc6602]
                  hover:shadow-[0_12px_30px_rgba(0,87,184,0.25)]
                  text-white
                  px-7
                  py-3.5
                  rounded-full
                  font-bold
                  text-sm
                  transition-all
                  duration-300
                  shadow-md
                "
              >

                Discover More

                <span
                  className="
                    w-7
                    h-7
                    rounded-full
                    bg-white/20
                    flex
                    items-center
                    justify-center
                    group-hover:bg-white/30
                    transition-all
                  "
                >
                  <FaArrowRight
                    className="
                      text-xs
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </span>

              </motion.a>

            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}