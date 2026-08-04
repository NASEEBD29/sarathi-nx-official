import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";

import { heroSlides } from "../../data/heroData";
import PrimaryButton from "../common/PrimaryButton";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Slider */}

      <AnimatePresence mode="wait">

        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >

          <img
            src={heroSlides[current].image}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

        </motion.div>

      </AnimatePresence>

      {/* Content */}

      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
         <div>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: .2 }}
            className="uppercase tracking-[4px] text-[#14B8A6] font-semibold"
          >
            {heroSlides[current].subtitle}
          </motion.p>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: .4 }}
            className="text-5xl md:text-7xl font-bold text-white mt-5 leading-tight max-w-4xl"
          >
            {heroSlides[current].title}
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: .6 }}
            className="text-gray-300 text-lg mt-6 max-w-2xl leading-8"
          >
            {heroSlides[current].description}
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: .8 }}
            className="flex flex-wrap gap-5 mt-10"
          >

            <PrimaryButton>
              Get Started
            </PrimaryButton>

            <button className="border-2 border-white px-8 py-4 rounded-full text-white font-semibold hover:bg-white hover:text-[#0F766E] transition">

              Contact Us
              <FaArrowRight className="inline ml-2"/>

            </button>

          </motion.div>
          </div>

          {/* right side div */}
          <div className="hidden lg:block">

  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">

    <h2 className="text-3xl font-bold text-white mb-6">
      Quick Enquiry
    </h2>

    <form className="space-y-4">

      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 outline-none"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 outline-none"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 outline-none"
      />

      <select
        className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 outline-none"
      >
        <option>Select Service</option>
        <option>Corporate Travel</option>
        <option>Visa Assistance</option>
        <option>Hotel Booking</option>
        <option>International Exhibitions</option>
      </select>

      <textarea
        rows="4"
        placeholder="Message"
        className="w-full px-4 py-3 rounded-xl bg-white text-gray-700 outline-none"
      ></textarea>

      <button
        className="w-full bg-[#0F766E] hover:bg-[#115E59] text-white py-4 rounded-xl font-semibold transition"
      >
        Send Enquiry
      </button>

    </form>

  </div>

</div>

        </div>

      </div>

      {/* Slider Dots */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">

        {heroSlides.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index
                ? "bg-[#14B8A6] w-8"
                : "bg-white/50"
            }`}
          />

        ))}

      </div>

      {/* Scroll Down */}

      <div className="absolute bottom-6 right-8 text-white animate-bounce z-20">

        <FaChevronDown size={22}/>

      </div>

    </section>
  );
}