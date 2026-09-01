import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import hero1 from "../../assets/images/hero/hero1.jpg";
import hero2 from "../../assets/images/hero/hero2.jpg";
import hero3 from "../../assets/images/hero/hero3.jpg";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // =====================================================
  // HERO SLIDES
  // =====================================================

  const slides = [
    {
      image: hero1,

      eyebrow: "Your Global Travel Partner",

      title: [
        "Seamless Journeys,",
        "Limitless Possibilities.",
      ],

      description: [
        "Business Travel",
        "Exhibition Travel",
        "Global Tourism",
      ],

      position: "left",
    },

    {
      image: hero2,

      eyebrow: "Travel Beyond Boundaries",

      title: [
        "Discover More.",
        "Travel Better.",
      ],

      description: [
        "International Travel",
        "Business Travel",
        "Premium Experiences",
      ],

      position: "center",

      // Hero 2 = 20px right
      shift: 20,
    },

    {
      image: hero3,

      eyebrow: "Your Journey, Our Expertise",

      title: [
        "Wherever You Go,",
        "We Are With You.",
      ],

      description: [
        "Corporate Travel",
        "Global Tourism",
        "Complete Travel Support",
      ],

      position: "center",

      // Hero 3 = 35px right
      shift: 35,
    },
  ];

  const activeSlide = slides[current];

  const isCenter =
    activeSlide.position === "center";

  // =====================================================
  // AUTO SLIDER
  // =====================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % slides.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="
        relative
        w-full
        overflow-hidden

        h-[500px]
        sm:h-[520px]
        md:h-[540px]
        lg:h-[560px]

        bg-[#03182B]
      "
    >
      {/* =================================================
          BACKGROUND IMAGE
      ================================================= */}

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{
            opacity: 0,
            scale: 1.02,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
        >
          {/* HERO IMAGE */}

          <img
            src={activeSlide.image}
            alt="Sarathi NX Travel"
            className="
              absolute
              inset-0

              w-full
              h-full

              object-cover
              object-center
            "
          />

          {/* BASE OVERLAY */}

          <div
            className="
              absolute
              inset-0

              bg-[#03182B]/25
            "
          />

          {/* =================================================
              HERO 1 LEFT OVERLAY
          ================================================= */}

          {!isCenter && (
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-r

                from-[#03182B]/95
                via-[#03182B]/65
                to-transparent
              "
            />
          )}

          {/* =================================================
              HERO 2 + HERO 3 CENTER OVERLAY
          ================================================= */}

          {isCenter && (
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-r

                from-[#03182B]/30
                via-transparent
                to-[#03182B]/30
              "
            />
          )}

          {/* BOTTOM OVERLAY */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0

              h-[130px]

              bg-gradient-to-t
              from-[#03182B]/65
              to-transparent
            "
          />
        </motion.div>
      </AnimatePresence>

      {/* =================================================
          HERO CONTENT
      ================================================= */}

      <div
        className={`
          relative
          z-10

          w-full
          max-w-[1600px]

          mx-auto

          h-full

          px-5
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-14

          flex
          items-center

          ${
            isCenter
              ? "justify-center text-center"
              : "justify-start text-left"
          }
        `}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{
              opacity: 0,
              x: isCenter ? 0 : -35,
              y: isCenter ? 20 : 0,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              x: isCenter ? 0 : -20,
              y: 10,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className={`
              w-full

              ${
                isCenter
                  ? "max-w-[720px]"
                  : "max-w-[650px]"
              }

              ${
                isCenter && activeSlide.shift === 20
                  ? "translate-x-0 lg:translate-x-[20px]"
                  : ""
              }

              ${
                isCenter && activeSlide.shift === 35
                  ? "translate-x-0 lg:translate-x-[35px]"
                  : ""
              }
            `}
          >
            {/* =================================================
                EYEBROW
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
              className="
                mb-3

                text-[#A7CD55]

                text-[13px]
                sm:text-[14px]
                lg:text-[15px]

                font-semibold

                tracking-wide

                drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]
              "
            >
              {activeSlide.eyebrow}
            </motion.p>

            {/* =================================================
                MAIN TITLE
            ================================================= */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.18,
                duration: 0.65,
                ease: "easeOut",
              }}
              className="
                text-white

                font-serif
                font-medium

                text-[38px]
                sm:text-[46px]
                md:text-[55px]
                lg:text-[64px]

                leading-[1.08]

                tracking-[-0.025em]

                drop-shadow-[0_5px_22px_rgba(0,0,0,0.7)]
              "
            >
              {activeSlide.title.map(
                (line, index) => (
                  <span
                    key={index}
                    className="block"
                  >
                    {line}
                  </span>
                )
              )}
            </motion.h1>

            {/* =================================================
                GREEN LINE
            ================================================= */}

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: isCenter
                  ? 130
                  : 150,
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
                duration: 0.65,
              }}
              className={`
                relative

                h-[2px]

                mt-5

                bg-[#9CCB42]

                ${
                  isCenter
                    ? "mx-auto"
                    : ""
                }
              `}
            >
              <span
                className={`
                  absolute

                  top-1/2
                  -translate-y-1/2

                  w-[7px]
                  h-[7px]

                  rounded-full

                  bg-[#9CCB42]

                  ${
                    isCenter
                      ? "left-[-3px]"
                      : "right-[-3px]"
                  }
                `}
              />
            </motion.div>

            {/* =================================================
                SERVICE DESCRIPTION
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.52,
                duration: 0.6,
              }}
              className={`
                mt-4

                flex
                flex-wrap

                items-center

                text-white/95

                text-[12px]
                sm:text-[13px]
                lg:text-[14px]

                font-medium

                ${
                  isCenter
                    ? "justify-center"
                    : "justify-start"
                }
              `}
            >
              {activeSlide.description.map(
                (item, index) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                    "
                  >
                    <span>
                      {item}
                    </span>

                    {index <
                      activeSlide.description.length - 1 && (
                      <span
                        className="
                          mx-3

                          text-[#9CCB42]
                        "
                      >
                        |
                      </span>
                    )}
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =================================================
          SLIDER DOTS
      ================================================= */}

      <div
        className="
          absolute
          z-30

          left-1/2
          -translate-x-1/2

          bottom-5

          flex
          items-center
          gap-2
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-[4px]

              rounded-full

              transition-all
              duration-300

              ${
                current === index
                  ? "w-[30px] bg-[#9CCB42]"
                  : "w-[7px] bg-white/60 hover:bg-white"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}