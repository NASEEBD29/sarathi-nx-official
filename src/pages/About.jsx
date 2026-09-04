import {
  FaGlobeAsia,
  FaUsers,
  FaSuitcaseRolling,
  FaHandshake,
  FaCheckCircle,
  FaArrowRight,
  FaPlaneDeparture,
  FaBuilding,
  FaPassport,
  FaHotel,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";


/* =========================================================
   WHY CHOOSE US DATA
========================================================= */

const advantages = [
  {
    icon: FaGlobeAsia,
    number: "01",
    title: "Global Reach",
    text: "Travel assistance for international destinations, exhibitions and business journeys.",
  },
  {
    icon: FaUsers,
    number: "02",
    title: "Expert Team",
    text: "Professional travel experts who understand the requirements of business travellers.",
  },
  {
    icon: FaSuitcaseRolling,
    number: "03",
    title: "Complete Support",
    text: "Flights, hotels, visas and destination support managed through one trusted partner.",
  },
  {
    icon: FaHandshake,
    number: "04",
    title: "Trusted Service",
    text: "Transparent communication and dependable assistance throughout your journey.",
  },
];


/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: FaPlaneDeparture,
    title: "International Travel",
  },
  {
    icon: FaBuilding,
    title: "Exhibition Travel",
  },
  {
    icon: FaPassport,
    title: "Visa Assistance",
  },
  {
    icon: FaHotel,
    title: "Hotel & Accommodation",
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function About() {
  return (
    <main className="bg-white overflow-hidden">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[570px] md:min-h-[650px] overflow-hidden">

        {/* Hero Image */}

        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=90"
          alt="International Travel"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />


        {/* Dark Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#041d3d]/90
            via-[#073b70]/70
            to-[#073b70]/10
          "
        />


        {/* Bottom Gradient */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-40
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
            pt-32
            md:pt-40
          "
        >

          <Reveal>

            <div className="max-w-[760px]">

              {/* Label */}

              <div className="flex items-center gap-3 mb-5">

                <span className="w-12 h-[2px] bg-orange-500" />

                <span
                  className="
                    text-white
                    text-xs
                    md:text-sm
                    font-bold
                    tracking-[3px]
                    uppercase
                  "
                >
                  About Sarathi NX
                </span>

              </div>


              {/* Heading */}

              <h1
                className="
                  text-white
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[68px]
                  font-extrabold
                  leading-[1.05]
                  drop-shadow-xl
                "
              >
                Connecting You
                <br />

                <span className="text-orange-500">
                  To The World.
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
                  max-w-[650px]
                "
              >
                Sarathi NX is a professionally managed travel company
                providing reliable solutions for international business
                travel, exhibitions, corporate journeys and holidays.
              </p>


              {/* Button */}

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
                Talk To Our Experts

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
            HERO STATS
        ================================================= */}

        <div className="absolute bottom-0 left-0 right-0 z-20">

          <div
            className="
              max-w-[1280px]
              mx-auto
              px-4
              sm:px-8
              lg:px-10
            "
          >

            <div
              className="
                bg-white/95
                backdrop-blur-md
                rounded-t-[28px]
                shadow-[0_-10px_35px_rgba(0,0,0,0.15)]
                grid
                grid-cols-2
                md:grid-cols-4
                divide-x
                divide-gray-200
                overflow-hidden
              "
            >

              {[
                {
                  value: "Global",
                  label: "Travel Network",
                },
                {
                  value: "360°",
                  label: "Travel Support",
                },
                {
                  value: "24/7",
                  label: "Customer Assistance",
                },
                {
                  value: "One",
                  label: "Trusted Partner",
                },
              ].map((stat) => (

                <div
                  key={stat.label}
                  className="py-5 px-3 text-center"
                >

                  <p
                    className="
                      text-xl
                      md:text-2xl
                      font-extrabold
                      text-[#103a6d]
                    "
                  >
                    {stat.value}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      md:text-xs
                      text-gray-500
                      font-medium
                      uppercase
                      tracking-wide
                    "
                  >
                    {stat.label}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="py-20 md:py-28 bg-white">

        <div
          className="
            max-w-[1280px]
            mx-auto
            px-5
            sm:px-8
            lg:px-10
          "
        >

          <div
            className="
              grid
              lg:grid-cols-[0.9fr_1.1fr]
              gap-12
              lg:gap-20
              items-center
            "
          >

            {/* IMAGE SIDE */}

            <Reveal direction="left">

              <div className="relative">

                <div
                  className="
                    absolute
                    -left-5
                    -top-5
                    w-24
                    h-24
                    bg-orange-100
                    rounded-2xl
                    -z-0
                  "
                />

                <img
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=85"
                  alt="Travel planning"
                  className="
                    relative
                    z-10
                    w-full
                    h-[420px]
                    md:h-[500px]
                    object-cover
                    rounded-[28px]
                    shadow-2xl
                  "
                />


                {/* Experience Card */}

                <div
                  className="
                    absolute
                    z-20
                    bottom-6
                    -right-3
                    md:-right-7
                    bg-[#103a6d]
                    text-white
                    rounded-2xl
                    px-6
                    py-5
                    shadow-xl
                  "
                >

                  <p className="text-3xl font-extrabold">
                    NX
                  </p>

                  <p className="text-blue-100 text-xs mt-1">
                    Your Travel Partner
                  </p>

                </div>

              </div>

            </Reveal>


            {/* CONTENT SIDE */}

            <Reveal direction="right">

              <div>

                <span
                  className="
                    text-orange-500
                    text-xs
                    md:text-sm
                    font-bold
                    tracking-[3px]
                    uppercase
                  "
                >
                  Who We Are
                </span>


                <h2
                  className="
                    mt-3
                    text-3xl
                    md:text-5xl
                    font-bold
                    text-[#12385f]
                    leading-tight
                  "
                >
                  Travel Expertise
                  <br />

                  <span className="text-[#1556bd]">
                    You Can Rely On.
                  </span>
                </h2>


                <p
                  className="
                    mt-6
                    text-gray-600
                    leading-8
                    text-sm
                    md:text-base
                  "
                >
                  Sarathi NX Pvt. Ltd. is a professionally managed
                  travel company focused on making international travel
                  simpler, more organized and more reliable.
                </p>


                <p
                  className="
                    mt-4
                    text-gray-600
                    leading-8
                    text-sm
                    md:text-base
                  "
                >
                  From business exhibitions and corporate journeys to
                  leisure holidays, we coordinate the essential parts
                  of your travel so you can focus on what matters most.
                </p>


                {/* Points */}

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-8">

                  {[
                    "International Travel Expertise",
                    "Exhibition Travel Management",
                    "Corporate Travel Solutions",
                    "Visa & Documentation Support",
                    "Hotel & Accommodation",
                    "Dedicated Travel Assistance",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >

                      <FaCheckCircle
                        className="
                          text-[#1556bd]
                          mt-1
                          shrink-0
                        "
                      />

                      <span
                        className="
                          text-gray-700
                          text-sm
                          font-medium
                        "
                      >
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

      <section className="py-20 md:py-24 bg-[#f5f8fc]">

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

            <div className="max-w-[700px]">

              <span
                className="
                  text-orange-500
                  text-xs
                  md:text-sm
                  font-bold
                  tracking-[3px]
                  uppercase
                "
              >
                What We Do
              </span>

              <h2
                className="
                  mt-3
                  text-3xl
                  md:text-5xl
                  font-bold
                  text-[#12385f]
                "
              >
                Everything You Need,
                <span className="text-[#1556bd]">
                  {" "}Under One Roof.
                </span>
              </h2>

            </div>

          </Reveal>


          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
              mt-12
            "
          >

            {services.map((service, index) => {

              const Icon = service.icon;

              return (

                <Reveal
                  key={service.title}
                  delay={index * 0.08}
                >

                  <div
                    className="
                      group
                      bg-white
                      rounded-2xl
                      p-7
                      border
                      border-gray-100
                      shadow-sm
                      hover:shadow-xl
                      hover:-translate-y-2
                      transition-all
                      duration-300
                    "
                  >

                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-blue-50
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


                    <h3
                      className="
                        mt-6
                        text-lg
                        font-bold
                        text-[#12385f]
                      "
                    >
                      {service.title}
                    </h3>


                    <div
                      className="
                        mt-5
                        w-8
                        h-[2px]
                        bg-orange-500
                        group-hover:w-14
                        transition-all
                        duration-300
                      "
                    />

                  </div>

                </Reveal>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION / VISION
      ===================================================== */}

      <section className="py-20 md:py-28 bg-white">

        <div
          className="
            max-w-[1100px]
            mx-auto
            px-5
            sm:px-8
          "
        >

          <Reveal>

            <div className="text-center max-w-[750px] mx-auto">

              <span
                className="
                  text-orange-500
                  text-xs
                  md:text-sm
                  font-bold
                  tracking-[3px]
                  uppercase
                "
              >
                Our Purpose
              </span>

              <h2
                className="
                  mt-3
                  text-3xl
                  md:text-5xl
                  font-bold
                  text-[#12385f]
                "
              >
                Built On Trust.
                <span className="text-[#1556bd]">
                  {" "}Driven By Service.
                </span>
              </h2>

              <p className="mt-5 text-gray-600 leading-7">
                We believe great travel begins with careful planning,
                transparent communication and genuine customer support.
              </p>

            </div>

          </Reveal>


          <div
            className="
              grid
              md:grid-cols-2
              gap-6
              mt-12
            "
          >

            {/* Mission */}

            <Reveal direction="left">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[26px]
                  bg-[#f3f7fc]
                  border
                  border-blue-100
                  p-8
                  md:p-10
                "
              >

                <div
                  className="
                    absolute
                    -right-10
                    -top-10
                    w-36
                    h-36
                    rounded-full
                    bg-blue-100/60
                  "
                />

                <div
                  className="
                    relative
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#1556bd]
                    text-white
                    flex
                    items-center
                    justify-center
                    text-xl
                  "
                >
                  <FaHandshake />
                </div>


                <h3
                  className="
                    mt-7
                    text-2xl
                    font-bold
                    text-[#12385f]
                  "
                >
                  Our Mission
                </h3>


                <p
                  className="
                    mt-4
                    text-gray-600
                    leading-7
                    text-sm
                    md:text-base
                  "
                >
                  To provide dependable, personalized and efficient
                  travel solutions that make every journey easier
                  and allow our clients to travel with confidence.
                </p>

              </div>

            </Reveal>


            {/* Vision */}

            <Reveal direction="right">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[26px]
                  bg-[#103a6d]
                  text-white
                  p-8
                  md:p-10
                "
              >

                <div
                  className="
                    absolute
                    -right-10
                    -top-10
                    w-36
                    h-36
                    rounded-full
                    bg-white/10
                  "
                />

                <div
                  className="
                    relative
                    w-14
                    h-14
                    rounded-2xl
                    bg-white
                    text-[#1556bd]
                    flex
                    items-center
                    justify-center
                    text-xl
                  "
                >
                  <FaGlobeAsia />
                </div>


                <h3
                  className="
                    mt-7
                    text-2xl
                    font-bold
                  "
                >
                  Our Vision
                </h3>


                <p
                  className="
                    mt-4
                    text-blue-100
                    leading-7
                    text-sm
                    md:text-base
                  "
                >
                  To become a trusted global travel partner known
                  for professional service, international expertise
                  and long-lasting client relationships.
                </p>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="py-20 md:py-24 bg-[#f5f8fc]">

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

            <div className="text-center">

              <span
                className="
                  text-orange-500
                  text-xs
                  md:text-sm
                  font-bold
                  tracking-[3px]
                  uppercase
                "
              >
                Why Sarathi NX
              </span>

              <h2
                className="
                  mt-3
                  text-3xl
                  md:text-5xl
                  font-bold
                  text-[#12385f]
                "
              >
                A Better Way To
                <span className="text-[#1556bd]">
                  {" "}Travel.
                </span>
              </h2>

            </div>

          </Reveal>


          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
              mt-12
            "
          >

            {advantages.map((item, index) => {

              const Icon = item.icon;

              return (

                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                >

                  <div
                    className="
                      group
                      bg-white
                      rounded-2xl
                      p-7
                      h-full
                      border
                      border-gray-100
                      shadow-sm
                      hover:shadow-xl
                      transition-all
                      duration-300
                    "
                  >

                    <div className="flex items-center justify-between">

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
                        "
                      >
                        <Icon />
                      </div>


                      <span
                        className="
                          text-gray-200
                          text-3xl
                          font-black
                        "
                      >
                        {item.number}
                      </span>

                    </div>


                    <h3
                      className="
                        mt-7
                        text-xl
                        font-bold
                        text-[#12385f]
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
          bg-[#06376b]
          overflow-hidden
        "
      >

        {/* Decorative Circles */}

        <div
          className="
            absolute
            -left-20
            -top-20
            w-64
            h-64
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            absolute
            -right-20
            -bottom-28
            w-80
            h-80
            rounded-full
            border
            border-white/10
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
                tracking-[3px]
                uppercase
              "
            >
              Let's Travel Together
            </span>


            <h2
              className="
                mt-4
                text-3xl
                md:text-5xl
                font-bold
                text-white
                leading-tight
              "
            >
              Your Journey Starts
              <br />
              With The Right Partner.
            </h2>


            <p
              className="
                mt-5
                text-blue-100
                text-sm
                md:text-lg
                leading-7
                max-w-2xl
                mx-auto
              "
            >
              Whether it is business travel, an international exhibition
              or your next holiday, our team is ready to help you plan it.
            </p>


            <a
              href="/sarathi-nx-official/#contact"
              className="
                inline-flex
                items-center
                gap-3
                mt-8
                bg-white
                text-[#103a6d]
                px-8
                py-4
                rounded-full
                font-bold
                shadow-xl
                hover:bg-orange-500
                hover:text-white
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Contact Our Team

              <FaArrowRight className="text-sm" />

            </a>

          </Reveal>

        </div>

      </section>

    </main>
  );
}
