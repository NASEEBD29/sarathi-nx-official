import { useState } from "react";
import { FaTimes, FaExpand } from "react-icons/fa";

import Reveal from "../components/common/Reveal";

const galleryImages = [
  {
    id: 1,
    title: "International Exhibitions",
    category: "Exhibitions",
    image: "/sarathi-nx-official/gallery/exhibition-1.jpg",
  },
  {
    id: 2,
    title: "Business Travel",
    category: "Business Travel",
    image: "/sarathi-nx-official/gallery/business-1.jpg",
  },
  {
    id: 3,
    title: "Corporate Travel",
    category: "Corporate",
    image: "/sarathi-nx-official/gallery/corporate-1.jpg",
  },
  {
    id: 4,
    title: "Global Exhibitions",
    category: "Exhibitions",
    image: "/sarathi-nx-official/gallery/exhibition-2.jpg",
  },
  {
    id: 5,
    title: "International Travel",
    category: "Travel",
    image: "/sarathi-nx-official/gallery/travel-1.jpg",
  },
  {
    id: 6,
    title: "Business Meetings",
    category: "Corporate",
    image: "/sarathi-nx-official/gallery/business-2.jpg",
  },
  {
    id: 7,
    title: "Global Business",
    category: "Business Travel",
    image: "/sarathi-nx-official/gallery/business-3.jpg",
  },
  {
    id: 8,
    title: "Travel Experiences",
    category: "Travel",
    image: "/sarathi-nx-official/gallery/travel-2.jpg",
  },
];

const categories = [
  "All",
  "Exhibitions",
  "Business Travel",
  "Corporate",
  "Travel",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-[#003DA5] text-white pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <Reveal>
            <div className="max-w-4xl">

              <span className="text-blue-200 uppercase tracking-[4px] font-semibold text-sm">
                Our Gallery
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
                Explore Our
                <span className="block text-blue-200">
                  Travel Experiences
                </span>
              </h1>

              <p className="mt-6 text-blue-100 text-lg leading-8 max-w-3xl">
                Take a look at our international exhibitions, business
                travel experiences and corporate travel journeys.
              </p>

            </div>
          </Reveal>

        </div>

      </section>


      {/* ================= GALLERY ================= */}
      <section className="py-24 bg-[#F5F9FF]">

        <div className="max-w-7xl mx-auto px-6">

          {/* Filters */}
          <Reveal>

            <div className="flex flex-wrap justify-center gap-3 mb-14">

              {categories.map((category) => (

                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#003DA5] text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-[#EAF2FF] hover:text-[#003DA5]"
                  }`}
                >
                  {category}
                </button>

              ))}

            </div>

          </Reveal>


          {/* Images */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredImages.map((item, index) => (

              <Reveal
                key={item.id}
                delay={index * 0.08}
              >

                <button
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="group relative w-full h-80 rounded-2xl overflow-hidden bg-gray-200 shadow-md hover:shadow-2xl transition-all duration-300"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-left translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">

                    <p className="text-blue-200 text-sm font-semibold">
                      {item.category}
                    </p>

                    <h3 className="text-white text-lg font-bold mt-1">
                      {item.title}
                    </h3>

                  </div>

                  {/* Expand */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-[#003DA5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaExpand />
                  </div>

                </button>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-20 bg-[#003DA5] text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <Reveal>

            <h2 className="text-4xl md:text-5xl font-bold">
              Ready For Your Next Journey?
            </h2>

            <p className="text-blue-100 text-lg mt-5 max-w-2xl mx-auto leading-7">
              Let Sarathi NX handle your complete business and exhibition
              travel requirements.
            </p>

            <a
              href="/sarathi-nx-official/#contact"
              className="inline-flex items-center gap-3 mt-8 bg-white text-[#003DA5] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              Plan Your Trip
            </a>

          </Reveal>

        </div>

      </section>


      {/* ================= LIGHTBOX ================= */}
      {selectedImage && (

        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white text-gray-800 flex items-center justify-center text-xl hover:bg-gray-200 transition"
          >
            <FaTimes />
          </button>

          <div
            className="max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />

            <div className="text-center mt-5">

              <h3 className="text-white text-2xl font-bold">
                {selectedImage.title}
              </h3>

              <p className="text-blue-200 mt-1">
                {selectedImage.category}
              </p>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}