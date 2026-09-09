import {
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
  FaGlobeAsia,
  FaHotel,
  FaUsers,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

import Reveal from "../components/common/Reveal";

export default function MICEExhibitionTravel() {
  const whatsappNumber = "917666984626";

  const highlights = [
    {
      icon: FaBuilding,
      title: "Exhibition Travel",
      text: "Complete travel coordination for exhibitors, delegates and business visitors.",
    },
    {
      icon: FaUsers,
      title: "Group Coordination",
      text: "Organized travel solutions for teams, associations and corporate groups.",
    },
    {
      icon: FaHotel,
      title: "Hotel Planning",
      text: "Accommodation options selected around exhibition venues and business schedules.",
    },
    {
      icon: FaGlobeAsia,
      title: "Global Destinations",
      text: "Travel assistance for major international business and exhibition destinations.",
    },
  ];

  const included = [
    "Exhibition and business travel planning",
    "Group flight coordination",
    "Hotel accommodation near venues",
    "Visa assistance and documentation guidance",
    "Airport transfers and local transportation",
    "Pre-travel coordination for delegates",
  ];

  const eventBenefits = [
    "Travel planned around event dates",
    "Support for individual and group travellers",
    "Practical destination and accommodation guidance",
  ];

  return (
    <main className="bg-white overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[440px] md:min-h-[500px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2200&q=90"
          alt="MICE and exhibition travel"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#031b3a]/95
            via-[#063b73]/80
            to-[#063b73]/20
          "
        />

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
            md:pt-32
          "
        >

          <Reveal>

            <div className="max-w-[760px]">

              {/* LABEL */}

              <div className="flex items-center gap-3 mb-4">

                <span className="w-10 h-[2px] bg-orange-500" />

                <span
                  className="
                    text-white
                    text-[11px]
                    md:text-xs
                    font-bold
                    uppercase
                    tracking-[2.5px]
                  "
                >
                  MICE & Exhibition Travel
                </span>

              </div>

              {/* TITLE */}

              <h1
                className="
                  text-white
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[62px]
                  font-extrabold
                  leading-[1.02]
                "
              >
                Take Your Business
                <br />

                <span className="text-orange-500">
                  To The World.
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-5
                  text-white/90
                  text-sm
                  md:text-base
                  leading-7
                  max-w-[650px]
                "
              >
                Seamless travel support for exhibitions, trade fairs,
                conferences, incentives and corporate groups across the world.
              </p>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-3 mt-6">

                <a
                  href="#enquiry"
                  className="
                    inline-flex
                    items-center
                    gap-2.5
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    px-6
                    py-3.5
                    rounded-full
                    font-semibold
                    text-sm
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Plan Exhibition Travel

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
                    border-2
                    border-white/80
                    text-white
                    px-6
                    py-3.5
                    rounded-full
                    font-semibold
                    text-sm
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
            h-9
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

        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* CONTENT */}

            <Reveal direction="left">

              <div>

                <span
                  className="
                    text-orange-500
                    text-[11px]
                    md:text-xs
                    font-bold
                    uppercase
                    tracking-[2.5px]
                  "
                >
                  Exhibition Travel Specialists
                </span>

                <h2
                  className="
                    mt-3
                    text-3xl
                    md:text-4xl
                    lg:text-[46px]
                    font-extrabold
                    text-[#12385f]
                    leading-[1.08]
                  "
                >
                  Your Event Is Important.
                  <br />

                  <span className="text-[#1556bd]">
                    So Is Every Detail.
                  </span>
                </h2>

                <p
                  className="
                    mt-4
                    text-gray-600
                    text-sm
                    md:text-base
                    leading-7
                    max-w-[590px]
                  "
                >
                  International exhibitions and trade events require careful
                  coordination. From flights and hotels to visas and transfers,
                  we help bring the entire journey together.
                </p>

                {/* POINTS */}

                <div className="mt-5 space-y-2.5">

                  {eventBenefits.map((item) => (

                    <div
                      key={item}
                      className="
                        flex
                        gap-3
                        items-start
                        text-sm
                        text-gray-700
                      "
                    >

                      <FaCheckCircle
                        className="
                          text-orange-500
                          mt-0.5
                          shrink-0
                        "
                      />

                      <span>{item}</span>

                    </div>

                  ))}

                </div>

              </div>

            </Reveal>


            {/* IMAGE */}

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
                  src="https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=1400&q=85"
                  alt="International business exhibition"
                  className="
                    w-full
                    h-[280px]
                    md:h-[330px]
                    object-cover
                  "
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    bg-[#06376b]/95
                    backdrop-blur-sm
                    rounded-xl
                    p-4
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
                      <FaBuilding />
                    </div>

                    <div>

                      <p className="font-bold text-sm">
                        Exhibition Travel Support
                      </p>

                      <p className="text-xs text-blue-100 mt-0.5">
                        Planned around your event schedule
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
          HIGHLIGHTS
      ===================================================== */}

      <section className="py-12 md:py-14 bg-[#f5f8fc]">

        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">

          <Reveal>

            <div className="text-center max-w-2xl mx-auto mb-8">

              <span
                className="
                  text-orange-500
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[2.5px]
                "
              >
                Complete Travel Support
              </span>

              <h2
                className="
                  mt-2
                  text-3xl
                  md:text-4xl
                  font-extrabold
                  text-[#12385f]
                "
              >
                Everything Around Your Event
              </h2>

              <p className="mt-3 text-sm text-gray-600">
                Practical travel solutions designed around your exhibition,
                conference or corporate event.
              </p>

            </div>

          </Reveal>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {highlights.map((item, index) => {

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
                      rounded-2xl
                      p-5
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
                        md:text-[13px]
                        text-gray-600
                        leading-5
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
          INCLUDED SERVICES
      ===================================================== */}

      <section className="py-12 md:py-14 bg-white">

        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT */}

            <Reveal direction="left">

              <div>

                <span
                  className="
                    text-orange-500
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[2.5px]
                  "
                >
                  What We Arrange
                </span>

                <h2
                  className="
                    mt-3
                    text-3xl
                    md:text-4xl
                    lg:text-[46px]
                    font-extrabold
                    text-[#12385f]
                    leading-[1.08]
                  "
                >
                  One Smooth Journey.
                  <br />

                  <span className="text-[#1556bd]">
                    One Reliable Partner.
                  </span>
                </h2>

                <p
                  className="
                    mt-4
                    text-sm
                    md:text-base
                    text-gray-600
                    leading-7
                    max-w-[470px]
                  "
                >
                  From individual delegates to complete corporate groups,
                  we coordinate the essential travel arrangements around
                  your event.
                </p>

              </div>

            </Reveal>


            {/* RIGHT */}

            <Reveal direction="right">

              <div className="grid sm:grid-cols-2 gap-2.5">

                {included.map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      gap-2.5
                      p-3.5
                      bg-[#f5f8fc]
                      rounded-xl
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
                        md:text-[13px]
                        text-[#243b5a]
                        font-medium
                        leading-5
                      "
                    >
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        id="enquiry"
        className="
          relative
          py-12
          md:py-14
          bg-[#06376b]
          text-white
          overflow-hidden
        "
      >

        {/* DECORATION */}

        <div
          className="
            absolute
            -left-24
            -top-24
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
            -right-24
            -bottom-28
            w-72
            h-72
            rounded-full
            border
            border-white/10
          "
        />

        <div className="relative z-10 max-w-[900px] mx-auto px-5 text-center">

          <Reveal>

            <FaBuilding
              className="
                text-orange-400
                text-3xl
                mx-auto
              "
            />

            <h2
              className="
                mt-3
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-extrabold
                leading-tight
              "
            >
              Planning Your Next Exhibition?
            </h2>

            <p
              className="
                mt-3
                text-blue-100
                text-sm
                md:text-base
                leading-6
                max-w-2xl
                mx-auto
              "
            >
              Let our travel team handle the logistics while you focus
              on your business, meetings and exhibition goals.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">

              <a
                href="tel:+917666984626"
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-white
                  text-[#06376b]
                  px-6
                  py-3
                  rounded-full
                  font-bold
                  text-sm
                  hover:bg-orange-500
                  hover:text-white
                  transition-all
                  duration-300
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
                  gap-2
                  bg-[#25D366]
                  text-white
                  px-6
                  py-3
                  rounded-full
                  font-bold
                  text-sm
                  hover:bg-[#1ebe5d]
                  transition-all
                  duration-300
                "
              >

                <FaWhatsapp />

                WhatsApp Us

                <FaArrowRight className="text-xs" />

              </a>

            </div>

          </Reveal>

        </div>

      </section>

    </main>
  );
}
