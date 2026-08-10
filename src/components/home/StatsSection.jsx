import {
  FaUsers,
  FaGlobeAsia,
  FaSuitcase,
  FaHeadset,
} from "react-icons/fa";

import Reveal from "../common/Reveal";
import AnimatedNumber from "../common/AnimatedNumber";

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#003DA5]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <Reveal>
          <div className="text-center mb-12">

            <span className="text-blue-200 uppercase tracking-[3px] font-semibold text-sm">
              Sarathi NX At A Glance
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Trusted Travel. Proven Experience.
            </h2>

            <p className="text-blue-100 max-w-2xl mx-auto mt-4">
              Our dedicated team helps businesses and travelers
              experience smooth and reliable journeys worldwide.
            </p>

          </div>
        </Reveal>


        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {/* 1 */}

          <Reveal delay={0.1}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 mx-auto rounded-full bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-2xl mb-5">
                <FaUsers />
              </div>

              <h3 className="text-4xl font-bold text-[#003DA5]">
                <AnimatedNumber
                  end={500}
                  duration={2000}
                />
                +
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                Happy Clients
              </p>

            </div>
          </Reveal>


          {/* 2 */}

          <Reveal delay={0.2}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 mx-auto rounded-full bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-2xl mb-5">
                <FaGlobeAsia />
              </div>

              <h3 className="text-4xl font-bold text-[#003DA5]">
                <AnimatedNumber
                  end={25}
                  duration={2000}
                />
                +
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                Countries Covered
              </p>

            </div>
          </Reveal>


          {/* 3 */}

          <Reveal delay={0.3}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 mx-auto rounded-full bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-2xl mb-5">
                <FaSuitcase />
              </div>

              <h3 className="text-4xl font-bold text-[#003DA5]">
                <AnimatedNumber
                  end={1200}
                  duration={2000}
                />
                +
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                Successful Tours
              </p>

            </div>
          </Reveal>


          {/* 4 */}

          <Reveal delay={0.4}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition-all duration-300">

              <div className="w-16 h-16 mx-auto rounded-full bg-[#EAF2FF] text-[#003DA5] flex items-center justify-center text-2xl mb-5">
                <FaHeadset />
              </div>

              <h3 className="text-4xl font-bold text-[#003DA5]">
                <AnimatedNumber
                  end={24}
                  duration={2000}
                />
                /7
              </h3>

              <p className="mt-3 text-gray-600 font-medium">
                Customer Support
              </p>

            </div>
          </Reveal>

        </div>

      </div>

    </section>
  );
}