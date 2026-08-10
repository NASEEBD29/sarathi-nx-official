import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaGlobeAsia,
} from "react-icons/fa";

import Reveal from "../common/Reveal";

const exhibitions = [
  {
    title: "CMEF",
    description:
      "China International Medical Equipment Fair",
    location: "Shanghai & Beijing, China",
    link: "https://www.cmef.com.cn/en",
  },
  {
    title: "MEDICA",
    description:
      "World's Leading Trade Fair for the Medical Sector",
    location: "Düsseldorf, Germany",
    link: "https://www.medica-tradefair.com/",
  },
  {
    title: "ARAB HEALTH",
    description:
      "The Largest Healthcare Exhibition in the Middle East",
    location: "Dubai, UAE",
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
  },
  {
    title: "WELDING & CUTTING",
    description:
      "Beijing Essen Welding & Cutting Fair",
    location: "Beijing, China",
    link: "#",
  },
  {
    title: "MEDLAB",
    description:
      "Laboratory & Diagnostics Exhibition",
    location: "Dubai, UAE",
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
  },
  {
    title: "CANTON FAIR",
    description:
      "China Import & Export Fair",
    location: "Guangzhou, China",
    link: "#",
  },
  {
    title: "ITMA ASIA + CITME",
    description:
      "Asia's Leading Textile Machinery Exhibition",
    location: "Shanghai, China",
    link: "#",
  },
];

export default function InternationalExhibitions() {
  return (
    <section
      id="exhibitions"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= SECTION HEADING ================= */}

        <Reveal>

          <div className="text-center mb-14">

            <span className="inline-flex items-center gap-2 text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
              <FaGlobeAsia />
              International Exhibitions
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-800 leading-tight">

              Your Trusted Travel Partner for

              <span className="block text-[#003DA5] mt-2">
                Leading International Exhibitions
              </span>

            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-7">
              We provide complete travel solutions for businesses
              attending leading international exhibitions and trade
              fairs worldwide.
            </p>

          </div>

        </Reveal>


        {/* ================= EXHIBITION CARDS ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {exhibitions.map((item, index) => (

            <Reveal
              key={item.title}
              delay={index * 0.1}
            >

              <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">

                {/* Top Icon */}

                <div className="w-14 h-14 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-xl mb-6 group-hover:bg-[#003DA5] group-hover:text-white transition-all duration-300">
                  <FaGlobeAsia />
                </div>


                {/* Exhibition Name */}

                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#003DA5] transition">
                  {item.title}
                </h3>


                {/* Description */}

                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>


                {/* Location */}

                <div className="flex items-start gap-3 mt-5 text-[#003DA5] font-medium">

                  <FaMapMarkerAlt className="mt-1 shrink-0" />

                  <span>
                    {item.location}
                  </span>

                </div>


                {/* Button */}

                <div className="mt-auto pt-7">

                  {item.link !== "#" ? (

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#003DA5] font-semibold hover:text-[#002B73] transition"
                    >
                      Explore Exhibition

                      <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </a>

                  ) : (

                    <span className="inline-flex items-center gap-2 text-gray-400 font-semibold cursor-not-allowed">
                      Details Coming Soon
                    </span>

                  )}

                </div>

              </div>

            </Reveal>

          ))}

        </div>


        {/* ================= BOTTOM CTA ================= */}

        <Reveal delay={0.5}>

          <div className="mt-16 bg-gradient-to-r from-[#002B73] to-[#0057B8] rounded-3xl px-8 py-10 md:px-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">

            <div>

              <p className="text-blue-200 uppercase tracking-[3px] text-sm font-semibold">
                Exhibition Travel Made Easy
              </p>

              <h3 className="text-2xl md:text-3xl font-bold mt-2">
                Planning to attend an international exhibition?
              </h3>

              <p className="text-blue-100 mt-2">
                Let Sarathi NX manage your complete travel requirements.
              </p>

            </div>


            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#003DA5] px-7 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Plan Exhibition Travel

              <FaArrowRight />
            </a>

          </div>

        </Reveal>

      </div>
    </section>
  );
}