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
  return (
    <section
      id="industries"
      className="py-24 bg-[#F8FBFF]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <Reveal>
          <div className="text-center mb-14">

            <span className="text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
              Industries We Serve
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
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


        {/* ================= INDUSTRIES GRID ================= */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">

          {industries.map((industry, index) => (

            <Reveal
              key={industry.title}
              delay={index * 0.04}
            >

              <div className="group h-full bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                {/* Icon */}

                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-xl group-hover:bg-[#003DA5] group-hover:text-white transition-all duration-300">
                  {industry.icon}
                </div>


                {/* Title */}

                <h3 className="mt-5 text-sm md:text-base font-semibold text-gray-700 leading-6 group-hover:text-[#003DA5] transition">
                  {industry.title}
                </h3>

              </div>

            </Reveal>

          ))}

        </div>


        {/* ================= BOTTOM MESSAGE ================= */}

        <Reveal delay={0.4}>

          <div className="mt-14 text-center">

            <p className="text-gray-500">
              Whatever your industry, we help you travel smarter,
              connect globally and participate with confidence.
            </p>

          </div>

        </Reveal>

      </div>
    </section>
  );
}