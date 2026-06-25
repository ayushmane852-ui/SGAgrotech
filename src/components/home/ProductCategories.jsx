import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";
import CategoryCard from "../CategoryCard";
import { categories } from "../../data/products";

export default function ProductCategories() {
  return (
    <AnimatedSection className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Range"
          title="Product Categories"
          description="Explore our wide range of hardware and agricultural utility materials. Click enquire for availability and rates."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
