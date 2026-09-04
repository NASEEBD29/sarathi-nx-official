import {
  FaHotel,
  FaMapMarkerAlt,
  FaBed,
  FaUsers,
  FaGlobeAsia,
  FaCheckCircle,
  FaArrowRight,
  FaConciergeBell,
  FaPlane,
  FaBuilding,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";
import hotelImage from "../assets/images/gallery/hotel.jpg";


/* =========================================================
   HOTEL SERVICES
========================================================= */

const hotelServices = [
  {
    icon: FaHotel,
    title: "Corporate Hotel Booking",
    description:
      "Comfortable and professionally selected hotels for business travellers, corporate teams and executives.",
    points: [
      "Business-friendly hotels",
      "Flexible accommodation options",
      "Corporate stay arrangements",
      "Special travel requirements",
    ],
  },
  {
    icon: FaMapMarkerAlt,
    title: "Exhibition Area Hotels",
    description:
      "Stay close to your exhibition or trade fair venue with carefully selected accommodation options.",
    points: [
      "Hotels near exhibition centres",
      "Easy venue access",
      "Convenient transportation",
      "Location-based hotel selection",
    ],
  },
  {
    icon: FaUsers,
    title: "Group Accommodation",
    description:
      "Complete accommodation planning for corporate groups, exhibition teams and business delegations.",
    points: [
      "Group room coordination",
      "Multiple-room bookings",
      "Corporate group stays",
      "Customized accommodation plans",
    ],
  },
  {
    icon: FaGlobeAsia,
    title: "International Accommodation",
    description:
      "Hotel arrangements across major international business and exhibition destinations.",
    points: [
      "Worldwide hotel options",
      "International destinations",
      "Business travel assistance",
      "Destination-specific support",
    ],
  },
  {
    icon: FaBed,
    title: "Comfortable Stays",
    description:
      "We help you find accommodation that matches your location, comfort, schedule and travel requirements.",
    points: [
      "Quality accommodation",
      "Convenient locations",
      "Comfort-focused options",
      "Personalized hotel selection",
    ],
  },
  {
    icon: FaConciergeBell,
    title: "Travel Stay Assistance",
    description:
      "From selecting the right property to coordinating your stay, our team supports you throughout.",
    points: [
      "Hotel selection assistance",
      "Booking coordination",
      "Check-in support",
      "Travel stay guidance",
    ],
  },
];


/* =========================================================
   WHY CHOOSE US
========================================================= */

const benefits = [
  {
    icon: FaMapMarkerAlt,
    title: "Prime Locations",
    text: "Hotel options selected around exhibition venues, business districts, airports and important city locations.",
  },
  {
    icon: FaHotel,
    title: "Curated Hotels",
    text: "We help identify accommodation based on comfort, location, convenience and your travel requirements.",
  },
  {
    icon: FaUsers,
    title: "Group Expertise",
    text: "Professional coordination for corporate teams, exhibition groups and business delegations.",
  },
  {
    icon: FaCheckCircle,
    title: "Hassle-Free Planning",
    text: "One team to coordinate your accommodation requirements along with your complete travel plans.",
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function HotelAccommodation() {
  return (
    <main className="bg-white overflow-hidden">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          min-h-[560px]
          md:min-h-[630px]
          overflow-hidden
          bg-[#dce5ed]
        "
      >

        {/* Hotel Image */}

        <img
          src={hotelImage}
          alt="Hotel and Accommodation"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-contain
            object-center
          "
        />


        {/* Main Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#062f5f]/75
            via-[#073e76]/40
            to-transparent
          "
        />


        {/* Bottom Overlay */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-44
            bg-gradient-to-t
            from-black/30
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
            pt-24
            md:pt-32
          "
        >

          <Reveal>

            <div className="max-w-[650px]">

              {/* Small Label */}

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
                  HOTEL & ACCOMMODATION
                </span>

              </div>


              {/* Heading */}

              <h1
                className="
                  text-white
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[64px]
                  font-extrabold
                  leading-[1.04]
                  drop-shadow-lg
                "
              >

                Stay Comfortably.
                <br />

                <span className="text-orange-500">
                  Travel Confidently.
                </span>

              </h1>


              {/* Description */}

              <p
                className="
                  mt-6
                  text-white
                  text-base
                  md:text-lg
                  leading-7
                  max-w-[560px]
                  drop-shadow-md
                "
              >
                Carefully planned accommodation for business trips,
                international exhibitions, corporate travel and group
                journeys — with comfort, convenience and location in mind.
              </p>


              {/* CTA */}

              <a
                href="/sarathi-nx-official/#contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  mt-8
                  px-7
                  py-3.5
                  rounded-full
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  font-semibold
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >

                Find Your Stay

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
            FEATURE BAR
        ================================================= */}

        <div className="absolute bottom-0 left-0 right-0 z-20">

          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-10">

            <div
              className="
                bg-white/95
                backdrop-blur-md
                rounded-t-[30px]
                shadow-[0_-8px_30px_rgba(0,0,0,0.12)]
                px-5
                md:px-8
                py-5
              "
            >

              <div className="grid grid-cols-1 sm:grid-cols-3">


                {/* Feature 1 */}

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
                      bg-blue-50
                      text-[#0754bd]
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
                      Quality Hotels
                    </h4>

                    <p className="text-[#153764] text-xs mt-0.5">
                      Carefully Selected
                    </p>

                  </div>

                </div>


                {/* Feature 2 */}

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
                      text-[#0754bd]
                      flex
                      items-center
                      justify-center
                      text-xl
                    "
                  >
                    <FaMapMarkerAlt />
                  </div>

                  <div>

                    <h4 className="text-[#153764] font-bold text-sm">
                      Prime Locations
                    </h4>

                    <p className="text-[#153764] text-xs mt-0.5">
                      Near Venues & Business Hubs
                    </p>

                  </div>

                </div>


                {/* Feature 3 */}

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
                      text-[#0754bd]
                      flex
                      items-center
                      justify-center
                      text-xl
                    "
                  >
                    <FaUsers />
                  </div>

                  <div>

                    <h4 className="text-[#153764] font-bold text-sm">
                      Group Stays
                    </h4>

                    <p className="text-[#153764] text-xs mt-0.5">
                      Corporate & Exhibition Teams
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
              Accommodation Solutions
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
              The Right Stay for
              <span className="text-[#1556bd]">
                {" "}Every Journey
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
              Whether you are attending an international exhibition,
              travelling for business or managing accommodation for
              a corporate group, we help you find a stay that fits
              your plans.
            </p>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          SERVICES
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
                Our Accommodation Services
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
                Accommodation Made Simple
              </h2>

              <p
                className="
                  mt-4
                  text-gray-600
                  text-sm
                  md:text-base
                "
              >
                From individual business stays to large corporate
                groups, our accommodation services are designed
                around your travel requirements.
              </p>

            </div>

          </Reveal>


          {/* Cards */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-7
            "
          >

            {hotelServices.map((service, index) => {

              const Icon = service.icon;

              return (
                <Reveal
                  key={service.title}
                  delay={index * 0.05}
                >

                  <article
                    className="
                      group
                      bg-white
                      border
                      border-gray-200
                      rounded-2xl
                      p-7
                      h-full
                      flex
                      flex-col
                      shadow-sm
                      hover:shadow-[0_18px_45px_rgba(15,70,140,0.13)]
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >

                    {/* Icon */}

                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-[#eaf2ff]
                        text-[#1556bd]
                        flex
                        items-center
                        justify-center
                        text-xl
                        group-hover:bg-[#1556bd]
                        group-hover:text-white
                        transition-all
                        duration-300
                      "
                    >
                      <Icon />
                    </div>


                    {/* Title */}

                    <h3
                      className="
                        mt-6
                        text-xl
                        font-bold
                        text-[#17375f]
                        group-hover:text-[#1556bd]
                        transition-colors
                      "
                    >
                      {service.title}
                    </h3>


                    {/* Description */}

                    <p
                      className="
                        mt-3
                        text-gray-600
                        text-sm
                        leading-6
                      "
                    >
                      {service.description}
                    </p>


                    {/* Points */}

                    <div className="mt-5 space-y-3">

                      {service.points.map((point) => (

                        <div
                          key={point}
                          className="flex items-start gap-3"
                        >

                          <FaCheckCircle
                            className="
                              text-[#1556bd]
                              mt-1
                              text-sm
                              shrink-0
                            "
                          />

                          <span className="text-gray-700 text-sm">
                            {point}
                          </span>

                        </div>

                      ))}

                    </div>


                    {/* CTA */}

                    <a
                      href="/sarathi-nx-official/#contact"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        mt-auto
                        pt-6
                        text-[#1556bd]
                        font-semibold
                        text-sm
                        hover:gap-3
                        transition-all
                      "
                    >
                      Enquire Now
                      <FaArrowRight className="text-xs" />
                    </a>

                  </article>

                </Reveal>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          BUSINESS + EXHIBITION STAY
      ===================================================== */}

      <section className="py-16 md:py-20 bg-white">

        <div
          className="
            max-w-[1100px]
            mx-auto
            px-5
            sm:px-8
          "
        >

          <Reveal>

            <div
              className="
                rounded-[28px]
                bg-[#063b73]
                overflow-hidden
                relative
              "
            >

              {/* Decorative circle */}

              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  w-72
                  h-72
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
                  gap-8
                  p-8
                  md:p-12
                "
              >

                {/* Left */}

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
                    Business & Exhibition Stays
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
                    Stay Close.
                    <br />
                    Save Time.
                    <br />
                    Travel Better.
                  </h2>


                  <p
                    className="
                      mt-4
                      text-blue-100
                      text-sm
                      md:text-base
                      leading-7
                    "
                  >
                    We understand how important location is during
                    business trips and exhibitions. Our team helps
                    you plan accommodation around your schedule,
                    venue and travel requirements.
                  </p>

                </div>


                {/* Right */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div
                    className="
                      bg-white/10
                      border
                      border-white/10
                      rounded-2xl
                      p-5
                    "
                  >

                    <FaBuilding className="text-orange-400 text-2xl" />

                    <h3 className="text-white font-bold mt-4">
                      Exhibition Venues
                    </h3>

                    <p className="text-blue-100 text-sm mt-2 leading-6">
                      Convenient hotel options close to major
                      exhibition and trade fair venues.
                    </p>

                  </div>


                  <div
                    className="
                      bg-white/10
                      border
                      border-white/10
                      rounded-2xl
                      p-5
                    "
                  >

                    <FaPlane className="text-orange-400 text-2xl" />

                    <h3 className="text-white font-bold mt-4">
                      Airport Access
                    </h3>

                    <p className="text-blue-100 text-sm mt-2 leading-6">
                      Accommodation options with convenient
                      airport connectivity.
                    </p>

                  </div>


                  <div
                    className="
                      bg-white/10
                      border
                      border-white/10
                      rounded-2xl
                      p-5
                    "
                  >

                    <FaUsers className="text-orange-400 text-2xl" />

                    <h3 className="text-white font-bold mt-4">
                      Group Stays
                    </h3>

                    <p className="text-blue-100 text-sm mt-2 leading-6">
                      Coordinated accommodation for business
                      teams and corporate groups.
                    </p>

                  </div>


                  <div
                    className="
                      bg-white/10
                      border
                      border-white/10
                      rounded-2xl
                      p-5
                    "
                  >

                    <FaHotel className="text-orange-400 text-2xl" />

                    <h3 className="text-white font-bold mt-4">
                      Comfortable Hotels
                    </h3>

                    <p className="text-blue-100 text-sm mt-2 leading-6">
                      Options selected around your comfort,
                      schedule and requirements.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
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
                Why Choose Us
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
                More Than Just a
                <span className="text-[#1556bd]">
                  {" "}Hotel Booking
                </span>
              </h2>

            </div>

          </Reveal>


          <div
            className="
              mt-12
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >

            {benefits.map((item, index) => {

              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.07}
                >

                  <div
                    className="
                      h-full
                      bg-white
                      border
                      border-gray-100
                      rounded-2xl
                      p-7
                      text-center
                      shadow-sm
                      hover:shadow-lg
                      transition-all
                      duration-300
                    "
                  >

                    <div
                      className="
                        w-14
                        h-14
                        mx-auto
                        rounded-full
                        bg-[#1556bd]
                        text-white
                        flex
                        items-center
                        justify-center
                        text-xl
                      "
                    >
                      <Icon />
                    </div>


                    <h3
                      className="
                        mt-5
                        text-lg
                        font-bold
                        text-[#17375f]
                      "
                    >
                      {item.title}
                    </h3>


                    <p
                      className="
                        mt-3
                        text-gray-600
                        text-sm
                        leading-6
                      "
                    >
                      {item.text}
                    </p>

                  </div>

                </Reveal>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          relative
          py-20
          md:py-24
          bg-[#063b73]
          overflow-hidden
        "
      >

        {/* Decorative Elements */}

        <div
          className="
            absolute
            -top-24
            -right-20
            w-72
            h-72
            rounded-full
            bg-blue-400/10
          "
        />

        <div
          className="
            absolute
            -bottom-32
            -left-20
            w-80
            h-80
            rounded-full
            bg-orange-400/10
          "
        />


        <div
          className="
            relative
            z-10
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
                text-orange-400
                text-xs
                md:text-sm
                font-bold
                tracking-[2.5px]
                uppercase
              "
            >
              Plan Your Stay
            </span>


            <h2
              className="
                mt-3
                text-3xl
                md:text-5xl
                font-bold
                text-white
              "
            >
              Your Next Trip Deserves
              <span className="text-orange-400">
                {" "}the Right Stay
              </span>
            </h2>


            <p
              className="
                mt-5
                text-blue-100
                text-base
                md:text-lg
                leading-7
                max-w-2xl
                mx-auto
              "
            >
              Tell us your destination, travel dates and accommodation
              requirements. Our team will help you plan a comfortable
              and convenient stay.
            </p>


            <a
              href="/sarathi-nx-official/#contact"
              className="
                inline-flex
                items-center
                gap-3
                mt-8
                bg-white
                text-[#063b73]
                px-8
                py-3.5
                rounded-full
                font-semibold
                hover:bg-orange-50
                transition-all
                duration-300
                hover:-translate-y-1
                shadow-lg
              "
            >
              Enquire for Accommodation

              <FaArrowRight className="text-sm" />

            </a>

          </Reveal>

        </div>

      </section>

    </main>
  );
}
