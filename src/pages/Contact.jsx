import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
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
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-[#003DA5] text-white pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <Reveal>

            <div className="max-w-4xl">

              <span className="text-blue-200 uppercase tracking-[4px] font-semibold text-sm">
                Contact Us
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
                Let's Plan Your
                <span className="block text-blue-200">
                  Next Journey
                </span>
              </h1>

              <p className="mt-6 text-blue-100 text-lg leading-8 max-w-3xl">
                Whether you are planning an international exhibition,
                corporate trip or business travel, our team is ready
                to assist you.
              </p>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          CONTACT INFORMATION CARDS
      ===================================================== */}

      <section className="py-20 bg-[#F5F9FF]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* ================= CALL ================= */}

            <Reveal>

              <a
                href="tel:+917666984626"
                className="block bg-white rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-xl">
                  <FaPhoneAlt />
                </div>

                <h3 className="font-bold text-xl text-gray-800 mt-5">
                  Call Us
                </h3>

                <p className="text-gray-600 mt-2">
                  +91 766 698 4626
                </p>

              </a>

            </Reveal>


            {/* ================= EMAIL ================= */}

            <Reveal delay={0.1}>

              <a
                href="mailto:info@sarathinx.com"
                className="block bg-white rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-xl">
                  <FaEnvelope />
                </div>

                <h3 className="font-bold text-xl text-gray-800 mt-5">
                  Email Us
                </h3>

                <p className="text-gray-600 mt-2 break-all">
                  info@sarathinx.com
                </p>

              </a>

            </Reveal>


            {/* ================= WHATSAPP ================= */}

            <Reveal delay={0.2}>

              <a
                href="https://wa.me/917666984626"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-xl">
                  <FaWhatsapp />
                </div>

                <h3 className="font-bold text-xl text-gray-800 mt-5">
                  WhatsApp
                </h3>

                <p className="text-gray-600 mt-2">
                  Chat With Our Team
                </p>

              </a>

            </Reveal>


            {/* ================= WORKING HOURS ================= */}

            <Reveal delay={0.3}>

              <div className="bg-white rounded-2xl p-7 shadow-md">

                <div className="w-14 h-14 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-xl">
                  <FaClock />
                </div>

                <h3 className="font-bold text-xl text-gray-800 mt-5">
                  Working Hours
                </h3>

                <p className="text-gray-600 mt-2 leading-6">
                  Mon - Sat
                  <br />
                  9:30 AM - 7:00 PM
                </p>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM + DETAILS
      ===================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <Reveal>

              <div>

                <span className="text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
                  Get In Touch
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
                  Tell Us About
                  <span className="text-[#003DA5]">
                    {" "}Your Travel Plans
                  </span>
                </h2>

                <p className="text-gray-600 leading-8 mt-5">
                  Share your requirements with us and our travel experts
                  will get in touch with you to discuss the best solution
                  for your journey.
                </p>


                {/* =============================================
                    OFFICE ADDRESS
                ============================================= */}

                <div className="mt-10 space-y-7">

                  <div className="flex gap-4">

                    <div className="w-12 h-12 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt />
                    </div>

                    <div>

                      <h3 className="font-bold text-gray-800 text-lg">
                        Our Office
                      </h3>

                      <p className="text-gray-600 mt-2 leading-6">
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


                  {/* =============================================
                      PHONE
                  ============================================= */}

                  <div className="flex gap-4">

                    <div className="w-12 h-12 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center shrink-0">
                      <FaPhoneAlt />
                    </div>

                    <div>

                      <h3 className="font-bold text-gray-800 text-lg">
                        Phone
                      </h3>

                      <a
                        href="tel:+917666984626"
                        className="text-gray-600 hover:text-[#003DA5] mt-1 block"
                      >
                        +91 766 698 4626
                      </a>

                    </div>

                  </div>


                  {/* =============================================
                      EMAIL
                  ============================================= */}

                  <div className="flex gap-4">

                    <div className="w-12 h-12 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center shrink-0">
                      <FaEnvelope />
                    </div>

                    <div>

                      <h3 className="font-bold text-gray-800 text-lg">
                        Email
                      </h3>

                      <a
                        href="mailto:info@sarathinx.com"
                        className="text-gray-600 hover:text-[#003DA5] mt-1 block"
                      >
                        info@sarathinx.com
                      </a>

                    </div>

                  </div>


                  {/* =============================================
                      WORKING HOURS
                  ============================================= */}

                  <div className="flex gap-4">

                    <div className="w-12 h-12 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center shrink-0">
                      <FaClock />
                    </div>

                    <div>

                      <h3 className="font-bold text-gray-800 text-lg">
                        Working Hours
                      </h3>

                      <p className="text-gray-600 mt-1">
                        Monday - Saturday
                        <br />
                        9:30 AM - 7:00 PM
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </Reveal>


            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <Reveal direction="right">

              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-100">

                <h3 className="text-2xl font-bold text-gray-800">
                  Send Us An Enquiry
                </h3>

                <p className="text-gray-500 mt-2 mb-7">
                  Fill in your details and tell us how we can help.
                </p>


                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  {/* NAME */}

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-[#003DA5]"
                  />


                  {/* PHONE */}

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    maxLength="10"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-[#003DA5]"
                  />


                  {/* EMAIL */}

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-[#003DA5]"
                  />


                  {/* SERVICE */}

                  <select
                    name="service"
                    defaultValue=""
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-[#003DA5]"
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

                    <option value="MICE & Group Tours">
                      MICE & Group Tours
                    </option>

                  </select>


                  {/* MESSAGE */}

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your travel requirements..."
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none resize-none focus:ring-2 focus:ring-[#003DA5]"
                  />


                  {/* BUTTON */}

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-[#003DA5] hover:bg-[#002B73] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
                  >
                    Send Enquiry
                    <FaArrowRight />
                  </button>

                </form>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          GOOGLE MAP
      ===================================================== */}

      <section className="bg-[#F5F9FF]">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <Reveal>

            <div className="text-center mb-10">

              <span className="text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
                Find Us
              </span>

              <h2 className="text-4xl font-bold text-gray-800 mt-4">
                Visit Our Office
              </h2>

              <p className="text-gray-600 mt-4">
                Crystal Plaza CHS Ltd, Station Road,
                Mira Road East, Thane - 401107
              </p>

            </div>

          </Reveal>


          <div className="rounded-3xl overflow-hidden shadow-xl border border-blue-100 h-[400px]">

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

      <section className="py-20 bg-[#003DA5] text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <Reveal>

            <h2 className="text-4xl md:text-5xl font-bold">
              We Plan. You Travel. We Care.
            </h2>

            <p className="text-blue-100 text-lg mt-5 max-w-2xl mx-auto leading-7">
              Your trusted partner for international business,
              exhibition and corporate travel.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">

              <a
                href="tel:+917666984626"
                className="inline-flex items-center gap-3 bg-white text-[#003DA5] px-7 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href="https://wa.me/917666984626"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-white px-7 py-4 rounded-full font-semibold hover:bg-white hover:text-[#003DA5] transition-all duration-300"
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