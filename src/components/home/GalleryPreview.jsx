import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";
import { GalleryGridItem } from "../Lightbox";
import { galleryItems } from "../../data/gallery";

export default function GalleryPreview() {
  const previewItems = galleryItems.slice(0, 8);

  return (
    <AnimatedSection className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Gallery"
          title="Product & Supply Gallery"
          description="A glimpse of our hardware and agricultural material supply range."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {previewItems.map((item, i) => (
            <GalleryGridItem
              key={item.id}
              item={item}
              index={i}
              onClick={() => {}}
            />
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-primary-green font-semibold hover:text-accent-orange transition-colors"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
