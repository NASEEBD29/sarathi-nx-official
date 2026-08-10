import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";

import { heroSlides } from "../../data/heroData";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const handleEnquiry = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();

    if (!name || !phone || !email || !service || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const whatsappNumber = "917666984626";

    const whatsappMessage = `
Hello Sarathi NX,

I would like to make a travel enquiry.

Name: ${name}
Mobile: ${phone}
Email: ${email}
Interested In: ${service}

Message:
${message}

Thank you.
`.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    form.reset();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >

      {/* ================= BACKGROUND SLIDER ================= */}
      <AnimatePresence mode="wait">

        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >

          <img
            src={heroSlides[current].image}
            alt="Sarathi NX International Travel"
            className="w-full h-full object-cover"
          />

          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-[#001F54]/75" />

          {/* Additional Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F54]/90 via-[#003DA5]/55 to-black/30" />

        </motion.div>

      </AnimatePresence>


      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 pt-32 pb-24 flex items-center">

        <div className="w-full grid lg:grid-cols-[1fr_380px] gap-12 items-center">


          {/* ================= LEFT CONTENT ================= */}
          <div>

            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-[#BFDBFE] font-semibold uppercase tracking-[3px] text-sm"
            >
              International Exhibition & Business Travel
            </motion.span>


            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white mt-5 leading-tight max-w-4xl"
            >
              {heroSlides[current].title}
            </motion.h1>


            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-200 text-base md:text-lg mt-6 max-w-2xl leading-8"
            >
              {heroSlides[current].description}
            </motion.p>


            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-[#BFDBFE] font-medium mt-5"
            >
              We Plan. You Travel. We Care.
            </motion.p>


            {/* ================= BUTTONS ================= */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mt-8"
            >

              <a
                href="#exhibitions"
                className="inline-flex items-center gap-2 bg-[#0057B8] hover:bg-[#003DA5] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Exhibitions

                <FaArrowRight className="text-sm" />
              </a>


              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-white px-7 py-4 rounded-full text-white font-semibold hover:bg-white hover:text-[#003DA5] transition-all duration-300"
              >
                Plan Your Trip

                <FaArrowRight className="text-sm" />
              </a>

            </motion.div>

          </div>


          {/* ================= QUICK ENQUIRY ================= */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="hidden lg:block"
          >

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/50">

              {/* Heading */}
              <div className="mb-5">

                <span className="text-[#003DA5] text-sm font-semibold uppercase tracking-wider">
                  Quick Enquiry
                </span>

                <h2 className="text-2xl font-bold text-gray-800 mt-1">
                  Plan Your Journey
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  Tell us your requirements and our team will assist you.
                </p>

              </div>


              {/* Form */}
              <form
                onSubmit={handleEnquiry}
                className="space-y-3"
              >

                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 outline-none transition focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/20"
                />


                {/* Phone */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  maxLength="10"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 outline-none transition focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/20"
                />


                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 outline-none transition focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/20"
                />


                {/* Service */}
                <select
                  name="service"
                  defaultValue=""
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 outline-none transition focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/20"
                >

                  <option value="" disabled>
                    Select Service
                  </option>

                  <option value="International Exhibition Travel">
                    International Exhibition Travel
                  </option>

                  <option value="Corporate Travel">
                    Corporate Travel
                  </option>

                  <option value="Business Travel">
                    Business Travel
                  </option>

                  <option value="Visa Assistance">
                    Visa Assistance
                  </option>

                  <option value="Hotel Booking">
                    Hotel Booking
                  </option>

                  <option value="Group Tours">
                    Group Tours
                  </option>

                </select>


                {/* Message */}
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 outline-none resize-none transition focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/20"
                />


                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#0057B8] hover:bg-[#003DA5] text-white py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Enquiry
                </button>

              </form>

            </div>

          </motion.div>

        </div>

      </div>


      {/* ================= SLIDER DOTS ================= */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">

        {heroSlides.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 rounded-full transition-all ${
              current === index
                ? "bg-[#60A5FA] w-8"
                : "bg-white/50 w-3 hover:bg-white/80"
            }`}
          />

        ))}

      </div>


      {/* ================= SCROLL DOWN ================= */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 right-8 text-white animate-bounce z-20 hover:text-[#60A5FA] transition"
      >
        <FaChevronDown size={22} />
      </a>

    </section>
  );
}