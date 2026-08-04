import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-white py-24" id="about">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900"
              alt="About Sarathi NX"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Right Content */}

          <div>

            <span className="text-[#0F766E] font-semibold uppercase tracking-widest">
              About Sarathi NX
            </span>

            <h2 className="text-5xl font-bold mt-4 text-gray-800 leading-tight">
              Your Trusted Partner For Business Travel & Exhibitions
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Sarathi NX provides end-to-end travel solutions for corporate
              clients, exhibitions, business delegations, hotel bookings,
              visa assistance and international travel planning.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0F766E]" />
                Corporate Travel
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0F766E]" />
                Visa Assistance
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0F766E]" />
                Exhibition Tours
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0F766E]" />
                Hotel Booking
              </div>

            </div>

            <button className="mt-10 bg-[#0F766E] hover:bg-[#115E59] text-white px-8 py-4 rounded-full transition">
              Read More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}