import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917666984626"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="flex items-center">

        {/* Text */}

        <span className="mr-3 hidden lg:block bg-white shadow-lg rounded-full px-4 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition">
          Chat with us
        </span>

        {/* Button */}

        <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white text-3xl shadow-2xl hover:scale-110 transition animate-pulse">
          <FaWhatsapp />
        </div>

      </div>
    </a>
  );
}