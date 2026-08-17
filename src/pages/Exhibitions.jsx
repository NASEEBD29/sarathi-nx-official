import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGlobeAsia,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";

const exhibitions = [
  {
    title: "CMEF",
    subtitle: "China International Medical Equipment Fair",
    location: "Shanghai & Beijing, China",
    category: "Medical & Healthcare",
    link: "https://www.cmef.com.cn/en",
  },
  {
    title: "MEDICA",
    subtitle: "World's Leading Trade Fair for the Medical Sector",
    location: "Düsseldorf, Germany",
    category: "Medical & Healthcare",
    link: "https://www.medica-tradefair.com/",
  },
  {
    title: "ARAB HEALTH",
    subtitle: "Leading Healthcare Exhibition in the Middle East",
    location: "Dubai, UAE",
    category: "Medical & Healthcare",
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
  },
  {
    title: "MEDLAB",
    subtitle: "Laboratory & Diagnostics Exhibition",
    location: "Dubai, UAE",
    category: "Laboratory & Diagnostics",
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
  },
  {
    title: "WELDING & CUTTING",
    subtitle: "Beijing Essen Welding & Cutting Fair",
    location: "Beijing, China",
    category: "Industrial",
    link: "#",
  },
  {
    title: "CANTON FAIR",
    subtitle: "China Import & Export Fair",
    location: "Guangzhou, China",
    category: "Trade & Business",
    link: "#",
  },
  {
    title: "ITMA ASIA + CITME",
    subtitle: "Asia's Leading Textile Machinery Exhibition",
    location: "Shanghai, China",
    category: "Textile & Machinery",
    link: "#",
  },
];

export default function Exhibitions() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#003DA5] text-white pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <Reveal>
            <div className="max-w-4xl">

              <span className="text-blue-200 uppercase tracking-[4px] font-semibold text-sm">
                International Exhibitions
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
                Explore Leading
                <span className="block text-blue-200">
                  Global Exhibitions
                </span>
              </h1>

              <p className="mt-6 text-blue-100 text-lg leading-8 max-w-3xl">
                Discover the world's leading trade fairs and exhibitions.
                Sarathi NX provides complete travel assistance for
                businesses attending international exhibitions.
              </p>

              <a
                href="/sarathi-nx-official/#contact"
                className="inline-flex items-center gap-3 mt-8 bg-white text-[#003DA5] px-7 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                Plan Exhibition Travel
                <FaArrowRight />
              </a>

            </div>
          </Reveal>

        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="py-20 bg-[#F5F9FF]">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <Reveal>

            <span className="text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
              Global Opportunities
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
              Connect With
              <span className="text-[#003DA5]">
                {" "}Global Markets
              </span>
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              International exhibitions provide businesses with valuable
              opportunities to discover new markets, meet industry
              leaders, showcase products and build global partnerships.
            </p>

          </Reveal>

        </div>

      </section>


      {/* ================= EXHIBITIONS ================= */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {exhibitions.map((item, index) => (

              <Reveal
                key={item.title}
                delay={index * 0.08}
              >

                <div className="group bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">

                  {/* Top Banner */}
                  <div className="bg-[#003DA5] p-7 text-white">

                    <div className="flex items-center justify-between">

                      <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-xl">
                        <FaGlobeAsia />
                      </div>

                      <span className="text-xs font-semibold bg-white/15 px-3 py-2 rounded-full">
                        {item.category}
                      </span>

                    </div>

                    <h3 className="text-2xl font-bold mt-6">
                      {item.title}
                    </h3>

                  </div>


                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">

                    <p className="text-gray-700 font-medium leading-7">
                      {item.subtitle}
                    </p>


                    {/* Location */}
                    <div className="flex items-start gap-3 mt-6">

                      <FaMapMarkerAlt className="text-[#003DA5] mt-1 shrink-0" />

                      <span className="text-gray-600">
                        {item.location}
                      </span>

                    </div>


                    {/* Event Type */}
                    <div className="flex items-center gap-3 mt-4">

                      <FaCalendarAlt className="text-[#003DA5]" />

                      <span className="text-gray-600">
                        International Exhibition
                      </span>

                    </div>


                    {/* Button */}
                    <div className="mt-auto pt-7">

                      {item.link !== "#" ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#003DA5] font-semibold hover:gap-3 transition-all"
                        >
                          Visit Exhibition
                          <FaArrowRight className="text-sm" />
                        </a>
                      ) : (
                        <a
                          href="/sarathi-nx-official/#contact"
                          className="inline-flex items-center gap-2 text-[#003DA5] font-semibold hover:gap-3 transition-all"
                        >
                          Enquire Now
                          <FaArrowRight className="text-sm" />
                        </a>
                      )}

                    </div>

                  </div>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* ================= TRAVEL SUPPORT ================= */}
      <section className="py-24 bg-[#F5F9FF]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <Reveal>

              <div>

                <span className="text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
                  Exhibition Travel Support
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
                  We Take Care of Your
                  <span className="text-[#003DA5]">
                    {" "}Complete Journey
                  </span>
                </h2>

                <p className="text-gray-600 leading-8 mt-6">
                  From flight bookings and hotel reservations to visa
                  assistance and destination support, our team helps
                  businesses travel confidently for international
                  exhibitions.
                </p>

              </div>

            </Reveal>


            <Reveal direction="right">

              <div className="grid sm:grid-cols-2 gap-5">

                {[
                  "Flight Booking",
                  "Hotel Reservation",
                  "Visa Assistance",
                  "Airport Transfers",
                  "Exhibition Travel",
                  "Group Coordination",
                ].map((item) => (

                  <div
                    key={item}
                    className="bg-white rounded-2xl p-5 shadow-md border border-blue-50 flex items-center gap-3"
                  >

                    <div className="w-9 h-9 rounded-full bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center">
                      ✓
                    </div>

                    <span className="font-medium text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-20 bg-[#003DA5] text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <Reveal>

            <h2 className="text-4xl md:text-5xl font-bold">
              Planning to Attend an Exhibition?
            </h2>

            <p className="text-blue-100 text-lg mt-5 max-w-2xl mx-auto leading-7">
              Tell us about your exhibition and travel requirements.
              Our team will help you plan your complete journey.
            </p>

            <a
              href="/sarathi-nx-official/#contact"
              className="inline-flex items-center gap-3 mt-8 bg-white text-[#003DA5] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              Plan Your Exhibition Trip
              <FaArrowRight />
            </a>

          </Reveal>

        </div>

      </section>

    </main>
  );
}