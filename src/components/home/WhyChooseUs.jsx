import {
  FaPlane,
  FaHeadset,
  FaGlobe,
  FaPassport,
  FaHandshake,
  FaClock,
} from "react-icons/fa";

import { motion } from "framer-motion";
import Reveal from "../common/Reveal";

// ======================================================
// WHY CHOOSE SARATHI NX
// ======================================================

const features = [
  {
    number: "01",
    icon: FaPlane,
    title: "Transparent Pricing",
    desc: "Honest pricing with no hidden charges.",
  },

  {
    number: "02",
    icon: FaHeadset,
    title: "Dedicated Travel Consultants",
    desc: "Personalized guidance for every journey.",
  },

  {
    number: "03",
    icon: FaGlobe,
    title: "Worldwide Network",
    desc: "Reliable global travel partnerships.",
  },

  {
    number: "04",
    icon: FaPassport,
    title: "Fast Visa Assistance",
    desc: "Quick and hassle-free visa support.",
  },

  {
    number: "05",
    icon: FaHandshake,
    title: "Personalized Travel Solutions",
    desc: "Travel plans tailored to your needs.",
  },

  {
    number: "06",
    icon: FaClock,
    title: "24/7 Customer Support",
    desc: "Assistance whenever you need us.",
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
        w-full
        overflow-hidden
        bg-[#f8f9fc]
        py-[10px]
        md:py-[14px]
      "
    >

      <div
        className="
          relative
          z-10
          w-full
          max-w-[1240px]
          mx-auto
          px-5
          md:px-6
        "
      >

        {/* ==================================================
            TOP LABEL
        ================================================== */}

        <Reveal>
          <div
            className="
              flex
              items-center
              justify-center
              gap-[10px]
              mb-[7px]
            "
          >

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
              WHY CHOOSE SARATHI NX
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


        {/* ==================================================
            MAIN HEADING
        ================================================== */}

        <Reveal delay={0.05}>
          <h2
            className="
              text-center
              font-extrabold
              tracking-[-1.8px]
              leading-[1.02]
              text-[42px]
              sm:text-[46px]
              md:text-[52px]
              lg:text-[58px]
              text-[#071B41]
            "
          >
            Travel With{" "}

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
              Confidence.
            </span>
          </h2>
        </Reveal>


        {/* ==================================================
            SUB HEADING
        ================================================== */}

        <Reveal delay={0.08}>
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-[9px]
              mt-[9px]
              text-center
            "
          >

            <span
              className="
                text-[17px]
                md:text-[20px]
                font-bold
                leading-none
                text-[#E76624]
              "
            >
              End-to-End Travel Solutions
            </span>

            <span
              className="
                text-[17px]
                md:text-[20px]
                font-bold
                leading-none
                text-[#19396D]
              "
            >
              |
            </span>

            <span
              className="
                text-[17px]
                md:text-[20px]
                font-bold
                leading-none
                text-[#19396D]
              "
            >
              Complete travel management under one roof.
            </span>

          </div>
        </Reveal>


        {/* ==================================================
            DESCRIPTION
        ================================================== */}

        <Reveal delay={0.1}>
          <p
            className="
              max-w-[970px]
              mx-auto
              mt-[12px]
              mb-[27px]
              text-center
              text-[14px]
              md:text-[16px]
              leading-[1.5]
              font-normal
              text-[#303846]
            "
          >
            From business travel and international exhibitions to visas,
            hotels and complete travel management,
            <br className="hidden md:block" />
            Sarathi NX ensures a smooth, reliable and hassle-free journey.
          </p>
        </Reveal>


        {/* ==================================================
            CARDS
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-6
            gap-[12px]
            w-full
          "
        >

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={0.12 + index * 0.04}
              >

                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                  }}
                  className="
                    group
                    relative
                    w-full
                    h-[300px]
                    overflow-hidden
                    rounded-[15px]
                    bg-white
                    border
                    border-[#edf0f5]
                    shadow-[0_4px_15px_rgba(25,50,90,0.055)]
                  "
                >

                  {/* ==================================================
                      BLUE TOP LINE
                  ================================================== */}

                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      w-[58px]
                      h-[3px]
                      rounded-br-full
                      bg-[#0057B8]
                    "
                  />


                  {/* ==================================================
                      CARD NUMBER
                  ================================================== */}

                  <div
                    className="
                      absolute
                      top-[18px]
                      right-[13px]
                      text-[22px]
                      leading-none
                      font-extrabold
                      tracking-[-1px]
                      text-[#F1F3F7]
                      select-none
                    "
                  >
                    {item.number}
                  </div>


                  {/* ==================================================
                      CIRCLE ICON
                  ================================================== */}

                  <div className="pt-[18px] pl-[25px]">

                    <div
                      className="
                        relative
                        w-[72px]
                        h-[72px]
                        rounded-full
                        overflow-hidden
                        flex
                        items-center
                        justify-center
                        bg-gradient-to-br
                        from-[#0754C8]
                        via-[#1852C7]
                        to-[#E85C0A]
                        shadow-[0_5px_14px_rgba(0,70,180,0.12)]
                      "
                    >

                      {/* SOFT HIGHLIGHT */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-[radial-gradient(circle_at_28%_25%,rgba(255,255,255,0.25),transparent_30%)]
                        "
                      />

                      <Icon
                        className="
                          relative
                          z-10
                          text-white
                          text-[31px]
                        "
                      />

                    </div>

                  </div>


                  {/* ==================================================
                      CARD CONTENT
                  ================================================== */}

                  <div
                    className="
                      px-[25px]
                      pt-[20px]
                    "
                  >

                    <h3
                      className="
                        max-w-[155px]
                        min-h-[47px]
                        text-[17px]
                        md:text-[18px]
                        font-extrabold
                        leading-[1.25]
                        tracking-[-0.25px]
                        text-[#102C61]
                      "
                    >
                      {item.title}
                    </h3>


                    {/* ==================================================
                        ORANGE DIVIDER
                    ================================================== */}

                    <div
                      className="
                        mt-[11px]
                        mb-[14px]
                        w-[34px]
                        h-[2px]
                        rounded-full
                        bg-[#F1783B]
                      "
                    />


                    {/* ==================================================
                        DESCRIPTION
                    ================================================== */}

                    <p
                      className="
                        max-w-[160px]
                        text-[12px]
                        md:text-[13px]
                        leading-[1.55]
                        font-normal
                        text-[#303846]
                      "
                    >
                      {item.desc}
                    </p>

                  </div>


                  {/* ==================================================
                      FADED BOTTOM ICON
                  ================================================== */}

                  <div
                    className="
                      absolute
                      right-[12px]
                      bottom-[12px]
                      w-[55px]
                      h-[55px]
                      flex
                      items-center
                      justify-center
                      text-[#DCE8FA]
                      pointer-events-none
                    "
                  >

                    <Icon
                      className="
                        text-[50px]
                        opacity-80
                      "
                    />

                  </div>


                  {/* ==================================================
                      SUBTLE HOVER LINE
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-0
                      h-[2px]
                      bg-gradient-to-r
                      from-[#0057B8]
                      to-[#F16A24]
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