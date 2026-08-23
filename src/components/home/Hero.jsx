import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaCommentDots,
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
  // AUTO SLIDER - 9 SECONDS
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

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit mobile number.");
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

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        min-h-[650px]
        lg:min-h-[700px]
      "
    >

      {/* =================================================
          BACKGROUND SLIDER
      ================================================= */}

      <AnimatePresence mode="wait">

        <motion.div
          key={current}
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            absolute
            inset-0
          "
        >

          <img
            src={slideImages[current]}
            alt="Sarathi NX International Travel"
            className="
              w-full
              h-full
              object-cover
            "
          />

          {/* Light Overlay */}

          <div className="absolute inset-0 bg-black/20" />

          {/* Left Gradient */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#001F54]/60
              via-[#001F54]/25
              to-transparent
            "
          />

        </motion.div>

      </AnimatePresence>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div
        className="
          relative
          z-10
          max-w-[1500px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-14
          lg:py-16
        "
      >

        <div
          className="
            grid
            lg:grid-cols-[1fr_330px]
            gap-10
            lg:gap-14
            items-start
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              text-white
              pt-10
              lg:pt-16
              max-w-4xl
            "
          >

            <motion.p
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
                text-blue-100
                font-semibold
                uppercase
                tracking-[2px]
                text-sm
                sm:text-base
                mb-4
              "
            >
              International Exhibition & Business Travel
            </motion.p>


            {/* MAIN HEADING */}

            <motion.h1
              key={`heading-${current}`}
              initial={{
                y: 25,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-[1.05]
                tracking-tight
                drop-shadow-lg
              "
            >
              {currentSlide?.title}
            </motion.h1>


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
                mt-5
                text-base
                sm:text-lg
                lg:text-xl
                text-white/90
                leading-relaxed
                max-w-3xl
                drop-shadow-md
              "
            >
              {currentSlide?.description}
            </motion.p>


            {/* TAGLINE */}

            <motion.p
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
                mt-5
                text-lg
                sm:text-xl
                font-semibold
                text-white
              "
            >
              We Plan. You Travel. We Care.
            </motion.p>

          </div>


          {/* =================================================
              QUICK ENQUIRY FORM
          ================================================= */}

          <motion.div
            initial={{
              x: 50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="
              w-full
              max-w-[330px]
              lg:-mt-2
              mx-auto
              lg:mx-0
            "
          >

            <div
              className="
                bg-white
                rounded-xl
                shadow-2xl
                overflow-hidden
              "
            >

              {/* =================================================
                  FORM HEADER
              ================================================= */}

              <div
                className="
                  bg-[#003DA5]
                  px-5
                  py-3
                "
              >

                <h2
                  className="
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  Quick Enquiry
                </h2>

                <p
                  className="
                    text-blue-100
                    mt-0.5
                    text-xs
                  "
                >
                  Let us help you plan your perfect journey.
                </p>

              </div>


              {/* =================================================
                  FORM BODY
              ================================================= */}

              <div className="p-4">

                <form
                  onSubmit={handleEnquiry}
                  className="space-y-2"
                >

                  {/* NAME */}

                  <div className="relative">

                    <FaUser
                      className="
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        text-[#003DA5]
                        text-xs
                      "
                    />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="
                        w-full
                        pl-9
                        pr-3
                        h-9
                        border
                        border-gray-300
                        rounded-md
                        text-gray-700
                        text-sm
                        outline-none
                        focus:border-[#003DA5]
                        focus:ring-1
                        focus:ring-[#003DA5]
                      "
                    />

                  </div>


                  {/* MOBILE */}

                  <div className="relative">

                    <FaPhoneAlt
                      className="
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        text-[#003DA5]
                        text-xs
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
                        pl-9
                        pr-3
                        h-9
                        border
                        border-gray-300
                        rounded-md
                        text-gray-700
                        text-sm
                        outline-none
                        focus:border-[#003DA5]
                        focus:ring-1
                        focus:ring-[#003DA5]
                      "
                    />

                  </div>


                  {/* EMAIL */}

                  <div className="relative">

                    <FaEnvelope
                      className="
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        text-[#003DA5]
                        text-xs
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
                        pl-9
                        pr-3
                        h-9
                        border
                        border-gray-300
                        rounded-md
                        text-gray-700
                        text-sm
                        outline-none
                        focus:border-[#003DA5]
                        focus:ring-1
                        focus:ring-[#003DA5]
                      "
                    />

                  </div>


                  {/* SERVICE */}

                  <div className="relative">

                    <FaGlobe
                      className="
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        text-[#003DA5]
                        text-xs
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
                        pl-9
                        pr-3
                        h-9
                        border
                        border-gray-300
                        rounded-md
                        text-gray-700
                        text-sm
                        outline-none
                        appearance-none
                        bg-white
                        focus:border-[#003DA5]
                        focus:ring-1
                        focus:ring-[#003DA5]
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

                  </div>


                  {/* MESSAGE */}

                  <div className="relative">

                    <FaCommentDots
                      className="
                        absolute
                        left-3
                        top-3
                        text-[#003DA5]
                        text-xs
                      "
                    />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                      placeholder="Your Message"
                      className="
                        w-full
                        pl-9
                        pr-3
                        py-2
                        border
                        border-gray-300
                        rounded-md
                        text-gray-700
                        text-sm
                        outline-none
                        resize-none
                        focus:border-[#003DA5]
                        focus:ring-1
                        focus:ring-[#003DA5]
                      "
                    />

                  </div>


                  {/* SUCCESS */}

                  {success && (
                    <p
                      className="
                        text-green-600
                        text-[11px]
                        font-medium
                      "
                    >
                      {success}
                    </p>
                  )}


                  {/* ERROR */}

                  {error && (
                    <p
                      className="
                        text-red-600
                        text-[11px]
                        font-medium
                      "
                    >
                      {error}
                    </p>
                  )}


                  {/* SUBMIT */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full
                      h-9
                       bg-gradient-to-r
                          from-[#0057B8]
                          via-[#0057B8]
                          to-[#fc6602]
                          hover:from-[#004494]
                          hover:via-[#0057B8]
                          hover:to-[#fc6602]
                          text-white
                      rounded-md
                      font-bold
                      text-sm
                      transition-all
                      duration-300
                    "
                  >
                    {loading
                      ? "Submitting..."
                      : "Submit Enquiry"}
                  </button>

                </form>

              </div>

            </div>

          </motion.div>

        </div>

      </div>


      {/* =================================================
          SLIDER DOTS
      ================================================= */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          flex
          gap-2
          z-20
        "
      >

        {slideImages.map((_, index) => (

          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-2.5
              rounded-full
              transition-all
              duration-300

              ${
                current === index
                  ? "bg-white w-8"
                  : "bg-white/50 w-2.5 hover:bg-white"
              }
            `}
          />

        ))}

      </div>

    </section>
  );
}