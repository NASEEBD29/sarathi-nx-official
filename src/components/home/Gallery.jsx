import { useState } from "react";

import {
  FaSearchPlus,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
  FaArrowRight,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";

import { gallery } from "../../data/gallery";
import Reveal from "../common/Reveal";

// =====================================================
// GALLERY
// =====================================================

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // =====================================================
  // OPEN LIGHTBOX
  // =====================================================

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  // =====================================================
  // CLOSE LIGHTBOX
  // =====================================================

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  // =====================================================
  // NEXT IMAGE
  // =====================================================

  const nextImage = () => {
    setSelectedIndex(
      (prev) => (prev + 1) % gallery.length
    );
  };

  // =====================================================
  // PREVIOUS IMAGE
  // =====================================================

  const prevImage = () => {
    setSelectedIndex(
      (prev) =>
        (prev - 1 + gallery.length) % gallery.length
    );
  };

  return (
    <>
      {/* =====================================================
          GALLERY SECTION
      ===================================================== */}

      <section
        id="gallery"
        className="
          relative
          w-full
          overflow-hidden
          bg-[#F8FAFC]
          pt-10
          pb-20
          md:pt-12
          md:pb-24
        "
      >

        {/* =====================================================
            BACKGROUND DECORATION
        ===================================================== */}

        <div
          className="
            absolute
            -top-28
            -left-28
            w-[380px]
            h-[380px]
            rounded-full
            bg-[#0057B8]/5
            blur-3xl
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            top-[35%]
            -right-32
            w-[400px]
            h-[400px]
            rounded-full
            bg-[#F16A24]/5
            blur-3xl
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-[30%]
            w-[420px]
            h-[220px]
            rounded-full
            bg-[#0057B8]/5
            blur-3xl
            pointer-events-none
          "
        />


        {/* =====================================================
            MAIN CONTAINER
        ===================================================== */}

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-5
            md:px-6
          "
        >

          {/* =====================================================
              EYEBROW
          ===================================================== */}

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
                Our Gallery
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


          {/* =====================================================
              MAIN HEADING
          ===================================================== */}

          <Reveal delay={0.05}>
            <h2
              className="
                text-center
                font-extrabold
                tracking-[-1.8px]
                leading-[1.02]
                text-[42px]
                sm:text-[48px]
                md:text-[52px]
                lg:text-[58px]
                text-[#071B41]
              "
            >
              Explore Our{" "}

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
                Travel Moments.
              </span>
            </h2>
          </Reveal>


          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <Reveal delay={0.08}>
            <p
              className="
                max-w-[900px]
                mx-auto
                mt-[14px]
                mb-[34px]
                text-center
                text-[14px]
                md:text-[16px]
                leading-[1.55]
                font-normal
                text-[#303846]
              "
            >
              A glimpse of our international exhibitions, business
              tours and corporate travel experiences across the world.
            </p>
          </Reveal>


          {/* =====================================================
              GALLERY GRID
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.08,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-4
              md:gap-5
              auto-rows-[210px]
              md:auto-rows-[225px]
            "
          >

            {gallery.map((item, index) => {

              // =================================================
              // LARGE LANDSCAPE CARDS
              // =================================================

              const isLarge =
                index === 0 ||
                index === 5 ||
                index === 8;


              // =================================================
              // TALL CARDS
              // =================================================

              const isTall =
                index === 3 ||
                index === 6;


              return (
                <motion.div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  whileHover={{
                    y: -7,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[22px]
                    md:rounded-[26px]
                    cursor-pointer
                    bg-[#DDE5F0]
                    border
                    border-white
                    shadow-[0_8px_30px_rgba(7,27,65,0.08)]
                    hover:shadow-[0_22px_55px_rgba(0,87,184,0.18)]
                    transition-shadow
                    duration-500

                    ${isLarge ? "sm:col-span-2" : ""}

                    ${isTall ? "sm:row-span-2" : ""}
                  `}
                >

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <motion.img
                    src={item.image}
                    alt={`Sarathi NX travel experience ${index + 1}`}
                    loading="lazy"
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-[900ms]
                      ease-out
                    "
                    whileHover={{
                      scale: 1.09,
                    }}
                  />


                  {/* =================================================
                      DARK GRADIENT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#071B41]/90
                      via-[#071B41]/15
                      to-transparent
                      opacity-75
                      group-hover:opacity-95
                      transition-opacity
                      duration-500
                    "
                  />


                  {/* =================================================
                      BRAND COLOR GLOW
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-[#0057B8]/20
                      via-transparent
                      to-[#F16A24]/25
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />


                  {/* =================================================
                      TOP BRAND LINE
                  ================================================= */}

                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      h-[3px]
                      bg-gradient-to-r
                      from-[#0057B8]
                      via-[#1454D8]
                      to-[#F16A24]
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      z-20
                    "
                  />


                  {/* =================================================
                      TOP LEFT BADGE
                  ================================================= */}

                  <div
                    className="
                      absolute
                      top-4
                      left-4
                      md:top-5
                      md:left-5
                      z-20
                      flex
                      items-center
                      gap-2
                      px-3
                      py-1.5
                      rounded-full
                      bg-white/15
                      backdrop-blur-md
                      border
                      border-white/25
                      text-white
                      text-[9px]
                      md:text-[10px]
                      font-bold
                      tracking-[1.5px]
                      uppercase
                      opacity-0
                      -translate-y-3
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                      duration-500
                    "
                  >

                    <FaImages className="text-[9px]" />

                    Sarathi NX

                  </div>


                  {/* =================================================
                      IMAGE NUMBER
                  ================================================= */}

                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      md:top-5
                      md:right-5
                      z-20
                      w-9
                      h-9
                      rounded-full
                      bg-black/20
                      backdrop-blur-md
                      border
                      border-white/25
                      flex
                      items-center
                      justify-center
                      text-white
                      text-[10px]
                      font-bold
                      tracking-[1px]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>


                  {/* =================================================
                      CENTER SEARCH
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      z-20
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <div
                      className="
                        w-[58px]
                        h-[58px]
                        md:w-[64px]
                        md:h-[64px]
                        rounded-full
                        bg-white/15
                        backdrop-blur-md
                        border
                        border-white/40
                        flex
                        items-center
                        justify-center
                        text-white
                        text-lg
                        scale-75
                        opacity-0
                        group-hover:scale-100
                        group-hover:opacity-100
                        transition-all
                        duration-500
                        shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                      "
                    >
                      <FaSearchPlus />
                    </div>

                  </div>


                  {/* =================================================
                      BOTTOM CONTENT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      bottom-0
                      z-20
                      p-5
                      md:p-6
                      translate-y-3
                      group-hover:translate-y-0
                      transition-transform
                      duration-500
                    "
                  >

                    <p
                      className="
                        text-white/65
                        text-[9px]
                        md:text-[10px]
                        uppercase
                        tracking-[2.5px]
                        font-semibold
                        mb-1.5
                      "
                    >
                      Travel Experience
                    </p>


                    <h3
                      className="
                        text-white
                        font-bold
                        text-base
                        md:text-lg
                        leading-tight
                        tracking-[-0.2px]
                      "
                    >
                      International Travel Moments
                    </h3>


                    {/* =================================================
                        ANIMATED LINE
                    ================================================= */}

                    <div
                      className="
                        mt-3
                        h-[2px]
                        w-[35px]
                        bg-gradient-to-r
                        from-[#0057B8]
                        to-[#F16A24]
                        rounded-full
                        group-hover:w-[100px]
                        transition-all
                        duration-700
                      "
                    />

                  </div>


                  {/* =================================================
                      HOVER BORDER
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-[22px]
                      md:rounded-[26px]
                      border-2
                      border-transparent
                      group-hover:border-white/25
                      transition-all
                      duration-500
                      pointer-events-none
                      z-30
                    "
                  />

                </motion.div>
              );
            })}

          </motion.div>


          {/* =====================================================
              BOTTOM VIEW GALLERY
          ===================================================== */}

          <Reveal delay={0.2}>
            <div
              className="
                mt-9
                flex
                flex-col
                md:flex-row
                items-center
                justify-center
                gap-3
                text-center
              "
            >

              <p
                className="
                  text-[#64748B]
                  text-[13px]
                  md:text-[14px]
                "
              >
                Explore our journey across exhibitions, business
                destinations and global travel experiences.
              </p>


              <span
                className="
                  hidden
                  md:block
                  w-[28px]
                  h-[1px]
                  bg-gradient-to-r
                  from-[#0057B8]
                  to-[#F16A24]
                "
              />


              {/* =================================================
                  CLICKABLE VIEW GALLERY
              ================================================= */}

              <Link
                to="/gallery"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  bg-gradient-to-r
                  from-[#0057B8]
                  to-[#F16A24]
                  bg-clip-text
                  text-transparent
                  cursor-pointer
                  hover:opacity-80
                  transition-opacity
                  duration-300
                "
              >

                View Gallery

                <FaArrowRight
                  className="
                    text-[#F16A24]
                    text-[9px]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </Link>

            </div>
          </Reveal>

        </div>
      </section>


      {/* =====================================================
          FULL SCREEN LIGHTBOX
      ===================================================== */}

      <AnimatePresence>

        {selectedIndex !== null && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              inset-0
              z-[9999]
              bg-[#020817]/95
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
            "
            onClick={closeLightbox}
          >

            {/* =================================================
                TOP BRANDING
            ================================================= */}

            <div
              className="
                absolute
                top-5
                left-5
                md:top-7
                md:left-8
                flex
                items-center
                gap-2
                text-white
                text-[10px]
                font-bold
                tracking-[2px]
                uppercase
                opacity-70
              "
            >

              <span
                className="
                  w-[25px]
                  h-[2px]
                  bg-gradient-to-r
                  from-[#0057B8]
                  to-[#F16A24]
                "
              />

              Sarathi NX

            </div>


            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery"
              className="
                absolute
                top-5
                right-5
                md:top-7
                md:right-8
                z-50
                w-11
                h-11
                md:w-12
                md:h-12
                rounded-full
                bg-white/10
                hover:bg-gradient-to-r
                hover:from-[#0057B8]
                hover:to-[#F16A24]
                border
                border-white/20
                text-white
                flex
                items-center
                justify-center
                text-lg
                transition-all
                duration-300
              "
            >
              <FaTimes />
            </button>


            {/* =================================================
                PREVIOUS BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
              className="
                absolute
                left-3
                md:left-8
                z-50
                w-11
                h-11
                md:w-14
                md:h-14
                rounded-full
                bg-white/10
                hover:bg-gradient-to-r
                hover:from-[#0057B8]
                hover:to-[#F16A24]
                border
                border-white/20
                text-white
                flex
                items-center
                justify-center
                text-base
                md:text-lg
                transition-all
                duration-300
              "
            >
              <FaChevronLeft />
            </button>


            {/* =================================================
                IMAGE
            ================================================= */}

            <motion.div
              key={selectedIndex}
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.88,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-w-6xl
                w-full
                max-h-[82vh]
                flex
                items-center
                justify-center
              "
            >

              <img
                src={gallery[selectedIndex].image}
                alt={`Travel moment ${selectedIndex + 1}`}
                className="
                  max-w-full
                  max-h-[76vh]
                  object-contain
                  rounded-[18px]
                  md:rounded-[22px]
                  shadow-[0_30px_100px_rgba(0,0,0,0.65)]
                  border
                  border-white/10
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  rounded-[18px]
                  md:rounded-[22px]
                  border
                  border-white/10
                  pointer-events-none
                "
              />

            </motion.div>


            {/* =================================================
                NEXT BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="
                absolute
                right-3
                md:right-8
                z-50
                w-11
                h-11
                md:w-14
                md:h-14
                rounded-full
                bg-white/10
                hover:bg-gradient-to-r
                hover:from-[#0057B8]
                hover:to-[#F16A24]
                border
                border-white/20
                text-white
                flex
                items-center
                justify-center
                text-base
                md:text-lg
                transition-all
                duration-300
              "
            >
              <FaChevronRight />
            </button>


            {/* =================================================
                COUNTER
            ================================================= */}

            <div
              className="
                absolute
                bottom-6
                left-1/2
                -translate-x-1/2
                flex
                items-center
                gap-3
                text-white/60
                text-[10px]
                tracking-[3px]
                font-semibold
              "
            >

              <span>
                {String(selectedIndex + 1).padStart(2, "0")}
              </span>

              <span
                className="
                  w-[30px]
                  h-[1px]
                  bg-gradient-to-r
                  from-[#0057B8]
                  to-[#F16A24]
                "
              />

              <span>
                {String(gallery.length).padStart(2, "0")}
              </span>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}