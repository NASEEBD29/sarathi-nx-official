import SectionHeading from "../common/SectionHeading";
import { industries } from "../../data/industries";

export default function Industries() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Industries"
          title="Industries We Serve"
          description="We provide customized travel and exhibition solutions across multiple industries."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group bg-[#F8FAFC] rounded-2xl p-8 text-center hover:bg-[#0F766E] transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center text-[#0F766E] group-hover:bg-white">
                  <Icon className="text-3xl" />
                </div>

                <h3 className="mt-5 font-semibold text-gray-800 group-hover:text-white text-lg">
                  {item.title}
                </h3>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}