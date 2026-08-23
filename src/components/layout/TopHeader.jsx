import {
  FaPhoneAlt,
  FaEnvelope,
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

            {/* =================================================
                LEFT SIDE
            ================================================== */}

            <div
              className="
                flex
                items-center
                gap-6
                lg:gap-10
                text-[16px]
                lg:text-[17px]
              "
            >

              {/* ================= PHONE ================= */}

              <a
                href="tel:+917666984626"
                className="
                  flex
                  items-center
                  gap-3
                  hover:text-blue-200
                  transition-colors
                  duration-300
                  whitespace-nowrap
                "
              >
                <FaPhoneAlt className="text-[16px] lg:text-[17px]" />

                <span className="font-semibold">
                  +91 766 698 4626
                </span>

                <span className="font-semibold">
                  +91 865786 7181
                </span>
              </a>


              {/* ================= EMAIL ================= */}

              <a
                href="mailto:sajid@sarathinx.com"
                className="
                  hidden
                  md:flex
                  items-center
                  gap-3
                  hover:text-blue-200
                  transition-colors
                  duration-300
                  whitespace-nowrap
                "
              >
                <FaEnvelope className="text-[17px]" />

                <span className="font-semibold">
                  sajid@sarathinx.com
                </span>
              </a>


              {/* ================= ADDRESS ================= */}

              <span
                className="
                  hidden
                  xl:flex
                  items-center
                  gap-3
                  whitespace-nowrap
                "
              >
                <FaMapMarkerAlt className="text-[17px]" />

                <span className="font-semibold">
                  Crystal Plaza CHS Ltd,
                  Mira Road East,
                  Thane - 401107
                </span>
              </span>

            </div>


            {/* =================================================
                RIGHT SIDE - SOCIAL MEDIA
            ================================================== */}

            <div className="flex items-center gap-3">

              {/* Follow Us */}

              <span
                className="
                  hidden
                  sm:block
                  text-[16px]
                  font-semibold
                  mr-1
                "
              >
                Follow Us
              </span>


              {/* =================================================
                  INSTAGRAM
              ================================================== */}

              <a
                href="https://www.instagram.com/sarathi_nx_travel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="
                  group
                  relative
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:shadow-lg
                  overflow-hidden
                "
              >

                {/* Instagram Gradient */}

                <span
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-tr
                    from-[#F58529]
                    via-[#DD2A7B]
                    to-[#8134AF]
                  "
                />

                <FaInstagram
                  className="
                    relative
                    z-10
                    text-white
                    text-[17px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

              </a>


              {/* =================================================
                  LINKEDIN
              ================================================== */}

              <a
                href="#"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="
                  group
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0A66C2]
                  text-white
                  border
                  border-white/20
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-[#0A66C2]
                  hover:shadow-lg
                "
              >

                <FaLinkedinIn
                  className="
                    text-[16px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

              </a>


              {/* =================================================
                  FACEBOOK
              ================================================== */}

              <a
                href="#"
                aria-label="Facebook"
                title="Facebook"
                className="
                  group
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1877F2]
                  text-white
                  border
                  border-white/20
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-[#1877F2]
                  hover:shadow-lg
                "
              >

                <FaFacebookF
                  className="
                    text-[16px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

              </a>


              {/* =================================================
                  THREADS
              ================================================== */}

              <a
                href="#"
                aria-label="Threads"
                title="Threads"
                className="
                  group
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-white
                  border
                  border-white/20
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-black
                  hover:shadow-lg
                "
              >

                <FaThreads
                  className="
                    text-[16px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

              </a>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}