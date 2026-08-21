import {
  FaCheckCircle,
  FaGlobeAsia,
  FaHeadset,
  FaHandshake,
  FaUserTie,
  FaPassport,
  FaPlaneDeparture,
  FaUsers,
  FaRoute,
} from "react-icons/fa";

import Reveal from "../common/Reveal";

const features = [
  {
    icon: <FaCheckCircle />,
    title: "End-to-End Travel Solutions",
    desc: "Complete travel management under one roof, from flights and hotels to visas and travel assistance.",
  },
  {
    icon: <FaUserTie />,
    title: "Experienced Travel Experts",
    desc: "Industry professionals with proven expertise in business, exhibition and international travel.",
  },
  {
    icon: <FaHandshake />,
    title: "Transparent Pricing",
    desc: "Honest and competitive pricing with complete transparency and no hidden charges.",
  },
  {
    icon: <FaUsers />,
    title: "Dedicated Travel Consultants",
    desc: "Personalized guidance and dedicated assistance for every journey and requirement.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Worldwide Network",
    desc: "Reliable global travel partnerships helping you travel confidently across destinations.",
  },
  {
    icon: <FaPassport />,
    title: "Fast Visa Assistance",
    desc: "Quick and hassle-free visa guidance and documentation support for international travel.",
  },
  {
    icon: <FaHeadset />,
    title: "24×7 Customer Support",
    desc: "Dedicated assistance whenever you need us, before, during and after your journey.",
  },
  {
    icon: <FaRoute />,
    title: "Personalized Travel Solutions",
    desc: "Travel plans carefully tailored to your business needs, preferences and requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">

            <span className="text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
              Why Choose Sarathi NX
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
              Travel With Confidence.
              <span className="block text-[#003DA5] mt-2">
                We Take Care of Every Detail.
              </span>
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              From planning and documentation to flights, hotels and
              exhibition travel, our team is committed to making every
              journey smooth, reliable and hassle-free.
            </p>

          </div>
        </Reveal>


        {/* ================= FEATURES ================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {features.map((item, index) => (

            <Reveal
              key={item.title}
              delay={index * 0.08}
            >

              <div className="group h-full bg-[#F8FBFF] rounded-2xl p-7 border border-blue-50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                {/* Icon */}

                <div className="w-16 h-16 rounded-2xl bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#003DA5] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>


                {/* Title */}

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#003DA5] transition">
                  {item.title}
                </h3>


                {/* Description */}

                <p className="text-gray-600 leading-7 text-sm">
                  {item.desc}
                </p>

              </div>

            </Reveal>

          ))}

        </div>


        {/* ================= PROMISE ================= */}

        <Reveal delay={0.5}>

          <div className="mt-16 bg-gradient-to-r from-[#f75c02] to-[#f75c02] rounded-3xl p-10 md:p-12 text-center text-white">

            <p className="text-blue-200 uppercase tracking-[4px] text-sm font-semibold">
              Our Promise
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-4">
              We Plan. You Travel. We Care.
            </h3>

            <p className="text-blue-100 max-w-2xl mx-auto mt-4 leading-7">
              Your journey is our responsibility. We focus on every
              detail so you can focus on your business, exhibition or
              travel experience.
            </p>

          </div>

        </Reveal>

      </div>
    </section>
  );
}