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
          <span className="text-white/70">9:30 AM - 7:00 PM</span>
        </>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F6F9FD] py-20 md:py-24"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ================= HEADING ================= */}

        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">

            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#fc6602]" />

              <span className="uppercase tracking-[4px] text-xs md:text-sm font-bold text-[#0057B8]">
                Contact Us
              </span>

              <span className="w-8 h-[2px] bg-[#0057B8]" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Let's Plan Your{" "}
              <span className="text-[#0057B8]">
                Journey
              </span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-7">
              Planning an exhibition, business trip or corporate journey?
              Talk to our travel experts and let us take care of the details.
            </p>

          </div>
        </Reveal>


        {/* ================= MAIN CONTENT ================= */}

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-7 items-stretch">

          {/* ================= CONTACT INFO ================= */}

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
                p-7
                md:p-8
                text-white
                shadow-xl
              "
            >

              {/* Decorative Circle */}

              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-48
                  h-48
                  rounded-full
                  bg-white/10
                "
              />

              <div
                className="
                  absolute
                  -bottom-24
                  -left-20
                  w-52
                  h-52
                  rounded-full
                  bg-[#fc6602]/20
                "
              />

              <div className="relative z-10">

                {/* Small Heading */}

                <div className="flex items-center gap-2 mb-3">
                  <FaPaperPlane className="text-[#fc6602]" />

                  <span className="text-white/70 uppercase tracking-[3px] text-xs font-bold">
                    Get In Touch
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold">
                  We're Here To Help
                </h3>

                <p className="text-white/70 text-sm leading-6 mt-3 max-w-md">
                  Connect with our travel experts for exhibitions,
                  corporate trips, business travel and visa assistance.
                </p>


                {/* ================= CONTACT ITEMS ================= */}

                <div className="mt-7 space-y-4">

                  {contactItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="
                          flex
                          items-start
                          gap-4
                          p-3.5
                          rounded-2xl
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
                            w-10
                            h-10
                            shrink-0
                            rounded-xl
                            bg-white/10
                            flex
                            items-center
                            justify-center
                            text-[#fc6602]
                          "
                        >
                          <Icon />
                        </div>

                        <div className="text-sm leading-6">

                          <p className="text-white/50 text-xs uppercase tracking-wider font-semibold">
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


                {/* ================= WHATSAPP ================= */}

                <a
                  href="https://wa.me/917666984626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    bg-white
                    text-[#0057B8]
                    py-3
                    rounded-xl
                    font-bold
                    text-sm
                    hover:bg-[#fc6602]
                    hover:text-white
                    transition-all
                    duration-300
                    shadow-lg
                  "
                >
                  <FaWhatsapp className="text-lg" />
                  Chat on WhatsApp
                </a>

              </div>
            </div>

          </Reveal>


          {/* ================= CONTACT FORM ================= */}

          <Reveal direction="right">

            <div
              className="
                h-full
                bg-white
                rounded-3xl
                p-7
                md:p-8
                border
                border-gray-100
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              "
            >

              {/* Form Heading */}

              <div className="flex items-start justify-between gap-4 mb-6">

                <div>
                  <span className="uppercase tracking-[3px] text-xs font-bold text-[#fc6602]">
                    Send Enquiry
                  </span>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">
                    Tell Us About Your Trip
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">
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
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#fc6602]
                    to-[#0057B8]
                    text-white
                    items-center
                    justify-center
                    shadow-lg
                  "
                >
                  <FaPaperPlane />
                </div>

              </div>


              {/* ================= FORM ================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* Name */}

                <div>

                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-xl
                      bg-gray-50
                      border
                      border-gray-200
                      text-sm
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

                <div className="grid sm:grid-cols-2 gap-4">

                  <div>

                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      maxLength="10"
                      placeholder="10-digit mobile"
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        bg-gray-50
                        border
                        border-gray-200
                        text-sm
                        text-gray-700
                        outline-none
                        focus:border-[#0057B8]
                        focus:ring-2
                        focus:ring-blue-100
                        transition
                      "
                    />

                  </div>


                  <div>

                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        bg-gray-50
                        border
                        border-gray-200
                        text-sm
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

                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Service Required
                  </label>

                  <select
                    name="service"
                    defaultValue=""
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-xl
                      bg-gray-50
                      border
                      border-gray-200
                      text-sm
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

                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell us about your travel requirements..."
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-xl
                      bg-gray-50
                      border
                      border-gray-200
                      text-sm
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


                {/* Submit Button */}

                <button
                  type="submit"
                  className="
                    group
                    w-full
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    bg-gradient-to-r
                    from-[#fc6602]
                    via-[#fc6602]
                    to-[#0057B8]
                    text-white
                    py-3.5
                    rounded-xl
                    font-bold
                    text-sm
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
    </section>
  );
}