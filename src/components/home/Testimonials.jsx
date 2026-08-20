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
  // Duplicate reviews for seamless infinite scrolling
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-[#F5F9FF] overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#003DA5]/5 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#003DA5]/5 rounded-full blur-3xl" />

      <div className="relative">

        {/* =====================================================
            PREMIUM BLUE HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center px-6 mb-10"
        >

          {/* Badge */}

          <div className="flex justify-center mb-5">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                bg-[#EAF2FF]
                border
                border-[#003DA5]/10
                text-[#003DA5]
                text-xs
                md:text-sm
                font-bold
                uppercase
                tracking-[3px]
              "
            >
              <FaGoogle className="text-sm" />

              Client Reviews

            </div>

          </div>


          {/* Main Heading */}

          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-extrabold
              text-gray-800
              leading-tight
            "
          >
            What Our
            <span className="text-[#003DA5] ml-3">
              Clients Say
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mt-5
              max-w-3xl
              mx-auto
              text-gray-600
              leading-7
            "
          >
            Trusted by professionals and businesses for reliable
            international exhibitions, corporate travel and global
            business journeys.
          </p>


          {/* Decorative Line */}

          <div className="flex justify-center items-center gap-2 mt-6">

            <span className="w-10 h-[2px] bg-[#003DA5]/20 rounded-full" />

            <span className="w-2.5 h-2.5 rounded-full bg-[#003DA5]" />

            <span className="w-16 h-[3px] bg-[#003DA5] rounded-full" />

            <span className="w-2.5 h-2.5 rounded-full bg-[#003DA5]" />

            <span className="w-10 h-[2px] bg-[#003DA5]/20 rounded-full" />

          </div>

        </motion.div>


        {/* =====================================================
            TRUST SUMMARY
        ===================================================== */}

        <div className="flex justify-center px-6 mb-12">

          <div
            className="
              bg-white
              rounded-2xl
              border
              border-gray-100
              shadow-[0_8px_30px_rgba(0,61,165,0.08)]
              px-6
              py-4
              flex
              flex-wrap
              justify-center
              items-center
              gap-5
              md:gap-8
            "
          >

            {/* Google */}

            <div className="flex items-center gap-3">

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-gray-50
                  flex
                  items-center
                  justify-center
                "
              >
                <FaGoogle className="text-[#4285F4]" />
              </div>

              <div>

                <p className="font-bold text-gray-800 text-sm">
                  Client Reviews
                </p>

                <div className="flex gap-1 mt-1">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className="text-[#FBBF24] text-xs"
                    />
                  ))}

                </div>

              </div>

            </div>


            {/* Divider */}

            <div className="hidden md:block w-px h-9 bg-gray-200" />


            {/* Rating */}

            <div className="text-center">

              <div className="flex items-center gap-1">

                <span className="text-2xl font-extrabold text-gray-800">
                  5.0
                </span>

                <FaStar className="text-[#FBBF24]" />

              </div>

              <p className="text-[11px] text-gray-400">
                Client satisfaction
              </p>

            </div>


            {/* Divider */}

            <div className="hidden md:block w-px h-9 bg-gray-200" />


            {/* Verified */}

            <div className="flex items-center gap-2">

              <FaCheckCircle className="text-[#003DA5]" />

              <span className="text-sm font-semibold text-gray-600">
                Trusted Experiences
              </span>

            </div>

          </div>

        </div>


        {/* =====================================================
            MOVING TESTIMONIALS
        ===================================================== */}

        <div className="relative w-full overflow-hidden">

          {/* LEFT FADE */}

          <div
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-16
              md:w-40
              bg-gradient-to-r
              from-[#F5F9FF]
              to-transparent
              z-20
              pointer-events-none
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
              md:w-40
              bg-gradient-to-l
              from-[#F5F9FF]
              to-transparent
              z-20
              pointer-events-none
            "
          />


          {/* TRACK */}

          <div
            className="
              flex
              w-max
              animate-testimonials-scroll
              hover:[animation-play-state:paused]
            "
          >

            {scrollingTestimonials.map((item, index) => {

              const initials = item.name
                ?.split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

              return (

                <div
                  key={`${item.id}-${index}`}
                  className="
                    w-[320px]
                    sm:w-[370px]
                    md:w-[400px]
                    px-2.5
                  "
                >

                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      group
                      relative
                      bg-white
                      rounded-2xl
                      p-7
                      h-[360px]
                      border
                      border-gray-100
                      shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                      hover:shadow-[0_20px_50px_rgba(0,61,165,0.14)]
                      transition-shadow
                      duration-500
                    "
                  >

                    {/* Top Blue Line */}

                    <div
                      className="
                        absolute
                        top-0
                        left-7
                        right-7
                        h-[3px]
                        bg-[#003DA5]
                        rounded-b-full
                        group-hover:h-1
                        transition-all
                      "
                    />


                    {/* Header */}

                    <div className="flex items-center justify-between">

                      <div
                        className="
                          w-11
                          h-11
                          rounded-xl
                          bg-[#EAF2FF]
                          flex
                          items-center
                          justify-center
                          group-hover:bg-[#003DA5]
                          transition-colors
                        "
                      >

                        <FaQuoteLeft
                          className="
                            text-[#003DA5]
                            group-hover:text-white
                            transition-colors
                          "
                        />

                      </div>


                      {/* Verified */}

                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          text-xs
                          text-gray-400
                        "
                      >

                        <FaCheckCircle className="text-[#003DA5]" />

                        Verified Client

                      </div>

                    </div>


                    {/* Rating */}

                    <div className="flex items-center gap-1 mt-6">

                      {[...Array(item.rating)].map((_, i) => (

                        <FaStar
                          key={i}
                          className="text-[#FBBF24] text-sm"
                        />

                      ))}

                      <span className="text-xs text-gray-400 ml-2">
                        {item.rating}.0
                      </span>

                    </div>


                    {/* Review */}

                    <p
                      className="
                        text-gray-600
                        leading-7
                        text-[15px]
                        mt-5
                        line-clamp-4
                      "
                    >
                      "{item.review}"
                    </p>


                    {/* Helpful */}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        text-gray-400
                        mt-5
                      "
                    >

                      <FaRegThumbsUp />

                      Helpful experience

                    </div>


                    {/* Divider */}

                    <div className="border-t border-gray-100 mt-5 pt-5">


                      {/* Profile */}

                      <div className="flex items-center gap-3">

                        {/* Avatar */}

                        <div
                          className="
                            w-11
                            h-11
                            rounded-full
                            bg-[#003DA5]
                            text-white
                            flex
                            items-center
                            justify-center
                            font-bold
                            text-sm
                            shadow-sm
                          "
                        >
                          {initials}
                        </div>


                        {/* Name */}

                        <div className="min-w-0">

                          <div className="flex items-center gap-1.5">

                            <h3
                              className="
                                font-bold
                                text-gray-800
                                truncate
                              "
                            >
                              {item.name}
                            </h3>

                            <FaCheckCircle
                              className="
                                text-[#003DA5]
                                text-xs
                                flex-shrink-0
                              "
                            />

                          </div>

                          <p
                            className="
                              text-[#003DA5]
                              text-sm
                              font-medium
                              mt-0.5
                              truncate
                            "
                          >
                            {item.company}
                          </p>

                        </div>

                      </div>

                    </div>


                    {/* Hover Border */}

                    <div
                      className="
                        absolute
                        inset-0
                        rounded-2xl
                        border-2
                        border-[#003DA5]/0
                        group-hover:border-[#003DA5]/10
                        pointer-events-none
                        transition-all
                      "
                    />

                  </motion.div>

                </div>

              );
            })}

          </div>

        </div>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 px-6"
        >

          <p className="text-gray-500 text-sm md:text-base">
            Planning your next business trip or international exhibition?
          </p>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              justify-center
              mt-4
              bg-[#003DA5]
              hover:bg-[#002B75]
              text-white
              px-7
              py-3.5
              rounded-full
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              shadow-lg
              shadow-[#003DA5]/20
            "
          >
            Plan Your Journey
          </a>

        </motion.div>

      </div>
    </section>
  );
}