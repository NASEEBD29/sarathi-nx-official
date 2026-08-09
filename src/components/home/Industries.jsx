// import SectionHeading from "../common/SectionHeading";
// import { industries } from "../../data/industries";

// export default function Industries() {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         <SectionHeading
//           subtitle="Industries"
//           title="Industries We Serve"
//           description="We provide customized travel and exhibition solutions across multiple industries."
//         />

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

//           {industries.map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.id}
//                 className="group bg-[#F8FAFC] rounded-2xl p-8 text-center hover:bg-[#0F766E] transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl cursor-pointer"
//               >
//                 <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center text-[#0F766E] group-hover:bg-white">
//                   <Icon className="text-3xl" />
//                 </div>

//                 <h3 className="mt-5 font-semibold text-gray-800 group-hover:text-white text-lg">
//                   {item.title}
//                 </h3>
//               </div>
//             );
//           })}

//         </div>

//       </div>
//     </section>
//   );
// }


import {
  FaHeartbeat,
  FaUtensils,
  FaCar,
  FaPaintBrush,
  FaBuilding,
  FaIndustry,
  FaMicrochip,
  FaLaptopCode,
  FaSolarPanel,
  FaCogs,
  FaBoxOpen,
  FaTshirt,
  FaCouch,
  FaGem,
  FaPlane,
  FaTruck,
  FaLeaf,
  FaRecycle,
  FaGraduationCap,
  FaGlasses,
} from "react-icons/fa";

import Reveal from "../common/Reveal";

const industries = [
  {
    icon: FaHeartbeat,
    title: "Medical, Healthcare & Pharmaceuticals",
  },
  {
    icon: FaUtensils,
    title: "Agriculture, Food & Beverage",
  },
  {
    icon: FaCar,
    title: "Automotive & Mobility",
  },
  {
    icon: FaPaintBrush,
    title: "Beauty, Cosmetics & Personal Care",
  },
  {
    icon: FaBuilding,
    title: "Construction, Building & Architecture",
  },
  {
    icon: FaIndustry,
    title: "Industrial Manufacturing & Machinery",
  },
  {
    icon: FaMicrochip,
    title: "Electronics, Electrical & Semiconductors",
  },
  {
    icon: FaLaptopCode,
    title: "Information Technology & AI",
  },
  {
    icon: FaSolarPanel,
    title: "Energy & Renewable Energy",
  },
  {
    icon: FaCogs,
    title: "Metal, Steel & Engineering",
  },
  {
    icon: FaBoxOpen,
    title: "Packaging, Printing & Publishing",
  },
  {
    icon: FaTshirt,
    title: "Textiles, Apparel & Fashion",
  },
  {
    icon: FaCouch,
    title: "Furniture, Interior & Home Living",
  },
  {
    icon: FaGem,
    title: "Jewellery, Watches & Gifts",
  },
  {
    icon: FaPlane,
    title: "Tourism, Hospitality & Leisure",
  },
  {
    icon: FaTruck,
    title: "Logistics & Transportation",
  },
  {
    icon: FaLeaf,
    title: "Environment & Green Technology",
  },
  {
    icon: FaRecycle,
    title: "Plastics, Rubber & Materials",
  },
  {
    icon: FaGraduationCap,
    title: "Education, Licensing & Business Services",
  },
  {
    icon: FaGlasses,
    title: "Optics & Precision Technology",
  },
];

export default function Industries() {
  return (
    <section  id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-14">

            <span className="text-[#0F766E] uppercase tracking-[4px] font-semibold">
              Industries We Serve
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-800">
              Travel Solutions Across
              <span className="text-[#0F766E]"> Global Industries</span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-7">
              From healthcare and manufacturing to technology and tourism,
              we support professionals and businesses across diverse
              industries with seamless international travel solutions.
            </p>

          </div>
        </Reveal>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <Reveal
                key={index}
                delay={index * 0.04}
              >
                <div className="group h-full bg-[#F8FAFC] border border-gray-100 rounded-xl p-6 hover:bg-[#0F766E] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  <Icon className="text-3xl text-[#0F766E] group-hover:text-white transition-colors duration-300" />

                  <h3 className="mt-4 font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 leading-6">
                    {industry.title}
                  </h3>

                </div>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}