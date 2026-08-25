import {
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaGoogle,
  FaRegThumbsUp,
} from "react-icons/fa";

import { motion } from "framer-motion";

import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  /*
   * =====================================================
   * SEAMLESS MARQUEE
   * =====================================================
   *
   * We create 3 identical sets.
   *
   * Set 1 -> Set 2 -> Set 3
   *
   * Animation moves exactly 1/3 of the complete track.
   * So when animation restarts, the next identical set
   * is already in the exact same position.
   *
   * This prevents blank space after the last card.
   */

  const testimonialSets = [
    testimonials,
    testimonials,
    testimonials,
  ];

  return (
    <section
      id="testimonials"
      className="
        relative
        py-10
        md:py-12
        bg-[#F5F9FF]
        overflow-hidden
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          absolute
          -top-24
          -left-24
          w-64
          h-64
          bg-[#0057B8]/5
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-24
          -right-24
          w-72
          h-72
          bg-[#fc6602]/5
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            text-center
            px-6
            mb-8
          "
        >

          {/* TOP LABEL */}

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
              Client Reviews
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


          {/* MAIN HEADING */}

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
            What Our{" "}

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
              Clients Say.
            </span>
          </h2>


          {/* DESCRIPTION */}

          <p
            className="
              max-w-[970px]
              mx-auto
              mt-[12px]
              text-center
              text-[16px]
              leading-[1.55]
              font-normal
              text-[#303846]
            "
          >
            Trusted by professionals and businesses for reliable
            international exhibitions, corporate travel and global
            business journeys.
          </p>

        </motion.div>


        {/* =====================================================
            TRUST SUMMARY
        ===================================================== */}

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
          transition={{
            duration: 0.5,
            delay: 0.08,
          }}
          className="
            flex
            justify-center
            px-6
            mb-8
          "
        >

          <div
            className="
              bg-white
              rounded-xl
              border
              border-gray-100
              shadow-[0_6px_25px_rgba(0,87,184,0.07)]
              px-5
              py-2.5
              flex
              flex-wrap
              justify-center
              items-center
              gap-4
              md:gap-7
            "
          >

            {/* GOOGLE */}

            <div className="flex items-center gap-2">

              <div
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-gray-50
                  flex
                  items-center
                  justify-center
                "
              >
                <FaGoogle className="text-[#4285F4] text-sm" />
              </div>

              <div>

                <p className="font-bold text-gray-800 text-xs">
                  Client Reviews
                </p>

                <div className="flex gap-0.5 mt-0.5">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className="text-[#FBBF24] text-[9px]"
                    />
                  ))}

                </div>

              </div>

            </div>


            {/* DIVIDER */}

            <div className="hidden md:block w-px h-7 bg-gray-200" />


            {/* RATING */}

            <div className="text-center">

              <div className="flex items-center gap-1">

                <span className="text-xl font-extrabold text-gray-800">
                  5.0
                </span>

                <FaStar className="text-[#FBBF24] text-sm" />

              </div>

              <p className="text-[10px] text-gray-400">
                Client satisfaction
              </p>

            </div>


            {/* DIVIDER */}

            <div className="hidden md:block w-px h-7 bg-gray-200" />


            {/* VERIFIED */}

            <div className="flex items-center gap-2">

              <FaCheckCircle className="text-[#0057B8] text-sm" />

              <span className="text-xs font-semibold text-gray-600">
                Trusted Experiences
              </span>

            </div>

          </div>

        </motion.div>


        {/* =====================================================
            MOVING TESTIMONIALS
        ===================================================== */}

        <div
          className="
            relative
            w-full
            overflow-hidden
          "
        >

          {/* ==================================================
              LEFT FADE
          ================================================== */}

          <div
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-10
              md:w-32
              bg-gradient-to-r
              from-[#F5F9FF]
              to-transparent
              z-20
              pointer-events-none
            "
          />


          {/* ==================================================
              RIGHT FADE
          ================================================== */}

          <div
            className="
              absolute
              right-0
              top-0
              bottom-0
              w-10
              md:w-32
              bg-gradient-to-l
              from-[#F5F9FF]
              to-transparent
              z-20
              pointer-events-none
            "
          />


          {/* ==================================================
              SEAMLESS TRACK

              IMPORTANT:
              3 IDENTICAL SETS

              Track:
              [SET 1][SET 2][SET 3]

              Animation:
              0%   = SET 1
              33.333% = SET 2
              66.666% = SET 3
              100% = same visual position as 0%

              This completely removes the blank gap.
          ================================================== */}

          <div
            className="
              testimonials-marquee
              flex
              w-max
              hover:[animation-play-state:paused]
            "
          >

            {testimonialSets.map((testimonialSet, setIndex) => (

              <div
                key={`testimonial-set-${setIndex}`}
                className="
                  flex
                  shrink-0
                  w-max
                "
              >

                {testimonialSet.map((item, index) => {

                  const initials = item.name
                    ?.split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();

                  return (

                    <div
                      key={`${setIndex}-${item.id}-${index}`}
                      className="
                        shrink-0
                        w-[300px]
                        sm:w-[340px]
                        md:w-[370px]
                        pr-3
                      "
                    >

                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                          group
                          relative
                          bg-white
                          rounded-2xl
                          p-5
                          h-[285px]
                          border
                          border-gray-100
                          shadow-[0_7px_25px_rgba(15,23,42,0.06)]
                          hover:shadow-[0_15px_40px_rgba(0,87,184,0.14)]
                          transition-shadow
                          duration-500
                        "
                      >

                        {/* ==================================================
                            TOP LINE
                        ================================================== */}

                        <div
                          className="
                            absolute
                            top-0
                            left-5
                            right-5
                            h-[3px]
                            bg-gradient-to-r
                            from-[#F16A24]
                            to-[#0057B8]
                            rounded-b-full
                          "
                        />


                        {/* ==================================================
                            HEADER
                        ================================================== */}

                        <div className="flex items-center justify-between">

                          <div
                            className="
                              w-9
                              h-9
                              rounded-xl
                              bg-[#FFF2EA]
                              flex
                              items-center
                              justify-center
                              group-hover:bg-[#0057B8]
                              transition-colors
                            "
                          >

                            <FaQuoteLeft
                              className="
                                text-[#F16A24]
                                group-hover:text-white
                                text-sm
                                transition-colors
                              "
                            />

                          </div>


                          {/* VERIFIED */}

                          <div
                            className="
                              flex
                              items-center
                              gap-1
                              text-[10px]
                              text-gray-400
                            "
                          >

                            <FaCheckCircle className="text-[#0057B8]" />

                            Verified Client

                          </div>

                        </div>


                        {/* ==================================================
                            RATING
                        ================================================== */}

                        <div className="flex items-center gap-1 mt-3">

                          {[...Array(item.rating)].map((_, i) => (

                            <FaStar
                              key={i}
                              className="text-[#FBBF24] text-xs"
                            />

                          ))}

                          <span className="text-[10px] text-gray-400 ml-1">
                            {item.rating}.0
                          </span>

                        </div>


                        {/* ==================================================
                            REVIEW
                        ================================================== */}

                        <p
                          className="
                            text-gray-600
                            leading-6
                            text-[13px]
                            mt-3
                            line-clamp-3
                          "
                        >
                          "{item.review}"
                        </p>


                        {/* ==================================================
                            HELPFUL
                        ================================================== */}

                        <div
                          className="
                            flex
                            items-center
                            gap-1.5
                            text-[10px]
                            text-gray-400
                            mt-3
                          "
                        >

                          <FaRegThumbsUp />

                          Helpful experience

                        </div>


                        {/* ==================================================
                            DIVIDER
                        ================================================== */}

                        <div
                          className="
                            border-t
                            border-gray-100
                            mt-3
                            pt-3
                          "
                        >

                          {/* PROFILE */}

                          <div className="flex items-center gap-2.5">

                            {/* AVATAR */}

                            <div
                              className="
                                w-9
                                h-9
                                rounded-full
                                bg-gradient-to-br
                                from-[#F16A24]
                                to-[#0057B8]
                                text-white
                                flex
                                items-center
                                justify-center
                                font-bold
                                text-xs
                                shadow-sm
                              "
                            >
                              {initials}
                            </div>


                            {/* NAME */}

                            <div className="min-w-0">

                              <div className="flex items-center gap-1">

                                <h3
                                  className="
                                    font-bold
                                    text-gray-800
                                    text-sm
                                    truncate
                                  "
                                >
                                  {item.name}
                                </h3>

                                <FaCheckCircle
                                  className="
                                    text-[#0057B8]
                                    text-[9px]
                                    flex-shrink-0
                                  "
                                />

                              </div>

                              <p
                                className="
                                  text-[#0057B8]
                                  text-xs
                                  font-medium
                                  truncate
                                "
                              >
                                {item.company}
                              </p>

                            </div>

                          </div>

                        </div>


                        {/* ==================================================
                            HOVER BORDER
                        ================================================== */}

                        <div
                          className="
                            absolute
                            inset-0
                            rounded-2xl
                            border-2
                            border-transparent
                            group-hover:border-[#0057B8]/10
                            pointer-events-none
                            transition-all
                          "
                        />

                      </motion.div>

                    </div>

                  );

                })}

              </div>

            ))}

          </div>

        </div>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

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
          transition={{
            duration: 0.5,
          }}
          className="
            text-center
            mt-7
            px-6
          "
        >

          <p className="text-gray-500 text-xs md:text-sm">
            Planning your next business trip or international exhibition?
          </p>


          <a
            href="#contact"
            className="
              inline-flex
              items-center
              justify-center
              mt-2
              bg-gradient-to-r
              from-[#0057B8]
              via-[#0057B8]
              to-[#fc6602]
              hover:from-[#e95500]
              hover:to-[#004494]
              text-white
              px-5
              py-2.5
              rounded-full
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              shadow-md
            "
          >
            Plan Your Journey
          </a>

        </motion.div>

      </div>


      {/* =====================================================
          SEAMLESS MARQUEE CSS
      ===================================================== */}

      <style>
        {`
          /*
           * =====================================================
           * SEAMLESS TESTIMONIAL MARQUEE
           * =====================================================
           *
           * We have 3 EXACTLY IDENTICAL sets:
           *
           * [SET 1][SET 2][SET 3]
           *
           * The complete track is 3 sets wide.
           *
           * Moving -33.333333% means exactly ONE complete
           * testimonial set moves out.
           *
           * When animation restarts at 0%, the next identical
           * set is already in exactly the same position.
           *
           * Therefore:
           *
           * LAST CARD -> FIRST CARD
           *
           * with NO blank space.
           */

          .testimonials-marquee {
            animation: testimonialsSeamless 35s linear infinite;
            will-change: transform;
          }


          @keyframes testimonialsSeamless {

            0% {
              transform: translate3d(0, 0, 0);
            }

            100% {
              transform: translate3d(-33.333333%, 0, 0);
            }

          }


          /*
           * =====================================================
           * HOVER PAUSE
           * =====================================================
           */

          .testimonials-marquee:hover {
            animation-play-state: paused;
          }


          /*
           * =====================================================
           * MOBILE
           * =====================================================
           */

          @media (max-width: 640px) {

            .testimonials-marquee {
              animation-duration: 28s;
            }

          }


          /*
           * =====================================================
           * REDUCED MOTION
           * =====================================================
           */

          @media (prefers-reduced-motion: reduce) {

            .testimonials-marquee {
              animation-play-state: paused;
            }

          }

        `}
      </style>

    </section>
  );
}