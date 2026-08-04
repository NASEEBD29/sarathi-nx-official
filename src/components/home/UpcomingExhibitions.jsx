import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

import SectionHeading from "../common/SectionHeading";
import PrimaryButton from "../common/PrimaryButton";

import { exhibitions } from "../../data/exhibitions";

export default function UpcomingExhibitions() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Upcoming Events"
          title="International Exhibitions"
          description="Join global exhibitions and business events with Sarathi NX."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {exhibitions.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 mt-5 text-gray-600">
                  <FaMapMarkerAlt className="text-[#0F766E]" />
                  {item.city}, {item.country}
                </div>

                <div className="flex items-center gap-2 mt-3 text-gray-600">
                  <FaCalendarAlt className="text-[#0F766E]" />
                  {item.date}
                </div>

                <div className="mt-8">
                  <PrimaryButton className="w-full flex justify-center items-center gap-2">
                    View Details
                    <FaArrowRight />
                  </PrimaryButton>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}