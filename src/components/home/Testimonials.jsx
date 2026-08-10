import { FaStar, FaQuoteLeft } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#F5F9FF]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Trusted by businesses for reliable travel, exhibition management and corporate travel solutions."
          />
        </Reveal>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {testimonials.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.12}
            >
              <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">

                {/* Top Blue Line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-[#003DA5] rounded-b-full" />

                {/* Quote Icon */}
                <div className="w-14 h-14 rounded-full bg-[#EAF2FF] flex items-center justify-center mb-6">
                  <FaQuoteLeft className="text-2xl text-[#003DA5]" />
                </div>

                {/* Review */}
                <p className="text-gray-600 leading-7 min-h-[140px]">
                  "{item.review}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-[#F59E0B]"
                    />
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 mt-6 pt-5">

                  <h3 className="font-bold text-lg text-gray-800">
                    {item.name}
                  </h3>

                  <p className="text-[#003DA5] font-medium mt-1">
                    {item.company}
                  </p>

                </div>

              </div>
            </Reveal>
          ))}

        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.4}>
          <div className="mt-14 text-center">

            <p className="text-gray-500">
              Planning your next business trip or international exhibition?
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center mt-4 bg-[#003DA5] hover:bg-[#002B75] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Plan Your Journey
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  );
}