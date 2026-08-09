import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import Reveal from "../common/Reveal";

const events = [
  {
    title: "CMEF 2026",
    country: "China",
    description:
      "China International Medical Equipment Fair — one of the leading international exhibitions for the medical and healthcare industry.",
    link: "https://www.cmef.com.cn/en",
  },
  {
    title: "MEDICA 2026",
    country: "Düsseldorf, Germany",
    description:
      "The world's leading trade fair for the medical sector, bringing together healthcare professionals and businesses from around the globe.",
    link: "https://www.medica-tradefair.com/",
  },
  {
    title: "Arab Health & Medlab Middle East 2027",
    country: "Dubai, UAE",
    description:
      "A major healthcare and laboratory exhibition connecting businesses, healthcare professionals and industry leaders across the Middle East.",
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-14">

            <span className="text-[#0F766E] uppercase tracking-[4px] font-semibold">
              Upcoming Events
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-800">
              Upcoming
              <span className="text-[#0F766E]"> International Exhibitions</span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-7">
              Planning to attend an international exhibition? Sarathi NX
              provides complete travel support for flights, hotels, visas
              and exhibition travel.
            </p>

          </div>
        </Reveal>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {events.map((event, index) => (
            <Reveal
              key={index}
              delay={index * 0.12}
            >
              <div className="group bg-[#F8FAFC] border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">

                {/* Top */}
                <div className="bg-[#0F766E] text-white p-7">

                  <div className="flex items-center gap-3 text-teal-100">
                    <FaCalendarAlt />
                    <span className="font-medium">
                      Upcoming Exhibition
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mt-4">
                    {event.title}
                  </h3>

                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">

                  <div className="flex items-center gap-2 text-[#0F766E] font-medium">
                    <FaMapMarkerAlt />
                    <span>{event.country}</span>
                  </div>

                  <p className="mt-5 text-gray-600 leading-7">
                    {event.description}
                  </p>

                  {/* Button */}
                  <div className="mt-auto pt-7">

                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0F766E] hover:bg-[#115E59] text-white px-6 py-3 rounded-full font-medium transition"
                    >
                      Event Details
                      <FaArrowRight className="text-sm" />
                    </a>

                  </div>

                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}