import {
  FaGlobeAsia,
  FaUsers,
  FaMoneyBillWave,
  FaUserTie,
  FaHandshake,
  FaPassport,
  FaHeadset,
  FaRoute,
} from "react-icons/fa";

import Reveal from "../common/Reveal";

const features = [
  {
    icon: FaGlobeAsia,
    title: "End-to-End Travel Solutions",
    desc: "Complete travel management under one roof.",
  },
  {
    icon: FaUsers,
    title: "Experienced Travel Experts",
    desc: "Industry professionals with proven expertise.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Transparent Pricing",
    desc: "Honest pricing with no hidden charges.",
  },
  {
    icon: FaUserTie,
    title: "Dedicated Travel Consultants",
    desc: "Personalized guidance for every journey.",
  },
  {
    icon: FaHandshake,
    title: "Worldwide Network",
    desc: "Reliable global travel partnerships.",
  },
  {
    icon: FaPassport,
    title: "Fast Visa Assistance",
    desc: "Quick and hassle-free visa support.",
  },
  {
    icon: FaHeadset,
    title: "24×7 Customer Support",
    desc: "Assistance whenever you need it.",
  },
  {
    icon: FaRoute,
    title: "Personalized Travel Solutions",
    desc: "Travel plans tailored to your needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <Reveal>
          <div className="text-center mb-14">

            <span className="text-[#0F766E] uppercase tracking-[4px] font-semibold">
              Why Choose Sarathi NX
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-800">
              Your Trusted
              <span className="text-[#0F766E]"> Travel Partner</span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-7">
              We combine industry expertise, global partnerships and
              personalized service to deliver seamless travel experiences
              for businesses and individual travelers.
            </p>

          </div>
        </Reveal>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={index}
                delay={index * 0.08}
              >
                <div className="group bg-white rounded-2xl p-7 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">

                  <div className="w-16 h-16 mx-auto rounded-full bg-[#0F766E] text-white flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-semibold mt-6 text-gray-800">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {item.desc}
                  </p>

                </div>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}