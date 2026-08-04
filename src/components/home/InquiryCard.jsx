import { FaPaperPlane } from "react-icons/fa";

export default function InquiryCard() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">

      <h2 className="text-2xl font-bold text-[#0F766E] mb-2">
        Quick Enquiry
      </h2>

      <p className="text-gray-500 text-sm mb-6">
        Get in touch with our travel experts.
      </p>

      <form className="space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#0F766E]"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#0F766E]"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#0F766E]"
        />

        <select
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#0F766E]"
        >
          <option>Select Service</option>
          <option>Business Travel</option>
          <option>Exhibition Tour</option>
          <option>Visa Assistance</option>
          <option>Corporate Tour</option>
        </select>

        <button
          className="w-full bg-[#0F766E] hover:bg-[#115E59] text-white py-3 rounded-lg flex justify-center items-center gap-2 transition"
        >
          <FaPaperPlane />
          Send Enquiry
        </button>

      </form>

    </div>
  );
}