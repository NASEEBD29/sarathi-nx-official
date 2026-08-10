import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const quickLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Exhibitions", href: "#exhibitions" },
  { title: "Industries", href: "#industries" },
  { title: "Contact", href: "#contact" },
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
    <footer className="bg-[#002B73] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>

         <img
  src="/sarathi-nx-official/sarathi-logo.png"
  alt="Sarathi NX"
  className="w-56 md:w-64 h-auto object-contain"
/>

            <p className="mt-3 text-white font-medium">
              We Plan. You Travel. We Care.
            </p>

            <p className="mt-5 text-gray-300 leading-7">
              Sarathi NX Pvt. Ltd. is a professionally managed travel company
              specializing in international exhibition travel, business
              travel, corporate travel, MICE, group tours and global tourism.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">

              <a
                href="https://www.instagram.com/sarathi_nx_travel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sarathi NX Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-200 hover:bg-[#14B8A6] hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Sarathi NX on WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-200 hover:bg-[#25D366] hover:text-white transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="tel:+917666984626"
                aria-label="Call Sarathi NX"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-200 hover:bg-[#14B8A6] hover:text-white transition"
              >
                <FaPhoneAlt />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((link) => (
                <li key={link.title}>

                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-[#5EEAD4] transition"
                  >
                    <FaArrowRight className="text-xs" />
                    {link.title}
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Our Services
            </h3>

            <ul className="space-y-3">

              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2 text-gray-300"
                >
                  <FaArrowRight className="text-xs mt-1.5 text-[#14B8A6]" />

                  <span>{service}</span>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              {/* Address */}
              <div className="flex gap-3">

                <FaMapMarkerAlt className="text-[#14B8A6] mt-1 shrink-0" />

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

                <FaPhoneAlt className="text-[#14B8A6] mt-1 shrink-0" />

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

                <FaEnvelope className="text-[#14B8A6] mt-1 shrink-0" />

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

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Sarathi NX Pvt. Ltd. All Rights Reserved.
          </p>

          <p>
            We Plan. You Travel. We Care.
          </p>

        </div>

      </div>

    </footer>
  );
}