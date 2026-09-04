import {
  FaPassport,
  FaFileAlt,
  FaCheckCircle,
  FaGlobeAsia,
  FaUserTie,
  FaClipboardCheck,
  FaArrowRight,
  FaPlaneDeparture,
  FaHotel,
  FaStamp,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";
import visaImage from "../assets/images/gallery/visa.jpg";


/* =========================================================
   VISA SERVICES
========================================================= */

const visaServices = [
  {
    icon: FaPassport,
    title: "Business Visa Assistance",
    description:
      "Professional guidance for business travellers attending meetings, exhibitions, conferences and corporate events.",
    points: [
      "Business visa documentation",
      "Application guidance",
      "Invitation letter guidance",
      "Travel document checklist",
    ],
  },
  {
    icon: FaFileAlt,
    title: "Documentation Support",
    description:
      "We help you understand and prepare the documents required for your international visa application.",
    points: [
      "Document requirement guidance",
      "Application form assistance",
      "Supporting document checklist",
      "Document organization",
    ],
  },
  {
    icon: FaGlobeAsia,
    title: "International Visa Support",
    description:
      "Visa assistance for travellers visiting international destinations for business, exhibitions and other travel purposes.",
    points: [
      "Destination-specific guidance",
      "International travel support",
      "Visa process information",
      "Application preparation",
    ],
  },
  {
    icon: FaClipboardCheck,
    title: "Application Assistance",
    description:
      "Step-by-step assistance to help you understand the visa application process and required formalities.",
    points: [
      "Application form guidance",
      "Document verification support",
      "Appointment guidance",
      "Application preparation",
    ],
  },
  {
    icon: FaUserTie,
    title: "Corporate Visa Support",
    description:
      "Dedicated visa assistance for companies, executives and teams travelling internationally for business.",
    points: [
      "Corporate traveller support",
      "Employee travel documentation",
      "Group visa coordination",
      "Business travel assistance",
    ],
  },
  {
    icon: FaStamp,
    title: "Travel Documentation",
    description:
      "Complete guidance for important travel documents required before your international journey.",
    points: [
      "Passport guidance",
      "Visa documentation",
      "Invitation documents",
      "Travel paperwork checklist",
    ],
  },
];


/* =========================================================
   WHY CHOOSE US
========================================================= */

const benefits = [
  {
    icon: FaClipboardCheck,
    title: "Clear Guidance",
    text: "Understand the documentation and application requirements before starting your visa process.",
  },
  {
    icon: FaUserTie,
    title: "Professional Support",
    text: "Get assistance from our travel team throughout your documentation preparation.",
  },
  {
    icon: FaGlobeAsia,
    title: "International Destinations",
    text: "Support for business and travel requirements across major international destinations.",
  },
  {
    icon: FaCheckCircle,
    title: "Organized Process",
    text: "A structured approach helps keep your application documents organized and ready.",
  },
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function VisaDocumentation() {
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

        {/* Banner Image */}

        <img
          src={visaImage}
          alt="Visa and Documentation Assistance"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-contain
            object-center
          "
        />


        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#062f5f]/80
            via-[#073e76]/45
            to-transparent
          "
        />


        {/* Bottom Gradient */}

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

            <div className="max-w-[680px]">

              {/* Label */}

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
                  VISA & DOCUMENTATION
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
                Travel With
                <br />

                <span className="text-orange-500">
                  Confidence.
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
                  max-w-[570px]
                  drop-shadow-md
                "
              >
                Reliable visa and documentation assistance for
                international business travel, exhibitions,
                corporate visits and global journeys.
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
                Get Visa Assistance

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
                    <FaPassport />
                  </div>

                  <div>

                    <h4 className="text-[#153764] font-bold text-sm">
                      Visa Assistance
                    </h4>

                    <p className="text-[#153764] text-xs mt-0.5">
                      Professional Guidance
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
                    <FaFileAlt />
                  </div>

                  <div>

                    <h4 className="text-[#153764] font-bold text-sm">
                      Documentation
                    </h4>

                    <p className="text-[#153764] text-xs mt-0.5">
                      Organized Support
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
                    <FaGlobeAsia />
                  </div>

                  <div>

                    <h4 className="text-[#153764] font-bold text-sm">
                      Global Destinations
                    </h4>

                    <p className="text-[#153764] text-xs mt-0.5">
                      International Travel
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
              Visa Support
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
              Your Documents,
              <span className="text-[#1556bd]">
                {" "}Handled With Care
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
              International travel often requires careful preparation.
              Our visa and documentation assistance helps you understand
              the requirements and prepare your travel documents in an
              organized and convenient way.
            </p>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          VISA SERVICES
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
                Our Visa Services
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
                Complete Documentation Support
              </h2>

              <p
                className="
                  mt-4
                  text-gray-600
                  text-sm
                  md:text-base
                  leading-7
                "
              >
                From business visa assistance to travel documentation,
                we help make your international travel preparation
                simpler and more organized.
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

            {visaServices.map((service, index) => {

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
          DOCUMENT CHECKLIST SECTION
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

              {/* Decorative Circle */}

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
                  gap-10
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
                    Prepare Before You Travel
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
                    Keep Your
                    <br />
                    Documents Ready.
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
                    Every destination can have different visa and
                    documentation requirements. Our team helps you
                    understand what needs to be prepared for your trip.
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
                    Speak With Our Team
                    <FaArrowRight className="text-xs" />
                  </a>

                </div>


                {/* Right Checklist */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {[
                    "Valid Passport",
                    "Visa Application",
                    "Invitation Documents",
                    "Travel Itinerary",
                    "Accommodation Details",
                    "Supporting Documents",
                  ].map((item) => (

                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                        bg-white/10
                        border
                        border-white/10
                        rounded-xl
                        px-4
                        py-4
                      "
                    >

                      <FaCheckCircle className="text-orange-400 shrink-0" />

                      <span className="text-white text-sm">
                        {item}
                      </span>

                    </div>

                  ))}

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
                Visa Preparation,
                <span className="text-[#1556bd]">
                  {" "}Made Easier
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
              Start Your Application
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
              Planning an International
              <span className="text-orange-400">
                {" "}Business Trip?
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
              Let our travel team help you understand the visa and
              documentation requirements for your upcoming journey.
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
              Contact Our Team
              <FaArrowRight className="text-sm" />
            </a>

          </Reveal>

        </div>

      </section>

    </main>
  );
}
