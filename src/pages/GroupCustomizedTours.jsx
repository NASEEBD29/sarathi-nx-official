import {
  FaArrowRight,
  FaCheckCircle,
  FaGlobeAsia,
  FaHotel,
  FaMapMarkedAlt,
  FaRoute,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";

export default function GroupCustomizedTours() {
  const whatsappNumber = "917666984626";

  const services = [
    {
      icon: FaRoute,
      title: "Customized Itineraries",
      text: "Trips designed around your destinations, duration, interests and budget.",
    },
    {
      icon: FaUsers,
      title: "Group Tours",
      text: "Travel coordination for families, friends, corporate teams and groups.",
    },
    {
      icon: FaHotel,
      title: "Stay & Transport",
      text: "Accommodation and transportation planned as part of your itinerary.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Destination Planning",
      text: "Practical guidance to help you make the most of your destinations.",
    },
  ];

  const tourTypes = [
    "Family holidays",
    "Friends & group vacations",
    "Corporate group travel",
    "Customized international tours",
    "Customized domestic tours",
    "Special occasion trips",
  ];

  const process = [
    {
      number: "01",
      title: "Tell Us Your Idea",
      text: "Share your destination, dates, group size and travel preferences.",
    },
    {
      number: "02",
      title: "We Customize It",
      text: "Our team builds a practical itinerary around your preferences.",
    },
    {
      number: "03",
      title: "Enjoy The Journey",
      text: "Travel confidently with your major arrangements coordinated.",
    },
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* HERO - COMPACT */}
      <section className="relative min-h-[400px] md:min-h-[450px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90"
          alt="Group and customized tours"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031b3a]/95 via-[#073b70]/75 to-[#073b70]/20" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-24 md:py-28">
          <Reveal>
            <div className="max-w-[720px]">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-[2px] bg-orange-500" />
                <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[2.5px]">
                  Group & Customized Tours
                </span>
              </div>

              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
                Your Trip.{" "}
                <span className="text-orange-500">Your Way.</span>
              </h1>

              <p className="mt-4 text-white/90 text-sm md:text-base leading-6 max-w-[620px]">
                Personalized holiday and group travel experiences designed
                around the people, places and moments that matter to you.
              </p>

              <div className="flex flex-wrap gap-3 mt-5">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full text-sm font-semibold shadow-lg transition-all hover:-translate-y-1"
                >
                  Customize My Trip
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

        <div className="absolute bottom-[-1px] left-0 right-0 h-7 bg-white rounded-t-[50%] scale-x-110" />
      </section>

      {/* INTRO */}
      <section className="py-14 md:py-18">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Reveal direction="left">
              <div>
                <span className="text-orange-500 text-xs font-bold uppercase tracking-[3px]">
                  Travel Your Way
                </span>

                <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#12385f] leading-tight">
                  No Two Travellers
                  <br />
                  <span className="text-[#1556bd]">Need The Same Trip.</span>
                </h2>

                <p className="mt-5 text-gray-600 leading-7">
                  A customized tour gives you the flexibility to decide where
                  you go, how long you stay and what experiences you include.
                </p>

                <p className="mt-3 text-gray-600 leading-7">
                  From family holidays and friend groups to corporate
                  getaways, we shape the trip around your requirements.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full bg-blue-50 text-[#1556bd] text-sm font-semibold">
                    Flexible
                  </span>
                  <span className="px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-semibold">
                    Personalized
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-50 text-[#1556bd] text-sm font-semibold">
                    Group Friendly
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="rounded-[24px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85"
                  alt="Friends travelling together"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 bg-[#f5f8fc]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-9">
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[3px]">
                Our Tour Services
              </span>

              <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-[#12385f]">
                Designed Around You
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-md h-full hover:-translate-y-2 transition-all">
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

      {/* TOUR TYPES */}
      <section className="py-14">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
            <Reveal direction="left">
              <div>
                <span className="text-orange-500 text-xs font-bold uppercase tracking-[3px]">
                  Perfect For
                </span>

                <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#12385f]">
                  Every Kind Of
                  <br />
                  <span className="text-[#1556bd]">Traveller.</span>
                </h2>

                <p className="mt-4 text-gray-600 leading-7">
                  Whether it is a family vacation, friends' getaway or
                  organized group, we shape the itinerary around your needs.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="grid sm:grid-cols-2 gap-3">
                {tourTypes.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 p-3.5 rounded-xl bg-[#f5f8fc] border border-blue-50"
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

      {/* PROCESS */}
      <section className="py-14 bg-[#06376b]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center text-white mb-9">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-[3px]">
                How It Works
              </span>

              <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">
                From Your Idea To Your Itinerary
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4">
            {process.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.1}>
                <div className="h-full p-6 rounded-2xl bg-white/[0.08] border border-white/10 text-white">
                  <span className="text-orange-400 text-2xl font-extrabold">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>

                  <p className="mt-2 text-blue-100 text-sm leading-6">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="enquiry" className="py-14 bg-[#f5f8fc]">
        <Reveal>
          <div className="max-w-[900px] mx-auto px-5 text-center">
            <FaGlobeAsia className="text-[#1556bd] text-3xl mx-auto" />

            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#12385f]">
              Let's Build Your Perfect Trip
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-7">
              Tell us about your destination, group and travel preferences.
              We will help turn your idea into a practical itinerary.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#1ebe5d] transition-all"
            >
              <FaWhatsapp />
              Start Planning On WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
