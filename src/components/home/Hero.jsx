import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaCommentDots,
  FaPlane,
  FaPassport,
  FaHotel,
  FaShieldAlt,
  FaCoins,
  FaUsers,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

// =====================================================
// HERO IMAGES
// =====================================================

import hero1 from "../../assets/images/hero/hero1.jpg";
import hero2 from "../../assets/images/hero/hero2.jpg";
import hero3 from "../../assets/images/hero/hero3.jpg";

import { heroSlides } from "../../data/heroData";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // =====================================================
  // HERO IMAGES
  // =====================================================

  const slideImages = [hero1, hero2, hero3];

  // =====================================================
  // AUTO SLIDER
  // =====================================================

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideImages.length);
    }, 9000);

    return () => clearInterval(slider);
  }, []);

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ===================================================
    // NAME - TEXT ONLY
    // Numbers and special characters are not allowed
    // ===================================================

    if (name === "name") {
      const textOnlyValue = value.replace(/[^a-zA-Z\s]/g, "");

      setFormData((prev) => ({
        ...prev,
        name: textOnlyValue,
      }));

      setSuccess("");
      setError("");
      return;
    }

    // ===================================================
    // OTHER INPUTS
    // ===================================================

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccess("");
    setError("");
  };

  // =====================================================
  // PHONE INPUT
  // =====================================================

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 10) {
      setFormData((prev) => ({
        ...prev,
        phone: value,
      }));
    }

    setSuccess("");
    setError("");
  };

  // =====================================================
  // SUBMIT ENQUIRY
  // =====================================================

  const handleEnquiry = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.service
    ) {
      setError("Please fill all required fields.");
      return;
    }

    // ===================================================
    // NAME VALIDATION - TEXT ONLY
    // ===================================================

    if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      setError("Please enter a valid name using letters only.");
      return;
    }

    // ===================================================
    // PHONE VALIDATION
    // ===================================================

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // ===================================================
    // EMAIL VALIDATION
    // ===================================================

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/enquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();

      console.log("Enquiry saved:", data);

      setSuccess(
        "Thank you! Your enquiry has been submitted successfully."
      );

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error("Enquiry error:", err);

      setError(
        "Unable to submit enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // CURRENT SLIDE
  // =====================================================

  const currentSlide = heroSlides[current];

  // =====================================================
  // SERVICES
  // =====================================================

  const services = [
    {
      icon: FaPlane,
      title: "Flight Bookings",
    },
    {
      icon: FaPassport,
      title: "Visa Assistance",
    },
    {
      icon: FaHotel,
      title: "Hotel Reservations",
    },
    {
      icon: FaShieldAlt,
      title: "Travel Insurance",
    },
    {
      icon: FaCoins,
      title: "Forex Assistance",
    },
    {
      icon: FaUsers,
      title: "Complete Business Travel Support",
    },
  ];

  // =====================================================
  // STATS
  // =====================================================

  const stats = [
    {
      icon: FaGlobe,
      number: "30+",
      title: "Countries Served",
    },
    {
      icon: FaPassport,
      number: "700+",
      title: "Visas Processed",
    },
    {
      icon: FaUsers,
      number: "20+",
      title: "Corporate Clients",
    },
    {
      icon: FaBriefcase,
      number: "50+",
      title: "Successful Business Trips",
    },
    {
      icon: FaArrowRight,
      number: "60%",
      title: "Repeat Client Base",
    },
  ];

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        min-h-[700px]
        md:min-h-[730px]
        lg:min-h-[750px]
      "
    >

      {/* =====================================================
          BACKGROUND CAROUSEL
      ===================================================== */}

      <AnimatePresence mode="wait">

        <motion.div
          key={current}
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.01,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-0
            z-0
          "
        >

          <img
            src={slideImages[current]}
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

          {/* Dark Overall Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-[#001A42]/30
            "
          />

          {/* Left Dark Gradient */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#001331]/90
              via-[#00295D]/65
              via-50%
              to-[#001F4C]/20
            "
          />

          {/* Bottom Gradient */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-56
              bg-gradient-to-t
              from-[#001B3F]/80
              to-transparent
            "
          />

        </motion.div>

      </AnimatePresence>


      {/* =====================================================
          MAIN HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          max-w-[1400px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          pt-14
          md:pt-16
          lg:pt-20
          pb-32
        "
      >

        <div
          className="
            grid
            lg:grid-cols-[1fr_350px]
            xl:grid-cols-[1fr_370px]
            gap-8
            lg:gap-10
            items-center
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              text-white
              max-w-[760px]
              pt-3
              lg:pt-5
            "
          >

            {/* TOP LABEL */}

            <motion.div
              key={`label-${current}`}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                flex
                items-center
                gap-2
                text-[11px]
                sm:text-xs
                md:text-sm
                font-semibold
                uppercase
                tracking-[1.5px]
                text-white/90
                mb-3
              "
            >

              <span>
                International Business Travel
              </span>

              <span className="text-[#fc6602]">
                |
              </span>

              <span>
                Exhibition Travel
              </span>

            </motion.div>


            {/* MAIN HEADING */}

            <motion.h1
              key={`heading-${current}`}
              initial={{
                y: 30,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[70px]
                xl:text-[78px]
                font-extrabold
                leading-[0.98]
                tracking-tight
                drop-shadow-[0_4px_15px_rgba(0,0,0,0.35)]
              "
            >

              <span className="block">
                We Plan.
              </span>

              <span className="block">
                You Travel.
              </span>

              <span
                className="
                  block
                  text-[#FF9D16]
                  drop-shadow-[0_3px_10px_rgba(252,102,2,0.25)]
                "
              >
                We Care.
              </span>

            </motion.h1>


            {/* ORANGE LINE */}

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 110,
                opacity: 1,
              }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
              className="
                h-[3px]
                bg-gradient-to-r
                from-[#FF9D16]
                to-transparent
                mt-5
              "
            />


            {/* DESCRIPTION */}

            <motion.p
              key={`description-${current}`}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              className="
                mt-4
                text-sm
                sm:text-base
                md:text-lg
                text-white/90
                leading-6
                md:leading-7
                max-w-[650px]
                drop-shadow-md
              "
            >
              Complete travel assistance with reliable service,
              expert planning and personalized support.
            </motion.p>


            {/* SERVICE RIBBON */}

            <motion.div
              initial={{
                y: 15,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                mt-4
                inline-flex
                flex-wrap
                items-center
                gap-2
                bg-gradient-to-r
                from-[#FFB000]
                via-[#FF9900]
                to-[#F46B0A]
                text-[#14233C]
                px-4
                py-2
                rounded-sm
                font-bold
                text-[10px]
                sm:text-xs
                shadow-[0_8px_20px_rgba(255,153,0,0.25)]
              "
            >

              <span>
                International Business Travel
              </span>

              <span className="text-[#4D2600]">
                |
              </span>

              <span>
                Exhibition Travel
              </span>

              <span className="text-[#4D2600]">
                |
              </span>

              <span>
                Corporate Travel
              </span>

            </motion.div>


            {/* =================================================
                SERVICE ICONS
            ================================================= */}

            <motion.div
              initial={{
                y: 25,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
              className="
                mt-7
                grid
                grid-cols-3
                sm:grid-cols-6
                max-w-[720px]
              "
            >

              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={index}
                    className="
                      relative
                      flex
                      flex-col
                      items-center
                      justify-center
                      px-2
                      py-1
                      group
                    "
                  >

                    {/* Vertical Divider */}

                    {index !== services.length - 1 && (
                      <span
                        className="
                          hidden
                          sm:block
                          absolute
                          right-0
                          top-1/2
                          -translate-y-1/2
                          h-9
                          w-px
                          bg-white/35
                        "
                      />
                    )}

                    {/* Icon */}

                    <div
                      className="
                        w-10
                        h-10
                        sm:w-11
                        sm:h-11
                        rounded-full
                        border
                        border-[#FFAD18]
                        text-[#FFAD18]
                        flex
                        items-center
                        justify-center
                        group-hover:bg-[#FFAD18]
                        group-hover:text-[#082B60]
                        transition-all
                        duration-300
                      "
                    >
                      <Icon className="text-base sm:text-lg" />
                    </div>

                    {/* Title */}

                    <p
                      className="
                        mt-2
                        text-[8px]
                        sm:text-[9px]
                        md:text-[10px]
                        text-white
                        text-center
                        leading-3
                        max-w-[105px]
                      "
                    >
                      {service.title}
                    </p>

                  </div>
                );
              })}

            </motion.div>

          </div>


          {/* =================================================
              QUICK ENQUIRY
          ================================================= */}

          <motion.div
            initial={{
              x: 60,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.25,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              w-full
              max-w-[350px]
              xl:max-w-[370px]
              mx-auto
              lg:mx-0
              lg:justify-self-end
            "
          >

            <div
              className="
                bg-white
                rounded-[18px]
                p-2
                shadow-[0_20px_60px_rgba(0,0,0,0.30)]
                border
                border-white/40
              "
            >

              <div
                className="
                  rounded-[13px]
                  border
                  border-[#D8E0EB]
                  overflow-hidden
                  bg-white
                "
              >

                {/* =================================================
                    FORM HEADER
                ================================================= */}

                <div
                  className="
                    bg-gradient-to-r
                    from-[#003F9E]
                    via-[#0057B8]
                    to-[#003A8D]
                    px-5
                    py-4
                    text-white
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-9
                        h-9
                        rounded-full
                        bg-white/10
                        border
                        border-white/20
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <FaPlane className="text-white text-sm rotate-[-15deg]" />
                    </div>

                    <div>

                      <h2
                        className="
                          text-lg
                          font-extrabold
                          leading-none
                        "
                      >
                        Quick Enquiry
                      </h2>

                      <p
                        className="
                          text-blue-100
                          mt-1
                          text-[10px]
                        "
                      >
                        Let us help you plan your perfect journey.
                      </p>

                    </div>

                  </div>

                </div>


                {/* =================================================
                    FORM BODY
                ================================================= */}

                <div className="px-4 py-4">

                  <form
                    onSubmit={handleEnquiry}
                    className="space-y-2.5"
                  >

                    {/* =================================================
                        NAME - TEXT ONLY
                    ================================================= */}

                    <div className="relative">

                      <FaUser
                        className="
                          absolute
                          left-3.5
                          top-1/2
                          -translate-y-1/2
                          text-[#003DA5]
                          text-[11px]
                          z-10
                        "
                      />

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        autoComplete="name"
                        inputMode="text"
                        pattern="[A-Za-z\s]+"
                        className="
                          w-full
                          h-10
                          pl-9
                          pr-3
                          border
                          border-[#CDD6E2]
                          rounded-lg
                          text-gray-700
                          text-xs
                          bg-white
                          outline-none
                          placeholder:text-gray-400
                          focus:border-[#0057B8]
                          focus:ring-2
                          focus:ring-blue-100
                          transition
                        "
                      />

                    </div>


                    {/* =================================================
                        PHONE
                    ================================================= */}

                    <div className="relative">

                      <FaPhoneAlt
                        className="
                          absolute
                          left-3.5
                          top-1/2
                          -translate-y-1/2
                          text-[#003DA5]
                          text-[11px]
                          z-10
                        "
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="Mobile Number"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        required
                        className="
                          w-full
                          h-10
                          pl-9
                          pr-3
                          border
                          border-[#CDD6E2]
                          rounded-lg
                          text-gray-700
                          text-xs
                          bg-white
                          outline-none
                          placeholder:text-gray-400
                          focus:border-[#0057B8]
                          focus:ring-2
                          focus:ring-blue-100
                          transition
                        "
                      />

                    </div>


                    {/* =================================================
                        EMAIL
                    ================================================= */}

                    <div className="relative">

                      <FaEnvelope
                        className="
                          absolute
                          left-3.5
                          top-1/2
                          -translate-y-1/2
                          text-[#003DA5]
                          text-[11px]
                          z-10
                        "
                      />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        className="
                          w-full
                          h-10
                          pl-9
                          pr-3
                          border
                          border-[#CDD6E2]
                          rounded-lg
                          text-gray-700
                          text-xs
                          bg-white
                          outline-none
                          placeholder:text-gray-400
                          focus:border-[#0057B8]
                          focus:ring-2
                          focus:ring-blue-100
                          transition
                        "
                      />

                    </div>


                    {/* =================================================
                        SERVICE
                    ================================================= */}

                    <div className="relative">

                      <FaGlobe
                        className="
                          absolute
                          left-3.5
                          top-1/2
                          -translate-y-1/2
                          text-[#003DA5]
                          text-[11px]
                          z-10
                        "
                      />

                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="
                          w-full
                          h-10
                          pl-9
                          pr-8
                          border
                          border-[#CDD6E2]
                          rounded-lg
                          text-gray-700
                          text-xs
                          bg-white
                          outline-none
                          appearance-none
                          focus:border-[#0057B8]
                          focus:ring-2
                          focus:ring-blue-100
                          transition
                        "
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

                      <span
                        className="
                          absolute
                          right-3
                          top-1/2
                          -translate-y-1/2
                          text-[#003DA5]
                          text-xs
                          pointer-events-none
                        "
                      >
                        ▾
                      </span>

                    </div>


                    {/* =================================================
                        MESSAGE
                    ================================================= */}

                    <div className="relative">

                      <FaCommentDots
                        className="
                          absolute
                          left-3.5
                          top-3
                          text-[#003DA5]
                          text-[11px]
                        "
                      />

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Your Message"
                        className="
                          w-full
                          pl-9
                          pr-3
                          py-2.5
                          border
                          border-[#CDD6E2]
                          rounded-lg
                          text-gray-700
                          text-xs
                          bg-white
                          outline-none
                          resize-none
                          placeholder:text-gray-400
                          focus:border-[#0057B8]
                          focus:ring-2
                          focus:ring-blue-100
                          transition
                        "
                      />

                    </div>


                    {/* =================================================
                        SUCCESS
                    ================================================= */}

                    {success && (
                      <p
                        className="
                          text-green-600
                          text-[10px]
                          font-semibold
                          leading-4
                        "
                      >
                        {success}
                      </p>
                    )}


                    {/* =================================================
                        ERROR
                    ================================================= */}

                    {error && (
                      <p
                        className="
                          text-red-600
                          text-[10px]
                          font-semibold
                          leading-4
                        "
                      >
                        {error}
                      </p>
                    )}


                    {/* =================================================
                        SUBMIT
                    ================================================= */}

                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        group
                        w-full
                        h-10
                        flex
                        items-center
                        justify-center
                        gap-2
                        bg-gradient-to-r
                        from-[#0057B8]
                        via-[#0057B8]
                        to-[#fc6602]
                        hover:from-[#004A9D]
                        hover:via-[#0057B8]
                        hover:to-[#F45B00]
                        text-white
                        rounded-lg
                        font-bold
                        text-xs
                        shadow-[0_8px_20px_rgba(0,87,184,0.25)]
                        hover:shadow-[0_10px_25px_rgba(252,102,2,0.25)]
                        transition-all
                        duration-300
                        disabled:opacity-60
                        disabled:cursor-not-allowed
                      "
                    >

                      {loading
                        ? "Submitting..."
                        : "Submit Enquiry"}

                      {!loading && (
                        <FaPlane
                          className="
                            text-[10px]
                            group-hover:translate-x-1
                            transition-transform
                          "
                        />
                      )}

                    </button>

                  </form>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM STATS BAR
      ===================================================== */}

      <motion.div
        initial={{
          y: 60,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-3
          md:bottom-5
          left-1/2
          -translate-x-1/2
          z-20
          w-[calc(100%-30px)]
          max-w-[1220px]
        "
      >

        <div
          className="
            bg-[#031F4E]/95
            backdrop-blur-md
            border
            border-white/20
            rounded-[18px]
            px-3
            sm:px-5
            py-3
            shadow-[0_15px_40px_rgba(0,0,0,0.30)]
          "
        >

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-5
              divide-x
              divide-white/20
            "
          >

            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    sm:gap-3
                    px-2
                    sm:px-3
                    py-2
                  "
                >

                  <div
                    className="
                      w-8
                      h-8
                      sm:w-10
                      sm:h-10
                      rounded-full
                      border
                      border-[#FFAC18]
                      text-[#FFAC18]
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Icon className="text-xs sm:text-sm" />
                  </div>

                  <div>

                    <p
                      className="
                        text-xl
                        sm:text-2xl
                        font-extrabold
                        text-white
                        leading-none
                      "
                    >
                      {stat.number}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[15px]
                        md:text-[13px]
                        sm:text-[9px]
                        text-[#f37005ea]
                        leading-3
                        max-w-[100px]
                      "
                    >
                      {stat.title}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </motion.div>


      {/* =====================================================
          SLIDER DOTS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-1
          left-1/2
          -translate-x-1/2
          translate-y-full
          flex
          gap-1.5
          z-30
          mb-2
        "
      >

        {slideImages.map((_, index) => (

          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-300

              ${
                current === index
                  ? "bg-[#FF9D16] w-7"
                  : "bg-white/60 w-1.5 hover:bg-white"
              }
            `}
          />

        ))}

      </div>

    </section>
  );
}