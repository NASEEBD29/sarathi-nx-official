import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaThreads,
} from "react-icons/fa6";

export default function TopHeader() {
  return (
    <header className="w-full bg-[#003DA5] text-white">
      <div className="w-full border-b border-white/15">

        <div className="max-w-[1510px] mx-auto px-5 sm:px-8 lg:px-10">

          <div className="min-h-[64px] flex items-center justify-between gap-6">

            {/* ================= LEFT SIDE ================= */}
            <div className="flex items-center gap-6 lg:gap-10 text-[16px] lg:text-[17px]">

              {/* Phone */}
              <a
                href="tel:+917666984626"
                className="flex items-center gap-3 hover:text-blue-200 transition-colors duration-300 whitespace-nowrap"
              >
                <FaPhoneAlt className="text-[16px] lg:text-[17px]" />

                <span className="font-semibold">
                  +91 766 698 4626
                </span>
                <span className="font-semibold">
                  +91 865786 7181
                </span>
              </a>


              {/* Email */}
              <a
                href="mailto:sajid@sarathinx.com"
                className="hidden md:flex items-center gap-3 hover:text-blue-200 transition-colors duration-300 whitespace-nowrap"
              >
                <FaEnvelope className="text-[17px]" />

                <span className="font-semibold">
                  sajid@sarathinx.com
                </span>
              </a>


              {/* Address */}
              <span className="hidden xl:flex items-center gap-3 whitespace-nowrap">
                <FaMapMarkerAlt className="text-[17px]" />

                <span className="font-semibold">
                  Crystal Plaza CHS Ltd,
                  Station Road, Mira Road East,
                  Thane - 401107
                </span>
              </span>

            </div>


            {/* ================= RIGHT SIDE ================= */}
            <div className="flex items-center gap-4">

              <span className="hidden sm:block text-[16px] font-semibold">
                Follow Us
              </span>


              {/* Instagram */}
              <a
                href="https://www.instagram.com/sarathi_nx_travel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  hover:bg-white
                  hover:text-[#003DA5]
                  transition-all
                  duration-300
                "
              >
                <FaInstagram className="text-[16px]" />
              </a>


              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  hover:bg-white
                  hover:text-[#003DA5]
                  transition-all
                  duration-300
                "
              >
                <FaLinkedinIn className="text-[16px]" />
              </a>

              {/* facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  hover:bg-white
                  hover:text-[#003DA5]
                  transition-all
                  duration-300
                "
              >
                <FaFacebookF className="text-[16px]" />
              </a>

               {/* threads */}
              <a
                href="#"
                aria-label="Threads"
                className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  hover:bg-white
                  hover:text-[#003DA5]
                  transition-all
                  duration-300
                "
              >
                <FaThreads className="text-[16px]" />
              </a>


              

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}