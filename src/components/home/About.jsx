import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Reveal from "../common/Reveal";

export default function About() {
  const features = [
    "International Exhibition Travel",
    "Business & Corporate Travel",
    "MICE & Group Tours",
    "Visa & Travel Assistance",
  ];

  return (
    <section
      id="about"
      className="py-10 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================= LEFT IMAGE ================= */}
          <Reveal direction="left">

            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000"
                alt="Sarathi NX Business Travel"
                className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
              />

              {/* Experience Card */}
              <div className="absolute -bottom-8 -right-5 md:right-8 bg-[#003DA5] text-white rounded-2xl px-7 py-6 shadow-2xl">

                <p className="text-4xl font-bold">
                  2012
                </p>

                <p className="text-blue-100 mt-1">
                  Travel Legacy
                </p>

              </div>

            </div>

          </Reveal>


          {/* ================= RIGHT CONTENT ================= */}
          <div>

            <Reveal direction="right">

              <span className="text-[#003DA5] uppercase tracking-[4px] font-semibold text-sm">
                Who We Are
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
                Your Trusted Partner for Business & International Travel
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Sarathi NX Pvt. Ltd. is a professionally managed travel
                company dedicated to delivering seamless business and
                leisure travel experiences.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Built on a travel legacy dating back to 2012 and officially
                incorporated on 1st March 2020, we combine years of industry
                expertise with a commitment to excellence.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                We specialize in International Exhibition Travel, Business
                Travel, Corporate Travel, MICE, Group Tours and Global
                Tourism, providing comprehensive travel solutions tailored
                to the unique needs of businesses and individual travelers.
              </p>

            </Reveal>


            {/* ================= FEATURES ================= */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              {features.map((feature, index) => (

                <Reveal
                  key={feature}
                  delay={0.1 * index}
                >

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-[#003DA5] shrink-0" />

                    <span className="text-gray-700 font-medium">
                      {feature}
                    </span>

                  </div>

                </Reveal>

              ))}

            </div>


            {/* ================= BUTTON ================= */}
            <Reveal delay={0.5}>

              <a
                href="/sarathi-nx-official/about"
                className="inline-flex items-center gap-2 mt-10 bg-gradient-to-r
                          from-[#fc6602]
                          via-[#fc6602]
                          to-[#0057B8]
                          hover:from-[#e95500]
                          hover:via-[#fc6602]
                          hover:to-[#004494]
                         text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Discover More

                <FaArrowRight className="text-sm" />

              </a>

            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}