import {
  FaPlaneDeparture,
  FaBuilding,
  FaPassport,
  FaHotel,
  FaUsers,
  FaGlobeAsia,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";

const services = [
  {
    icon: FaPlaneDeparture,
    title: "International Exhibition Travel",
    description:
      "Complete travel solutions for businesses attending international exhibitions and trade fairs across the world.",
    points: [
      "Exhibition travel planning",
      "Flight & accommodation assistance",
      "Group travel coordination",
      "Destination support",
    ],
  },
  {
    icon: FaBuilding,
    title: "Corporate Travel",
    description:
      "Professional corporate travel management designed around your company's business requirements.",
    points: [
      "Corporate flight bookings",
      "Business accommodation",
      "Travel itinerary planning",
      "Dedicated travel assistance",
    ],
  },
  {
    icon: FaGlobeAsia,
    title: "Business Travel",
    description:
      "Seamless business travel arrangements that allow you to focus on meetings, networking and business growth.",
    points: [
      "International business trips",
      "Customized itineraries",
      "Airport & destination assistance",
      "Flexible travel solutions",
    ],
  },
  {
    icon: FaPassport,
    title: "Visa Assistance",
    description:
      "Reliable visa guidance and documentation support for international business and leisure travel.",
    points: [
      "Visa documentation guidance",
      "Application assistance",
      "Business visa support",
      "Travel documentation checklist",
    ],
  },
  {
    icon: FaHotel,
    title: "Hotel Booking",
    description:
      "Comfortable accommodation options at carefully selected hotels with competitive rates.",
    points: [
      "Corporate hotel bookings",
      "Exhibition-area hotels",
      "Group accommodation",
      "Special travel requirements",
    ],
  },
  {
    icon: FaUsers,
    title: "MICE & Group Tours",
    description:
      "Professionally managed group travel, meetings, incentives, conferences and corporate events.",
    points: [
      "Group travel planning",
      "Corporate events",
      "Meetings & conferences",
      "Customized group itineraries",
    ],
  },
];

export default function Services() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#003DA5] text-white pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <Reveal>
            <div className="max-w-4xl">

              <span className="text-blue-200 uppercase tracking-[4px] font-semibold text-sm">
                Our Services
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
                Complete Travel Solutions
                <span className="block text-blue-200">
                  For Your Global Journey
                </span>
              </h1>

              <p className="mt-6 text-blue-100 text-lg leading-8 max-w-3xl">
                From international exhibitions and corporate travel to
                visa assistance and group tours, Sarathi NX provides
                complete travel support designed around your requirements.
              </p>

              <a
                href="/sarathi-nx-official/#contact"
                className="inline-flex items-center gap-3 mt-8 bg-white text-[#003DA5] px-7 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                Plan Your Trip
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
              What We Offer
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
              Travel Made
              <span className="text-[#003DA5]">
                {" "}Simple & Reliable
              </span>
            </h2>

            <p className="text-gray-600 leading-8 mt-5">
              We understand that every traveller and business has
              different requirements. Our services are designed to
              provide convenient, professional and personalized travel
              assistance from planning to completion.
            </p>

          </Reveal>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <Reveal
                  key={service.title}
                  delay={index * 0.1}
                >

                  <div className="group bg-white border border-blue-100 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-2xl group-hover:bg-[#003DA5] group-hover:text-white transition-all duration-300">
                      <Icon />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 mt-7">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-7 mt-4">
                      {service.description}
                    </p>

                    {/* Points */}
                    <div className="space-y-3 mt-6">

                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3"
                        >
                          <FaCheckCircle className="text-[#003DA5] mt-1 shrink-0" />

                          <span className="text-gray-700 text-sm">
                            {point}
                          </span>
                        </div>
                      ))}

                    </div>

                    {/* CTA */}
                    <a
                      href="/sarathi-nx-official/#contact"
                      className="inline-flex items-center gap-2 mt-7 text-[#003DA5] font-semibold hover:gap-3 transition-all"
                    >
                      Enquire Now
                      <FaArrowRight className="text-sm" />
                    </a>

                  </div>

                </Reveal>
              );
            })}

          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}
      <section className="py-24 bg-[#F5F9FF]">

        <div className="max-w-7xl mx-auto px-6">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-14">

              <span className="text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
                Why Choose Us
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                One Partner,
                <span className="text-[#003DA5]">
                  {" "}Complete Support
                </span>
              </h2>

            </div>
          </Reveal>


          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: FaGlobeAsia,
                title: "Global Travel Network",
                text: "Travel support for major international business and exhibition destinations.",
              },
              {
                icon: FaUsers,
                title: "Experienced Team",
                text: "Professional assistance throughout your travel planning and journey.",
              },
              {
                icon: FaCheckCircle,
                title: "Reliable Service",
                text: "Transparent and dependable travel solutions focused on customer satisfaction.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.15}
                >

                  <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300">

                    <div className="w-16 h-16 mx-auto rounded-full bg-[#003DA5] text-white flex items-center justify-center text-2xl">
                      <Icon />
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mt-6">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7 mt-3">
                      {item.text}
                    </p>

                  </div>

                </Reveal>
              );
            })}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-20 bg-[#003DA5] text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <Reveal>

            <h2 className="text-4xl md:text-5xl font-bold">
              Planning Your Next Business Trip?
            </h2>

            <p className="text-blue-100 text-lg mt-5 max-w-2xl mx-auto leading-7">
              Speak with our travel experts and let us create the right
              travel solution for your requirements.
            </p>

            <a
              href="/sarathi-nx-official/#contact"
              className="inline-flex items-center gap-3 mt-8 bg-white text-[#003DA5] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              Contact Our Team
              <FaArrowRight />
            </a>

          </Reveal>

        </div>

      </section>

    </main>
  );
}