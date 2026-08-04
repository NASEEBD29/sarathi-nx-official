import { FaStar, FaQuoteLeft } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Trusted by businesses for reliable travel and exhibition management services."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FAFC] rounded-3xl p-8 shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <FaQuoteLeft className="text-4xl text-[#0F766E] mb-5" />

              <p className="text-gray-600 leading-7">
                "{item.review}"
              </p>

              <div className="flex gap-1 text-yellow-400 mt-5">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <div className="mt-6 border-t pt-5">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-gray-500">{item.company}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}