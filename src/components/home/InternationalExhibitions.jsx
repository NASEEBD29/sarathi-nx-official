import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import Reveal from "../common/Reveal";

const exhibitions = [
  {
    title: "CMEF",
    description: "China International Medical Equipment Fair",
    location: "Shanghai & Beijing, China",
    link: "https://www.cmef.com.cn/en",
  },
  {
    title: "MEDICA",
    description: "World's Leading Trade Fair for the Medical Sector",
    location: "Düsseldorf, Germany",
    link: "https://www.medica-tradefair.com/",
  },
  {
    title: "ARAB HEALTH",
    description: "The Largest Healthcare Exhibition in the Middle East",
    location: "Dubai, UAE",
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
  },
  {
    title: "WELDING & CUTTING",
    description: "Beijing Essen Welding & Cutting Fair",
    location: "Beijing, China",
    link: "#",
  },
  {
    title: "MEDLAB",
    description: "Laboratory & Diagnostics Exhibition",
    location: "Dubai, UAE",
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
  },
  {
    title: "CANTON FAIR",
    description: "China Import & Export Fair",
    location: "Guangzhou, China",
    link: "#",
  },
  {
    title: "ITMA ASIA + CITME",
    description: "Asia's Leading Textile Machinery Exhibition",
    location: "Shanghai, China",
    link: "#",
  },
];

export default function InternationalExhibitions() {
  return (
    <section id="exhibitions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <Reveal>
          <div className="text-center mb-14">

            <span className="text-[#0F766E] uppercase tracking-[4px] font-semibold">
              International Exhibitions
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-800">
              Your Trusted Travel Partner for
              <span className="text-[#0F766E]"> Leading Exhibitions</span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-7">
              We provide complete travel solutions for businesses attending
              leading international exhibitions and trade fairs worldwide.
            </p>

          </div>
        </Reveal>

        {/* Exhibition Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {exhibitions.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>

              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">

                {/* Exhibition Name */}
                <h3 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 mt-5 text-[#0F766E] font-medium">
                  <FaMapMarkerAlt />
                  <span>{item.location}</span>
                </div>

                {/* Button */}
                <div className="mt-auto pt-7">

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#0F766E] font-semibold hover:text-[#115E59] transition"
                  >
                    Explore Exhibition
                    <FaArrowRight className="text-sm" />
                  </a>

                </div>

              </div>

            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}