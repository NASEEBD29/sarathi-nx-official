import { FaUsers, FaGlobe, FaSuitcase, FaHeadset } from "react-icons/fa";

const stats = [
  {
    icon: FaUsers,
    number: 500,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    icon: FaGlobe,
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="text-center text-white">
                <div className="w-20 h-20 mx-auto rounded-full bg-white text-[#0F766E] flex items-center justify-center text-3xl mb-5">
                  <Icon />
                </div>

                <h2 className="text-5xl font-bold">
                  {item.number}
                  {item.suffix}
                </h2>

                <p className="mt-3">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}