import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import {
  FaPlaneDeparture,
  FaBuilding,
  FaPassport,
  FaHotel,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPlaneDeparture />,
    title: "Corporate Travel",
    description:
      "Professional business travel solutions tailored to your organization.",
  },
  {
    icon: <FaBuilding />,
    title: "Exhibition Management",
    description:
      "Complete exhibition planning and international event support.",
  },
  {
    icon: <FaPassport />,
    title: "Visa Assistance",
    description:
      "Fast and reliable visa guidance for business and leisure travel.",
  },
  {
    icon: <FaHotel />,
    title: "Hotel Booking",
    description:
      "Premium hotel reservations at competitive corporate rates.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F8FAFC]" id="services">
      <div className="max-w-7xl mx-auto px-6">


<SectionHeading
  subtitle="Our Services"
  title="Travel Solutions We Offer"
  description="We provide end-to-end travel and exhibition management services for businesses and professionals."
/>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
  <Reveal key={index} delay={index * 0.15}>
    <div className="bg-white rounded-2xl p-8 shadow-md hover:-translate-y-3 hover:shadow-2xl transition duration-300 h-full">

      <div className="w-16 h-16 rounded-full bg-[#0F766E] text-white flex items-center justify-center text-2xl mb-6">
        {service.icon}
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        {service.title}
      </h3>

      <p className="text-gray-600 leading-7">
        {service.description}
      </p>

      <button className="mt-6 text-[#0F766E] font-semibold hover:underline">
        Read More →
      </button>

    </div>
  </Reveal>
))}

        </div>

      </div>
    </section>
  );
}