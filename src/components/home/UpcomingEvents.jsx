import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaExternalLinkAlt,
  FaPlaneDeparture,
  FaGlobeAsia,
} from "react-icons/fa";

import { motion } from "framer-motion";
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
    accent: "blue",
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
    accent: "orange",
  },

  {
    year: "2027",
    title: "Arab Health & Medlab",
    subtitle: "Healthcare & Laboratory Exhibition",
    location: "Dubai, UAE",
    date: "2027",
    description:
      "A major healthcare and laboratory event in Dubai, offering excellent opportunities for businesses to connect with global healthcare professionals.",
    link: "https://www.worldhealthexpo.com/events/labs/dubai/",
    accent: "blue",
  },
];

export default function UpcomingEvents() {
  return (
    <section
      id="upcoming-events"
      className="relative overflow-hidden bg-[#F6F9FD] py-20 md:py-24"
    >

      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />

      <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ================= HEADING ================= */}

        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">

            <div className="flex items-center justify-center gap-3 mb-5">

              <span className="w-10 h-[2px] bg-[#fc6602]" />

              <span className="uppercase tracking-[4px] text-xs md:text-sm font-bold text-[#0057B8]">
                Upcoming Events
              </span>

              <span className="w-10 h-[2px] bg-[#0057B8]" />

            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Upcoming International
              <span className="block text-[#0057B8] mt-2">
                Exhibitions
              </span>
            </h2>

            <p className="mt-5 text-gray-600 leading-7 text-sm md:text-base">
              Discover upcoming global exhibitions and let Sarathi NX
              handle your complete exhibition travel — from flights and
              hotels to visas and on-ground assistance.
            </p>

          </div>
        </Reveal>


        {/* ================= EVENT CARDS ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {upcomingEvents.map((event, index) => {

            const isOrange = event.accent === "orange";

            return (
              <Reveal
                key={event.title}
                delay={index * 0.12}
              >

                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                  className="
                    group
                    relative
                    h-full
                    bg-white
                    rounded-[2rem]
                    overflow-hidden
                    border
                    border-gray-100
                    shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                    hover:shadow-[0_20px_50px_rgba(0,87,184,0.15)]
                    transition-shadow
                    duration-500
                  "
                >

                  {/* ================= TOP EVENT HEADER ================= */}

                  <div
                    className={`
                      relative
                      overflow-hidden
                      p-7
                      text-white
                      ${
                        isOrange
                          ? "bg-gradient-to-br from-[#fc6602] to-[#e84d00]"
                          : "bg-gradient-to-br from-[#0057B8] to-[#003D8F]"
                      }
                    `}
                  >

                    {/* Decorative Circles */}

                    <div
                      className="
                        absolute
                        -top-16
                        -right-16
                        w-44
                        h-44
                        rounded-full
                        bg-white/10
                        group-hover:scale-150
                        transition-transform
                        duration-700
                      "
                    />

                    <div
                      className="
                        absolute
                        -bottom-20
                        -left-16
                        w-40
                        h-40
                        rounded-full
                        bg-white/5
                      "
                    />


                    <div className="relative z-10">

                      {/* Top Row */}

                      <div className="flex items-center justify-between">

                        <div className="flex items-center gap-2">

                          <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                            <FaGlobeAsia />
                          </div>

                          <span className="text-xs uppercase tracking-[2px] font-bold text-white/80">
                            Upcoming
                          </span>

                        </div>


                        {/* Year Badge */}

                        <div className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-sm font-extrabold shadow-lg">
                          {event.year}
                        </div>

                      </div>


                      {/* Event Title */}

                      <h3 className="text-3xl font-extrabold mt-7 tracking-tight">
                        {event.title}
                      </h3>

                      <p className="text-white/80 text-sm leading-6 mt-2 min-h-[48px]">
                        {event.subtitle}
                      </p>

                    </div>

                  </div>


                  {/* ================= CARD BODY ================= */}

                  <div className="p-7 flex flex-col h-[330px]">

                    {/* Location + Date */}

                    <div className="grid grid-cols-2 gap-3">

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          bg-blue-50
                          text-[#0057B8]
                          px-3
                          py-2.5
                          rounded-xl
                          text-xs
                          font-bold
                        "
                      >
                        <FaMapMarkerAlt />

                        <span className="truncate">
                          {event.location}
                        </span>
                      </div>


                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          bg-orange-50
                          text-[#fc6602]
                          px-3
                          py-2.5
                          rounded-xl
                          text-xs
                          font-bold
                        "
                      >
                        <FaCalendarAlt />

                        <span>
                          {event.date}
                        </span>
                      </div>

                    </div>


                    {/* Description */}

                    <p className="text-gray-600 text-sm leading-7 mt-6">
                      {event.description}
                    </p>


                    {/* Exhibition Travel */}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        mt-5
                        text-xs
                        font-bold
                        text-gray-500
                      "
                    >
                      <FaPlaneDeparture className="text-[#fc6602]" />

                      <span>
                        Exhibition Travel Assistance Available
                      </span>
                    </div>


                    {/* Buttons */}

                    <div className="mt-auto pt-6 flex items-center gap-3">

                      {/* Official Website */}

                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex-1
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          bg-[#0057B8]
                          hover:bg-[#003D8F]
                          text-white
                          px-4
                          py-3
                          rounded-xl
                          text-xs
                          font-bold
                          transition-all
                          duration-300
                        "
                      >
                        Official Website

                        <FaExternalLinkAlt className="text-[10px]" />

                      </a>


                      {/* Plan Visit */}

                      <a
                        href="#contact"
                        className="
                          flex-1
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          border-2
                          border-gray-200
                          text-[#0057B8]
                          hover:border-[#fc6602]
                          hover:text-[#fc6602]
                          px-4
                          py-3
                          rounded-xl
                          text-xs
                          font-bold
                          transition-all
                          duration-300
                        "
                      >
                        Plan Visit

                        <FaArrowRight
                          className="
                            group-hover:translate-x-1
                            transition-transform
                          "
                        />

                      </a>

                    </div>

                  </div>


                  {/* ================= BOTTOM ACCENT ================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-1
                      w-0
                      bg-gradient-to-r
                      from-[#fc6602]
                      to-[#0057B8]
                      group-hover:w-full
                      transition-all
                      duration-500
                    "
                  />

                </motion.div>

              </Reveal>
            );
          })}

        </div>


        {/* ================= CTA ================= */}

        <Reveal delay={0.4}>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="
              relative
              overflow-hidden
              mt-12
              rounded-[2rem]
              bg-gradient-to-r
              from-[#fc6602]
              to-[#0057B8]
              p-[1px]
              shadow-xl
            "
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                bg-gradient-to-r
                from-[#fc6602]
                to-[#0057B8]
                px-7
                py-8
                md:px-10
                md:py-9
                flex
                flex-col
                md:flex-row
                items-center
                justify-between
                gap-6
              "
            >

              {/* Decorative Shape */}

              <div
                className="
                  absolute
                  -right-20
                  -top-24
                  w-56
                  h-56
                  rounded-full
                  bg-white/10
                "
              />

              <div
                className="
                  absolute
                  -left-16
                  -bottom-28
                  w-52
                  h-52
                  rounded-full
                  bg-white/10
                "
              />


              <div className="relative z-10 text-center md:text-left">

                <div className="flex items-center justify-center md:justify-start gap-2 text-white/80 text-xs uppercase tracking-[3px] font-bold">
                  <FaPlaneDeparture />
                  Exhibition Travel
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-2">
                  Planning to attend an exhibition?
                </h3>

                <p className="text-white/80 text-sm mt-2">
                  Let Sarathi NX manage your complete exhibition travel.
                </p>

              </div>


              <a
                href="#contact"
                className="
                  relative
                  z-10
                  shrink-0
                  inline-flex
                  items-center
                  gap-2
                  bg-white
                  text-[#0057B8]
                  hover:bg-gray-50
                  px-6
                  py-3.5
                  rounded-xl
                  font-bold
                  text-sm
                  shadow-lg
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                Get Travel Assistance

                <FaArrowRight
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />

              </a>

            </div>

          </motion.div>

        </Reveal>

      </div>
    </section>
  );
}