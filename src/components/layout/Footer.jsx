import { Link } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Exhibitions", href: "/exhibitions" },
  { title: "Contact", href: "/contact" },
];

const services = [
  "International Exhibition Travel",
  "Corporate Travel",
  "Business Travel",
  "Visa Assistance",
  "MICE",
  "Group Tours",
];

export default function Footer() {
  const whatsappNumber = "917666984626";

  const whatsappMessage = encodeURIComponent(
    "Hello Sarathi NX, I would like to know more about your travel services."
  );

  return (
    <footer className="bg-[#002B73] text-white border-t-4 border-[#003DA5]">

      {/* ================= MAIN FOOTER ================= */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ================= COMPANY ================= */}

          <div>

            {/* Logo */}

            <Link
              to="/"
              className="inline-flex items-center bg-white rounded-xl px-4 py-2 shadow-lg"
            >
              <img
                src={`${import.meta.env.BASE_URL}sarathi-logo.png`}
                alt="Sarathi NX"
                className="w-48 md:w-56 h-auto object-contain"
              />
            </Link>

            {/* Tagline */}

            <p className="mt-5 text-[#60A5FA] font-semibold">
              We Plan. You Travel. We Care.
            </p>

            {/* Description */}

            <p className="mt-5 text-gray-300 leading-7">
              Sarathi NX Pvt. Ltd. is a professionally managed travel
              company specializing in international exhibition travel,
              business travel, corporate travel, MICE, group tours
              and global tourism.
            </p>

            {/* Social Icons */}

            <div className="flex items-center gap-3 mt-6">

              {/* Instagram */}

              <a
                href="https://www.instagram.com/sarathi_nx_travel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sarathi NX Instagram"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-[#003DA5] hover:border-[#003DA5] transition-all duration-300"
              >
                <FaInstagram />
              </a>

              {/* WhatsApp */}

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Sarathi NX on WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-[#003DA5] hover:border-[#003DA5] transition-all duration-300"
              >
                <FaWhatsapp />
              </a>

              {/* Call */}

              <a
                href="tel:+917666984626"
                aria-label="Call Sarathi NX"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-[#003DA5] hover:border-[#003DA5] transition-all duration-300"
              >
                <FaPhoneAlt />
              </a>

            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="text-xl font-bold mb-4 text-white">
              Quick Links
            </h3>

            <div className="w-12 h-1 bg-[#60A5FA] rounded-full mb-6" />

            <ul className="space-y-4">

              {quickLinks.map((link) => (
                <li key={link.title}>

                  <Link
                    to={link.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <FaArrowRight className="text-xs text-[#60A5FA]" />

                    {link.title}
                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* ================= SERVICES ================= */}

          <div>

            <h3 className="text-xl font-bold mb-4 text-white">
              Our Services
            </h3>

            <div className="w-12 h-1 bg-[#60A5FA] rounded-full mb-6" />

            <ul className="space-y-4">

              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <FaArrowRight className="text-xs mt-1.5 text-[#60A5FA]" />

                  <span>
                    {service}
                  </span>
                </li>
              ))}

            </ul>

          </div>


          {/* ================= CONTACT ================= */}

          <div>

            <h3 className="text-xl font-bold mb-4 text-white">
              Contact Us
            </h3>

            <div className="w-12 h-1 bg-[#60A5FA] rounded-full mb-6" />

            <div className="space-y-5">

              {/* Address */}

              <div className="flex gap-3">

                <FaMapMarkerAlt className="text-[#60A5FA] mt-1 shrink-0" />

                <p className="text-gray-300 leading-6">
                  1st Floor, Office No. 026,
                  <br />
                  Crystal Plaza CHS Ltd,
                  <br />
                  Station Road, Mira Road East,
                  <br />
                  Thane - 401107
                </p>

              </div>


              {/* Phone */}

              <div className="flex gap-3">

                <FaPhoneAlt className="text-[#60A5FA] mt-1 shrink-0" />

                <div className="space-y-1">

                  <a
                    href="tel:+917666984626"
                    className="block text-gray-300 hover:text-white transition"
                  >
                    +91 766 698 4626
                  </a>

                  <a
                    href="tel:+918657867181"
                    className="block text-gray-300 hover:text-white transition"
                  >
                    +91 865 786 7181
                  </a>

                </div>

              </div>


              {/* Email */}

              <div className="flex gap-3">

                <FaEnvelope className="text-[#60A5FA] mt-1 shrink-0" />

                <a
                  href="mailto:sajid@sarathinx.com"
                  className="text-gray-300 hover:text-white transition break-all"
                >
                  sajid@sarathinx.com
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM BAR ================= */}

      <div className="bg-[#001F54] border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Sarathi NX Pvt. Ltd.
            All Rights Reserved.
          </p>

          <p className="text-[#60A5FA] text-center">
            We Plan. You Travel. We Care.
          </p>

        </div>

      </div>

    </footer>
  );
}