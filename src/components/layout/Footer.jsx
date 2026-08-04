import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold">
              Sarathi <span className="text-[#0F766E]">NX</span>
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Professional corporate travel, exhibitions,
              visa assistance and international business
              travel solutions.
            </p>

          </div>

          {/* Services */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">
                Corporate Travel
              </li>

              <li className="hover:text-white cursor-pointer">
                Visa Assistance
              </li>

              <li className="hover:text-white cursor-pointer">
                Hotel Booking
              </li>

              <li className="hover:text-white cursor-pointer">
                Exhibition Management
              </li>

            </ul>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Gallery</li>
              <li className="hover:text-white cursor-pointer">Contact</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-[#0F766E]" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-[#0F766E]" />
                <span>info@sarathinx.com</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#0F766E]" />
                <span>Nagpur, Maharashtra, India</span>
              </div>

            </div>

          </div>

        </div>

        {/* Social */}

        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400">
            © 2026 Sarathi NX. All Rights Reserved.
          </p>

          <div className="flex gap-4 mt-6 md:mt-0">

            <a href="#" className="w-11 h-11 rounded-full bg-[#0F766E] hover:bg-white hover:text-[#0F766E] flex items-center justify-center transition">
              <FaFacebookF />
            </a>

            <a href="#" className="w-11 h-11 rounded-full bg-[#0F766E] hover:bg-white hover:text-[#0F766E] flex items-center justify-center transition">
              <FaInstagram />
            </a>

            <a href="#" className="w-11 h-11 rounded-full bg-[#0F766E] hover:bg-white hover:text-[#0F766E] flex items-center justify-center transition">
              <FaLinkedinIn />
            </a>

            <a href="#" className="w-11 h-11 rounded-full bg-[#0F766E] hover:bg-white hover:text-[#0F766E] flex items-center justify-center transition">
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}