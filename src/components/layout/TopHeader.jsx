import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaClock,
} from "react-icons/fa";

export default function TopHeader() {
  return (
    <header className="bg-[#003DA5] text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center min-h-11">

          {/* Left */}
          <div className="flex items-center gap-8 text-sm">

            <a
              href="tel:+917666984626"
              className="flex items-center gap-2 hover:text-blue-200 transition"
            >
              <FaPhoneAlt />
              <span>+91 766 698 4626</span>
            </a>

            <a
              href="mailto:sajid@sarathinx.com"
              className="flex items-center gap-2 hover:text-blue-200 transition"
            >
              <FaEnvelope />
              <span>sajid@sarathinx.com</span>
            </a>

            <span className="flex items-center gap-2">
              <FaClock />
              <span>Mon - Sat : 9:30 AM - 7:00 PM</span>
            </span>

          </div>


          {/* Right */}
          <div className="flex items-center gap-4">

            <span className="text-sm">
              Follow Us
            </span>

            <a
              href="https://www.instagram.com/sarathi_nx_travel/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="hover:text-blue-200 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

    </header>
  );
}