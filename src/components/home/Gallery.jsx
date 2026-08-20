import { useState } from "react";
import {
  FaSearchPlus,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaImages,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { gallery } from "../../data/gallery";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + gallery.length) % gallery.length
    );
  };

  return (
    <>
      {/* =====================================================
          GALLERY SECTION
      ===================================================== */}

      <section
        id="gallery"
        className="relative pt-10 pb-24 bg-[#F8FAFC] overflow-hidden"
      >
        {/* ================= BACKGROUND DECORATION ================= */}

        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#003DA5]/5 rounded-full blur-3xl" />

        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-[#003DA5]/5 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-1/3 w-72 h-40 bg-[#0F766E]/5 rounded-full blur-3xl" />


        <div className="relative max-w-7xl mx-auto px-6">


          {/* =====================================================
              PREMIUM BLUE HEADING
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >

            {/* Small Badge */}

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
                  shadow-sm
                "
              >
                <FaImages className="text-sm" />

                Our Gallery

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
              Explore Our
              
              <span className="relative inline-block ml-3">

                <span className="text-[#003DA5]">
                  Travel Moments
                </span>

                {/* Underline */}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    w-full
                    h-1
                    bg-[#003DA5]
                    rounded-full
                  "
                />

              </span>

            </h2>


            {/* Description */}

            <p
              className="
                mt-7
                max-w-3xl
                mx-auto
                text-gray-600
                text-base
                md:text-lg
                leading-7
              "
            >
              A glimpse of our international exhibitions, business tours
              and corporate travel experiences across the world.
            </p>


            {/* Decorative Line */}

            <div className="flex justify-center items-center gap-2 mt-7">

              <span className="w-10 h-[2px] bg-[#003DA5]/20 rounded-full" />

              <span className="w-2.5 h-2.5 rounded-full bg-[#003DA5]" />

              <span className="w-16 h-[3px] bg-[#003DA5] rounded-full" />

              <span className="w-2.5 h-2.5 rounded-full bg-[#003DA5]" />

              <span className="w-10 h-[2px] bg-[#003DA5]/20 rounded-full" />

            </div>

          </motion.div>


          {/* =====================================================
              GALLERY GRID
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              gap-5
              auto-rows-[220px]
            "
          >

            {gallery.map((item, index) => {

              const isLarge =
                index === 0 ||
                index === 5 ||
                index === 8;

              const isTall =
                index === 3 ||
                index === 6;

              return (

                <motion.div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    cursor-pointer
                    bg-gray-200
                    shadow-[0_10px_35px_rgba(15,23,42,0.08)]
                    hover:shadow-[0_25px_55px_rgba(0,61,165,0.20)]
                    transition-shadow
                    duration-500

                    ${isLarge ? "md:col-span-2" : ""}

                    ${isTall ? "md:row-span-2" : ""}
                  `}
                >

                  {/* ================= IMAGE ================= */}

                  <motion.img
                    src={item.image}
                    alt={`Travel moment ${index + 1}`}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                    "
                    whileHover={{
                      scale: 1.15,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  />


                  {/* ================= DARK GRADIENT ================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/10
                      to-transparent
                      opacity-70
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />


                  {/* ================= BLUE GLOW ================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-[#003DA5]/30
                      via-transparent
                      to-[#003DA5]/10
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />


                  {/* ================= TOP BADGE ================= */}

                  <div
                    className="
                      absolute
                      top-5
                      left-5
                      px-4
                      py-2
                      rounded-full
                      bg-white/15
                      backdrop-blur-md
                      border
                      border-white/20
                      text-white
                      text-xs
                      font-semibold
                      tracking-wider
                      uppercase
                      opacity-0
                      -translate-y-3
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                      duration-500
                    "
                  >
                    Sarathi NX
                  </div>


                  {/* ================= CENTER SEARCH ================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <div
                      className="
                        w-16
                        h-16
                        rounded-full
                        bg-white/20
                        backdrop-blur-md
                        border
                        border-white/40
                        flex
                        items-center
                        justify-center
                        text-white
                        text-xl
                        scale-75
                        opacity-0
                        group-hover:scale-100
                        group-hover:opacity-100
                        transition-all
                        duration-500
                        shadow-xl
                      "
                    >
                      <FaSearchPlus />

                    </div>

                  </div>


                  {/* ================= BOTTOM CONTENT ================= */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      bottom-0
                      p-6
                      translate-y-5
                      group-hover:translate-y-0
                      transition-transform
                      duration-500
                    "
                  >

                    <p
                      className="
                        text-white/70
                        text-xs
                        uppercase
                        tracking-[3px]
                        mb-2
                      "
                    >
                      Travel Experience
                    </p>

                    <h3
                      className="
                        text-white
                        font-semibold
                        text-lg
                        md:text-xl
                        leading-tight
                      "
                    >
                      International Travel Moments
                    </h3>


                    {/* Animated Line */}

                    <div
                      className="
                        mt-4
                        h-[2px]
                        w-10
                        bg-white
                        rounded-full
                        group-hover:w-full
                        transition-all
                        duration-700
                      "
                    />

                  </div>


                  {/* ================= IMAGE NUMBER ================= */}

                  <div
                    className="
                      absolute
                      top-5
                      right-5
                      w-9
                      h-9
                      rounded-full
                      bg-black/20
                      backdrop-blur-md
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                      text-white
                      text-xs
                      font-semibold
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                </motion.div>
              );
            })}

          </motion.div>


          {/* =====================================================
              BOTTOM MESSAGE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 text-center"
          >

            <p className="text-gray-500 text-sm md:text-base">
              Explore our journey across exhibitions, business destinations
              and global travel experiences.
            </p>

            <div className="flex justify-center items-center gap-2 mt-5">

              <span className="w-2 h-2 rounded-full bg-[#003DA5]" />

              <span className="w-16 h-[2px] bg-[#003DA5]/20 rounded-full" />

              <span className="w-2 h-2 rounded-full bg-[#003DA5]" />

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          FULL SCREEN LIGHTBOX
      ===================================================== */}

      <AnimatePresence>

        {selectedIndex !== null && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[9999]
              bg-black/95
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
            "
            onClick={closeLightbox}
          >

            {/* ================= CLOSE ================= */}

            <button
              onClick={closeLightbox}
              className="
                absolute
                top-6
                right-6
                z-50
                w-12
                h-12
                rounded-full
                bg-white/10
                hover:bg-[#003DA5]
                border
                border-white/20
                text-white
                flex
                items-center
                justify-center
                text-xl
                transition-all
                duration-300
              "
            >
              <FaTimes />
            </button>


            {/* ================= PREVIOUS ================= */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="
                absolute
                left-4
                md:left-8
                z-50
                w-12
                h-12
                md:w-14
                md:h-14
                rounded-full
                bg-white/10
                hover:bg-[#003DA5]
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
              <FaChevronLeft />
            </button>


            {/* ================= IMAGE ================= */}

            <motion.div
              key={selectedIndex}
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-w-6xl
                w-full
                max-h-[85vh]
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
                  max-h-[82vh]
                  object-contain
                  rounded-2xl
                  shadow-[0_30px_100px_rgba(0,0,0,0.6)]
                "
              />

              {/* Counter */}

              <div
                className="
                  absolute
                  bottom-[-45px]
                  left-1/2
                  -translate-x-1/2
                  text-white/70
                  text-sm
                  tracking-widest
                "
              >
                {String(selectedIndex + 1).padStart(2, "0")}
                {" / "}
                {String(gallery.length).padStart(2, "0")}
              </div>

            </motion.div>


            {/* ================= NEXT ================= */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="
                absolute
                right-4
                md:right-8
                z-50
                w-12
                h-12
                md:w-14
                md:h-14
                rounded-full
                bg-white/10
                hover:bg-[#003DA5]
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
              <FaChevronRight />
            </button>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}