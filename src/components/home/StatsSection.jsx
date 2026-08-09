import {
  FaUsers,
  FaGlobeAsia,
  FaSuitcase,
  FaHeadset,
} from "react-icons/fa";

import Reveal from "../common/Reveal";
import AnimatedNumber from "../common/AnimatedNumber";

const stats = [
  {
    icon: FaUsers,
    number: 500,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    icon: FaGlobeAsia,
    number: 25,
    suffix: "+",
    title: "Countries Covered",
  },
  {
    icon: FaSuitcase,
    number: 1200,
    suffix: "+",
    title: "Successful Tours",
  },
  {
    icon: FaHeadset,
    number: 24,
    suffix: "/7",
    title: "Customer Support",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#0F766E] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={index}
                delay={index * 0.15}
              >
                <div className="text-center text-white">

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto rounded-full bg-white text-[#0F766E] flex items-center justify-center text-3xl mb-5 shadow-lg hover:scale-110 transition-transform duration-300">
                    <Icon />
                  </div>

                  {/* Number */}
                  <h2 className="text-5xl font-bold">
                    <AnimatedNumber
                      end={item.number}
                      duration={2000}
                    />
                    {item.suffix}
                  </h2>

                  {/* Title */}
                  <p className="mt-3 text-lg text-gray-200">
                    {item.title}
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