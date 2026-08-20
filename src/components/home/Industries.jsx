import {
  FaHeartbeat,
  FaSeedling,
  FaCar,
  FaSpa,
  FaHardHat,
  FaIndustry,
  FaMicrochip,
  FaLaptopCode,
  FaBolt,
  FaCogs,
  FaBoxOpen,
  FaTshirt,
  FaCouch,
  FaGem,
  FaHotel,
  FaTruck,
  FaLeaf,
  FaFlask,
  FaGraduationCap,
  FaGlasses,
} from "react-icons/fa";

import Reveal from "../common/Reveal";

const industries = [
  {
    icon: <FaHeartbeat />,
    title: "Medical, Healthcare & Pharmaceuticals",
  },
  {
    icon: <FaSeedling />,
    title: "Agriculture, Food & Beverage",
  },
  {
    icon: <FaCar />,
    title: "Automotive & Mobility",
  },
  {
    icon: <FaSpa />,
    title: "Beauty, Cosmetics & Personal Care",
  },
  {
    icon: <FaHardHat />,
    title: "Construction, Building & Architecture",
  },
  {
    icon: <FaIndustry />,
    title: "Industrial Manufacturing & Machinery",
  },
  {
    icon: <FaMicrochip />,
    title: "Electronics, Electrical & Semiconductors",
  },
  {
    icon: <FaLaptopCode />,
    title: "Information Technology & AI",
  },
  {
    icon: <FaBolt />,
    title: "Energy & Renewable Energy",
  },
  {
    icon: <FaCogs />,
    title: "Metal, Steel & Engineering",
  },
  {
    icon: <FaBoxOpen />,
    title: "Packaging, Printing & Publishing",
  },
  {
    icon: <FaTshirt />,
    title: "Textiles, Apparel & Fashion",
  },
  {
    icon: <FaCouch />,
    title: "Furniture, Interior & Home Living",
  },
  {
    icon: <FaGem />,
    title: "Jewellery, Watches & Gifts",
  },
  {
    icon: <FaHotel />,
    title: "Tourism, Hospitality & Leisure",
  },
  {
    icon: <FaTruck />,
    title: "Logistics & Transportation",
  },
  {
    icon: <FaLeaf />,
    title: "Environment & Green Technology",
  },
  {
    icon: <FaFlask />,
    title: "Plastics, Rubber & Materials",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education, Licensing & Business Services",
  },
  {
    icon: <FaGlasses />,
    title: "Optics & Precision Technology",
  },
];

export default function Industries() {
  // Duplicate cards for seamless infinite scrolling
  const scrollingIndustries = [...industries, ...industries];

  return (
    <section
      id="industries"
      className="relative py-10 bg-[#F8FBFF] overflow-hidden"
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="absolute top-10 left-10 w-40 h-40 bg-[#003DA5]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#00A6A6]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}

        <Reveal>
          <div className="text-center mb-14 px-6">

            <span className="inline-flex items-center gap-2 text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
              <span className="w-8 h-[2px] bg-[#003DA5]" />
              Industries We Serve
              <span className="w-8 h-[2px] bg-[#003DA5]" />
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-5 leading-tight">
              Travel Solutions Across
              <span className="block text-[#003DA5] mt-2">
                Global Industries
              </span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-7">
              From healthcare and technology to manufacturing, fashion
              and renewable energy, we support professionals and
              businesses attending exhibitions worldwide.
            </p>

          </div>
        </Reveal>


        {/* ================= MOVING CARDS ================= */}

        <div className="relative w-full overflow-hidden">

          {/* LEFT FADE */}

          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#F8FBFF] to-transparent z-10 pointer-events-none" />

          {/* RIGHT FADE */}

          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#F8FBFF] to-transparent z-10 pointer-events-none" />


          {/* TRACK */}

          <div className="flex w-max animate-industries-scroll hover:[animation-play-state:paused]">

            {scrollingIndustries.map((industry, index) => (

              <div
                key={`${industry.title}-${index}`}
                className="w-[230px] sm:w-[250px] md:w-[270px] px-2.5"
              >

                <div
                  className="
                    group
                    relative
                    h-[235px]
                    bg-white
                    rounded-[26px]
                    border border-gray-100
                    p-6
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    shadow-[0_8px_30px_rgba(0,61,165,0.07)]
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:shadow-[0_20px_45px_rgba(0,61,165,0.16)]
                    hover:border-[#003DA5]/20
                  "
                >

                  {/* Top Accent */}

                  <div
                    className="
                      absolute
                      top-0
                      left-1/2
                      -translate-x-1/2
                      w-16
                      h-1
                      bg-[#003DA5]
                      rounded-b-full
                      transition-all
                      duration-500
                      group-hover:w-28
                    "
                  />


                  {/* Glow */}

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-[26px]
                      bg-gradient-to-br
                      from-[#003DA5]/5
                      via-transparent
                      to-[#00A6A6]/5
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />


                  {/* Icon */}

                  <div
                    className="
                      relative
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#EAF2FF]
                      text-[#003DA5]
                      flex
                      items-center
                      justify-center
                      text-2xl
                      shadow-sm
                      transition-all
                      duration-500
                      group-hover:bg-[#003DA5]
                      group-hover:text-white
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                  >
                    {industry.icon}
                  </div>


                  {/* Number */}

                  <span
                    className="
                      absolute
                      top-5
                      right-5
                      text-[11px]
                      font-bold
                      text-gray-300
                      group-hover:text-[#003DA5]/40
                      transition-colors
                    "
                  >
                    {String((index % industries.length) + 1).padStart(2, "0")}
                  </span>


                  {/* Title */}

                  <h3
                    className="
                      relative
                      mt-5
                      text-sm
                      md:text-[15px]
                      font-semibold
                      text-gray-700
                      leading-6
                      group-hover:text-[#003DA5]
                      transition-colors
                      duration-300
                    "
                  >
                    {industry.title}
                  </h3>


                  {/* Bottom Line */}

                  <div
                    className="
                      mt-4
                      w-8
                      h-[2px]
                      bg-gray-200
                      rounded-full
                      group-hover:w-14
                      group-hover:bg-[#003DA5]
                      transition-all
                      duration-500
                    "
                  />

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ================= BOTTOM MESSAGE ================= */}

        <Reveal delay={0.4}>

          <div className="mt-14 text-center px-6">

            <p className="text-gray-500">
              Whatever your industry, we help you travel smarter,
              connect globally and participate with confidence.
            </p>

            <div className="mt-4 flex justify-center items-center gap-2">

              <span className="w-2 h-2 rounded-full bg-[#003DA5]" />
              <span className="w-16 h-[2px] bg-[#003DA5]/20 rounded-full" />
              <span className="w-2 h-2 rounded-full bg-[#00A6A6]" />

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}