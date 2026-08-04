import {
  FaGlobeAsia,
  FaHeadset,
  FaHandshake,
  FaUserTie,
} from "react-icons/fa";

const features = [
  {
    icon: <FaGlobeAsia />,
    title: "Global Network",
    desc: "Worldwide travel and exhibition support with trusted partners.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Partner",
    desc: "Professional services with complete transparency and reliability.",
  },
  {
    icon: <FaUserTie />,
    title: "Experienced Team",
    desc: "Dedicated travel experts with years of industry experience.",
  },
  {
    icon: <FaHeadset />,
    title: "24×7 Support",
    desc: "Always available to assist you before and during your journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-[#0F766E] uppercase tracking-[4px] font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold mt-4 text-gray-800">
            Why Businesses Trust Sarathi NX
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            We deliver reliable, professional and customized travel solutions
            for corporate clients and international exhibitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] rounded-2xl p-8 text-center shadow hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#0F766E] text-white flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}