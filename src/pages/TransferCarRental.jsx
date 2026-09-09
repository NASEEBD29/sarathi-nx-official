import {
  FaArrowRight,
  FaCar,
  FaCheckCircle,
  FaPlaneArrival,
  FaUserTie,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";

export default function TransferCarRental() {
  const whatsappNumber = "917666984626";

  const services = [
    {
      icon: FaPlaneArrival,
      title: "Airport Transfers",
      text: "Convenient airport pickup and drop arrangements for a smoother arrival and departure.",
    },
    {
      icon: FaUserTie,
      title: "Chauffeur Services",
      text: "Comfortable chauffeur-driven transportation for business and personal travel.",
    },
    {
      icon: FaCar,
      title: "Car Rental",
      text: "Vehicle solutions for individuals, families, executives and groups.",
    },
    {
      icon: FaUsers,
      title: "Group Transfers",
      text: "Transportation coordination for meetings, events, tours and group movements.",
    },
  ];

  const options = [
    "Airport pickup and drop",
    "Point-to-point transfers",
    "Chauffeur-driven cars",
    "Corporate transportation",
    "Event and exhibition transfers",
    "Group transportation",
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[430px] md:min-h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=90"
          alt="Transfer and car rental"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031b3a]/95 via-[#073b70]/80 to-[#073b70]/20" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-28 md:pt-32 pb-20">
          <Reveal>
            <div className="max-w-[720px]">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-[2px] bg-orange-500" />
                <span className="text-white text-[11px] md:text-xs font-bold uppercase tracking-[2.5px]">
                  Transfer & Car Rental
                </span>
              </div>

              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
                Get There
                <br />
                <span className="text-orange-500">Comfortably.</span>
              </h1>

              <p className="mt-4 text-white/90 text-sm md:text-base leading-6 max-w-[600px]">
                Reliable ground transportation for airport transfers,
                corporate travel, exhibitions, holidays and group journeys.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full text-sm font-semibold shadow-lg transition-all hover:-translate-y-1"
                >
                  Arrange A Transfer
                  <FaArrowRight className="text-xs" />
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/80 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-[#103a6d] transition-all"
                >
                  <FaWhatsapp />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-[-1px] left-0 right-0 h-8 bg-white rounded-t-[50%] scale-x-110" />
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Reveal direction="left">
              <div>
                <span className="text-orange-500 text-xs font-bold uppercase tracking-[3px]">
                  Ground Transportation
                </span>

                <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#12385f] leading-tight">
                  From Arrival To
                  <br />
                  <span className="text-[#1556bd]">Final Destination.</span>
                </h2>

                <p className="mt-5 text-gray-600 leading-7">
                  A well-planned transfer can make the difference between a
                  stressful arrival and a smooth start. We help coordinate
                  practical transportation based on your itinerary.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {[
                    "Airport transfers",
                    "Private transportation",
                    "Corporate travel",
                    "Group movements",
                  ].map((item) => (
                    <div key={item} className="flex gap-2 items-center">
                      <FaCheckCircle className="text-orange-500 text-sm" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="rounded-[24px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=85"
                  alt="Luxury travel vehicle"
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-[#f5f8fc]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[3px]">
                Our Transportation Services
              </span>

              <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-[#12385f]">
                Travel The Way You Need
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-lg h-full hover:-translate-y-2 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1556bd] flex items-center justify-center text-lg">
                      <Icon />
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-[#12385f]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 leading-6">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="py-16">
        <div className="max-w-[1050px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="bg-[#06376b] rounded-[24px] p-6 md:p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-[3px]">
                    Flexible Transportation
                  </span>

                  <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
                    Built Around Your Itinerary
                  </h2>

                  <p className="mt-3 text-blue-100 leading-6 text-sm md:text-base">
                    Tell us where you need to go, when you need to arrive and
                    how many people are travelling. We will help coordinate
                    the transportation.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {options.map((item) => (
                    <div
                      key={item}
                      className="flex gap-2 items-start bg-white/10 rounded-xl p-3"
                    >
                      <FaCheckCircle className="text-orange-400 mt-1 text-sm shrink-0" />
                      <span className="text-sm text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="enquiry" className="py-16 bg-[#f5f8fc]">
        <Reveal>
          <div className="max-w-[900px] mx-auto px-5 text-center">
            <FaCar className="text-[#1556bd] text-3xl mx-auto" />

            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#12385f]">
              Need A Reliable Transfer?
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base">
              Share your travel details and let our team help arrange your
              transportation.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#1ebe5d] transition-all"
            >
              <FaWhatsapp />
              Enquire On WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
