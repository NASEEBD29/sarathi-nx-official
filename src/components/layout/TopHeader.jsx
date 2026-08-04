import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaClock,
} from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="hidden lg:block bg-[#0F766E] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-11">

          {/* Left */}

          <div className="flex items-center gap-8 text-sm">

            <a
              href="tel:+917666984626"
              className="flex items-center gap-2 hover:text-teal-200 transition"
            >
              <FaPhoneAlt />
              +91 766 698 4626
            </a>

            <a
              href="mailto:info@sarathinx.com"
              className="flex items-center gap-2 hover:text-teal-200 transition"
            >
              <FaEnvelope />
              info@sarathinx.com
            </a>

            <span className="flex items-center gap-2">
              <FaClock />
              Mon - Sat : 9:30 AM - 7:00 PM
            </span>

          </div>

          {/* Right */}

          <div className="flex items-center gap-4">

            <span className="text-sm">
              Follow Us
            </span>

            <a href="#" className="hover:text-teal-200">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-teal-200">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-teal-200">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}