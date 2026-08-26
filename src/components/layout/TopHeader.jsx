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
    <header className="w-full bg-[#003DA5] text-white overflow-hidden">
      <div className="w-full border-b border-white/15">

        <div className="max-w-[1510px] mx-auto px-3 sm:px-5 md:px-8 lg:px-10">

          <div className="
            min-h-[58px]
            sm:min-h-[62px]
            lg:min-h-[64px]
            flex
            items-center
            justify-between
            gap-3
            sm:gap-5
            lg:gap-8
          ">

            {/* =================================================
                LEFT SIDE
            ================================================== */}

            <div
              className="
                min-w-0
                flex
                items-center
                gap-3
                sm:gap-5
                lg:gap-10
                text-[12px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[17px]
              "
            >

              {/* ================= PHONE ================= */}

              <div className="flex items-center min-w-0">

                <a
                  href="tel:+917666984626"
                  className="
                    flex
                    items-center
                    gap-2
                    sm:gap-3
                    hover:text-blue-200
                    transition-colors
                    duration-300
                    whitespace-nowrap
                  "
                >

                  <FaPhoneAlt
                    className="
                      shrink-0
                      text-[13px]
                      sm:text-[15px]
                      lg:text-[17px]
                    "
                  />

                  {/* FIRST NUMBER */}

                  <span className="font-semibold">
                    <span className="sm:hidden">
                      +91 766 698 4626
                    </span>

                    <span className="hidden sm:inline">
                      +91 766 698 4626
                    </span>
                  </span>

                </a>


                {/* SECOND NUMBER */}

                <a
                  href="tel:+918657867181"
                  className="
                    hidden
                    sm:inline-flex
                    ml-3
                    lg:ml-4
                    font-semibold
                    whitespace-nowrap
                    hover:text-blue-200
                    transition-colors
                    duration-300
                  "
                >
                  +91 865 786 7181
                </a>

              </div>


              {/* ================= EMAIL ================= */}

              <a
                href="mailto:sajid@sarathinx.com"
                className="
                  hidden
                  md:flex
                  items-center
                  gap-2
                  lg:gap-3
                  hover:text-blue-200
                  transition-colors
                  duration-300
                  whitespace-nowrap
                  min-w-0
                "
              >

                <FaEnvelope
                  className="
                    shrink-0
                    text-[14px]
                    lg:text-[17px]
                  "
                />

                <span className="font-semibold ">
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

                <FaMapMarkerAlt className="text-[17px] shrink-0" />

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

            <div
              className="
                shrink-0
                flex
                items-center
                gap-1.5
                sm:gap-2
                lg:gap-3
              "
            >

              {/* FOLLOW US */}

              <span
                className="
                  hidden
                  lg:block
                  text-[14px]
                  xl:text-[16px]
                  font-semibold
                  mr-1
                  whitespace-nowrap
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
                  w-7
                  h-7
                  sm:w-8
                  sm:h-8
                  lg:w-9
                  lg:h-9
                  shrink-0
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
                    text-[14px]
                    sm:text-[15px]
                    lg:text-[17px]
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
                  w-7
                  h-7
                  sm:w-8
                  sm:h-8
                  lg:w-9
                  lg:h-9
                  shrink-0
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
                  hover:shadow-lg
                "
              >

                <FaLinkedinIn
                  className="
                    text-[13px]
                    sm:text-[14px]
                    lg:text-[16px]
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
                  w-7
                  h-7
                  sm:w-8
                  sm:h-8
                  lg:w-9
                  lg:h-9
                  shrink-0
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
                  hover:shadow-lg
                "
              >

                <FaFacebookF
                  className="
                    text-[13px]
                    sm:text-[14px]
                    lg:text-[16px]
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
                  w-7
                  h-7
                  sm:w-8
                  sm:h-8
                  lg:w-9
                  lg:h-9
                  shrink-0
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
                  hover:shadow-lg
                "
              >

                <FaThreads
                  className="
                    text-[13px]
                    sm:text-[14px]
                    lg:text-[16px]
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