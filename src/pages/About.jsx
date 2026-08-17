import {
  FaGlobeAsia,
  FaUsers,
  FaSuitcaseRolling,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";

export default function About() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#003DA5] text-white pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <Reveal>
            <div className="max-w-3xl">

              <span className="text-blue-200 uppercase tracking-[4px] font-semibold text-sm">
                About Sarathi NX
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
                Your Trusted Partner for
                <span className="block text-blue-200">
                  Global Business Travel
                </span>
              </h1>

              <p className="mt-6 text-blue-100 text-lg leading-8 max-w-2xl">
                We provide reliable and professionally managed travel
                solutions for businesses, international exhibitions,
                corporate journeys and global tourism.
              </p>

            </div>
          </Reveal>

        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="py-24 bg-[#F5F9FF]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <Reveal direction="left">

              <div className="relative">

                <img
                  src="/images/about.jpg"
                  alt="Sarathi NX Travel"
                  className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
                />

                <div className="absolute -bottom-6 -right-6 bg-[#003DA5] text-white rounded-2xl p-6 shadow-xl hidden md:block">

                  <p className="text-3xl font-bold">
                    2020
                  </p>

                  <p className="text-blue-200 mt-1">
                    Established
                  </p>

                </div>

              </div>

            </Reveal>


            {/* Content */}
            <Reveal direction="right">

              <div>

                <span className="text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
                  Who We Are
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
                  Making International
                  <span className="text-[#003DA5]">
                    {" "}Travel Simple
                  </span>
                </h2>

                <p className="text-gray-600 leading-8 mt-6">
                  Sarathi NX Pvt. Ltd. is a professionally managed travel
                  company specializing in international exhibition travel,
                  corporate travel, business travel, MICE, group tours
                  and global tourism.
                </p>

                <p className="text-gray-600 leading-8 mt-4">
                  Our team works closely with businesses and travellers
                  to provide seamless travel planning, visa assistance,
                  accommodation and complete destination support.
                </p>


                {/* Points */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">

                  {[
                    "International Travel Expertise",
                    "Exhibition Travel Management",
                    "Corporate Travel Solutions",
                    "Dedicated Customer Support",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="text-[#003DA5] mt-1 shrink-0" />

                      <span className="text-gray-700 font-medium">
                        {item}
                      </span>
                    </div>

                  ))}

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* ================= MISSION / VISION ================= */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-14">

              <span className="text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
                Our Purpose
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                Driven By
                <span className="text-[#003DA5]">
                  {" "}Trust & Excellence
                </span>
              </h2>

              <p className="text-gray-600 mt-5 leading-7">
                Our goal is to make every business and international
                travel experience smooth, efficient and stress-free.
              </p>

            </div>
          </Reveal>


          <div className="grid md:grid-cols-2 gap-8">

            {/* Mission */}
            <Reveal direction="left">

              <div className="bg-[#F5F9FF] border border-blue-100 rounded-3xl p-8 md:p-10 h-full">

                <div className="w-16 h-16 rounded-2xl bg-[#003DA5] text-white flex items-center justify-center text-2xl">
                  <FaHandshake />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mt-6">
                  Our Mission
                </h3>

                <p className="text-gray-600 leading-7 mt-4">
                  To deliver dependable, personalized and cost-effective
                  travel solutions that help our clients travel with
                  confidence and focus on their business goals.
                </p>

              </div>

            </Reveal>


            {/* Vision */}
            <Reveal direction="right">

              <div className="bg-[#003DA5] text-white rounded-3xl p-8 md:p-10 h-full">

                <div className="w-16 h-16 rounded-2xl bg-white text-[#003DA5] flex items-center justify-center text-2xl">
                  <FaGlobeAsia />
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  Our Vision
                </h3>

                <p className="text-blue-100 leading-7 mt-4">
                  To become a trusted global travel partner for businesses
                  and travellers by delivering exceptional service,
                  international expertise and long-term relationships.
                </p>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* ================= WHY SARATHI ================= */}
      <section className="py-24 bg-[#F5F9FF]">

        <div className="max-w-7xl mx-auto px-6">

          <Reveal>
            <div className="text-center mb-14">

              <span className="text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
                Why Sarathi NX
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                Travel With
                <span className="text-[#003DA5]">
                  {" "}Confidence
                </span>
              </h2>

            </div>
          </Reveal>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: FaGlobeAsia,
                title: "Global Network",
                text: "International travel support across major business and exhibition destinations.",
              },
              {
                icon: FaUsers,
                title: "Experienced Team",
                text: "A professional team focused on delivering smooth and reliable travel services.",
              },
              {
                icon: FaSuitcaseRolling,
                title: "Complete Solutions",
                text: "Travel, visa, hotel and exhibition support under one roof.",
              },
              {
                icon: FaHandshake,
                title: "Trusted Partnership",
                text: "We build long-term relationships through transparency and dependable service.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.12}
                >

                  <div className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">

                    <div className="w-14 h-14 rounded-xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-2xl">
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
              Ready to Plan Your Next Journey?
            </h2>

            <p className="text-blue-100 text-lg mt-5 max-w-2xl mx-auto leading-7">
              Let our travel experts take care of your business travel,
              international exhibition or corporate journey.
            </p>

            <a
              href="/sarathi-nx-official/#contact"
              className="inline-flex items-center mt-8 bg-white text-[#003DA5] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              Contact Our Team
            </a>

          </Reveal>

        </div>

      </section>

    </main>
  );
}