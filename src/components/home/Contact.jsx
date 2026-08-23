import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";

import Reveal from "../common/Reveal";

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

    // ================= WHATSAPP =================

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

  // ================= CONTACT ITEMS =================

  const contactItems = [
    {
      icon: FaPhoneAlt,
      label: "Call Us",
      content: (
        <>
          <a
            href="tel:+917666984626"
            className="hover:text-[#fc6602] transition"
          >
            +91 766 698 4626
          </a>
          <br />
          <a
            href="tel:+918657867181"
            className="hover:text-[#fc6602] transition"
          >
            +91 865 786 7181
          </a>
        </>
      ),
    },

    {
      icon: FaEnvelope,
      label: "Email Us",
      content: (
        <a
          href="mailto:sajid@sarathinx.com"
          className="hover:text-[#fc6602] transition break-all"
        >
          sajid@sarathinx.com
        </a>
      ),
    },

    {
      icon: FaMapMarkerAlt,
      label: "Visit Us",
      content: (
        <>
          1st Floor, Office No. 026,
          <br />
          Crystal Plaza CHS Ltd,
          <br />
          Station Road, Mira Road East,
          <br />
          Thane - 401107
        </>
      ),
    },

    {
      icon: FaClock,
      label: "Working Hours",
      content: (
        <>
          Monday - Saturday
          <br />
          <span className="text-white/70">
            9:30 AM - 7:00 PM
          </span>
        </>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#F6F9FD]
        py-10
        md:py-12
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          absolute
          -top-24
          -left-24
          w-64
          h-64
          rounded-full
          bg-blue-100/40
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-24
          -right-24
          w-64
          h-64
          rounded-full
          bg-orange-100/40
          blur-3xl
          pointer-events-none
        "
      />

      <div className="max-w-6xl mx-auto px-5 md:px-6 relative z-10">

        {/* =================================================
            HEADING
        ================================================= */}

        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-7">

            <div className="flex items-center justify-center gap-3 mb-2">

              <span className="w-7 h-[2px] bg-[#fc6602]" />

              <span
                className="
                  uppercase
                  tracking-[3px]
                  text-[11px]
                  md:text-xs
                  font-bold
                  text-[#0057B8]
                "
              >
                Contact Us
              </span>

              <span className="w-7 h-[2px] bg-[#0057B8]" />

            </div>

            <h2
              className="
                text-2xl
                md:text-3xl
                lg:text-4xl
                font-extrabold
                text-gray-900
                leading-tight
              "
            >
              Let's Plan Your{" "}
              <span className="text-[#0057B8]">
                Journey
              </span>
            </h2>

            <p
              className="
                mt-2
                text-gray-600
                text-xs
                md:text-sm
                leading-6
              "
            >
              Planning an exhibition, business trip or corporate journey?
              Talk to our travel experts and let us take care of the details.
            </p>

          </div>
        </Reveal>


        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-5
            items-stretch
          "
        >

          {/* =================================================
              GET IN TOUCH
          ================================================= */}

          <Reveal direction="left">

            <div
              className="
                relative
                overflow-hidden
                h-full
                rounded-3xl
                bg-gradient-to-br
                from-[#0057B8]
                to-[#003B80]
                p-5
                md:p-6
                text-white
                shadow-xl
              "
            >

              {/* Decorative circles */}

              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  w-40
                  h-40
                  rounded-full
                  bg-white/10
                "
              />

              <div
                className="
                  absolute
                  -bottom-20
                  -left-16
                  w-44
                  h-44
                  rounded-full
                  bg-[#fc6602]/20
                "
              />

              <div className="relative z-10 h-full flex flex-col">

                {/* Heading */}

                <div className="flex items-center gap-2 mb-1">

                  <FaPaperPlane className="text-[#fc6602] text-sm" />

                  <span
                    className="
                      text-white/70
                      uppercase
                      tracking-[3px]
                      text-[10px]
                      font-bold
                    "
                  >
                    Get In Touch
                  </span>

                </div>

                <h3
                  className="
                    text-xl
                    md:text-2xl
                    font-extrabold
                  "
                >
                  We're Here To Help
                </h3>

                <p
                  className="
                    text-white/70
                    text-xs
                    leading-5
                    mt-1.5
                  "
                >
                  Connect with our travel experts for exhibitions,
                  corporate trips, business travel and visa assistance.
                </p>


                {/* ================= CONTACT ITEMS ================= */}

                <div className="mt-4 space-y-2.5">

                  {contactItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="
                          flex
                          items-start
                          gap-3
                          p-2.5
                          rounded-xl
                          bg-white/[0.07]
                          border
                          border-white/10
                          hover:bg-white/[0.13]
                          transition-all
                          duration-300
                        "
                      >

                        <div
                          className="
                            w-8
                            h-8
                            shrink-0
                            rounded-lg
                            bg-white/10
                            flex
                            items-center
                            justify-center
                            text-[#fc6602]
                            text-sm
                          "
                        >
                          <Icon />
                        </div>

                        <div
                          className="
                            text-xs
                            leading-5
                          "
                        >

                          <p
                            className="
                              text-white/50
                              text-[9px]
                              uppercase
                              tracking-wider
                              font-semibold
                            "
                          >
                            {item.label}
                          </p>

                          <div className="font-medium mt-0.5">
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
                    mt-auto
                    pt-4
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    bg-[#25D366]
                    text-white
                    py-2.5
                    rounded-xl
                    font-bold
                    text-sm
                    shadow-[0_8px_25px_rgba(37,211,102,0.35)]
                    hover:bg-[#20bd5a]
                    hover:shadow-[0_10px_35px_rgba(37,211,102,0.50)]
                    transition-all
                    duration-300
                  "
                >
                  <FaWhatsapp className="text-lg" />

                  Chat on WhatsApp

                  <span className="text-xs">
                    →
                  </span>
                </a>

              </div>
            </div>

          </Reveal>


          {/* =================================================
              SEND ENQUIRY FORM
          ================================================= */}

          <Reveal direction="right">

            <div
              className="
                h-full
                bg-white
                rounded-3xl
                p-5
                md:p-6
                border
                border-gray-100
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              "
            >

              {/* Form Heading */}

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-3
                  mb-4
                "
              >

                <div>

                  <span
                    className="
                      uppercase
                      tracking-[3px]
                      text-[10px]
                      font-bold
                      text-[#fc6602]
                    "
                  >
                    Send Enquiry
                  </span>

                  <h3
                    className="
                      text-xl
                      md:text-2xl
                      font-extrabold
                      text-gray-900
                      mt-1
                    "
                  >
                    Tell Us About Your Trip
                  </h3>

                  <p
                    className="
                      text-gray-500
                      text-xs
                      mt-1
                    "
                  >
                    Share your requirements and our team will get back to you.
                  </p>

                </div>

                <div
                  className="
                    hidden
                    sm:flex
                    w-10
                    h-10
                    shrink-0
                    rounded-xl
                    bg-gradient-to-br
                    from-[#fc6602]
                    to-[#0057B8]
                    text-white
                    items-center
                    justify-center
                    shadow-md
                  "
                >
                  <FaPaperPlane className="text-sm" />
                </div>

              </div>


              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-2.5"
              >

                {/* Name */}

                <div>

                  <label
                    className="
                      block
                      text-[10px]
                      font-bold
                      text-gray-700
                      mb-1
                    "
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="
                      w-full
                      px-3.5
                      py-2.5
                      rounded-xl
                      bg-gray-50
                      border
                      border-gray-200
                      text-xs
                      text-gray-700
                      outline-none
                      focus:border-[#0057B8]
                      focus:ring-2
                      focus:ring-blue-100
                      transition
                    "
                  />

                </div>


                {/* Phone + Email */}

                <div className="grid sm:grid-cols-2 gap-3">

                  {/* Phone */}

                  <div>

                    <label
                      className="
                        block
                        text-[10px]
                        font-bold
                        text-gray-700
                        mb-1
                      "
                    >
                      Phone Number
                    </label>

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
                        px-3.5
                        py-2.5
                        rounded-xl
                        bg-gray-50
                        border
                        border-gray-200
                        text-xs
                        text-gray-700
                        outline-none
                        focus:border-[#0057B8]
                        focus:ring-2
                        focus:ring-blue-100
                        transition
                      "
                    />

                  </div>


                  {/* Email */}

                  <div>

                    <label
                      className="
                        block
                        text-[10px]
                        font-bold
                        text-gray-700
                        mb-1
                      "
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="Enter your email"
                      className="
                        w-full
                        px-3.5
                        py-2.5
                        rounded-xl
                        bg-gray-50
                        border
                        border-gray-200
                        text-xs
                        text-gray-700
                        outline-none
                        focus:border-[#0057B8]
                        focus:ring-2
                        focus:ring-blue-100
                        transition
                      "
                    />

                  </div>

                </div>


                {/* Service */}

                <div>

                  <label
                    className="
                      block
                      text-[10px]
                      font-bold
                      text-gray-700
                      mb-1
                    "
                  >
                    Service Required
                  </label>

                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="
                      w-full
                      px-3.5
                      py-2.5
                      rounded-xl
                      bg-gray-50
                      border
                      border-gray-200
                      text-xs
                      text-gray-700
                      outline-none
                      focus:border-[#0057B8]
                      focus:ring-2
                      focus:ring-blue-100
                      transition
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

                </div>


                {/* Message */}

                <div>

                  <label
                    className="
                      block
                      text-[10px]
                      font-bold
                      text-gray-700
                      mb-1
                    "
                  >
                    Message
                  </label>

                  <textarea
                    name="message"
                    required
                    rows={2}
                    placeholder="Tell us about your travel requirements..."
                    className="
                      w-full
                      px-3.5
                      py-2.5
                      rounded-xl
                      bg-gray-50
                      border
                      border-gray-200
                      text-xs
                      text-gray-700
                      outline-none
                      resize-none
                      focus:border-[#0057B8]
                      focus:ring-2
                      focus:ring-blue-100
                      transition
                    "
                  />

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  className="
                    group
                    w-full
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-gradient-to-r
                    from-[#0057B8]
                    via-[#0057B8]
                    to-[#fc6602]
                    text-white
                    py-2.5
                    rounded-xl
                    font-bold
                    text-xs
                    shadow-md
                    hover:shadow-xl
                    hover:-translate-y-0.5
                    transition-all
                    duration-300
                  "
                >

                  Send Enquiry

                  <FaArrowRight
                    className="
                      text-[10px]
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />

                </button>

              </form>

            </div>

          </Reveal>

        </div>

      </div>


      {/* =====================================================
          WHATSAPP ANIMATION
      ===================================================== */}

      <style>{`
        @keyframes whatsappPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.35);
          }

          50% {
            transform: scale(1.025);
            box-shadow:
              0 8px 30px rgba(37, 211, 102, 0.55),
              0 0 0 7px rgba(37, 211, 102, 0.10);
          }
        }

        @keyframes whatsappWiggle {
          0%, 85%, 100% {
            transform: rotate(0deg);
          }

          88% {
            transform: rotate(-2deg);
          }

          91% {
            transform: rotate(2deg);
          }

          94% {
            transform: rotate(-2deg);
          }

          97% {
            transform: rotate(2deg);
          }
        }

        .whatsapp-pulse {
          animation:
            whatsappPulse 2.2s ease-in-out infinite,
            whatsappWiggle 4s ease-in-out infinite;
        }

        .whatsapp-pulse:hover {
          animation-play-state: paused;
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}