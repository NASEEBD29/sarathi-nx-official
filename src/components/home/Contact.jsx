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
} from "react-icons/fa";

import Reveal from "../common/Reveal";
import worldMap from "../../assets/images/contact/world-map.png";

export default function Contact() {
  // =========================================================
  // FORM SUBMIT
  // =========================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();

    // ================= VALIDATION =================

    if (!name || !phone || !email || !service || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    // Only 10 digits
    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // =========================================================
    // WHATSAPP
    // =========================================================

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

          <span className="hidden sm:inline text-white/40">|</span>

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


            {/* MAIN HEADING */}

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


            {/* SUB HEADING */}

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


            {/* DESCRIPTION */}

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
            lg:grid-cols-[1.35fr_0.95fr]
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

              {/* =================================================
                  WORLD MAP BACKGROUND
              ================================================= */}

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


              {/* Decorative circles */}

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

                {/* =================================================
                    LEFT HEADING — KEPT SAME
                ================================================= */}

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


                {/* =================================================
                    CONTACT ITEMS
                ================================================= */}

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

                        {/* Icon */}

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


                        {/* Content */}

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


                {/* =================================================
                    WHATSAPP BUTTON
                ================================================= */}

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

              {/* =================================================
                  FORM HEADING
              ================================================= */}

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


                {/* Paper Plane */}

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
                      "
                    />

                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
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

                <div className="grid sm:grid-cols-2 gap-3">

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
                        "
                      />

                      <input
                        type="tel"
                        name="phone"
                        required
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        minLength={10}
                        autoComplete="tel"
                        placeholder="10-digit mobile"
                        onInput={(e) => {
                          e.target.value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                        }}
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
                        "
                      />

                      <input
                        type="email"
                        name="email"
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
                      "
                    />

                    <select
                      name="service"
                      required
                      defaultValue=""
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
                      "
                    />

                    <textarea
                      name="message"
                      required
                      rows={4}
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
                  "
                >

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

                </button>

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

                    {/* Icon */}

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


                    {/* Text */}

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