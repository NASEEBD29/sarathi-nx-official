import {
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
  FaClock,
  FaHotel,
  FaPlaneDeparture,
  FaPhoneAlt,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";

export default function BusinessCorporateTravel() {
  const whatsappNumber = "917666984626";

  const benefits = [
    {
      icon: FaPlaneDeparture,
      title: "Flight Management",
      text: "Efficient flight planning with schedules and routes aligned to your business itinerary.",
    },
    {
      icon: FaHotel,
      title: "Business Hotels",
      text: "Comfortable and strategically located hotel options for productive business trips.",
    },
    {
      icon: FaUserTie,
      title: "Executive Support",
      text: "Dedicated assistance for executives, professionals and corporate travellers.",
    },
    {
      icon: FaClock,
      title: "Time Efficient",
      text: "We coordinate the details so you can focus on meetings and business priorities.",
    },
  ];

  const services = [
    "Domestic & international business travel",
    "Corporate flight and hotel arrangements",
    "Executive travel assistance",
    "Visa and travel documentation support",
    "Airport transfers and ground transportation",
    "Multi-city business itineraries",
  ];

  const steps = [
    {
      number: "01",
      title: "Share Your Plan",
      text: "Tell us your destination, dates, travellers and business requirements.",
    },
    {
      number: "02",
      title: "We Build Your Itinerary",
      text: "Our team coordinates flights, hotels, transfers and required travel services.",
    },
    {
      number: "03",
      title: "Travel With Confidence",
      text: "Receive professional assistance throughout your business journey.",
    },
  ];

  return (
    <main className="bg-white overflow-hidden">

      {/* =====================================================
          HERO / COMPACT BANNER
      ===================================================== */}

      <section className="relative h-[400px] sm:h-[420px] md:h-[440px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90"
          alt="Business and corporate travel"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        {/* DARK OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#041d3d]/95
            via-[#073b70]/80
            to-[#073b70]/20
          "
        />

        {/* HERO CONTENT */}

        <div
          className="
            relative
            z-10
            max-w-[1280px]
            h-full
            mx-auto
            px-5
            sm:px-8
            lg:px-10
            flex
            items-center
            pt-8
            md:pt-10
          "
        >

          <Reveal>

            <div className="max-w-[760px]">

              {/* EYEBROW */}

              <div className="flex items-center gap-3 mb-3">

                <span className="w-10 h-[2px] bg-orange-500" />

                <span
                  className="
                    text-white
                    text-[10px]
                    sm:text-xs
                    md:text-sm
                    font-bold
                    uppercase
                    tracking-[2.5px]
                  "
                >
                  Business & Corporate Travel
                </span>

              </div>

              {/* HEADING */}

              <h1
                className="
                  text-white
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[58px]
                  font-extrabold
                  leading-[1.04]
                "
              >
                Travel For
                <br />

                <span className="text-orange-500">
                  Business. Made Simple.
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-4
                  text-white/90
                  text-sm
                  md:text-base
                  leading-6
                  md:leading-7
                  max-w-[620px]
                "
              >
                Smart, reliable and professionally managed business travel
                solutions designed around your schedule, comfort and business
                priorities.
              </p>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-3 mt-5">

                <a
                  href="#enquiry"
                  className="
                    inline-flex
                    items-center
                    gap-2.5
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    px-5
                    py-3
                    rounded-full
                    text-sm
                    font-semibold
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Plan Business Travel

                  <FaArrowRight className="text-xs" />

                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2.5
                    border
                    border-white/80
                    text-white
                    px-5
                    py-3
                    rounded-full
                    text-sm
                    font-semibold
                    hover:bg-white
                    hover:text-[#103a6d]
                    transition-all
                    duration-300
                  "
                >
                  <FaWhatsapp />

                  WhatsApp Us

                </a>

              </div>

            </div>

          </Reveal>

        </div>

        {/* CURVE */}

        <div
          className="
            absolute
            bottom-[-1px]
            left-0
            right-0
            h-7
            bg-white
            rounded-t-[50%]
            scale-x-110
          "
        />

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="py-12 md:py-14 bg-white">

        <div
          className="
            max-w-[1180px]
            mx-auto
            px-5
            sm:px-8
          "
        >

          <div
            className="
              grid
              lg:grid-cols-2
              gap-8
              lg:gap-12
              items-center
            "
          >

            {/* LEFT CONTENT */}

            <Reveal direction="left">

              <div>

                <span
                  className="
                    text-orange-500
                    text-[10px]
                    md:text-xs
                    font-bold
                    uppercase
                    tracking-[2.5px]
                  "
                >
                  Corporate Travel Solutions
                </span>

                <h2
                  className="
                    mt-2.5
                    text-2xl
                    md:text-4xl
                    font-extrabold
                    text-[#12385f]
                    leading-tight
                  "
                >
                  Your Business Moves Fast.

                  <br />

                  <span className="text-[#1556bd]">
                    Your Travel Should Too.
                  </span>
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
                  From a quick business trip to a multi-city corporate
                  itinerary, Sarathi NX takes care of the travel details so
                  your team can stay focused on what matters.
                </p>

                <p
                  className="
                    mt-3
                    text-gray-600
                    text-sm
                    md:text-base
                    leading-7
                  "
                >
                  We combine practical planning, responsive support and
                  personalized service to make corporate travel smooth from
                  departure to return.
                </p>

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2.5
                    text-[#1556bd]
                    text-sm
                    font-bold
                  "
                >
                  <FaCheckCircle className="text-orange-500 shrink-0" />

                  Professional travel assistance at every step

                </div>

              </div>

            </Reveal>


            {/* RIGHT IMAGE */}

            <Reveal direction="right">

              <div
                className="
                  relative
                  rounded-[22px]
                  overflow-hidden
                  shadow-xl
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                  alt="Corporate meeting"
                  className="
                    w-full
                    h-[280px]
                    md:h-[320px]
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    bg-[#06376b]/95
                    backdrop-blur-sm
                    rounded-xl
                    p-3.5
                    text-white
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-10
                        h-10
                        rounded-lg
                        bg-orange-500
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <FaBriefcase />
                    </div>

                    <div>

                      <p className="font-bold text-sm">
                        Corporate Travel Support
                      </p>

                      <p className="text-xs text-blue-100 mt-0.5">
                        Planned around your business schedule
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="py-12 md:py-14 bg-[#f5f8fc]">

        <div
          className="
            max-w-[1180px]
            mx-auto
            px-5
            sm:px-8
          "
        >

          <Reveal>

            <div
              className="
                text-center
                max-w-2xl
                mx-auto
                mb-7
                md:mb-9
              "
            >

              <span
                className="
                  text-orange-500
                  text-[10px]
                  md:text-xs
                  font-bold
                  uppercase
                  tracking-[2.5px]
                "
              >
                What We Handle
              </span>

              <h2
                className="
                  mt-2
                  text-2xl
                  md:text-4xl
                  font-extrabold
                  text-[#12385f]
                "
              >
                Built Around Your Business
              </h2>

              <p
                className="
                  mt-2.5
                  text-sm
                  text-gray-600
                "
              >
                Practical travel solutions that help corporate travellers
                save time and travel with confidence.
              </p>

            </div>

          </Reveal>


          {/* BENEFIT CARDS */}

          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-4
              gap-4
            "
          >

            {benefits.map((item, index) => {

              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                >

                  <div
                    className="
                      h-full
                      bg-white
                      rounded-xl
                      p-4.5
                      md:p-5
                      border
                      border-gray-100
                      shadow-md
                      hover:-translate-y-1.5
                      hover:shadow-xl
                      transition-all
                      duration-300
                    "
                  >

                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-blue-50
                        text-[#1556bd]
                        flex
                        items-center
                        justify-center
                        text-lg
                      "
                    >
                      <Icon />
                    </div>

                    <h3
                      className="
                        mt-4
                        text-base
                        font-bold
                        text-[#12385f]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        md:text-sm
                        text-gray-600
                        leading-5.5
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
          SERVICES
      ===================================================== */}

      <section className="py-12 md:py-14">

        <div
          className="
            max-w-[1100px]
            mx-auto
            px-5
            sm:px-8
          "
        >

          <div
            className="
              grid
              lg:grid-cols-[0.85fr_1.15fr]
              gap-8
              lg:gap-10
              items-center
            "
          >

            {/* LEFT */}

            <Reveal direction="left">

              <div>

                <span
                  className="
                    text-orange-500
                    text-[10px]
                    md:text-xs
                    font-bold
                    uppercase
                    tracking-[2.5px]
                  "
                >
                  Complete Assistance
                </span>

                <h2
                  className="
                    mt-2.5
                    text-2xl
                    md:text-4xl
                    font-extrabold
                    text-[#12385f]
                    leading-tight
                  "
                >
                  One Partner For

                  <br />

                  <span className="text-[#1556bd]">
                    Every Detail.
                  </span>
                </h2>

                <p
                  className="
                    mt-4
                    text-gray-600
                    text-sm
                    leading-6.5
                  "
                >
                  Whether you are travelling alone or coordinating travel for
                  a team, our experts can manage the essential parts of your
                  itinerary.
                </p>

              </div>

            </Reveal>


            {/* SERVICES GRID */}

            <Reveal direction="right">

              <div
                className="
                  grid
                  sm:grid-cols-2
                  gap-2.5
                "
              >

                {services.map((service) => (

                  <div
                    key={service}
                    className="
                      flex
                      items-start
                      gap-2.5
                      p-3.5
                      rounded-xl
                      bg-[#f5f8fc]
                      border
                      border-blue-50
                    "
                  >

                    <FaCheckCircle
                      className="
                        text-orange-500
                        mt-0.5
                        shrink-0
                        text-sm
                      "
                    />

                    <span
                      className="
                        text-xs
                        md:text-sm
                        font-medium
                        text-[#243b5a]
                        leading-5
                      "
                    >
                      {service}
                    </span>

                  </div>

                ))}

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="py-12 md:py-14 bg-[#06376b]">

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
                text-center
                text-white
                mb-7
                md:mb-9
              "
            >

              <span
                className="
                  text-orange-400
                  text-[10px]
                  md:text-xs
                  font-bold
                  uppercase
                  tracking-[2.5px]
                "
              >
                Simple Process
              </span>

              <h2
                className="
                  mt-2
                  text-2xl
                  md:text-4xl
                  font-extrabold
                "
              >
                From Planning To Take-Off
              </h2>

            </div>

          </Reveal>


          <div
            className="
              grid
              md:grid-cols-3
              gap-4
            "
          >

            {steps.map((step, index) => (

              <Reveal
                key={step.number}
                delay={index * 0.1}
              >

                <div
                  className="
                    h-full
                    rounded-xl
                    bg-white/[0.08]
                    border
                    border-white/10
                    p-5
                    md:p-6
                    text-white
                    hover:bg-white/[0.12]
                    transition-all
                    duration-300
                  "
                >

                  <span
                    className="
                      text-orange-400
                      text-2xl
                      font-extrabold
                    "
                  >
                    {step.number}
                  </span>

                  <h3
                    className="
                      mt-3
                      text-lg
                      font-bold
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-blue-100
                      leading-6
                      text-xs
                      md:text-sm
                    "
                  >
                    {step.text}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        id="enquiry"
        className="
          py-12
          md:py-14
          bg-[#f5f8fc]
        "
      >

        <Reveal>

          <div
            className="
              max-w-[900px]
              mx-auto
              px-5
              text-center
            "
          >

            <span
              className="
                text-orange-500
                text-[10px]
                md:text-xs
                font-bold
                uppercase
                tracking-[2.5px]
              "
            >
              Ready To Travel?
            </span>

            <h2
              className="
                mt-2.5
                text-2xl
                md:text-4xl
                font-extrabold
                text-[#12385f]
                leading-tight
              "
            >
              Let Us Plan Your Next

              <br />

              <span className="text-[#1556bd]">
                Business Journey.
              </span>

            </h2>

            <p
              className="
                mt-3
                text-gray-600
                text-sm
                max-w-xl
                mx-auto
                leading-6
              "
            >
              Share your travel requirements with our team and get a
              personalized business travel solution.
            </p>

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-3
                mt-5
              "
            >

              <a
                href="tel:+917666984626"
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  bg-[#06376b]
                  text-white
                  px-5
                  py-3
                  rounded-full
                  text-sm
                  font-semibold
                  hover:bg-[#1556bd]
                  transition-all
                "
              >
                <FaPhoneAlt />

                Call Us

              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  bg-[#25D366]
                  text-white
                  px-5
                  py-3
                  rounded-full
                  text-sm
                  font-semibold
                  hover:bg-[#1ebe5d]
                  transition-all
                "
              >
                <FaWhatsapp />

                WhatsApp Us

              </a>

            </div>

          </div>

        </Reveal>

      </section>

    </main>
  );
}
