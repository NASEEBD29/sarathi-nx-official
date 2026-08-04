import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import SectionHeading from "../common/SectionHeading";
import PrimaryButton from "../common/PrimaryButton";

export default function Contact() {
  return (
    <section className="py-24 bg-[#F8FAFC]" id="contact">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Contact Us"
          title="Let's Plan Your Next Journey"
          description="Contact our team for corporate travel, exhibitions, visa assistance and customized travel solutions."
        />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <div className="bg-white rounded-3xl p-10 shadow">

            <div className="space-y-8">

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-full bg-[#0F766E] text-white flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Office Address
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Nagpur, Maharashtra, India
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-full bg-[#0F766E] text-white flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Phone
                  </h3>

                  <p className="text-gray-600 mt-2">
                    +91 XXXXX XXXXX
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-full bg-[#0F766E] text-white flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Email
                  </h3>

                  <p className="text-gray-600 mt-2">
                    info@sarathinx.com
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-full bg-[#0F766E] text-white flex items-center justify-center">
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Working Hours
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Monday - Saturday
                    <br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-3xl p-10 shadow">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:border-[#0F766E]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:border-[#0F766E]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:border-[#0F766E]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:border-[#0F766E]"
              ></textarea>

              <PrimaryButton className="w-full">
                Send Inquiry
              </PrimaryButton>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}