import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
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

  return (
    <section
      id="contact"
      className="py-24 bg-[#F5F9FF]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-14">

            <span className="text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
              Contact Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
              Let's Plan Your
              <span className="text-[#003DA5]">
                {" "}Journey
              </span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-7">
              Whether you are planning an international exhibition,
              corporate trip or business travel, our team is ready to
              assist you with complete travel solutions.
            </p>

          </div>
        </Reveal>


        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* Contact Information */}
          <Reveal direction="left">

            <div className="bg-[#003DA5] rounded-3xl p-8 md:p-10 text-white h-full">

              <span className="text-blue-200 uppercase tracking-[3px] text-sm font-semibold">
                Get In Touch
              </span>

              <h3 className="text-3xl md:text-4xl font-bold mt-4">
                We're Here To Help
              </h3>

              <p className="text-blue-100 leading-7 mt-5">
                Talk to our travel experts and let us help you plan
                your next business trip, exhibition visit or corporate
                journey.
              </p>


              {/* Contact Details */}
              <div className="space-y-6 mt-10">

                {/* Phone */}
                <a
                  href="tel:+917666984626"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#003DA5] transition">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-blue-200 text-sm">
                      Call Us
                    </p>

                    <p className="font-semibold mt-1">
                      +91 766 698 4626
                    </p>

                    <p className="font-semibold">
                      +91 865 786 7181
                    </p>
                  </div>
                </a>


                {/* Email */}
                <a
                  href="mailto:sajid@sarathinx.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#003DA5] transition">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-blue-200 text-sm">
                      Email Us
                    </p>

                    <p className="font-semibold mt-1 break-all">
                      sajid@sarathinx.com
                    </p>
                  </div>
                </a>


                {/* Address */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/10 flex items-center justify-center">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-blue-200 text-sm">
                      Visit Our Office
                    </p>

                    <p className="font-semibold mt-1 leading-6">
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


                {/* Working Hours */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/10 flex items-center justify-center">
                    <FaClock />
                  </div>

                  <div>
                    <p className="text-blue-200 text-sm">
                      Working Hours
                    </p>

                    <p className="font-semibold mt-1">
                      Monday - Saturday
                    </p>

                    <p className="text-blue-100">
                      9:30 AM - 7:00 PM
                    </p>
                  </div>

                </div>

              </div>


              {/* WhatsApp */}
              <a
                href="https://wa.me/917666984626"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 bg-white text-[#003DA5] px-6 py-3.5 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                <FaWhatsapp className="text-xl" />
                Chat on WhatsApp
              </a>

            </div>

          </Reveal>


          {/* Contact Form */}
          <Reveal direction="right">

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-blue-100 h-full">

              <span className="text-[#003DA5] uppercase tracking-[3px] text-sm font-semibold">
                Send Enquiry
              </span>

              <h3 className="text-3xl font-bold text-gray-800 mt-4">
                Tell Us About Your Trip
              </h3>

              <p className="text-gray-500 mt-3">
                Fill in your details and our travel experts will get
                back to you shortly.
              </p>


              <form
                onSubmit={handleSubmit}
                className="space-y-5 mt-8"
              >

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>


                {/* Phone + Email */}
                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      maxLength="10"
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-blue-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-blue-100 transition"
                    />
                  </div>

                </div>


                {/* Service */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Required
                  </label>

                  <select
                    name="service"
                    defaultValue=""
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-blue-100 transition"
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

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your travel requirements..."
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 outline-none resize-none focus:border-[#003DA5] focus:ring-2 focus:ring-blue-100 transition"
                  />

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#003DA5] hover:bg-[#002B75] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
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
  );
}