import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

import {
  FaPlaneDeparture,
  FaBuilding,
  FaPassport,
  FaHotel,
  FaUsers,
  FaGlobeAsia,
  FaBriefcase,
  FaSuitcaseRolling,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPlaneDeparture />,
    title: "International Exhibition Travel",
    description:
      "Complete travel solutions for international exhibitions, trade fairs and business events worldwide.",
  },
  {
    icon: <FaBriefcase />,
    title: "Business Travel",
    description:
      "Professional business travel planning with flights, hotels, transfers and personalized assistance.",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Travel",
    description:
      "Customized corporate travel solutions designed around your organization's business requirements.",
  },
  {
    icon: <FaPassport />,
    title: "Visa Assistance",
    description:
      "Reliable visa guidance and documentation support for business and international travel.",
  },
  {
    icon: <FaUsers />,
    title: "MICE",
    description:
      "Meetings, Incentives, Conferences and Events managed with professional travel support.",
  },
  {
    icon: <FaSuitcaseRolling />,
    title: "Group Tours",
    description:
      "Well-planned group travel experiences with customized itineraries and complete travel assistance.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Global Tourism",
    description:
      "Explore destinations worldwide with carefully planned leisure and international travel experiences.",
  },
  {
    icon: <FaHotel />,
    title: "Hotel & Travel Assistance",
    description:
      "Comfortable hotel bookings and end-to-end travel arrangements at competitive rates.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[#F8FBFF]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <SectionHeading
          eyebrow="Our Services"
          title="Complete Travel Solutions Under One Roof"
          description="From international exhibitions and corporate travel to visas, hotels and group tours, Sarathi NX provides professional travel solutions tailored to your needs."
        />


        {/* ================= SERVICES GRID ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">

          {services.map((service, index) => (

            <Reveal
              key={service.title}
              delay={index * 0.1}
            >

              <div
                className="group h-full bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Icon */}

                <div className="w-16 h-16 rounded-2xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#003DA5] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>


                {/* Title */}

                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-snug">
                  {service.title}
                </h3>


                {/* Description */}

                <p className="text-gray-600 leading-7 text-sm">
                  {service.description}
                </p>


                {/* Read More */}

                <a
                  href="/sarathi-nx-official/services"
                  className="inline-flex items-center gap-2 mt-6 text-[#003DA5] font-semibold text-sm hover:text-[#002B73] transition"
                >
                  Learn More

                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>

                </a>

              </div>

            </Reveal>

          ))}

        </div>


        {/* ================= BOTTOM CTA ================= */}

        <Reveal delay={0.4}>

          <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#002B73] to-[#0057B8] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">

            <div>

              <p className="text-blue-200 uppercase tracking-[3px] text-sm font-semibold">
                Need Travel Assistance?
              </p>

              <h3 className="text-2xl md:text-3xl font-bold mt-2">
                Let us plan your next journey.
              </h3>

              <p className="text-blue-100 mt-2">
                Our travel experts are ready to assist you.
              </p>

            </div>


            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#003DA5] px-7 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Plan Your Trip

              <FaPlaneDeparture />
            </a>

          </div>

        </Reveal>

      </div>
    </section>
  );
}