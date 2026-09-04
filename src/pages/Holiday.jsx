import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
  FaPlaneDeparture,
  FaHotel,
  FaStar,
  FaCheckCircle,
  FaUmbrellaBeach,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";


/* =========================================================
   HOLIDAY PACKAGES
========================================================= */

const packages = [
  {
    title: "Dubai Luxury Escape",
    location: "Dubai, UAE",
    duration: "5 Nights / 6 Days",
    price: "Starting from ₹59,999",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    description:
      "Experience the luxury, entertainment and iconic attractions of Dubai with a carefully planned holiday package.",
    highlights: [
      "Luxury hotel stay",
      "Dubai city tour",
      "Desert safari",
      "Airport transfers",
    ],
  },
  {
    title: "Maldives Premium Escape",
    location: "Maldives",
    duration: "4 Nights / 5 Days",
    price: "Starting from ₹74,999",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    description:
      "Relax in the tropical paradise of Maldives with beautiful beaches, premium accommodation and unforgettable experiences.",
    highlights: [
      "Beach resort stay",
      "Daily breakfast",
      "Island transfers",
      "Leisure activities",
    ],
  },
  {
    title: "Singapore Holiday",
    location: "Singapore",
    duration: "5 Nights / 6 Days",
    price: "Starting from ₹64,999",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85",
    description:
      "Discover Singapore's modern skyline, attractions, shopping and vibrant city life with a comfortable holiday itinerary.",
    highlights: [
      "Premium hotel",
      "City sightseeing",
      "Universal Studios",
      "Airport transfers",
    ],
  },
  {
    title: "Switzerland Scenic Escape",
    location: "Switzerland",
    duration: "7 Nights / 8 Days",
    price: "Starting from ₹1,49,999",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85",
    description:
      "Enjoy breathtaking Alpine landscapes, charming towns and unforgettable European experiences.",
    highlights: [
      "Premium accommodation",
      "Swiss scenic train",
      "Mountain excursions",
      "Sightseeing tours",
    ],
  },
  {
    title: "Bali Premium Retreat",
    location: "Bali, Indonesia",
    duration: "5 Nights / 6 Days",
    price: "Starting from ₹49,999",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",
    description:
      "A relaxing tropical holiday combining beaches, culture, nature and premium experiences in Bali.",
    highlights: [
      "Premium resort stay",
      "Bali sightseeing",
      "Temple visits",
      "Private transfers",
    ],
  },
  {
    title: "Paris & Europe Escape",
    location: "Paris, France",
    duration: "6 Nights / 7 Days",
    price: "Starting from ₹1,29,999",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    description:
      "Explore the romance, architecture and culture of Paris with a beautifully curated European holiday.",
    highlights: [
      "Central hotel stay",
      "Paris city tour",
      "Iconic landmarks",
      "Airport transfers",
    ],
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function HolidayPackages() {
  return (
    <main className="bg-white overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[580px] md:min-h-[650px] overflow-hidden">

        {/* Background Image */}

        <img
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=90"
          alt="Premium Holiday Packages"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        {/* Dark Premium Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#071f3d]/85
            via-[#0b315c]/55
            to-transparent
          "
        />

        {/* Bottom Fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-black/35
            to-transparent
          "
        />


        {/* Hero Content */}

        <div
          className="
            relative
            z-10
            max-w-[1280px]
            mx-auto
            px-5
            sm:px-8
            lg:px-10
            pt-28
            md:pt-36
          "
        >

          <Reveal>

            <div className="max-w-[720px]">

              {/* Small Heading */}

              <div className="flex items-center gap-3 mb-5">

                <span className="w-11 h-[2px] bg-orange-500" />

                <span
                  className="
                    text-white
                    text-xs
                    md:text-sm
                    font-bold
                    tracking-[3px]
                  "
                >
                  PREMIUM HOLIDAY PACKAGES
                </span>

              </div>


              {/* Main Heading */}

              <h1
                className="
                  text-white
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[68px]
                  font-extrabold
                  leading-[1.04]
                  drop-shadow-xl
                "
              >
                Holidays Made
                <br />

                <span className="text-orange-500">
                  Extraordinary.
                </span>
              </h1>


              {/* Description */}

              <p
                className="
                  mt-6
                  text-white/90
                  text-base
                  md:text-lg
                  leading-8
                  max-w-[600px]
                "
              >
                Discover beautifully curated holiday experiences
                with premium stays, unforgettable destinations and
                personalized travel arrangements.
              </p>


              {/* CTA */}

              <a
                href="/sarathi-nx-official/#contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  mt-8
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  px-7
                  py-3.5
                  rounded-full
                  font-semibold
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Explore Packages

                <span
                  className="
                    w-8
                    h-8
                    rounded-full
                    bg-white
                    text-orange-500
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaArrowRight className="text-xs" />
                </span>

              </a>

            </div>

          </Reveal>

        </div>


        {/* =================================================
            HERO BOTTOM FEATURES
        ================================================= */}

        <div className="absolute bottom-0 left-0 right-0 z-20">

          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10">

            <div
              className="
                bg-white/95
                backdrop-blur-md
                rounded-t-[30px]
                shadow-[0_-10px_35px_rgba(0,0,0,0.15)]
                px-5
                md:px-8
                py-5
              "
            >

              <div className="grid grid-cols-1 sm:grid-cols-3">

                {/* Feature */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    sm:justify-start
                    gap-4
                    py-3
                  "
                >

                  <div
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-orange-50
                      text-orange-500
                      flex
                      items-center
                      justify-center
                      text-xl
                    "
                  >
                    <FaUmbrellaBeach />
                  </div>

                  <div>

                    <h4 className="text-[#153764] font-bold text-sm">
                      Handpicked Holidays
                    </h4>

                    <p className="text-gray-500 text-xs mt-1">
                      Curated Experiences
                    </p>

                  </div>

                </div>


                {/* Feature */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    sm:justify-start
                    gap-4
                    py-3
                    sm:border-l
                    border-gray-200
                    sm:pl-8
                  "
                >

                  <div
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-blue-50
                      text-[#1556bd]
                      flex
                      items-center
                      justify-center
                      text-xl
                    "
                  >
                    <FaHotel />
                  </div>

                  <div>

                    <h4 className="text-[#153764] font-bold text-sm">
                      Premium Stays
                    </h4>

                    <p className="text-gray-500 text-xs mt-1">
                      Comfortable Accommodation
                    </p>

                  </div>

                </div>


                {/* Feature */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    sm:justify-start
                    gap-4
                    py-3
                    sm:border-l
                    border-gray-200
                    sm:pl-8
                  "
                >

                  <div
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-blue-50
                      text-[#1556bd]
                      flex
                      items-center
                      justify-center
                      text-xl
                    "
                  >
                    <FaPlaneDeparture />
                  </div>

                  <div>

                    <h4 className="text-[#153764] font-bold text-sm">
                      Complete Travel
                    </h4>

                    <p className="text-gray-500 text-xs mt-1">
                      From Planning To Return
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="py-16 md:py-20 bg-white">

        <div className="max-w-[850px] mx-auto px-5 sm:px-8 text-center">

          <Reveal>

            <span
              className="
                text-orange-500
                text-xs
                md:text-sm
                font-bold
                tracking-[2.5px]
                uppercase
              "
            >
              Discover The World
            </span>


            <h2
              className="
                mt-3
                text-3xl
                md:text-4xl
                lg:text-[42px]
                font-bold
                text-[#102f59]
              "
            >
              Your Dream Holiday,
              <span className="text-[#1556bd]">
                {" "}Beautifully Planned
              </span>
            </h2>


            <p
              className="
                mt-5
                text-gray-600
                text-sm
                md:text-base
                leading-7
              "
            >
              Whether you are looking for a relaxing beach escape,
              an exciting city break or an unforgettable international
              journey, our holiday packages are designed to make
              every moment of your trip special.
            </p>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          PACKAGES
      ===================================================== */}

      <section className="py-16 md:py-20 bg-[#f6f9fd]">

        <div
          className="
            max-w-[1280px]
            mx-auto
            px-5
            sm:px-8
            lg:px-10
          "
        >

          {/* Heading */}

          <Reveal>

            <div className="text-center max-w-[760px] mx-auto">

              <span
                className="
                  text-orange-500
                  text-xs
                  md:text-sm
                  font-bold
                  tracking-[2.5px]
                  uppercase
                "
              >
                Our Holiday Collection
              </span>

              <h2
                className="
                  mt-2
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-[#102f59]
                "
              >
                Explore Our
                <span className="text-[#1556bd]">
                  {" "}Premium Packages
                </span>
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                Choose your destination and let us take care of
                the details.
              </p>

            </div>

          </Reveal>


          {/* Package Grid */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-7
            "
          >

            {packages.map((item, index) => (

              <Reveal
                key={item.title}
                delay={index * 0.06}
              >

                <article
                  className="
                    group
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    border
                    border-gray-100
                    shadow-sm
                    hover:shadow-[0_20px_50px_rgba(15,70,140,0.15)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    h-full
                    flex
                    flex-col
                  "
                >

                  {/* Image */}

                  <div className="relative h-[245px] overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-700
                      "
                    />


                    {/* Image Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/60
                        via-transparent
                        to-transparent
                      "
                    />


                    {/* Location */}

                    <div
                      className="
                        absolute
                        bottom-4
                        left-5
                        flex
                        items-center
                        gap-2
                        text-white
                        text-sm
                        font-medium
                      "
                    >
                      <FaMapMarkerAlt className="text-orange-400" />

                      {item.location}
                    </div>


                    {/* Rating */}

                    <div
                      className="
                        absolute
                        top-4
                        right-4
                        bg-white
                        rounded-full
                        px-3
                        py-1.5
                        flex
                        items-center
                        gap-1
                        shadow-lg
                      "
                    >

                      <FaStar className="text-orange-400 text-xs" />

                      <span className="text-[#17375f] text-xs font-bold">
                        Premium
                      </span>

                    </div>

                  </div>


                  {/* Content */}

                  <div className="p-6 flex flex-col flex-1">

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-[#17375f]
                        group-hover:text-[#1556bd]
                        transition-colors
                      "
                    >
                      {item.title}
                    </h3>


                    {/* Duration */}

                    <div
                      className="
                        mt-3
                        flex
                        items-center
                        gap-2
                        text-gray-500
                        text-sm
                      "
                    >

                      <FaCalendarAlt className="text-[#1556bd]" />

                      {item.duration}

                    </div>


                    {/* Description */}

                    <p
                      className="
                        mt-4
                        text-gray-600
                        text-sm
                        leading-6
                      "
                    >
                      {item.description}
                    </p>


                    {/* Highlights */}

                    <div className="mt-5 space-y-2.5">

                      {item.highlights.map((highlight) => (

                        <div
                          key={highlight}
                          className="flex items-center gap-2.5"
                        >

                          <FaCheckCircle
                            className="
                              text-[#1556bd]
                              text-xs
                            "
                          />

                          <span className="text-gray-700 text-sm">
                            {highlight}
                          </span>

                        </div>

                      ))}

                    </div>


                    {/* Bottom */}

                    <div
                      className="
                        mt-auto
                        pt-6
                        flex
                        items-end
                        justify-between
                        gap-4
                      "
                    >

                      <div>

                        <p className="text-gray-400 text-xs">
                          Package Price
                        </p>

                        <p
                          className="
                            text-[#17375f]
                            font-bold
                            text-lg
                            mt-1
                          "
                        >
                          {item.price}
                        </p>

                      </div>


                      <a
                        href="/sarathi-nx-official/#contact"
                        className="
                          w-11
                          h-11
                          rounded-full
                          bg-[#1556bd]
                          text-white
                          flex
                          items-center
                          justify-center
                          hover:bg-orange-500
                          transition-colors
                          duration-300
                        "
                        aria-label={`Enquire about ${item.title}`}
                      >
                        <FaArrowRight className="text-sm" />
                      </a>

                    </div>

                  </div>

                </article>

              </Reveal>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE SECTION
      ===================================================== */}

      <section className="py-16 md:py-20 bg-white">

        <div
          className="
            max-w-[1150px]
            mx-auto
            px-5
            sm:px-8
          "
        >

          <div
            className="
              rounded-[30px]
              overflow-hidden
              bg-[#063b73]
              relative
            "
          >

            {/* Decorative Circle */}

            <div
              className="
                absolute
                -right-24
                -top-24
                w-80
                h-80
                rounded-full
                bg-blue-400/10
              "
            />


            <div
              className="
                relative
                z-10
                grid
                md:grid-cols-2
                gap-10
                p-8
                md:p-12
              "
            >

              {/* Left */}

              <Reveal>

                <div>

                  <span
                    className="
                      text-orange-400
                      text-xs
                      font-bold
                      tracking-[2px]
                      uppercase
                    "
                  >
                    More Than A Holiday
                  </span>


                  <h2
                    className="
                      mt-3
                      text-3xl
                      md:text-4xl
                      font-bold
                      text-white
                      leading-tight
                    "
                  >
                    We Create
                    <br />
                    Travel Memories.
                  </h2>


                  <p
                    className="
                      mt-5
                      text-blue-100
                      text-sm
                      md:text-base
                      leading-7
                      max-w-lg
                    "
                  >
                    Our team takes care of the important details so
                    you can spend more time enjoying your destination.
                  </p>


                  <a
                    href="/sarathi-nx-official/#contact"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      mt-7
                      text-white
                      font-semibold
                      text-sm
                      hover:gap-3
                      transition-all
                    "
                  >
                    Plan Your Holiday
                    <FaArrowRight className="text-xs" />
                  </a>

                </div>

              </Reveal>


              {/* Right */}

              <div className="grid grid-cols-2 gap-4">

                {[
                  {
                    number: "01",
                    title: "Curated",
                    text: "Carefully designed itineraries",
                  },
                  {
                    number: "02",
                    title: "Comfortable",
                    text: "Quality stays and transfers",
                  },
                  {
                    number: "03",
                    title: "Flexible",
                    text: "Packages around your needs",
                  },
                  {
                    number: "04",
                    title: "Supported",
                    text: "Travel assistance throughout",
                  },
                ].map((item) => (

                  <div
                    key={item.number}
                    className="
                      bg-white/10
                      border
                      border-white/10
                      rounded-2xl
                      p-5
                    "
                  >

                    <span
                      className="
                        text-orange-400
                        font-bold
                        text-sm
                      "
                    >
                      {item.number}
                    </span>

                    <h3
                      className="
                        mt-3
                        text-white
                        font-bold
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-blue-100
                        text-xs
                        leading-5
                      "
                    >
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          py-20
          md:py-24
          bg-[#f6f9fd]
        "
      >

        <div
          className="
            max-w-[850px]
            mx-auto
            px-5
            sm:px-8
            text-center
          "
        >

          <Reveal>

            <span
              className="
                text-orange-500
                text-xs
                md:text-sm
                font-bold
                tracking-[2.5px]
                uppercase
              "
            >
              Your Next Escape Awaits
            </span>


            <h2
              className="
                mt-3
                text-3xl
                md:text-5xl
                font-bold
                text-[#102f59]
              "
            >
              Ready To Plan Your
              <span className="text-[#1556bd]">
                {" "}Dream Holiday?
              </span>
            </h2>


            <p
              className="
                mt-5
                text-gray-600
                text-base
                md:text-lg
                leading-7
                max-w-2xl
                mx-auto
              "
            >
              Tell us where you want to go and we will help you
              create a holiday experience around your travel style,
              preferences and budget.
            </p>


            <a
              href="/sarathi-nx-official/#contact"
              className="
                inline-flex
                items-center
                gap-3
                mt-8
                bg-[#1556bd]
                hover:bg-[#0d438f]
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Start Planning
              <FaArrowRight />
            </a>

          </Reveal>

        </div>

      </section>

    </main>
  );
}
