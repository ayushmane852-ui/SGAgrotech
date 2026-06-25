import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import Lightbox, { GalleryGridItem } from "../components/Lightbox";
import { galleryItems, galleryCategories } from "../data/gallery";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setLightboxIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <SEO
        title="Gallery"
        description="View our product and supply gallery — pipes, tarpaulin, nets, dori, PVC items, murghas bags, and warehouse visuals from S.G. Enterprises."
      />
      <PageHero
        title="Gallery"
        subtitle="Product stock, materials, and supply visuals"
        breadcrumb="Home / Gallery"
      />

      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Browse"
            title="Product & Supply Gallery"
            description="Explore images from our hardware and agricultural material supply range."
          />

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary-green text-white shadow-md"
                    : "bg-light-bg text-gray-600 hover:bg-gray-100 border border-border-gray"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, i) => (
              <GalleryGridItem
                key={item.id}
                item={item}
                index={i}
                onClick={() => setLightboxIndex(i)}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filteredItems}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}
