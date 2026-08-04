import { FaSearchPlus } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import { gallery } from "../../data/gallery";

export default function Gallery() {
  return (
    <section className="py-24 bg-[#F8FAFC]"  id="gallery">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Gallery"
          title="Our Travel Moments"
          description="A glimpse of our international exhibitions, business tours and corporate travel experiences."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {gallery.map((item) => (

            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl"
            >

              <img
                src={item.image}
                alt=""
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-300 flex items-center justify-center">

                <div className="opacity-0 group-hover:opacity-100 transition">

                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">

                    <FaSearchPlus className="text-[#0F766E] text-2xl"/>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}