import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContact() {
  const whatsappNumber = "917666984626";

  const whatsappMessage = encodeURIComponent(
    "Hello Sarathi NX, I would like to know more about your travel services."
  );

  return (
    <div className="fixed bottom-6 right-5 z-[100] flex flex-col gap-3">

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sarathi NX on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl shadow-xl hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp />
      </a>

      {/* Call */}
      <a
        href="tel:+917666984626"
        aria-label="Call Sarathi NX"
        className="w-14 h-14 rounded-full bg-[#0F766E] text-white flex items-center justify-center text-xl shadow-xl hover:scale-110 transition-transform duration-300"
      >
        <FaPhoneAlt />
      </a>

    </div>
  );
}