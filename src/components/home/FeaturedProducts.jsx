import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";
import ProductCard from "../ProductCard";
import { featuredProducts, fastMovingProducts } from "../../data/products";
import { productImages } from "../../data/productImages";
import { TrendingUp } from "lucide-react";

const featuredWithImages = featuredProducts.map((product, index) => {
  const image = productImages[index];
  if (!image) return product;

  return {
    ...product,
    src: image.src,
    imageName: image.name,
    description: image.description,
  };
});

export default function FeaturedProducts() {
  return (
    <AnimatedSection className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Featured"
          title="Featured Products"
          description="Popular hardware and agricultural utility products supplied by S.G. Enterprises."
        />

        <div className="mb-12 bg-gradient-to-r from-primary-green/5 to-primary-blue/5 rounded-2xl p-6 border border-border-gray">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-accent-orange" />
            <h3 className="font-bold text-charcoal">Fast Moving Products</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {fastMovingProducts.map((product) => (
              <span
                key={product}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-border-gray shadow-sm"
              >
                {product}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredWithImages.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
