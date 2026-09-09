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
  FaHeadset,
  FaPaperPlane,
} from "react-icons/fa";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Exhibitions", href: "/exhibitions" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact Us", href: "/contact" },
];

const services = [
  "Flights & Air Travel",
  "Hotels & Accommodation",
  "Visa & Travel Documentation",
  "Travel Insurance & Forex",
  "Transfers & Car Rentals",
  "Domestic & International Holidays",
  "Cruise & Ferry Bookings",
  "Business & Corporate Travel",
  "MICE & Exhibition Travel",
  "Group & Customized Tours",
];

export default function Footer() {
  const whatsappNumber = "917666984626";

  const whatsappMessage = encodeURIComponent(
    "Hello Sarathi NX, I would like to know more about your travel services."
  );

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#031B4E]
        text-white
        rounded-t-[24px]
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-32
            -bottom-32
            w-[450px]
            h-[450px]
            rounded-full
            bg-[#0057B8]/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-[-160px]
            top-[-160px]
            w-[420px]
            h-[420px]
            rounded-full
            bg-[#0057B8]/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            left-[-60px]
            bottom-[-180px]
            w-[550px]
            h-[550px]
            rounded-full
            border
            border-[#0057B8]/20
          "
        />

        <div
          className="
            absolute
            left-[10px]
            bottom-[-130px]
            w-[450px]
            h-[450px]
            rounded-full
            border
            border-[#fc6602]/15
          "
        />

        <div
          className="
            absolute
            left-[70px]
            bottom-[-80px]
            w-[340px]
            h-[340px]
            rounded-full
            border
            border-white/[0.04]
          "
        />

        <div
          className="
            absolute
            left-[50px]
            bottom-[25px]
            w-[450px]
            h-[160px]
            border-t
            border-[#fc6602]/20
            rounded-[50%]
            rotate-[-12deg]
          "
        />

        <div
          className="
            absolute
            left-[80px]
            bottom-[50px]
            w-[390px]
            h-[130px]
            border-t
            border-[#0057B8]/30
            rounded-[50%]
            rotate-[8deg]
          "
        />
      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          max-w-[1450px]
          mx-auto
          px-6
          md:px-10
          lg:px-14
          py-8
          md:py-9
        "
      >
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[1.3fr_0.8fr_1.15fr_1.35fr]
            gap-y-8
            lg:gap-y-0
          "
        >
          {/* =================================================
              COMPANY
          ================================================= */}

          <div
            className="
              pr-0
              lg:pr-8
              pb-8
              lg:pb-0
            "
          >
            {/* LOGO */}

            <Link
              to="/"
              className="
                inline-flex
                items-center
                justify-center
                bg-white
                rounded-xl
                px-4
                py-3
                shadow-[0_8px_24px_rgba(0,0,0,0.18)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <img
                src={`${import.meta.env.BASE_URL}sarathi-logo.png`}
                alt="Sarathi NX"
                className="
                  w-44
                  md:w-48
                  h-auto
                  object-contain
                "
              />
            </Link>

            {/* TAGLINE */}

            <h3
              className="
                mt-5
                text-lg
                md:text-xl
                font-extrabold
                text-white
              "
            >
              We Plan. You Travel. We Care.
            </h3>

            {/* ACCENT */}

            <div className="mt-3 flex items-center gap-1">
              <span className="w-8 h-[3px] rounded-full bg-[#fc6602]" />
              <span className="w-4 h-[3px] rounded-full bg-[#0057B8]" />
            </div>

            {/* DESCRIPTION */}

            <p
              className="
                mt-4
                max-w-[350px]
                text-gray-300
                text-sm
                leading-5.5
              "
            >
              Sarathi NX Pvt. Ltd. is a professionally managed travel
              company specializing in international exhibition travel,
              business travel, corporate travel, MICE, group tours
              and global tourism.
            </p>

            {/* FOLLOW US */}

            <div className="mt-5">
              <h4 className="text-sm font-bold text-white mb-3">
                Follow Us
              </h4>

              <div className="flex items-center gap-2.5">
                {/* FACEBOOK */}

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-[#1877F2]
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-md
                    hover:-translate-y-1
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <FaFacebookF className="text-sm" />
                </a>

                {/* INSTAGRAM */}

                <a
                  href="https://www.instagram.com/sarathi_nx_travel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-gradient-to-br
                    from-[#F58529]
                    via-[#DD2A7B]
                    to-[#515BD4]
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-md
                    hover:-translate-y-1
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <FaInstagram className="text-sm" />
                </a>

                {/* LINKEDIN */}

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-[#0A66C2]
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-md
                    hover:-translate-y-1
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <FaLinkedinIn className="text-sm" />
                </a>

                {/* YOUTUBE */}

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-[#FF0000]
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-md
                    hover:-translate-y-1
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <FaYoutube className="text-sm" />
                </a>

                {/* WHATSAPP */}

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-[#25D366]
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-md
                    hover:-translate-y-1
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <FaWhatsapp className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div
            className="
              lg:border-l
              lg:border-white/15
              px-0
              sm:px-6
              lg:px-8
              pb-8
              lg:pb-0
            "
          >
            <h3 className="text-lg font-extrabold text-white">
              Quick Links
            </h3>

            <div className="flex items-center gap-1 mt-3 mb-4">
              <span className="w-7 h-[3px] rounded-full bg-[#fc6602]" />
              <span className="w-4 h-[3px] rounded-full bg-[#0057B8]" />
            </div>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="
                      group
                      flex
                      items-center
                      gap-2.5
                      text-gray-300
                      text-sm
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <FaArrowRight
                      className="
                        text-[#fc6602]
                        text-[10px]
                        group-hover:translate-x-1
                        transition-transform
                      "
                    />

                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div
            className="
              lg:border-l
              lg:border-white/15
              px-0
              sm:px-6
              lg:px-7
              pb-8
              lg:pb-0
            "
          >
            <h3 className="text-lg font-extrabold text-white">
              Our Services
            </h3>

            <div className="flex items-center gap-1 mt-3 mb-4">
              <span className="w-7 h-[3px] rounded-full bg-[#fc6602]" />
              <span className="w-4 h-[3px] rounded-full bg-[#0057B8]" />
            </div>

            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="
                      group
                      flex
                      items-start
                      gap-2.5
                      text-gray-300
                      text-[13px]
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <FaArrowRight
                      className="
                        text-[#fc6602]
                        text-[9px]
                        mt-1
                        shrink-0
                        group-hover:translate-x-1
                        transition-transform
                      "
                    />

                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT US
          ================================================= */}

          <div
            className="
              lg:border-l
              lg:border-white/15
              px-0
              sm:px-6
              lg:px-7
              xl:px-8
              min-w-0
            "
          >
            <h3 className="text-lg font-extrabold text-white">
              Contact Us
            </h3>

            <div className="flex items-center gap-1 mt-3 mb-5">
              <span className="w-7 h-[3px] rounded-full bg-[#fc6602]" />
              <span className="w-4 h-[3px] rounded-full bg-[#0057B8]" />
            </div>

            <div className="space-y-4">
              {/* ADDRESS */}

              <div className="flex items-start gap-3">
                <div
                  className="
                    w-10
                    h-10
                    shrink-0
                    rounded-full
                    border
                    border-[#fc6602]/40
                    bg-white/[0.03]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaMapMarkerAlt className="text-[#fc6602] text-sm" />
                </div>

                <div className="min-w-0 flex-1">
                  <p
                    className="
                      text-gray-300
                      text-[13px]
                      leading-5
                    "
                  >
                    1st Floor, Office No. 026, Crystal Plaza CHS Ltd,
                    <br />
                    Station Road, Mira Road East, Thane - 401107
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/10" />

              {/* PHONE */}

              <div className="flex items-start gap-3">
                <div
                  className="
                    w-10
                    h-10
                    shrink-0
                    rounded-full
                    border
                    border-[#fc6602]/40
                    bg-white/[0.03]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaPhoneAlt className="text-[#fc6602] text-sm" />
                </div>

                <div className="space-y-1 pt-1">
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

              <div className="h-px bg-white/10" />

              {/* EMAIL */}

              <div className="flex items-start gap-3">
                <div
                  className="
                    w-10
                    h-10
                    shrink-0
                    rounded-full
                    border
                    border-[#fc6602]/40
                    bg-white/[0.03]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaEnvelope className="text-[#fc6602] text-sm" />
                </div>

                <a
                  href="mailto:sajid@sarathinx.com"
                  className="
                    text-gray-300
                    text-sm
                    hover:text-white
                    transition
                    break-all
                    pt-2
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
          BOTTOM HELP BAR
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-4
          md:mx-8
          lg:mx-auto
          max-w-[1350px]
          border
          border-white/15
          rounded-xl
          bg-[#06265F]/70
          backdrop-blur-sm
          mb-0
        "
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            items-center
          "
        >
          {/* LEFT */}

          <div
            className="
              px-5
              md:px-6
              py-3.5
              text-center
              md:text-left
              border-b
              md:border-b-0
              md:border-r
              border-white/15
            "
          >
            <p className="text-gray-300 text-xs md:text-sm">
              © 2020 Sarathi NX Pvt. Ltd. All Rights Reserved.
            </p>
          </div>

          {/* CENTER */}

          <div
            className="
              px-5
              md:px-6
              py-3.5
              flex
              items-center
              justify-center
              gap-3
              border-b
              md:border-b-0
              md:border-r
              border-white/15
            "
          >
            <div
              className="
                w-9
                h-9
                rounded-full
                flex
                items-center
                justify-center
                bg-[#fc6602]/10
                border
                border-[#fc6602]/30
                shrink-0
              "
            >
              <FaHeadset className="text-[#fc6602] text-sm" />
            </div>

            <div>
              <p className="text-gray-300 text-[11px]">
                Need Help? Call Us
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-2
                  mt-0.5
                  text-xs
                  font-bold
                  text-white
                "
              >
                <a
                  href="tel:+917666984626"
                  className="hover:text-[#fc6602] transition"
                >
                  +91 766 698 4626
                </a>

                <span className="text-gray-500">|</span>

                <a
                  href="tel:+918657867181"
                  className="hover:text-[#fc6602] transition"
                >
                  +91 865 786 7181
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              px-5
              md:px-6
              py-3.5
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <FaPaperPlane className="text-[#fc6602] text-base" />

            <span
              className="
                text-[#60A5FA]
                text-xs
                md:text-sm
                font-semibold
              "
            >
              We Plan. You Travel. We Care.
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          MINIMAL BOTTOM SPACE
      ===================================================== */}

      <div className="h-3" />
    </footer>
  );
}
