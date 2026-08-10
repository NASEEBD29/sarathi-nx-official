import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

import Reveal from "../common/Reveal";

const upcomingEvents = [
  {
    year: "2026",
    title: "CMEF 2026",
    subtitle: "China International Medical Equipment Fair",
    location: "China",
    date: "2026",
    description:
      "One of the leading international medical equipment exhibitions, connecting healthcare professionals, manufacturers and businesses from around the world.",
    link: "https://www.cmef.com.cn/en",
  },

  {
    year: "2026",
    title: "MEDICA 2026",
    subtitle: "World's Leading Trade Fair for the Medical Sector",
    location: "Düsseldorf, Germany",
    date: "2026",
    description:
      "A globally recognized medical trade fair bringing together healthcare companies, professionals and innovators from across the world.",
    link: "https://www.medica-tradefair.com/",
  },

  {
    year: "2027",
    title: "Arab Health & Medlab Middle East",
    subtitle: "Healthcare & Laboratory Exhibition",
    location: "Dubai, UAE",
    date: "2027",
    description:
      "A major healthcare and laboratory event in Dubai, offering excellent opportunities for businesses to connect with global healthcare professionals.",
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
  },
];

export default function UpcomingEvents() {
  return (
    <section
      id="upcoming-events"
      className="py-24 bg-[#F5F9FF]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <Reveal>
          <div className="text-center mb-14">

            <span className="text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
              Upcoming Events
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
              Upcoming International
              <span className="text-[#003DA5]">
                {" "}Exhibitions
              </span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-7">
              Planning to attend an international exhibition?
              Sarathi NX provides complete travel assistance including
              flights, hotels, visas and exhibition travel management.
            </p>

          </div>
        </Reveal>


        {/* Event Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {upcomingEvents.map((event, index) => (

            <Reveal
              key={event.title}
              delay={index * 0.15}
            >

              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">

                {/* Top */}

                <div className="bg-[#003DA5] p-6 text-white">

                  <div className="flex items-center justify-between">

                    <span className="text-sm font-semibold uppercase tracking-wider">
                      Upcoming
                    </span>

                    <span className="bg-white/15 px-4 py-1.5 rounded-full text-sm font-bold">
                      {event.year}
                    </span>

                  </div>

                  <h3 className="text-2xl font-bold mt-5">
                    {event.title}
                  </h3>

                  <p className="text-blue-100 mt-2">
                    {event.subtitle}
                  </p>

                </div>


                {/* Content */}

                <div className="p-7 flex flex-col flex-1">

                  {/* Location */}

                  <div className="flex items-center gap-3 text-[#003DA5] font-medium">

                    <FaMapMarkerAlt />

                    <span>
                      {event.location}
                    </span>

                  </div>


                  {/* Date */}

                  <div className="flex items-center gap-3 text-gray-600 mt-4">

                    <FaCalendarAlt className="text-[#003DA5]" />

                    <span>
                      Event Year: {event.date}
                    </span>

                  </div>


                  {/* Description */}

                  <p className="text-gray-600 leading-7 mt-6">
                    {event.description}
                  </p>


                  {/* Buttons */}

                  <div className="mt-auto pt-7 flex flex-wrap gap-3">

                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#003DA5] hover:bg-[#002B75] text-white px-5 py-3 rounded-full font-semibold transition"
                    >
                      Official Website
                      <FaExternalLinkAlt className="text-xs" />
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 border-2 border-[#003DA5] text-[#003DA5] hover:bg-[#003DA5] hover:text-white px-5 py-3 rounded-full font-semibold transition"
                    >
                      Plan Your Visit
                      <FaArrowRight className="text-sm" />
                    </a>

                  </div>

                </div>

              </div>

            </Reveal>

          ))}

        </div>


        {/* Bottom CTA */}

        <Reveal delay={0.4}>

          <div className="mt-14 bg-[#003DA5] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">

            <div>

              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Planning to attend an exhibition?
              </h3>

              <p className="text-blue-100 mt-2">
                Let Sarathi NX manage your complete exhibition travel.
              </p>

            </div>

            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#003DA5] hover:bg-blue-50 px-7 py-4 rounded-full font-semibold transition"
            >
              Get Travel Assistance
              <FaArrowRight />
            </a>

          </div>

        </Reveal>

      </div>
    </section>
  );
}