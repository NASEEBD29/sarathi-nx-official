import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
  FaPaperPlane,
  FaGlobeAsia,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";

export default function Contact() {
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

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // ================= WHATSAPP =================

    const whatsappNumber = "917666984626";

    const whatsappMessage = `
Hello Sarathi NX,

I would like to make a travel enquiry.

Name: ${name}
Mobile: ${phone}
Email: ${email}
Service: ${service}

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
    <main className="bg-white overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[560px] md:min-h-[620px] overflow-hidden">

        {/* Background Image */}

        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=90"
          alt="Travel Contact"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        {/* Dark Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#041d3d]/95
            via-[#073b70]/75
            to-[#073b70]/20
          "
        />

        {/* Hero Content */}

        <div
          className="
            relative
            z-10
            max-w-[1280px]
            mx-auto
            px-5
            sm:px-8
            lg:px-10
            pt-36
            md:pt-44
          "
        >

          <Reveal>

            <div className="max-w-[760px]">

              {/* Small Heading */}

              <div className="flex items-center gap-3 mb-5">

                <span className="w-12 h-[2px] bg-orange-500" />

                <span
                  className="
                    text-white
                    text-xs
                    md:text-sm
                    font-bold
                    uppercase
                    tracking-[3px]
                  "
                >
                  Contact Sarathi NX
                </span>

              </div>


              {/* Main Heading */}

              <h1
                className="
                  text-white
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[68px]
                  font-extrabold
                  leading-[1.05]
                "
              >
                Let's Plan Your
                <br />

                <span className="text-orange-500">
                  Next Journey.
                </span>
              </h1>


              {/* Description */}

              <p
                className="
                  mt-6
                  text-white/90
                  text-base
                  md:text-lg
                  leading-8
                  max-w-[650px]
                "
              >
                Tell us about your travel requirements and let our
                experts create a smooth, reliable and personalized
                travel solution for you.
              </p>


              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="#enquiry"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    px-7
                    py-4
                    rounded-full
                    font-semibold
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Send An Enquiry

                  <FaArrowRight className="text-sm" />

                </a>


                <a
                  href="https://wa.me/917666984626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    border-2
                    border-white/80
                    text-white
                    px-7
                    py-4
                    rounded-full
                    font-semibold
                    hover:bg-white
                    hover:text-[#103a6d]
                    transition-all
                    duration-300
                  "
                >
                  <FaWhatsapp />

                  WhatsApp Us

                </a>

              </div>

            </div>

          </Reveal>

        </div>


        {/* Bottom White Curve */}

        <div
          className="
            absolute
            bottom-[-1px]
            left-0
            right-0
            h-12
            bg-white
            rounded-t-[50%]
            scale-x-110
          "
        />

      </section>


      {/* =====================================================
          QUICK CONTACT CARDS
      ===================================================== */}

      <section className="relative z-20 -mt-2 pb-20 bg-white">

        <div
          className="
            max-w-[1180px]
            mx-auto
            px-5
            sm:px-8
            lg:px-10
          "
        >

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
            "
          >

            {/* Phone */}

            <Reveal>

              <a
                href="tel:+917666984626"
                className="
                  group
                  block
                  bg-white
                  border
                  border-gray-100
                  rounded-2xl
                  p-6
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-50
                    text-[#1556bd]
                    flex
                    items-center
                    justify-center
                    text-xl
                    group-hover:bg-[#1556bd]
                    group-hover:text-white
                    transition-all
                  "
                >
                  <FaPhoneAlt />
                </div>


                <h3 className="mt-5 text-lg font-bold text-[#12385f]">
                  Call Us
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  +91 766 698 4626
                </p>

              </a>

            </Reveal>


            {/* Email */}

            <Reveal delay={0.08}>

              <a
                href="mailto:info@sarathinx.com"
                className="
                  group
                  block
                  bg-white
                  border
                  border-gray-100
                  rounded-2xl
                  p-6
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-50
                    text-[#1556bd]
                    flex
                    items-center
                    justify-center
                    text-xl
                    group-hover:bg-[#1556bd]
                    group-hover:text-white
                    transition-all
                  "
                >
                  <FaEnvelope />
                </div>


                <h3 className="mt-5 text-lg font-bold text-[#12385f]">
                  Email Us
                </h3>

                <p className="mt-2 text-gray-600 text-sm break-all">
                  info@sarathinx.com
                </p>

              </a>

            </Reveal>


            {/* WhatsApp */}

            <Reveal delay={0.16}>

              <a
                href="https://wa.me/917666984626"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  block
                  bg-white
                  border
                  border-gray-100
                  rounded-2xl
                  p-6
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-green-50
                    text-green-600
                    flex
                    items-center
                    justify-center
                    text-xl
                    group-hover:bg-green-600
                    group-hover:text-white
                    transition-all
                  "
                >
                  <FaWhatsapp />
                </div>


                <h3 className="mt-5 text-lg font-bold text-[#12385f]">
                  WhatsApp
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  Chat With Our Team
                </p>

              </a>

            </Reveal>


            {/* Working Hours */}

            <Reveal delay={0.24}>

              <div
                className="
                  bg-white
                  border
                  border-gray-100
                  rounded-2xl
                  p-6
                  shadow-lg
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-orange-50
                    text-orange-500
                    flex
                    items-center
                    justify-center
                    text-xl
                  "
                >
                  <FaClock />
                </div>


                <h3 className="mt-5 text-lg font-bold text-[#12385f]">
                  Working Hours
                </h3>

                <p className="mt-2 text-gray-600 text-sm leading-6">
                  Monday - Saturday
                  <br />
                  9:30 AM - 7:00 PM
                </p>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM SECTION
      ===================================================== */}

      <section
        id="enquiry"
        className="py-20 md:py-28 bg-[#f5f8fc]"
      >

        <div
          className="
            max-w-[1280px]
            mx-auto
            px-5
            sm:px-8
            lg:px-10
          "
        >

          <div
            className="
              grid
              lg:grid-cols-[0.85fr_1.15fr]
              gap-12
              lg:gap-20
              items-start
            "
          >

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <Reveal direction="left">

              <div>

                <span
                  className="
                    text-orange-500
                    text-xs
                    md:text-sm
                    font-bold
                    uppercase
                    tracking-[3px]
                  "
                >
                  Get In Touch
                </span>


                <h2
                  className="
                    mt-4
                    text-3xl
                    md:text-5xl
                    font-bold
                    text-[#12385f]
                    leading-tight
                  "
                >
                  Tell Us About
                  <br />

                  <span className="text-[#1556bd]">
                    Your Travel Plans.
                  </span>
                </h2>


                <p
                  className="
                    mt-6
                    text-gray-600
                    leading-8
                    text-sm
                    md:text-base
                    max-w-[540px]
                  "
                >
                  Whether you are travelling for business, attending
                  an international exhibition or planning a holiday,
                  our team is here to help.
                </p>


                {/* Contact Details */}

                <div className="mt-10 space-y-7">

                  {/* Address */}

                  <div className="flex gap-4">

                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-white
                        text-[#1556bd]
                        flex
                        items-center
                        justify-center
                        shrink-0
                        shadow-sm
                      "
                    >
                      <FaMapMarkerAlt />
                    </div>


                    <div>

                      <h3 className="font-bold text-[#12385f]">
                        Our Office
                      </h3>

                      <p className="text-gray-600 text-sm leading-6 mt-1">
                        1st Floor, Office No. 026,
                        <br />
                        Crystal Plaza CHS Ltd,
                        <br />
                        Station Road, Mira Road East,
                        <br />
                        Thane - 401107
                      </p>

                    </div>

                  </div>


                  {/* Phone */}

                  <div className="flex gap-4">

                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-white
                        text-[#1556bd]
                        flex
                        items-center
                        justify-center
                        shrink-0
                        shadow-sm
                      "
                    >
                      <FaPhoneAlt />
                    </div>


                    <div>

                      <h3 className="font-bold text-[#12385f]">
                        Phone
                      </h3>

                      <a
                        href="tel:+917666984626"
                        className="
                          text-gray-600
                          text-sm
                          mt-1
                          block
                          hover:text-[#1556bd]
                        "
                      >
                        +91 766 698 4626
                      </a>

                    </div>

                  </div>


                  {/* Email */}

                  <div className="flex gap-4">

                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-white
                        text-[#1556bd]
                        flex
                        items-center
                        justify-center
                        shrink-0
                        shadow-sm
                      "
                    >
                      <FaEnvelope />
                    </div>


                    <div>

                      <h3 className="font-bold text-[#12385f]">
                        Email
                      </h3>

                      <a
                        href="mailto:info@sarathinx.com"
                        className="
                          text-gray-600
                          text-sm
                          mt-1
                          block
                          hover:text-[#1556bd]
                        "
                      >
                        info@sarathinx.com
                      </a>

                    </div>

                  </div>

                </div>


                {/* Small Trust Box */}

                <div
                  className="
                    mt-10
                    p-5
                    rounded-2xl
                    bg-[#103a6d]
                    text-white
                    max-w-[520px]
                  "
                >

                  <div className="flex gap-4 items-center">

                    <div
                      className="
                        w-11
                        h-11
                        rounded-full
                        bg-white/10
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <FaGlobeAsia />
                    </div>

                    <div>

                      <p className="font-semibold">
                        Your Journey, Our Responsibility
                      </p>

                      <p className="text-blue-100 text-xs mt-1">
                        Professional support from planning to travel.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </Reveal>


            {/* =================================================
                FORM
            ================================================= */}

            <Reveal direction="right">

              <div
                className="
                  bg-white
                  rounded-[28px]
                  p-6
                  sm:p-8
                  md:p-10
                  shadow-[0_20px_60px_rgba(20,58,100,0.10)]
                  border
                  border-blue-50
                "
              >

                {/* Form Heading */}

                <div className="mb-8">

                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-[#eaf2ff]
                      text-[#1556bd]
                      flex
                      items-center
                      justify-center
                      text-lg
                    "
                  >
                    <FaPaperPlane />
                  </div>


                  <h3
                    className="
                      text-2xl
                      md:text-3xl
                      font-bold
                      text-[#12385f]
                      mt-5
                    "
                  >
                    Send An Enquiry
                  </h3>


                  <p className="text-gray-500 mt-2 text-sm">
                    Fill in your details and our team will contact you.
                  </p>

                </div>


                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* Name */}

                  <div>

                    <label
                      htmlFor="name"
                      className="
                        block
                        text-sm
                        font-semibold
                        text-gray-700
                        mb-2
                      "
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="
                        w-full
                        px-5
                        py-3.5
                        rounded-xl
                        bg-gray-50
                        border
                        border-gray-200
                        text-gray-800
                        outline-none
                        focus:bg-white
                        focus:border-[#1556bd]
                        focus:ring-2
                        focus:ring-blue-100
                        transition-all
                      "
                    />

                  </div>


                  {/* Phone + Email */}

                  <div className="grid sm:grid-cols-2 gap-5">

                    <div>

                      <label
                        htmlFor="phone"
                        className="
                          block
                          text-sm
                          font-semibold
                          text-gray-700
                          mb-2
                        "
                      >
                        Mobile Number
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="10-digit number"
                        maxLength="10"
                        inputMode="numeric"
                        className="
                          w-full
                          px-5
                          py-3.5
                          rounded-xl
                          bg-gray-50
                          border
                          border-gray-200
                          outline-none
                          focus:bg-white
                          focus:border-[#1556bd]
                          focus:ring-2
                          focus:ring-blue-100
                          transition-all
                        "
                      />

                    </div>


                    <div>

                      <label
                        htmlFor="email"
                        className="
                          block
                          text-sm
                          font-semibold
                          text-gray-700
                          mb-2
                        "
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="
                          w-full
                          px-5
                          py-3.5
                          rounded-xl
                          bg-gray-50
                          border
                          border-gray-200
                          outline-none
                          focus:bg-white
                          focus:border-[#1556bd]
                          focus:ring-2
                          focus:ring-blue-100
                          transition-all
                        "
                      />

                    </div>

                  </div>


                  {/* Service */}

                  <div>

                    <label
                      htmlFor="service"
                      className="
                        block
                        text-sm
                        font-semibold
                        text-gray-700
                        mb-2
                      "
                    >
                      Service Required
                    </label>

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="
                        w-full
                        px-5
                        py-3.5
                        rounded-xl
                        bg-gray-50
                        border
                        border-gray-200
                        outline-none
                        focus:bg-white
                        focus:border-[#1556bd]
                        focus:ring-2
                        focus:ring-blue-100
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

                      <option value="MICE & Group Tours">
                        MICE & Group Tours
                      </option>

                      <option value="Holiday Packages">
                        Holiday Packages
                      </option>

                    </select>

                  </div>


                  {/* Message */}

                  <div>

                    <label
                      htmlFor="message"
                      className="
                        block
                        text-sm
                        font-semibold
                        text-gray-700
                        mb-2
                      "
                    >
                      Your Requirement
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us about your travel requirements..."
                      className="
                        w-full
                        px-5
                        py-4
                        rounded-xl
                        bg-gray-50
                        border
                        border-gray-200
                        outline-none
                        resize-none
                        focus:bg-white
                        focus:border-[#1556bd]
                        focus:ring-2
                        focus:ring-blue-100
                        transition-all
                      "
                    />

                  </div>


                  {/* Submit */}

                  <button
                    type="submit"
                    className="
                      w-full
                      flex
                      items-center
                      justify-center
                      gap-3
                      bg-[#003DA5]
                      hover:bg-[#002f80]
                      text-white
                      py-4
                      rounded-xl
                      font-semibold
                      shadow-lg
                      hover:shadow-xl
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                    "
                  >
                    Send Enquiry On WhatsApp

                    <FaWhatsapp />

                  </button>


                  <p className="text-center text-xs text-gray-400">
                    Your enquiry will open directly in WhatsApp.
                  </p>

                </form>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAP SECTION
      ===================================================== */}

      <section className="py-20 md:py-24 bg-white">

        <div
          className="
            max-w-[1280px]
            mx-auto
            px-5
            sm:px-8
            lg:px-10
          "
        >

          <Reveal>

            <div className="text-center max-w-[700px] mx-auto mb-10">

              <span
                className="
                  text-orange-500
                  text-xs
                  md:text-sm
                  font-bold
                  uppercase
                  tracking-[3px]
                "
              >
                Find Us
              </span>

              <h2
                className="
                  mt-3
                  text-3xl
                  md:text-5xl
                  font-bold
                  text-[#12385f]
                "
              >
                Visit Our Office
              </h2>

              <p className="mt-4 text-gray-600 text-sm md:text-base">
                Crystal Plaza CHS Ltd, Station Road,
                Mira Road East, Thane - 401107
              </p>

            </div>

          </Reveal>


          {/* Map */}

          <div
            className="
              rounded-[28px]
              overflow-hidden
              shadow-xl
              border
              border-gray-100
              h-[350px]
              md:h-[450px]
            "
          >

            <iframe
              title="Sarathi NX Office Location"
              src="https://www.google.com/maps?q=Crystal+Plaza+CHS+Ltd,+Station+Road,+Mira+Road+East,+Thane+401107&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          relative
          py-20
          md:py-24
          bg-[#06376b]
          overflow-hidden
        "
      >

        {/* Decorative Circle */}

        <div
          className="
            absolute
            -left-24
            -top-24
            w-72
            h-72
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            absolute
            -right-24
            -bottom-32
            w-96
            h-96
            rounded-full
            border
            border-white/10
          "
        />


        <div
          className="
            relative
            z-10
            max-w-[850px]
            mx-auto
            px-5
            text-center
          "
        >

          <Reveal>

            <span
              className="
                text-orange-400
                text-xs
                md:text-sm
                font-bold
                uppercase
                tracking-[3px]
              "
            >
              Sarathi NX
            </span>


            <h2
              className="
                mt-4
                text-3xl
                md:text-5xl
                font-bold
                text-white
                leading-tight
              "
            >
              We Plan.
              <br />
              You Travel. We Care.
            </h2>


            <p
              className="
                mt-5
                text-blue-100
                text-sm
                md:text-lg
                leading-7
                max-w-2xl
                mx-auto
              "
            >
              Your trusted partner for international business,
              exhibition, corporate and holiday travel.
            </p>


            <div className="flex flex-wrap justify-center gap-4 mt-8">

              <a
                href="tel:+917666984626"
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-white
                  text-[#103a6d]
                  px-7
                  py-4
                  rounded-full
                  font-semibold
                  hover:bg-orange-500
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <FaPhoneAlt />

                Call Now

              </a>


              <a
                href="https://wa.me/917666984626"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  border-2
                  border-white
                  text-white
                  px-7
                  py-4
                  rounded-full
                  font-semibold
                  hover:bg-white
                  hover:text-[#103a6d]
                  transition-all
                  duration-300
                "
              >
                <FaWhatsapp />

                WhatsApp Us

              </a>

            </div>

          </Reveal>

        </div>

      </section>

    </main>
  );
}
