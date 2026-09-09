import {
  FaArrowRight,
  FaCheckCircle,
  FaGlobeAsia,
  FaHeartbeat,
  FaPlane,
  FaShieldAlt,
  FaSuitcase,
  FaUmbrella,
  FaWhatsapp,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";

export default function TravelInsurance() {
  const whatsappNumber = "917666984626";
  const whatsapp = `https://wa.me/${whatsappNumber}`;

  const covers = [
    [
      FaHeartbeat,
      "Medical Emergencies",
      "Guidance for unexpected medical situations during your journey.",
    ],
    [
      FaPlane,
      "Travel Disruptions",
      "Coverage options for eligible delays, cancellations and interruptions.",
    ],
    [
      FaSuitcase,
      "Baggage Protection",
      "Insurance options covering eligible baggage-related situations.",
    ],
    [
      FaGlobeAsia,
      "Worldwide Travel",
      "Travel insurance options for international journeys and destinations.",
    ],
  ];

  const benefits = [
    "International travel insurance guidance",
    "Domestic travel insurance options",
    "Medical emergency coverage options",
    "Baggage and travel disruption protection",
    "Policy selection assistance",
    "Pre-travel insurance guidance",
  ];

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative min-h-[400px] overflow-hidden md:min-h-[460px]">
        <img
          src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=2200&q=90"
          alt="Travel insurance"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#041d3d]/95 via-[#073b70]/80 to-[#073b70]/25" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 pt-24 sm:px-8 md:pt-28 lg:px-10">
          <Reveal>
            <div className="max-w-[700px]">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-8 bg-orange-500" />
                <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-white sm:text-xs">
                  Travel Insurance
                </span>
              </div>

              <h1 className="text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl md:text-5xl lg:text-[58px]">
                Travel With
                <br />
                <span className="text-orange-500">
                  Greater Confidence.
                </span>
              </h1>

              <p className="mt-4 max-w-[600px] text-sm leading-6 text-white/90 md:text-base">
                Travel insurance guidance designed to provide financial
                protection against eligible travel-related risks.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-orange-600 hover:-translate-y-0.5"
                >
                  Get Assistance
                  <FaArrowRight className="text-xs" />
                </a>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#103a6d]"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-[-1px] left-0 right-0 h-7 scale-x-110 rounded-t-[50%] bg-white" />
      </section>

      {/* INTRO */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal direction="left">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-orange-500 sm:text-xs">
                  Protect Your Journey
                </span>

                <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#12385f] md:text-4xl lg:text-5xl">
                  Because A Good Trip
                  <br />
                  <span className="text-[#1556bd]">
                    Should Feel Secure.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                  Unexpected situations can happen even when every part of a
                  trip has been carefully planned. Travel insurance can help
                  reduce the financial impact of eligible events.
                </p>

                <div className="mt-5 rounded-xl border border-blue-50 bg-[#f5f8fc] p-4">
                  <div className="flex gap-3">
                    <FaShieldAlt className="mt-1 shrink-0 text-xl text-[#1556bd]" />

                    <div>
                      <h3 className="text-sm font-bold text-[#12385f]">
                        Guidance Before You Travel
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-gray-600 sm:text-sm">
                        Understand available options and choose suitable travel
                        protection for your journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="relative overflow-hidden rounded-[22px] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1400&q=85"
                  alt="Traveller preparing for a journey"
                  className="h-[300px] w-full object-cover sm:h-[350px]"
                />

                <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-[#1556bd] shadow-lg">
                  <FaUmbrella />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="bg-[#f5f8fc] py-12 md:py-16">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <Reveal>
            <div className="mb-8 text-center">
              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-orange-500 sm:text-xs">
                Travel Protection
              </span>

              <h2 className="mt-2 text-3xl font-extrabold text-[#12385f] md:text-4xl lg:text-5xl">
                Protection For The Unexpected
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {covers.map(([Icon, title, text], index) => (
              <Reveal key={title} delay={index * 0.08}>
                <div className="h-full rounded-xl border border-gray-100 bg-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg text-[#1556bd]">
                    <Icon />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#12385f]">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-gray-600">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal direction="left">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-orange-500 sm:text-xs">
                  What We Assist With
                </span>

                <h2 className="mt-2 text-3xl font-extrabold text-[#12385f] md:text-4xl lg:text-5xl">
                  Travel Protection,
                  <br />
                  <span className="text-[#1556bd]">Made Easier.</span>
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600">
                  Get practical guidance before your journey so you can choose
                  suitable travel protection with confidence.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="grid gap-2.5 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl bg-[#f5f8fc] p-3.5"
                  >
                    <FaCheckCircle className="mt-0.5 shrink-0 text-orange-500" />

                    <span className="text-sm font-medium leading-5 text-[#243b5a]">
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
      <section
        id="enquiry"
        className="bg-[#06376b] py-12 text-white md:py-16"
      >
        <Reveal>
          <div className="mx-auto max-w-[850px] px-5 text-center">
            <FaShieldAlt className="mx-auto text-3xl text-orange-400" />

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl lg:text-5xl">
              Protect Your Next Journey
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100 md:text-base">
              Speak with our travel team about insurance options for your
              upcoming trip.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#1ebe5d]"
            >
              <FaWhatsapp />
              Get Assistance On WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
