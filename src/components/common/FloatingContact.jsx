import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContact() {
  const whatsappNumber = "917666984626";

  const whatsappMessage = encodeURIComponent(
    "Hello Sarathi NX, I would like to know more about your travel services."
  );

  return (
    <div
      className="
        fixed
        bottom-6
        right-5
        z-[100]
        flex
        flex-col
        items-center
        gap-4
      "
    >

      {/* =====================================================
          WHATSAPP BUTTON
      ===================================================== */}

      <div className="relative">

        {/* Outer Attention Ring */}

        <span
          className="
            absolute
            inset-[-5px]
            rounded-full
            border-2
            border-[#25D366]/50
            animate-contact-pulse
            pointer-events-none
          "
        />

        {/* Second Soft Ring */}

        <span
          className="
            absolute
            inset-[-9px]
            rounded-full
            border
            border-[#25D366]/20
            animate-contact-pulse-slow
            pointer-events-none
          "
        />

        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Sarathi NX on WhatsApp"
          className="
            relative
            z-10
            w-14
            h-14
            rounded-full
            bg-[#25D366]
            text-white
            flex
            items-center
            justify-center
            text-[27px]
            shadow-[0_8px_25px_rgba(37,211,102,0.45)]
            hover:bg-[#25D366]
            hover:scale-110
            hover:shadow-[0_10px_35px_rgba(37,211,102,0.65)]
            transition-all
            duration-300
          "
        >

          <FaWhatsapp className="animate-whatsapp-icon" />

        </a>

      </div>


      {/* =====================================================
          CALL BUTTON
      ===================================================== */}

      <div className="relative">

        {/* Outer Attention Ring */}

        <span
          className="
            absolute
            inset-[-5px]
            rounded-full
            border-2
            border-[#0057B8]/45
            animate-contact-pulse
            pointer-events-none
          "
        />

        {/* Second Soft Ring */}

        <span
          className="
            absolute
            inset-[-9px]
            rounded-full
            border
            border-[#0057B8]/20
            animate-contact-pulse-slow
            pointer-events-none
          "
        />

        <a
          href="tel:+917666984626"
          aria-label="Call Sarathi NX"
          className="
            relative
            z-10
            w-14
            h-14
            rounded-full
            bg-[#0057B8]
            text-white
            flex
            items-center
            justify-center
            text-[22px]
            shadow-[0_8px_25px_rgba(0,87,184,0.45)]
            hover:bg-[#0057B8]
            hover:scale-110
            hover:shadow-[0_10px_35px_rgba(0,87,184,0.65)]
            transition-all
            duration-300
          "
        >

          <FaPhoneAlt className="animate-phone-icon" />

        </a>

      </div>


      {/* =====================================================
          CUSTOM ANIMATIONS
      ===================================================== */}

      <style>{`

        /* ==============================================
           WHATSAPP ICON VIBRATION
        ============================================== */

        @keyframes whatsappVibrate {

          0%,
          82%,
          100% {
            transform: rotate(0deg) scale(1);
          }

          84% {
            transform: rotate(-12deg) scale(1.05);
          }

          86% {
            transform: rotate(12deg) scale(1.08);
          }

          88% {
            transform: rotate(-10deg) scale(1.05);
          }

          90% {
            transform: rotate(10deg) scale(1.08);
          }

          92% {
            transform: rotate(-6deg) scale(1.03);
          }

          94% {
            transform: rotate(6deg) scale(1.02);
          }

          96% {
            transform: rotate(0deg) scale(1);
          }

        }


        /* ==============================================
           PHONE ICON VIBRATION
        ============================================== */

        @keyframes phoneVibrate {

          0%,
          82%,
          100% {
            transform: rotate(0deg) scale(1);
          }

          84% {
            transform: rotate(-15deg) scale(1.06);
          }

          86% {
            transform: rotate(15deg) scale(1.09);
          }

          88% {
            transform: rotate(-12deg) scale(1.06);
          }

          90% {
            transform: rotate(12deg) scale(1.09);
          }

          92% {
            transform: rotate(-7deg) scale(1.04);
          }

          94% {
            transform: rotate(7deg) scale(1.02);
          }

          96% {
            transform: rotate(0deg) scale(1);
          }

        }


        /* ==============================================
           OUTER PULSE
        ============================================== */

        @keyframes contactPulse {

          0%,
          70% {
            transform: scale(1);
            opacity: 0.5;
          }

          85% {
            transform: scale(1.25);
            opacity: 0;
          }

          100% {
            transform: scale(1.25);
            opacity: 0;
          }

        }


        /* ==============================================
           SLOW OUTER PULSE
        ============================================== */

        @keyframes contactPulseSlow {

          0%,
          70% {
            transform: scale(1);
            opacity: 0.25;
          }

          90% {
            transform: scale(1.35);
            opacity: 0;
          }

          100% {
            transform: scale(1.35);
            opacity: 0;
          }

        }


        /* ==============================================
           ANIMATION CLASSES
        ============================================== */

        .animate-whatsapp-icon {
          animation: whatsappVibrate 4s ease-in-out infinite;
          transform-origin: center;
        }

        .animate-phone-icon {
          animation: phoneVibrate 4s ease-in-out infinite;
          animation-delay: 2s;
          transform-origin: center;
        }

        .animate-contact-pulse {
          animation: contactPulse 3.5s ease-out infinite;
        }

        .animate-contact-pulse-slow {
          animation: contactPulseSlow 3.5s ease-out infinite;
          animation-delay: 1.2s;
        }


        /* ==============================================
           REDUCE MOTION
        ============================================== */

        @media (prefers-reduced-motion: reduce) {

          .animate-whatsapp-icon,
          .animate-phone-icon,
          .animate-contact-pulse,
          .animate-contact-pulse-slow {
            animation: none;
          }

        }

      `}</style>

    </div>
  );
}