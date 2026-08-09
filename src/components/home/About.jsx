import { FaCheckCircle } from "react-icons/fa";
import Reveal from "../common/Reveal";

export default function About() {
  return (
    <section id="about" className="bg-white py-24" id="about">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <Reveal direction="left">
  <div>
    <img
      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900"
      alt="About Sarathi NX"
      className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
    />
  </div>
</Reveal>

          {/* Right Content */}
          <Reveal direction="right">

          <div>

            <Reveal delay={0.1}>
  <span className="text-[#0F766E] font-semibold uppercase tracking-widest">
    About Sarathi NX
  </span>
</Reveal>

<Reveal delay={0.2}>
  <h2 className="text-5xl font-bold mt-4 text-gray-800 leading-tight">
    Your Trusted Partner For Business Travel & Exhibitions
  </h2>
</Reveal>

            <Reveal delay={0.3}>
  <p className="mt-6 text-gray-600 leading-8">
    Sarathi NX provides end-to-end travel solutions for corporate
    clients, exhibitions, business delegations, hotel bookings,
    visa assistance and international travel planning.
  </p>
</Reveal>

           <div className="grid grid-cols-2 gap-4 mt-8">

  <Reveal delay={0.4}>
    <div className="flex items-center gap-3">
      <FaCheckCircle className="text-[#0F766E]" />
      Corporate Travel
    </div>
  </Reveal>

  <Reveal delay={0.5}>
    <div className="flex items-center gap-3">
      <FaCheckCircle className="text-[#0F766E]" />
      Visa Assistance
    </div>
  </Reveal>

  <Reveal delay={0.6}>
    <div className="flex items-center gap-3">
      <FaCheckCircle className="text-[#0F766E]" />
      Exhibition Tours
    </div>
  </Reveal>

  <Reveal delay={0.7}>
    <div className="flex items-center gap-3">
      <FaCheckCircle className="text-[#0F766E]" />
      Hotel Booking
    </div>
  </Reveal>

</div>

           <Reveal delay={0.8}>
  <button className="mt-10 bg-[#0F766E] hover:bg-[#115E59] text-white px-8 py-4 rounded-full transition">
    Read More
  </button>
</Reveal>

          </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}