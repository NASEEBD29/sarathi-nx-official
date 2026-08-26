import { FaCheckCircle, FaArrowRight, FaGlobeAsia } from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "../common/Reveal";
import about from "../../assets/images/about/about.jpg";

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
      className="
        relative
        py-12
        md:py-16
        lg:py-20
        bg-white
        overflow-hidden
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          absolute
          -top-32
          -left-32
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
          -bottom-32
          -right-32
          w-96
          h-96
          rounded-full
          bg-[#fc6602]/5
          blur-3xl
          pointer-events-none
        "
      />

      {/* Small decorative glow */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#0057B8]/[0.025]
          blur-3xl
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}




        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            lg:gap-16
            items-center
          "
        >

          {/* ===================================================
              LEFT IMAGE
          =================================================== */}

          <Reveal direction="left">

            <div
              className="
                relative
                max-w-xl
                mx-auto
                lg:max-w-none
                w-full
                px-2
                sm:px-4
                lg:px-0
              "
            >

              {/* BACK GLOW */}

              <div
                className="
                  absolute
                  -inset-4
                  rounded-[2.5rem]
                  bg-gradient-to-br
                  from-[#0057B8]/10
                  via-transparent
                  to-[#fc6602]/10
                  blur-xl
                  pointer-events-none
                "
              />


              {/* OUTER ORANGE FRAME */}

              <div
                className="
                  absolute
                  -top-3
                  -left-3
                  sm:-top-4
                  sm:-left-4
                  w-[75%]
                  h-[72%]
                  rounded-[2rem]
                  border-2
                  border-[#fc6602]/25
                  pointer-events-none
                "
              />


              {/* BLUE FRAME */}

              <div
                className="
                  absolute
                  -bottom-4
                  -right-4
                  sm:-bottom-5
                  sm:-right-5
                  w-[72%]
                  h-[70%]
                  rounded-[2rem]
                  border-2
                  border-[#0057B8]/20
                  pointer-events-none
                "
              />


              {/* IMAGE CARD */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  bg-white
                  border
                  border-white
                  shadow-[0_25px_65px_rgba(0,87,184,0.18)]
                "
              >

                {/* IMAGE */}

                <img
                  src={about}
                  alt="Sarathi NX Travel"
                  className="
                    w-full
                    h-[380px]
                    sm:h-[440px]
                    md:h-[500px]
                    lg:h-[510px]
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    hover:scale-[1.04]
                  "
                />


                {/* DARK / BLUE GRADIENT */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#031B4E]/75
                    via-[#003D8F]/10
                    to-transparent
                    pointer-events-none
                  "
                />


                {/* TOP LIGHT EFFECT */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-24
                    bg-gradient-to-b
                    from-white/20
                    to-transparent
                    pointer-events-none
                  "
                />


                {/* TOP BADGE */}

                <div
                  className="
                     absolute
                      top-5
                      right-5
                      sm:top-6
                      sm:right-6
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-full
                      bg-white/95
                      backdrop-blur-md
                      border
                      border-white/60
                      text-[#0057B8]
                      text-[10px]
                      sm:text-xs
                      font-extrabold
                      uppercase
                      tracking-[2px]
                      shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                  "
                >
                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-[#fc6602]
                    "
                  />

                  Sarathi NX
                </div>


                {/* IMAGE BOTTOM INFO */}

                <div
                  className="
                    absolute
                    left-5
                    right-5
                    bottom-5
                    sm:left-6
                    sm:right-6
                    sm:bottom-6
                  "
                >

                  <div
                    className="
                      flex
                      items-end
                      justify-between
                      gap-4
                    "
                  >

                    <div>

                      <p
                        className="
                          text-[#fc6602]
                          text-[10px]
                          sm:text-xs
                          font-bold
                          uppercase
                          tracking-[2.5px]
                          mb-1
                        "
                      >

                        We Plan.
                        You Travel.
                        We Care.
                      </p>

                      <h3
                        className="
                          text-white
                          text-xl
                          sm:text-2xl
                          md:text-3xl
                          font-extrabold
                          leading-tight
                        "
                      >
                        Travel Beyond
                        <br />
                        Boundaries
                      </h3>

                    </div>


                    {/* SMALL DECORATIVE ICON */}

                    <div
                      className="
                        hidden
                        sm:flex
                        w-11
                        h-11
                        rounded-xl
                        bg-white/15
                        backdrop-blur-md
                        border
                        border-white/20
                        items-center
                        justify-center
                      "
                    >
                      <FaGlobeAsia
                        className="
                          text-white
                          text-lg
                        "
                      />
                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  EXPERIENCE CARD
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  absolute
                  -bottom-7
                  right-3
                  sm:right-6
                  md:right-10
                  bg-gradient-to-br
                  from-[#0057B8]
                  via-[#0753B5]
                  to-[#003D8F]
                  text-white
                  rounded-2xl
                  px-5
                  py-3.5
                  sm:px-6
                  sm:py-4
                  md:px-7
                  md:py-5
                  shadow-[0_18px_45px_rgba(0,61,165,0.32)]
                  border
                  border-white/20
                  z-20
                "
              >

                <div className="flex items-center gap-3">

                  {/* NX ICON */}

                  <div
                    className="
                      w-10
                      h-10
                      sm:w-11
                      sm:h-11
                      rounded-xl
                      bg-gradient-to-br
                      from-[#fc6602]
                      to-[#ff8130]
                      flex
                      items-center
                      justify-center
                      font-black
                      text-xs
                      sm:text-sm
                      shadow-lg
                      border
                      border-white/10
                    "
                  >
                    NX
                  </div>


                  {/* YEAR */}

                  <div>

                    <p
                      className="
                        text-2xl
                        sm:text-3xl
                        md:text-4xl
                        font-black
                        leading-none
                      "
                    >
                      2012
                    </p>

                    <p
                      className="
                        text-blue-100
                        text-[10px]
                        sm:text-xs
                        md:text-sm
                        mt-1
                      "
                    >
                      Travel Legacy
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </Reveal>


          {/* ===================================================
              RIGHT CONTENT
          =================================================== */}

          <div>

            <Reveal direction="right">

              {/* SMALL LABEL */}

              <Reveal>
                <div className="flex items-center gap-[10px] mb-[7px]">

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
                    Who we are
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

              <h3
                className="
                  text-3xl
                  md:text-4xl
                  lg:text-[42px]
                  font-extrabold
                  text-gray-800
                  leading-[1.15]
                  tracking-tight
                "
              >
                Your Trusted Partner

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
                  For Every Journey
                </span>
              </h3>


              {/* DECORATIVE LINE */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  mt-5
                "
              >

                <span
                  className="
                    w-14
                    h-[3px]
                    rounded-full
                    bg-[#0057B8]
                  "
                />

                <span
                  className="
                    w-7
                    h-[3px]
                    rounded-full
                    bg-[#fc6602]
                  "
                />

                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-[#fc6602]
                  "
                />

              </div>


              {/* PARAGRAPH 1 */}

              <p
                className="
                  mt-6
                  text-gray-600
                  leading-7
                  text-sm
                  md:text-base
                "
              >
                Sarathi NX Pvt. Ltd. is a professionally established travel
                company with a journey that began in 2012 and was formally
                incorporated in 2020. We operate across the full spectrum of
                travel, serving both individual travellers and businesses with
                diverse travel requirements.
              </p>


              {/* PARAGRAPH 2 */}

              <p
                className="
                  mt-4
                  text-gray-600
                  leading-7
                  text-sm
                  md:text-base
                "
              >
                Our expertise spans Domestic & International Travel, Holiday
                Packages, Group Tours, Global Tourism, International
                Exhibitions, Business & Corporate Travel, and MICE. We also
                manage the essential travel components that bring these
                journeys together, including Flights, Hotels, Visas,
                Transfers, Travel Insurance, and related travel services.
              </p>


              {/* PARAGRAPH 3 */}

              <p
                className="
                  mt-4
                  text-gray-600
                  leading-7
                  text-sm
                  md:text-base
                "
              >
                From an international trade exhibition and corporate
                delegation to a family holiday, group journey, or a trip to a
                new destination, Sarathi NX manages travel across purposes,
                destinations, and scales.
              </p>


              {/* PARAGRAPH 4 */}

              <p
                className="
                  mt-4
                  text-gray-600
                  leading-7
                  text-sm
                  md:text-base
                "
              >
                With a broad service portfolio and a global outlook, we aim to
                be the single travel partner clients can rely on for journeys
                that extend beyond boundaries.
              </p>


              {/* =================================================
                  TAGLINE + BUTTON
              ================================================= */}

              <div
                className="
                  relative
                  mt-6
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#0057B8]/10
                  bg-gradient-to-r
                  from-[#0057B8]/5
                  via-white
                  to-[#fc6602]/5
                  p-1.5
                  shadow-[0_8px_25px_rgba(0,87,184,0.05)]
                "
              >

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    bottom-0
                    w-1
                    bg-gradient-to-b
                    from-[#0057B8]
                    to-[#fc6602]
                  "
                />


                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-3
                    pl-4
                    pr-1
                  "
                >

                  {/* TAGLINE */}

                  <h3
                    className="
                      text-base
                      md:text-lg
                      font-extrabold
                      text-[#0057B8]
                      leading-tight
                    "
                  >
                    We Plan.
                    <span className="text-[#fc6602]">
                      {" "}You Travel.
                    </span>
                    <span className="text-[#0057B8]">
                      {" "}We Care.
                    </span>
                  </h3>


                  {/* BUTTON */}

                  <Reveal delay={0.5}>

                    <motion.a
                      href="/sarathi-nx-official/about"
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="
                        group
                        inline-flex
                        items-center
                        justify-center
                        gap-2.5
                        bg-gradient-to-r
                        from-[#0057B8]
                        via-[#0057B8]
                        to-[#fc6602]
                        hover:shadow-[0_12px_30px_rgba(0,87,184,0.25)]
                        text-white
                        px-5
                        py-2.5
                        rounded-full
                        font-bold
                        text-xs
                        md:text-sm
                        transition-all
                        duration-300
                        shadow-md
                        shrink-0
                      "
                    >

                      Discover More

                      <span
                        className="
                          w-6
                          h-6
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
                            text-[10px]
                            group-hover:translate-x-1
                            transition-transform
                          "
                        />

                      </span>

                    </motion.a>

                  </Reveal>

                </div>

              </div>

            </Reveal>


            {/* =====================================================
                FEATURES
            ===================================================== */}

            {/* Kept commented as in original code */}

          </div>

        </div>

      </div>
    </section>
  );
}