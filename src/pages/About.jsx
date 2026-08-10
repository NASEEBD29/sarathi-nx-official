import {
  FaCheckCircle,
  FaGlobeAsia,
  FaHandshake,
  FaPlaneDeparture,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const promises = [
    "End-to-End Travel Solutions",
    "Experienced Travel Experts",
    "Transparent Pricing",
    "Dedicated Travel Consultants",
    "Worldwide Network",
    "Fast Visa Assistance",
    "24×7 Customer Support",
    "Personalized Travel Solutions",
  ];

  return (
    <main>

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600"
          alt="International Business Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-white">
          <span className="text-[#5EEAD4] uppercase tracking-[4px] font-semibold">
            About Sarathi NX
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-5 max-w-4xl leading-tight">
            Your Trusted Partner for Global Travel & Exhibitions
          </h1>

          <p className="mt-6 text-gray-200 max-w-2xl text-lg leading-8">
            We Plan. You Travel. We Care.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#0F766E] uppercase tracking-[4px] font-semibold">
              Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
              Travel Expertise Built on Experience & Trust
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Sarathi NX Pvt. Ltd. is a professionally managed travel company
              dedicated to delivering seamless business and leisure travel
              experiences.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Built on a travel legacy dating back to 2012 and officially
              incorporated on 1st March 2020, we combine years of industry
              expertise with a commitment to excellence.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              We specialize in International Exhibition Travel, Business
              Travel, Corporate Travel, MICE, Group Tours and Global Tourism,
              providing comprehensive travel solutions tailored to the unique
              needs of businesses and individual travelers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000"
              alt="Sarathi NX Travel Team"
              className="w-full h-[520px] object-cover rounded-3xl shadow-xl"
            />
          </motion.div>

        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#0F766E] uppercase tracking-[4px] font-semibold">
              Our Journey
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
              From Travel Legacy to Global Travel Partner
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              From our travel legacy beginning in 2012 to our incorporation
              in 2020, Sarathi NX has grown with a clear focus on professional
              service, reliability and personalized travel solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <FaPlaneDeparture className="text-4xl text-[#0F766E] mx-auto" />

              <h3 className="text-2xl font-bold mt-5">
                2012
              </h3>

              <p className="mt-3 text-gray-600">
                Our travel legacy began, building experience across travel
                and tourism services.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <FaHandshake className="text-4xl text-[#0F766E] mx-auto" />

              <h3 className="text-2xl font-bold mt-5">
                2020
              </h3>

              <p className="mt-3 text-gray-600">
                Sarathi NX Pvt. Ltd. was officially incorporated with a
                professional approach to travel management.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <FaGlobeAsia className="text-4xl text-[#0F766E] mx-auto" />

              <h3 className="text-2xl font-bold mt-5">
                Global
              </h3>

              <p className="mt-3 text-gray-600">
                Today we support international exhibitions, business travel,
                corporate journeys and global tourism.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Complete Travel Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <span className="text-[#0F766E] uppercase tracking-[4px] font-semibold">
              What We Do
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
              Complete Travel Solutions Under One Roof
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              From flights, hotels, visas and travel insurance to complete
              exhibition and event travel management, we take care of every
              detail—ensuring a smooth, efficient and hassle-free journey
              from start to finish.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">

              {[
                "International Exhibition Travel",
                "Corporate Travel",
                "Business Travel",
                "MICE",
                "Group Tours",
                "Global Tourism",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-[#0F766E] shrink-0" />
                  <span className="text-gray-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </div>

          <div className="bg-[#0F766E] rounded-3xl p-10 text-white">

            <FaUsers className="text-5xl text-[#5EEAD4]" />

            <h3 className="text-3xl font-bold mt-6">
              Every Journey, Professionally Managed
            </h3>

            <p className="mt-5 text-teal-100 leading-8">
              Whether you're attending a global trade fair, planning a
              corporate trip or exploring destinations around the world,
              Sarathi NX is your trusted travel partner.
            </p>

            <p className="mt-5 text-teal-100 leading-8">
              We deliver every journey with professionalism, transparency,
              reliability and personalized service.
            </p>

          </div>

        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <span className="text-[#0F766E] uppercase tracking-[4px] font-semibold">
              Our Promise
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
              We Plan. You Travel. We Care.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            {promises.map((promise) => (
              <div
                key={promise}
                className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition"
              >
                <FaCheckCircle className="text-[#0F766E] text-2xl" />

                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {promise}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F766E]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">

          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Plan Your Next Journey?
          </h2>

          <p className="mt-5 text-teal-100 text-lg leading-8">
            Let Sarathi NX handle your travel while you focus on your
            business, exhibition or journey.
          </p>

          <a
            href="#contact"
            className="inline-flex mt-8 bg-white text-[#0F766E] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Plan Your Trip
          </a>

        </div>
      </section>

    </main>
  );
}