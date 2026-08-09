import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import Reveal from "../common/Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.phone ||
    !formData.email ||
    !formData.service ||
    !formData.message
  ) {
    alert("Please fill in all the required fields.");
    return;
  }

  if (!/^[0-9]{10}$/.test(formData.phone)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  const whatsappNumber = "917666984626";

  const whatsappMessage = `
Hello Sarathi NX,

I would like to make an enquiry.

Name: ${formData.name}
Mobile: ${formData.phone}
Email: ${formData.email}
Interested In: ${formData.service}

Message:
${formData.message}

Thank you.
  `.trim();

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, "_blank");

  setFormData({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
};

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-[#0F766E] uppercase tracking-[4px] font-semibold">
              Contact Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-800">
              Let's Plan Your
              <span className="text-[#0F766E]"> Next Journey</span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-7">
              Whether you are planning an international exhibition, business
              trip or leisure journey, our team is ready to assist you.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <Reveal>
            <div className="bg-[#0F766E] rounded-3xl p-8 md:p-10 text-white h-full">

              <h3 className="text-3xl font-bold">
                Get In Touch
              </h3>

              <p className="mt-4 text-teal-100 leading-7">
                Connect with Sarathi NX for complete travel solutions,
                international exhibitions, corporate travel and visa
                assistance.
              </p>

              <div className="mt-10 space-y-7">

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white text-[#0F766E] flex items-center justify-center">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">
                      Our Office
                    </h4>

                    <p className="mt-1 text-teal-100 leading-6">
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
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white text-[#0F766E] flex items-center justify-center">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">
                      Call Us
                    </h4>

                    <div className="mt-1 space-y-1">
                      <a
                        href="tel:+917666984626"
                        className="block text-teal-100 hover:text-white transition"
                      >
                        +91 766 698 4626
                      </a>

                      <a
                        href="tel:+918657867181"
                        className="block text-teal-100 hover:text-white transition"
                      >
                        +91 865 786 7181
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white text-[#0F766E] flex items-center justify-center">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">
                      Email Us
                    </h4>

                    <a
                      href="mailto:sajid@sarathinx.com"
                      className="mt-1 block text-teal-100 hover:text-white transition"
                    >
                      sajid@sarathinx.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white text-[#0F766E] flex items-center justify-center">
                    <FaClock />
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">
                      Working Hours
                    </h4>

                    <p className="mt-1 text-teal-100">
                      Monday - Saturday
                      <br />
                      9:30 AM - 7:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </Reveal>

          {/* Enquiry Form */}
          <Reveal delay={0.15}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">

              <h3 className="text-3xl font-bold text-gray-800">
                Quick Enquiry
              </h3>

              <p className="mt-3 text-gray-600">
                Tell us about your travel requirements and our team will
                get back to you.
              </p>

              {submitted && (
                <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700">
                  Thank you! Your enquiry has been submitted successfully.
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    maxLength="10"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent transition"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Interested In *
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent transition"
                  >
                    <option value="">
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

                    <option value="Global Tourism">
                      Global Tourism
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your travel requirements..."
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent transition"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#0F766E] hover:bg-[#115E59] text-white py-4 rounded-xl font-semibold transition shadow-md hover:shadow-lg"
                >
                  Submit Enquiry
                </button>

              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}