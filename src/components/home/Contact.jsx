import { useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
  FaPaperPlane,
  FaUser,
  FaGlobeAsia,
  FaShieldAlt,
  FaThumbsUp,
  FaComments,
  FaThLarge,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

import Reveal from "../common/Reveal";
import worldMap from "../../assets/images/contact/world-map.png";

export default function Contact() {
  // =========================================================
  // API URL
  // =========================================================

  const API_URL = "https://www.sarathinx.com/api/enquiries";

  // =========================================================
  // FORM STATE
  // =========================================================

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

  // =========================================================
  // WHATSAPP STATE
  // =========================================================

  const [submittedData, setSubmittedData] = useState(null);

  // =========================================================
  // HANDLE INPUT
  // =========================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove old messages while user is typing
    setSuccess("");
    setError("");
  };

  // =========================================================
  // NAME INPUT
  // =========================================================

  const handleNameChange = (e) => {
    const value = e.target.value
      .replace(/[^a-zA-Z\s.'-]/g, "")
      .slice(0, 100);

    setFormData((prev) => ({
      ...prev,
      name: value,
    }));

    setSuccess("");
    setError("");
  };

  // =========================================================
  // PHONE INPUT
  // =========================================================

  const handlePhoneChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 10);

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));

    setSuccess("");
    setError("");
  };

  // =========================================================
  // VALIDATION
  // =========================================================

  const validateForm = () => {
    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const service = formData.service.trim();
    const message = formData.message.trim();

    // Required fields
    if (!name || !phone || !email || !service || !message) {
      return "Please fill in all the required fields.";
    }

    // Name
    if (!/^[a-zA-Z\s.'-]+$/.test(name)) {
      return "Please enter a valid name using letters only.";
    }

    // Phone
    if (!/^[0-9]{10}$/.test(phone)) {
      return "Please enter a valid 10-digit mobile number.";
    }

    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address.";
    }

    // Message
    if (message.length < 5) {
      return "Please enter a little more detail in your message.";
    }

    return "";
  };

  // =========================================================
  // SUBMIT FORM
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");
    setSubmittedData(null);

    // Validate
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      // Create clean payload
      const payload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        service: formData.service.trim(),
        message: formData.message.trim(),
      };

      console.log("Sending enquiry:", payload);

      // =====================================================
      // API REQUEST
      // =====================================================

      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(payload),
      });

      console.log("API Status:", response.status);

      // =====================================================
      // HANDLE ERROR RESPONSE
      // =====================================================

      if (!response.ok) {
        let serverMessage = "";

        try {
          const errorData = await response.json();

          serverMessage =
            errorData?.message ||
            errorData?.error ||
            "";
        } catch {
          // Response may not contain JSON
        }

        if (response.status === 400) {
          throw new Error(
            serverMessage ||
              "Invalid enquiry details. Please check your information."
          );
        }

        if (response.status === 401) {
          throw new Error(
            "You are not authorized to submit this enquiry."
          );
        }

        if (response.status === 403) {
          throw new Error(
            "Enquiry submission is blocked by the server. Please check the backend security configuration."
          );
        }

        if (response.status === 404) {
          throw new Error(
            "Enquiry API was not found. Please check the backend URL."
          );
        }

        if (response.status >= 500) {
          throw new Error(
            "Server error. Please try again after some time."
          );
        }

        throw new Error(
          serverMessage ||
            `Server returned ${response.status}.`
        );
      }

      // =====================================================
      // READ SUCCESS RESPONSE
      // =====================================================

      let data = null;

      try {
        data = await response.json();
      } catch {
        // Backend may return empty response
        data = null;
      }

      console.log("Enquiry saved successfully:", data);

      // =====================================================
      // SAVE SUBMITTED DATA FOR WHATSAPP
      // =====================================================

      setSubmittedData(payload);

      // =====================================================
      // SUCCESS MESSAGE
      // =====================================================

      setSuccess(
        "Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly."
      );

      // =====================================================
      // RESET FORM
      // =====================================================

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error("Enquiry submission error:", err);

      // =====================================================
      // NETWORK ERROR
      // =====================================================

      if (err instanceof TypeError && err.message === "Failed to fetch") {
        setError(
          "Unable to connect to the server. Please make sure the Spring Boot backend is running on port 8080."
        );
      } else {
        setError(
          err?.message ||
            "Unable to submit enquiry. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // WHATSAPP AFTER SUCCESS
  // =========================================================

  const handleWhatsApp = () => {
    if (!submittedData) {
      return;
    }

    const whatsappNumber = "917666984626";

    const whatsappMessage = `
Hello Sarathi NX,

I have submitted a travel enquiry through your website.

Name: ${submittedData.name}
Mobile: ${submittedData.phone}
Email: ${submittedData.email}
Interested In: ${submittedData.service}

Message:
${submittedData.message}

Thank you.
    `.trim();

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // =========================================================
  // CONTACT ITEMS
  // =========================================================

  const contactItems = [
    {
      icon: FaPhoneAlt,
      label: "CALL US",
      content: (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <a
            href="tel:+917666984626"
            className="hover:text-[#fc6602] transition-colors"
          >
            +91 766 698 4626
          </a>

          <span className="hidden sm:inline text-white/40">
            |
          </span>

          <a
            href="tel:+918657867181"
            className="hover:text-[#fc6602] transition-colors"
          >
            +91 865 786 7181
          </a>
        </div>
      ),
    },

    {
      icon: FaEnvelope,
      label: "EMAIL US",
      content: (
        <a
          href="mailto:sajid@sarathinx.com"
          className="hover:text-[#fc6602] transition-colors break-all"
        >
          sajid@sarathinx.com
        </a>
      ),
    },

    {
      icon: FaMapMarkerAlt,
      label: "OUR OFFICE",
      content: (
        <div className="leading-5">
          1st Floor, Office No. 026, Crystal Plaza CHS Ltd,
          <br />
          Station Road, Mira Road East, Thane - 401107
        </div>
      ),
    },

    {
      icon: FaClock,
      label: "WORKING HOURS",
      content: (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>Monday - Saturday</span>

          <span className="hidden sm:inline text-white/40">
            |
          </span>

          <span className="text-white/85">
            9:30 AM - 7:00 PM
          </span>
        </div>
      ),
    },
  ];

  // =========================================================
  // BOTTOM FEATURES
  // =========================================================

  const features = [
    {
      icon: FaComments,
      title: "Expert Assistance",
      text: "Dedicated travel experts to assist you 24/7",
    },
    {
      icon: FaGlobeAsia,
      title: "Global Support",
      text: "Worldwide network & trusted partners",
    },
    {
      icon: FaShieldAlt,
      title: "Reliable Service",
      text: "Prompt, reliable & transparent solutions",
    },
    {
      icon: FaThumbsUp,
      title: "Customer First",
      text: "Your journey is our priority",
    },
  ];

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#F5F8FC]
        py-14
        md:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          absolute
          -top-32
          -left-32
          w-96
          h-96
          rounded-full
          bg-blue-100/40
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -right-32
          w-96
          h-96
          rounded-full
          bg-orange-100/40
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">

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
                CONTACT US
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
              Let's Plan Your{" "}

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
                Journey.
              </span>
            </h2>

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-[10px]
                mt-[10px]
                text-center
              "
            >

              <span
                className="
                  text-[18px]
                  md:text-[20px]
                  font-bold
                  leading-none
                  text-[#E76624]
                "
              >
                Expert Travel Assistance
              </span>

              <span
                className="
                  text-[18px]
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
                  text-[18px]
                  md:text-[20px]
                  font-bold
                  leading-none
                  text-[#19396D]
                "
              >
                Let's make your journey simple.
              </span>

            </div>

            <p
              className="
                max-w-[850px]
                mx-auto
                mt-[14px]
                text-center
                text-[15px]
                md:text-[16px]
                leading-[1.55]
                font-normal
                text-[#40516D]
              "
            >
              Planning an exhibition, business trip or corporate journey?
              Talk to our travel experts and let us take care of the details.
            </p>

          </div>
        </Reveal>

        {/* =====================================================
            MAIN CONTACT + FORM
        ===================================================== */}

        <div
          className="
            grid
            lg:grid-cols-[1.215fr_1.045fr]
            gap-5
            lg:gap-6
            items-stretch
          "
        >

          {/* ===================================================
              LEFT CONTACT CARD
          =================================================== */}

          <Reveal direction="left">

            <div
              className="
                relative
                overflow-hidden
                h-full
                min-h-[600px]
                rounded-[24px]
                bg-gradient-to-br
                from-[#061F52]
                via-[#062C70]
                to-[#003D8F]
                px-6
                py-7
                md:px-8
                md:py-8
                text-white
                shadow-[0_20px_60px_rgba(0,48,120,0.20)]
              "
            >

              <img
                src={worldMap}
                alt=""
                aria-hidden="true"
                className="
                  absolute
                  top-0
                  right-0
                  w-[65%]
                  md:w-[60%]
                  lg:w-[58%]
                  h-auto
                  opacity-[0.18]
                  pointer-events-none
                  select-none
                  object-contain
                  object-right-top
                "
              />

              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-48
                  h-48
                  rounded-full
                  bg-white/[0.04]
                  pointer-events-none
                "
              />

              <div
                className="
                  absolute
                  -bottom-24
                  -left-20
                  w-56
                  h-56
                  rounded-full
                  bg-[#fc6602]/10
                  pointer-events-none
                "
              />

              <div className="relative z-10 h-full flex flex-col">

                {/* LEFT HEADING */}

                <div className="mb-6">

                  <div className="flex items-center gap-2 mb-3">

                    <FaPaperPlane
                      className="
                        text-[#fc6602]
                        text-lg
                        rotate-[-10deg]
                      "
                    />

                    <span
                      className="
                        uppercase
                        tracking-[2.5px]
                        text-[11px]
                        md:text-xs
                        font-bold
                        text-[#fc6602]
                      "
                    >
                      We're Here To Help
                    </span>

                  </div>

                  <h3
                    className="
                      text-3xl
                      md:text-4xl
                      font-extrabold
                      leading-[1.15]
                      max-w-md
                    "
                  >
                    Connect With Our
                    <br />
                    Travel Experts
                  </h3>

                  <div
                    className="
                      mt-4
                      w-20
                      h-[3px]
                      bg-gradient-to-r
                      from-[#fc6602]
                      to-transparent
                    "
                  />

                  <p
                    className="
                      mt-4
                      text-sm
                      md:text-base
                      text-white/85
                      leading-6
                      max-w-xl
                    "
                  >
                    Get expert assistance for exhibitions,
                    corporate trips, business travel and visa support.
                  </p>

                </div>

                {/* CONTACT ITEMS */}

                <div className="space-y-2.5">

                  {contactItems.map((item, index) => {

                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="
                          group
                          flex
                          items-center
                          gap-4
                          rounded-[15px]
                          border
                          border-white/[0.10]
                          bg-white/[0.07]
                          px-3
                          py-3
                          md:px-3.5
                          md:py-3
                          backdrop-blur-sm
                          hover:bg-white/[0.12]
                          hover:border-white/[0.18]
                          transition-all
                          duration-300
                        "
                      >

                        <div
                          className="
                            w-11
                            h-11
                            md:w-12
                            md:h-12
                            shrink-0
                            rounded-full
                            bg-[#06285F]
                            border
                            border-white/10
                            flex
                            items-center
                            justify-center
                            text-[#fc6602]
                            shadow-inner
                            group-hover:scale-105
                            transition-transform
                            duration-300
                          "
                        >
                          <Icon className="text-base md:text-lg" />
                        </div>

                        <div
                          className="
                            min-w-0
                            text-[13px]
                            md:text-sm
                            leading-5
                          "
                        >

                          <p
                            className="
                              text-[#fc6602]
                              text-[10px]
                              md:text-[11px]
                              uppercase
                              tracking-wide
                              font-bold
                              mb-0.5
                            "
                          >
                            {item.label}
                          </p>

                          <div className="font-medium text-white">
                            {item.content}
                          </div>

                        </div>

                      </div>
                    );
                  })}

                </div>

                {/* WHATSAPP BUTTON */}

                <a
                  href="https://wa.me/917666984626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    whatsapp-pulse
                    group
                    mt-4
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-3
                    rounded-[14px]
                    px-4
                    py-3
                    bg-gradient-to-r
                    from-[#00AEEF]
                    via-[#1669D8]
                    to-[#fc6602]
                    shadow-[0_10px_30px_rgba(0,0,0,0.20)]
                    hover:shadow-[0_14px_35px_rgba(252,102,2,0.30)]
                    transition-all
                    duration-300
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-[#25D366]
                        flex
                        items-center
                        justify-center
                        shadow-lg
                      "
                    >
                      <FaWhatsapp className="text-xl text-white" />
                    </div>

                    <div>

                      <p className="font-bold text-sm">
                        Chat with us on WhatsApp
                      </p>

                      <p className="text-[11px] text-white/85">
                        Quick responses for your travel queries
                      </p>

                    </div>

                  </div>

                  <FaArrowRight
                    className="
                      text-white
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />

                </a>

              </div>

            </div>

          </Reveal>

          {/* ===================================================
              RIGHT ENQUIRY FORM
          =================================================== */}

          <Reveal direction="right">

            <div
              className="
                h-full
                bg-white
                rounded-[24px]
                px-6
                py-7
                md:px-7
                md:py-8
                border
                border-gray-100
                shadow-[0_20px_55px_rgba(20,40,80,0.08)]
              "
            >

              {/* FORM HEADING */}

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                  mb-7
                "
              >

                <div>

                  <span
                    className="
                      uppercase
                      tracking-[2.5px]
                      text-[11px]
                      font-bold
                      text-[#fc6602]
                    "
                  >
                    Send An Enquiry
                  </span>

                  <h3
                    className="
                      text-2xl
                      md:text-[30px]
                      font-extrabold
                      text-[#0A2144]
                      mt-1.5
                      leading-tight
                    "
                  >
                    Tell Us About Your Trip
                  </h3>

                  <p
                    className="
                      text-gray-500
                      text-xs
                      md:text-sm
                      mt-2
                      leading-5
                      max-w-[430px]
                    "
                  >
                    Share your requirements and our team will get back to you.
                  </p>

                </div>

                <div
                  className="
                    hidden
                    sm:flex
                    w-12
                    h-12
                    shrink-0
                    rounded-xl
                    bg-gradient-to-br
                    from-[#fc6602]
                    to-[#0057B8]
                    text-white
                    items-center
                    justify-center
                    shadow-lg
                    rotate-3
                  "
                >
                  <FaPaperPlane className="text-lg rotate-[-8deg]" />
                </div>

              </div>

              {/* =================================================
                  SUCCESS MESSAGE
              ================================================= */}

              {success && (
                <div
                  className="
                    mb-5
                    rounded-xl
                    border
                    border-green-200
                    bg-green-50
                    px-4
                    py-3
                    flex
                    items-start
                    gap-3
                  "
                >

                  <FaCheckCircle
                    className="
                      text-green-600
                      mt-0.5
                      shrink-0
                    "
                  />

                  <div>

                    <p
                      className="
                        text-sm
                        font-bold
                        text-green-700
                      "
                    >
                      Enquiry Submitted
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        leading-5
                        text-green-700
                      "
                    >
                      {success}
                    </p>

                  </div>

                </div>
              )}

              {/* =================================================
                  ERROR MESSAGE
              ================================================= */}

              {error && (
                <div
                  className="
                    mb-5
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    px-4
                    py-3
                    flex
                    items-start
                    gap-3
                  "
                >

                  <FaExclamationCircle
                    className="
                      text-red-600
                      mt-0.5
                      shrink-0
                    "
                  />

                  <div>

                    <p
                      className="
                        text-sm
                        font-bold
                        text-red-700
                      "
                    >
                      Submission Failed
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        leading-5
                        text-red-700
                      "
                    >
                      {error}
                    </p>

                  </div>

                </div>
              )}

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* FULL NAME */}

                <div>

                  <label
                    className="
                      block
                      text-[11px]
                      font-bold
                      text-[#182B49]
                      mb-1.5
                    "
                  >
                    Full Name
                  </label>

                  <div className="relative">

                    <FaUser
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#52637C]
                        text-sm
                        pointer-events-none
                      "
                    />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleNameChange}
                      required
                      autoComplete="name"
                      maxLength={100}
                      placeholder="Enter your name"
                      className="
                        w-full
                        h-12
                        pl-11
                        pr-4
                        rounded-xl
                        bg-white
                        border
                        border-gray-200
                        text-sm
                        text-[#182B49]
                        placeholder:text-gray-400
                        outline-none
                        focus:border-[#0057B8]
                        focus:ring-4
                        focus:ring-blue-50
                        transition-all
                      "
                    />

                  </div>

                </div>

                {/* PHONE + EMAIL */}

                <div
                  className="
                    grid
                    sm:grid-cols-[0.85fr_1.15fr]
                    gap-3
                  "
                >

                  {/* PHONE */}

                  <div>

                    <label
                      className="
                        block
                        text-[11px]
                        font-bold
                        text-[#182B49]
                        mb-1.5
                      "
                    >
                      Phone Number
                    </label>

                    <div className="relative">

                      <FaPhoneAlt
                        className="
                          absolute
                          left-4
                          top-1/2
                          -translate-y-1/2
                          text-[#52637C]
                          text-sm
                          pointer-events-none
                        "
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        required
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        minLength={10}
                        autoComplete="tel"
                        placeholder="10-digit mobile"
                        className="
                          w-full
                          h-12
                          pl-11
                          pr-3
                          rounded-xl
                          bg-white
                          border
                          border-gray-200
                          text-sm
                          text-[#182B49]
                          placeholder:text-gray-400
                          outline-none
                          focus:border-[#0057B8]
                          focus:ring-4
                          focus:ring-blue-50
                          transition-all
                        "
                      />

                    </div>

                  </div>

                  {/* EMAIL */}

                  <div>

                    <label
                      className="
                        block
                        text-[11px]
                        font-bold
                        text-[#182B49]
                        mb-1.5
                      "
                    >
                      Email Address
                    </label>

                    <div className="relative">

                      <FaEnvelope
                        className="
                          absolute
                          left-4
                          top-1/2
                          -translate-y-1/2
                          text-[#52637C]
                          text-sm
                          pointer-events-none
                        "
                      />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="Enter your email"
                        className="
                          w-full
                          h-12
                          pl-11
                          pr-3
                          rounded-xl
                          bg-white
                          border
                          border-gray-200
                          text-sm
                          text-[#182B49]
                          placeholder:text-gray-400
                          outline-none
                          focus:border-[#0057B8]
                          focus:ring-4
                          focus:ring-blue-50
                          transition-all
                        "
                      />

                    </div>

                  </div>

                </div>

                {/* SERVICE */}

                <div>

                  <label
                    className="
                      block
                      text-[11px]
                      font-bold
                      text-[#182B49]
                      mb-1.5
                    "
                  >
                    Service Required
                  </label>

                  <div className="relative">

                    <FaThLarge
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#52637C]
                        text-sm
                        pointer-events-none
                        z-10
                      "
                    />

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="
                        appearance-none
                        w-full
                        h-12
                        pl-11
                        pr-10
                        rounded-xl
                        bg-white
                        border
                        border-gray-200
                        text-sm
                        text-[#182B49]
                        outline-none
                        focus:border-[#0057B8]
                        focus:ring-4
                        focus:ring-blue-50
                        transition-all
                      "
                    >

                      <option value="" disabled>
                        Select a service
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
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-[#40516D]
                      "
                    >
                      ▾
                    </span>

                  </div>

                </div>

                {/* MESSAGE */}

                <div>

                  <label
                    className="
                      block
                      text-[11px]
                      font-bold
                      text-[#182B49]
                      mb-1.5
                    "
                  >
                    Message
                  </label>

                  <div className="relative">

                    <FaComments
                      className="
                        absolute
                        left-4
                        top-4
                        text-[#52637C]
                        text-sm
                        pointer-events-none
                      "
                    />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      maxLength={1000}
                      placeholder="Tell us about your travel requirements..."
                      className="
                        w-full
                        pl-11
                        pr-4
                        py-3.5
                        rounded-xl
                        bg-white
                        border
                        border-gray-200
                        text-sm
                        text-[#182B49]
                        placeholder:text-gray-400
                        outline-none
                        resize-none
                        focus:border-[#0057B8]
                        focus:ring-4
                        focus:ring-blue-50
                        transition-all
                      "
                    />

                  </div>

                </div>

                {/* =================================================
                    SUBMIT BUTTON
                ================================================= */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    w-full
                    h-[52px]
                    mt-2
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    bg-gradient-to-r
                    from-[#0057B8]
                    via-[#0753B5]
                    to-[#fc6602]
                    text-white
                    rounded-xl
                    font-bold
                    text-sm
                    shadow-[0_10px_25px_rgba(0,87,184,0.20)]
                    hover:shadow-[0_14px_30px_rgba(0,87,184,0.28)]
                    hover:-translate-y-0.5
                    transition-all
                    duration-300
                    overflow-hidden
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                    disabled:hover:translate-y-0
                  "
                >

                  {loading ? (
                    <>
                      <span
                        className="
                          w-4
                          h-4
                          border-2
                          border-white/30
                          border-t-white
                          rounded-full
                          animate-spin
                        "
                      />

                      <span>
                        Submitting...
                      </span>
                    </>
                  ) : (
                    <>
                      <span>
                        Send Enquiry
                      </span>

                      <FaPaperPlane
                        className="
                          text-sm
                          rotate-[-8deg]
                          group-hover:translate-x-2
                          group-hover:-translate-y-1
                          transition-transform
                          duration-500
                        "
                      />
                    </>
                  )}

                </button>

                {/* =================================================
                    WHATSAPP AFTER SUCCESS
                ================================================= */}

                {submittedData && !loading && (
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="
                      group
                      w-full
                      h-[48px]
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      bg-[#25D366]
                      hover:bg-[#1ebe5d]
                      text-white
                      rounded-xl
                      font-bold
                      text-sm
                      shadow-[0_8px_20px_rgba(37,211,102,0.20)]
                      hover:shadow-[0_12px_25px_rgba(37,211,102,0.28)]
                      transition-all
                      duration-300
                    "
                  >

                    <FaWhatsapp
                      className="
                        text-lg
                        group-hover:scale-110
                        transition-transform
                      "
                    />

                    <span>
                      Continue on WhatsApp
                    </span>

                    <FaArrowRight
                      className="
                        text-xs
                        group-hover:translate-x-1
                        transition-transform
                      "
                    />

                  </button>
                )}

              </form>

            </div>

          </Reveal>

        </div>

        {/* =====================================================
            BOTTOM FEATURE STRIP
        ===================================================== */}

        <Reveal>

          <div
            className="
              mt-5
              bg-white
              rounded-[20px]
              border
              border-gray-100
              shadow-[0_12px_40px_rgba(20,40,80,0.06)]
              px-5
              py-5
              md:px-7
              md:py-6
            "
          >

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >

              {features.map((feature, index) => {

                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className={`
                      flex
                      items-center
                      gap-4
                      px-3
                      md:px-5
                      py-3
                      ${
                        index !== features.length - 1
                          ? "lg:border-r border-gray-200"
                          : ""
                      }
                    `}
                  >

                    <div
                      className="
                        w-12
                        h-12
                        shrink-0
                        rounded-full
                        bg-[#082C68]
                        text-white
                        flex
                        items-center
                        justify-center
                        shadow-[0_6px_18px_rgba(0,55,130,0.18)]
                      "
                    >
                      <Icon className="text-lg" />
                    </div>

                    <div>

                      <h4
                        className="
                          text-sm
                          font-extrabold
                          text-[#0A3A82]
                        "
                      >
                        {feature.title}
                      </h4>

                      <p
                        className="
                          mt-1
                          text-xs
                          md:text-[13px]
                          text-gray-600
                          leading-5
                          max-w-[190px]
                        "
                      >
                        {feature.text}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </Reveal>

      </div>

      {/* =====================================================
          WHATSAPP ANIMATION
      ===================================================== */}

      <style>{`

        @keyframes whatsappPulse {

          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.015);
          }

        }

        .whatsapp-pulse {
          animation: whatsappPulse 2.5s ease-in-out infinite;
        }

        .whatsapp-pulse:hover {
          animation-play-state: paused;
          transform: scale(1.02);
        }

      `}</style>

    </section>
  );
}