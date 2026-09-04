import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
  FaPlane,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";
import tradeFairImage from "../assets/images/exhibitions/tredfair.jpg";
import image1 from "../assets/images/gallery/gallery1.jpg";
import image2 from "../assets/images/gallery/gallery2.jpg";

const exhibitions = [
  {
    title: "CMEF 2026",
    subtitle: "China International Medical Equipment Fair",
    location: "Shanghai, China",
    date: "21 - 24 October 2026",
    price: "₹1,24,500",
    image: tradeFairImage,
    link: "https://www.cmef.com.cn/en",
  },
  {
    title: "MEDICA 2026",
    subtitle: "World Forum for Medicine",
    location: "Düsseldorf, Germany",
    date: "16 - 19 November 2026",
    price: "₹1,35,000",
    image: tradeFairImage,
    link: "https://www.medica-tradefair.com/",
  },
  {
    title: "ARAB HEALTH 2027",
    subtitle: "Healthcare Exhibition & Medical Conference",
    location: "Dubai, UAE",
    date: "January 2027",
    price: "Coming Soon",
    image: tradeFairImage,
    link: "#",
  },
  {
    title: "MEDLAB 2027",
    subtitle: "Laboratory & Diagnostics Exhibition",
    location: "Dubai, UAE",
    date: "February 2027",
    price: "Coming Soon",
    image: tradeFairImage,
    link: "#",
  },
  {
    title: "CANTON FAIR 2026",
    subtitle: "China Import and Export Fair",
    location: "Guangzhou, China",
    date: "October 2026",
    price: "₹1,12,000",
    image: tradeFairImage,
    link: "https://www.cantonfair.org.cn/",
  },
  {
    title: "WELDING & CUTTING 2026",
    subtitle: "Beijing Essen Welding & Cutting Fair",
    location: "Beijing, China",
    date: "November 2026",
    price: "Coming Soon",
    image: tradeFairImage,
    link: "#",
  },
  {
    title: "ITMA ASIA + CITME 2026",
    subtitle: "International Textile Machinery Exhibition",
    location: "Shanghai, China",
    date: "20 - 24 November 2026",
    price: "₹1,15,000",
    image: tradeFairImage,
    link: "#",
  },
  {
    title: "CHINA GLASS 2027",
    subtitle: "China International Glass Industrial Exhibition",
    location: "Shanghai, China",
    date: "April 2027",
    price: "Coming Soon",
    image: tradeFairImage,
    link: "#",
  },
];

const journeyImages = [
  tradeFairImage,
  image1,
  image2,
  
];

export default function Exhibitions() {
  return (
    <main className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="relative min-h-[560px] md:min-h-[620px] overflow-hidden bg-[#dfe7ef]">

        {/* Banner Image */}
        <img
          src={tradeFairImage}
          alt="International Trade Fair"
          className="absolute inset-0 w-full h-full object-contain object-center"
        />

        {/* Dark overlay - image ko visible rakhega */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#052f62]/55 via-[#073b73]/20 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-20 md:pt-24">

          <Reveal>

            <div className="max-w-[570px]">

              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-[2px] bg-orange-500" />

                <span className="text-white text-xs md:text-sm font-bold tracking-[3px]">
                  INTERNATIONAL EXHIBITIONS
                </span>
              </div>

              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold leading-[1.05]">
                Explore Leading
                <br />
                <span className="text-orange-500">
                  Global Exhibitions
                </span>
              </h1>

              <p className="mt-6 text-white text-base md:text-lg leading-7 max-w-[510px]">
                Discover the world's leading trade fairs and exhibitions.
                We provide complete travel assistance for businesses
                attending international exhibitions.
              </p>

              <a
                href="#exhibitions"
                className="inline-flex items-center gap-3 mt-7 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-full shadow-lg transition-all duration-300"
              >
                Plan Exhibition Travel

                <span className="w-8 h-8 rounded-full bg-white text-orange-500 flex items-center justify-center">
                  <FaArrowRight className="text-xs" />
                </span>
              </a>

            </div>

          </Reveal>

        </div>

        {/* ================= HERO FEATURES ================= */}

        <div className="absolute bottom-0 left-0 right-0 z-20">

          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10">

            <div className="bg-white/95 backdrop-blur-sm rounded-t-[30px] px-5 md:px-8 py-5 shadow-lg">

              <div className="grid grid-cols-1 sm:grid-cols-3">

                <div className="flex items-center justify-center sm:justify-start gap-4 py-3">
                  <div className="w-11 h-11 rounded-full bg-blue-50 text-[#0754bd] flex items-center justify-center text-xl">
                    <FaPlane />
                  </div>

                  <div>
                    <h4 className="text-[#153764] font-bold text-sm">
                      End-to-End
                    </h4>
                    <p className="text-[#153764] text-xs">
                      Travel Support
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-4 py-3 sm:border-l border-gray-200 sm:pl-8">
                  <div className="w-11 h-11 rounded-full bg-blue-50 text-[#0754bd] flex items-center justify-center text-xl">
                    <FaGlobe />
                  </div>

                  <div>
                    <h4 className="text-[#153764] font-bold text-sm">
                      Global Exhibition
                    </h4>
                    <p className="text-[#153764] text-xs">
                      Expertise
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-4 py-3 sm:border-l border-gray-200 sm:pl-8">
                  <div className="w-11 h-11 rounded-full bg-blue-50 text-[#0754bd] flex items-center justify-center text-xl">
                    <FaShieldAlt />
                  </div>

                  <div>
                    <h4 className="text-[#153764] font-bold text-sm">
                      Seamless & Hassle-free
                    </h4>
                    <p className="text-[#153764] text-xs">
                      Experience
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EXHIBITIONS ================= */}

      <section id="exhibitions" className="py-14 md:py-20 bg-white">

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

          {/* Heading */}

          <Reveal>

            <div className="text-center max-w-[800px] mx-auto">

              <span className="text-orange-500 text-xs md:text-sm font-bold tracking-[2.5px] uppercase">
                Upcoming Trade Fairs
              </span>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#102f59]">
                Explore Leading Exhibitions
              </h2>

              <p className="mt-4 text-gray-600 text-sm md:text-base leading-7">
                Explore the world's most important exhibitions and
                international trade fairs. Plan your business journey
                with complete travel, accommodation and visa assistance.
              </p>

            </div>

          </Reveal>


          {/* ================= CARDS ================= */}

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {exhibitions.map((item, index) => (

              <Reveal key={item.title} delay={index * 0.04}>

                <article className="group bg-white border border-gray-200 rounded-xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                  {/* Image */}

                  <div className="relative w-full h-[215px] overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    <span className="absolute top-4 left-4 bg-white text-[#1556bd] px-3 py-1.5 rounded-full text-[11px] font-bold shadow">
                      TRADE FAIR
                    </span>

                  </div>


                  {/* Content */}

                  <div className="p-5 flex flex-col flex-1">

                    <h3 className="text-xl font-bold leading-6 text-[#17375f] group-hover:text-[#1556bd] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-5 text-gray-500 min-h-[40px]">
                      {item.subtitle}
                    </p>


                    {/* Date */}

                    <div className="mt-5 flex items-center gap-3 text-sm text-gray-600">

                      <span className="w-8 h-8 rounded-full bg-blue-50 text-[#1556bd] flex items-center justify-center shrink-0">
                        <FaCalendarAlt className="text-xs" />
                      </span>

                      <span>
                        {item.date}
                      </span>

                    </div>


                    {/* Location */}

                    <div className="mt-2 flex items-center gap-3 text-sm text-gray-600">

                      <span className="w-8 h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                        <FaMapMarkerAlt className="text-xs" />
                      </span>

                      <span>
                        {item.location}
                      </span>

                    </div>


                    {/* Price */}

                    <div className="mt-5 pt-4 border-t border-gray-100">

                      <span className="block text-xs text-gray-400 mb-1">
                        Package Starting From
                      </span>

                      <span className="text-xl font-bold text-[#17375f]">
                        {item.price}
                      </span>

                    </div>


                    {/* Buttons */}

                    <div className="mt-5 flex gap-3">

                      {item.link !== "#" ? (

                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center border border-[#1556bd] text-[#1556bd] hover:bg-[#1556bd] hover:text-white py-2.5 rounded-md text-sm font-semibold transition-all duration-300"
                        >
                          Read More
                        </a>

                      ) : (

                        <button
                          type="button"
                          className="flex-1 border border-gray-300 text-gray-500 py-2.5 rounded-md text-sm font-semibold"
                        >
                          Read More
                        </button>

                      )}

                      <a
                        href="#contact"
                        className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-md text-sm font-semibold transition-colors duration-300"
                      >
                        Enquire Now
                      </a>

                    </div>

                  </div>

                </article>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* ================= RUNNING IMAGES ================= */}

      <section className="py-14 md:py-20 bg-[#f6f9fd] overflow-hidden">

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

          <Reveal>

            <div className="text-center max-w-[750px] mx-auto">

              <span className="text-orange-500 text-xs md:text-sm font-bold tracking-[2.5px] uppercase">
                Our Exhibition Journeys
              </span>

              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#102f59]">
                Successful Corporate Journeys
              </h2>

              <p className="mt-3 text-gray-500 text-sm md:text-base">
                Supporting businesses across leading international exhibitions.
              </p>

            </div>

          </Reveal>

        </div>


        {/* Running Images */}

        <div className="mt-10 relative w-full overflow-hidden">

          <div className="flex w-max gap-5 trade-marquee">

            {[...journeyImages, ...journeyImages].map((image, index) => (

              <div
                key={index}
                className="w-[280px] sm:w-[330px] lg:w-[390px] h-[200px] rounded-2xl overflow-hidden shrink-0 shadow-md"
              >

                <img
                  src={image}
                  alt={`Exhibition journey ${index + 1}`}
                  className="w-full h-full object-cover"
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= MARQUEE CSS ================= */}

      <style>{`
        @keyframes tradeMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .trade-marquee {
          animation: tradeMarquee 35s linear infinite;
        }

        .trade-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

    </main>
  );
}
