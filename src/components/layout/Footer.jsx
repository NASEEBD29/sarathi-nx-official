import { Link } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
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
    <footer className="bg-[#002B73] text-white border-t-4 border-[#fc6602]">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">

        {/* =====================================================
            FOUR EQUAL COLUMNS
        ===================================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* =====================================================
              COMPANY
          ===================================================== */}

          <div className="w-full">

            {/* Logo */}

            <Link
              to="/"
              className="
                inline-flex
                items-center
                bg-white
                rounded-xl
                px-3
                py-2
                shadow-lg
              "
            >
              <img
                src={`${import.meta.env.BASE_URL}sarathi-logo.png`}
                alt="Sarathi NX"
                className="
                  w-40
                  md:w-44
                  h-auto
                  object-contain
                "
              />
            </Link>


            {/* Tagline */}

            <p className="mt-4 text-[#60A5FA] font-semibold text-sm">
              We Plan. You Travel. We Care.
            </p>


            {/* Description */}

            <p className="mt-3 text-gray-300 text-sm leading-6">
              Sarathi NX Pvt. Ltd. is a professionally managed travel
              company specializing in international exhibition travel,
              business travel, corporate travel, MICE, group tours
              and global tourism.
            </p>


            {/* =====================================================
                SOCIAL MEDIA
                ORIGINAL BRAND COLORS
            ===================================================== */}

            <div className="flex items-center gap-2.5 mt-5">

              {/* Facebook */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sarathi NX Facebook"
                className="
                  w-9
                  h-9
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  text-[#1877F2]
                  shadow-sm
                  hover:scale-110
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaFacebookF className="text-sm" />
              </a>


              {/* Instagram */}

              <a
                href="https://www.instagram.com/sarathi_nx_travel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sarathi NX Instagram"
                className="
                  w-9
                  h-9
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  text-[#E4405F]
                  shadow-sm
                  hover:scale-110
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaInstagram className="text-sm" />
              </a>


              {/* LinkedIn */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sarathi NX LinkedIn"
                className="
                  w-9
                  h-9
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  text-[#0A66C2]
                  shadow-sm
                  hover:scale-110
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaLinkedinIn className="text-sm" />
              </a>


              {/* YouTube */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sarathi NX YouTube"
                className="
                  w-9
                  h-9
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  text-[#FF0000]
                  shadow-sm
                  hover:scale-110
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaYoutube className="text-sm" />
              </a>


              {/* WhatsApp */}

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Sarathi NX on WhatsApp"
                className="
                  w-9
                  h-9
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  text-[#25D366]
                  shadow-sm
                  hover:scale-110
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaWhatsapp className="text-sm" />
              </a>

            </div>

          </div>


          {/* =====================================================
              QUICK LINKS
          ===================================================== */}

          <div className="w-full">

            <h3 className="text-lg font-bold text-white">
              Quick Links
            </h3>


            {/* Accent */}

            <div
              className="
                w-10
                h-1
                bg-gradient-to-r
                from-[#fc6602]
                to-[#0057B8]
                rounded-full
                mt-3
                mb-5
              "
            />


            <ul className="space-y-2.5">

              {quickLinks.map((link) => (
                <li key={link.title}>

                  <Link
                    to={link.href}
                    className="
                      flex
                      items-center
                      gap-2.5
                      text-gray-300
                      text-sm
                      hover:text-white
                      hover:translate-x-1
                      transition-all
                      duration-300
                    "
                  >

                    <FaArrowRight
                      className="
                        text-[10px]
                        text-[#fc6602]
                        shrink-0
                      "
                    />

                    {link.title}

                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* =====================================================
              SERVICES
          ===================================================== */}

          <div className="w-full">

            <h3 className="text-lg font-bold text-white">
              Our Services
            </h3>


            {/* Accent */}

            <div
              className="
                w-10
                h-1
                bg-gradient-to-r
                from-[#fc6602]
                to-[#0057B8]
                rounded-full
                mt-3
                mb-5
              "
            />


            <ul className="space-y-2.5">

              {services.map((service) => (
                <li
                  key={service}
                  className="
                    flex
                    items-start
                    gap-2.5
                    text-gray-300
                    text-sm
                  "
                >

                  <FaArrowRight
                    className="
                      text-[10px]
                      mt-1.5
                      text-[#fc6602]
                      shrink-0
                    "
                  />

                  <span>
                    {service}
                  </span>

                </li>
              ))}

            </ul>

          </div>


          {/* =====================================================
              CONTACT
          ===================================================== */}

          <div className="w-full">

            <h3 className="text-lg font-bold text-white">
              Contact Us
            </h3>


            {/* Accent */}

            <div
              className="
                w-10
                h-1
                bg-gradient-to-r
                from-[#fc6602]
                to-[#0057B8]
                rounded-full
                mt-3
                mb-5
              "
            />


            <div className="space-y-4">

              {/* ================= ADDRESS ================= */}

              <div className="flex gap-3">

                <FaMapMarkerAlt
                  className="
                    text-[#fc6602]
                    mt-1
                    shrink-0
                  "
                />

                <p className="text-gray-300 text-sm leading-5">

                  1st Floor, Office No. 026,
                  <br />

                  Crystal Plaza CHS Ltd,
                  <br />

                  Station Road, Mira Road East,
                  <br />

                  Thane - 401107

                </p>

              </div>


              {/* ================= PHONE ================= */}

              <div className="flex gap-3">

                <FaPhoneAlt
                  className="
                    text-[#fc6602]
                    mt-1
                    shrink-0
                  "
                />

                <div className="space-y-1">

                  <a
                    href="tel:+917666984626"
                    className="
                      block
                      text-gray-300
                      text-sm
                      hover:text-white
                      transition
                    "
                  >
                    +91 766 698 4626
                  </a>


                  <a
                    href="tel:+918657867181"
                    className="
                      block
                      text-gray-300
                      text-sm
                      hover:text-white
                      transition
                    "
                  >
                    +91 865 786 7181
                  </a>

                </div>

              </div>


              {/* ================= EMAIL ================= */}

              <div className="flex gap-3">

                <FaEnvelope
                  className="
                    text-[#fc6602]
                    mt-1
                    shrink-0
                  "
                />

                <a
                  href="mailto:sajid@sarathinx.com"
                  className="
                    text-gray-300
                    text-sm
                    hover:text-white
                    transition
                    break-all
                  "
                >
                  sajid@sarathinx.com
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div
        className="
          bg-[#001F54]
          border-t
          border-white/10
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-3.5
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-2
            text-xs
            md:text-sm
          "
        >

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