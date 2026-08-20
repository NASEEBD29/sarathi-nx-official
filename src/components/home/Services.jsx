import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaPlaneDeparture,
  FaBuilding,
  FaPassport,
  FaHotel,
  FaUsers,
  FaGlobeAsia,
  FaBriefcase,
  FaSuitcaseRolling,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: FaPlaneDeparture,
    title: "International Exhibition Travel",
    shortTitle: "Exhibition Travel",
    description:
      "Travel confidently to international exhibitions, trade fairs and business events with complete planning, documentation and travel assistance.",
  },
  {
    icon: FaBriefcase,
    title: "Business Travel",
    shortTitle: "Business Travel",
    description:
      "Make every business trip simple and efficient with carefully planned flights, hotels, transfers and personalized travel support.",
  },
  {
    icon: FaBuilding,
    title: "Corporate Travel",
    shortTitle: "Corporate Travel",
    description:
      "Customized corporate travel solutions designed around your company's requirements, schedules and business objectives.",
  },
  {
    icon: FaPassport,
    title: "Visa Assistance",
    shortTitle: "Visa Assistance",
    description:
      "Get professional guidance with visa documentation, application requirements and travel-related formalities for international destinations.",
  },
  {
    icon: FaUsers,
    title: "MICE",
    shortTitle: "MICE",
    description:
      "From meetings and conferences to incentive programs and corporate events, we manage travel arrangements with professional attention.",
  },
  {
    icon: FaSuitcaseRolling,
    title: "Group Tours",
    shortTitle: "Group Tours",
    description:
      "Enjoy well-organized group journeys with customized itineraries, accommodation, transportation and complete travel assistance.",
  },
  {
    icon: FaGlobeAsia,
    title: "Global Tourism",
    shortTitle: "Global Tourism",
    description:
      "Discover destinations around the world through thoughtfully planned leisure travel experiences designed around your preferences.",
  },
  {
    icon: FaHotel,
    title: "Hotel & Travel Assistance",
    shortTitle: "Hotel & Assistance",
    description:
      "From comfortable hotel bookings to transfers and other travel arrangements, we take care of the details for a smooth journey.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const service = services[activeService];
  const Icon = service.icon;

  return (
    <section
      id="services"
      className="bg-[#F8FBFF] py-10 lg:py-12"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-8">

          <span className="inline-block text-[#003DA5] text-sm font-bold uppercase tracking-[3px]">
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-2">
            Complete Travel Solutions
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm md:text-base leading-6">
            From international exhibitions and corporate journeys to visas,
            hotels and group tours, we take care of every important detail
            so you can travel with confidence.
          </p>

        </div>


        {/* ================= SERVICE AREA ================= */}

        <div className="grid lg:grid-cols-[270px_1fr] gap-5 items-stretch">

          {/* ================= LEFT MENU ================= */}

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

            <div className="px-5 py-4 bg-[#003DA5] text-white">

              <p className="text-xs uppercase tracking-[2px] text-blue-200 font-semibold">
                What We Offer
              </p>

              <h3 className="text-lg font-bold mt-1">
                Our Services
              </h3>

            </div>


            <div className="p-2">

              {services.map((item, index) => {
                const MenuIcon = item.icon;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveService(index)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      activeService === index
                        ? "bg-[#EAF2FF] text-[#003DA5] shadow-sm"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#003DA5]"
                    }`}
                  >

                    <span
                      className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        activeService === index
                          ? "bg-[#003DA5] text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <MenuIcon className="text-sm" />
                    </span>


                    <span
                      className={`text-sm font-semibold ${
                        activeService === index
                          ? "text-[#003DA5]"
                          : "text-gray-600"
                      }`}
                    >
                      {item.shortTitle}
                    </span>

                  </button>
                );
              })}

            </div>

          </div>


          {/* ================= MAIN CARD ================= */}

          <div className="relative min-h-[520px] lg:min-h-0">

            <AnimatePresence mode="wait">

              <motion.div
                key={activeService}
                initial={{
                  opacity: 0,
                  rotateY: -12,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  rotateY: 0,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  rotateY: 12,
                  x: -30,
                }}
                transition={{
                  duration: 0.55,
                  ease: "easeInOut",
                }}
                className="h-full"
              >

                <div className="h-full min-h-[520px] lg:min-h-0 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden relative">

                  {/* Decorative background */}

                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#EAF2FF] rounded-full blur-3xl opacity-70 -translate-y-1/2 translate-x-1/3" />

                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/3" />


                  {/* Card Content */}

                  <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-10 lg:p-12">

                    {/* Icon */}

                    <div className="w-20 h-20 rounded-2xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-3xl shadow-sm mb-7">
                      <Icon />
                    </div>


                    {/* Small label */}

                    <span className="text-[#003DA5] text-sm font-bold uppercase tracking-[2px]">
                      Sarathi NX
                    </span>


                    {/* Title */}

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-3 max-w-2xl leading-tight">
                      {service.title}
                    </h3>


                    {/* Description */}

                    <p className="text-gray-600 text-base md:text-lg leading-8 mt-5 max-w-2xl">
                      {service.description}
                    </p>


                    {/* Bottom content */}

                    <div className="flex flex-wrap items-center gap-5 mt-8">

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-3 bg-[#003DA5] hover:bg-[#002B73] text-white px-6 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                      >
                        Enquire Now

                        <FaArrowRight className="text-sm" />
                      </a>


                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-2 h-2 rounded-full bg-[#003DA5]" />
                        Professional Travel Assistance
                      </div>

                    </div>


                    {/* Progress indicators */}

                    <div className="flex gap-2 mt-9">

                      {services.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setActiveService(index)}
                          aria-label={`Show service ${index + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            activeService === index
                              ? "w-10 bg-[#003DA5]"
                              : "w-5 bg-gray-200 hover:bg-gray-300"
                          }`}
                        />
                      ))}

                    </div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}