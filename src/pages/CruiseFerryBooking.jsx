import {
  FaArrowRight,
  FaAnchor,
  FaBed,
  FaCheckCircle,
  FaGlobeAsia,
  FaShip,
  FaTicketAlt,
  FaWhatsapp,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";

export default function CruiseFerryBooking() {
  const whatsappNumber = "917666984626";

  const services = [
    {
      icon: FaShip,
      title: "Cruise Booking",
      text: "Explore cruise options and plan your sailing around your preferred itinerary.",
    },
    {
      icon: FaTicketAlt,
      title: "Ferry Booking",
      text: "Ferry travel assistance for destinations where sea connections are part of the journey.",
    },
    {
      icon: FaBed,
      title: "Cabin & Stay",
      text: "Guidance on accommodation options for your cruise and related travel plans.",
    },
    {
      icon: FaGlobeAsia,
      title: "Complete Journey",
      text: "Coordinate cruise travel with flights, hotels, transfers and other arrangements.",
    },
  ];

  const included = [
    "Cruise itinerary assistance",
    "Cabin selection guidance",
    "Ferry booking assistance",
    "Pre- and post-cruise hotels",
    "Flight and transfer coordination",
    "Customized cruise travel planning",
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[430px] md:min-h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=2200&q=90"
          alt="Cruise and ferry booking"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031b3a]/95 via-[#063b73]/80 to-[#063b73]/20" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-28 md:pt-32 pb-20">
          <Reveal>
            <div className="max-w-[720px]">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-[2px] bg-orange-500" />
                <span className="text-white text-[11px] md:text-xs font-bold uppercase tracking-[2.5px]">
                  Cruise & Ferry Booking
                </span>
              </div>

              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
                Your Next Adventure
                <br />
                <span className="text-orange-500">Starts At Sea.</span>
              </h1>

              <p className="mt-4 text-white/90 text-sm md:text-base leading-6 max-w-[600px]">
                Discover memorable cruise and ferry journeys with travel
                planning support from booking to boarding and beyond.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full text-sm font-semibold shadow-lg transition-all hover:-translate-y-1"
                >
                  Plan A Cruise
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
                  Cruise Travel Made Easy
                </span>

                <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#12385f] leading-tight">
                  More Than A Booking.
                  <br />
                  <span className="text-[#1556bd]">A Complete Journey.</span>
                </h2>

                <p className="mt-5 text-gray-600 leading-7">
                  A cruise holiday often involves more than simply reaching
                  the port. Flights, hotels, transfers, cabins and schedules
                  all need to work together.
                </p>

                <p className="mt-3 text-gray-600 leading-7">
                  We help coordinate these travel elements so your sea journey
                  begins smoothly.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="rounded-[24px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1400&q=85"
                  alt="Cruise ship at sea"
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
                Our Cruise Services
              </span>

              <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-[#12385f]">
                Plan Every Part Of The Journey
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

      {/* COORDINATION */}
      <section className="py-16">
        <div className="max-w-[1050px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Reveal direction="left">
              <div>
                <span className="text-orange-500 text-xs font-bold uppercase tracking-[3px]">
                  Complete Coordination
                </span>

                <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#12385f]">
                  From Port
                  <br />
                  <span className="text-[#1556bd]">To Port.</span>
                </h2>

                <p className="mt-4 text-gray-600 leading-7">
                  Make your cruise planning easier by bringing the important
                  travel arrangements together in one itinerary.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="grid sm:grid-cols-2 gap-3">
                {included.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 p-4 rounded-xl bg-[#f5f8fc] border border-blue-50"
                  >
                    <FaCheckCircle className="text-orange-500 mt-1 shrink-0" />

                    <span className="text-sm font-medium text-[#243b5a]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="enquiry" className="py-16 bg-[#06376b] text-white">
        <Reveal>
          <div className="max-w-[900px] mx-auto px-5 text-center">
            <FaAnchor className="text-orange-400 text-3xl mx-auto" />

            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              Ready To Set Sail?
            </h2>

            <p className="mt-4 text-blue-100 max-w-2xl mx-auto leading-6 text-sm md:text-base">
              Tell us where you want to go and let our team help create a
              cruise or ferry travel plan around your journey.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#1ebe5d] transition-all"
            >
              <FaWhatsapp />
              Plan Your Journey
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
