import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function TopHeader() {
  return (
    <header
      className="
        w-full
        h-[58px]
        bg-[#03182B]
        text-white
        border-b
        border-white/10
      "
    >
      <div
        className="
          w-full
          max-w-[1600px]
          mx-auto
          h-full
          px-5
          sm:px-7
          lg:px-10
          xl:px-12
          2xl:px-4
        "
      >
        <div
          className="
            h-full
            flex
            items-center
            justify-between
            gap-6
          "
        >
          {/* =====================================================
              LEFT CONTACT INFORMATION
          ====================================================== */}

          <div
            className="
              flex
              items-center
              min-w-0
            "
          >
            {/* PHONE */}

            <a
              href="tel:+917666984626"
              className="
                flex
                items-center
                gap-[10px]
                whitespace-nowrap
                text-white
                hover:text-white
                transition-colors
                duration-200
              "
            >
              <FaPhoneAlt
                className="
                  shrink-0
                  text-[#8BC63E]
                  text-[18px]
                "
              />

              <span
                className="
                  text-[13px]
                  sm:text-[14px]
                  font-medium
                  tracking-[0.1px]
                "
              >
                +91 766 698 4626
              </span>
            </a>

            {/* DIVIDER */}

            <span
              className="
                mx-5
                h-[28px]
                w-px
                bg-white/20
              "
            />

            {/* WHATSAPP */}

            <a
              href="tel:+918657867181"
              className="
                hidden
                sm:flex
                items-center
                gap-[10px]
                whitespace-nowrap
                text-white
                transition-colors
                duration-200
              "
            >
              <FaWhatsapp
                className="
                  shrink-0
                  text-[#8BC63E]
                  text-[21px]
                "
              />

              <span
                className="
                  text-[13px]
                  sm:text-[14px]
                  font-medium
                  tracking-[0.1px]
                "
              >
                +91 865 786 7181
              </span>
            </a>

            {/* DIVIDER */}

            <span
              className="
                hidden
                lg:block
                mx-5
                h-[28px]
                w-px
                bg-white/20
              "
            />

            {/* EMAIL */}

            <a
              href="mailto:sajid@sarathinx.com"
              className="
                hidden
                lg:flex
                items-center
                gap-[10px]
                whitespace-nowrap
                text-white
                transition-colors
                duration-200
              "
            >
              <FaEnvelope
                className="
                  shrink-0
                  text-[#8BC63E]
                  text-[20px]
                "
              />

              <span
                className="
                  text-[14px]
                  font-medium
                "
              >
                sajid@sarathinx.com
              </span>
            </a>
          </div>

          {/* =====================================================
              RIGHT SOCIAL MEDIA
          ====================================================== */}

          <div
            className="
              flex
              items-center
              shrink-0
            "
          >
            {/* CONNECT US */}

            <span
              className="
                hidden
                md:block
                mr-4
                text-[14px]
                font-normal
                text-white/90
                whitespace-nowrap
              "
            >
              Connect Us :
            </span>

            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/sarathi_nx_travel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                w-[34px]
                h-[34px]
                flex
                items-center
                justify-center
                rounded-full

                bg-gradient-to-br
                from-[#F9CE34]
                via-[#EE2A7B]
                to-[#6228D7]

                transition-transform
                duration-200

                hover:scale-105
              "
            >
              <FaInstagram
                className="
                  text-white
                  text-[18px]
                "
              />
            </a>

            {/* LINKEDIN */}

            <a
              href="#"
              aria-label="LinkedIn"
              className="
                ml-[10px]
                w-[34px]
                h-[34px]
                flex
                items-center
                justify-center
                rounded-full
                bg-[#1769AA]

                transition-transform
                duration-200

                hover:scale-105
              "
            >
              <FaLinkedinIn
                className="
                  text-white
                  text-[17px]
                "
              />
            </a>

            {/* FACEBOOK */}

            <a
              href="#"
              aria-label="Facebook"
              className="
                ml-[10px]
                w-[34px]
                h-[34px]
                flex
                items-center
                justify-center
                rounded-full
                bg-[#1877F2]

                transition-transform
                duration-200

                hover:scale-105
              "
            >
              <FaFacebookF
                className="
                  text-white
                  text-[17px]
                "
              />
            </a>

            {/* X / TWITTER */}

            <a
              href="#"
              aria-label="X"
              className="
                ml-[10px]
                w-[34px]
                h-[34px]
                flex
                items-center
                justify-center
                rounded-full

                bg-[#050505]
                border
                border-white/10

                transition-transform
                duration-200

                hover:scale-105
              "
            >
              <FaXTwitter
                className="
                  text-white
                  text-[16px]
                "
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
