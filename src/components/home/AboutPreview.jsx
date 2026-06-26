import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";
import Button from "../Button";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <AnimatedSection className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-green to-primary-blue flex items-center justify-center shadow-xl">
              <div className="text-center text-white p-8">
                <p className="text-5xl font-bold mb-2">SG</p>
                <p className="text-lg opacity-90">Trusted Local Supplier</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-orange/20 rounded-2xl -z-10" />
          </div>
          <div>
            <SectionHeading
              subtitle="About Us"
              title="About S.G. Agrotech"
              align="left"
            />
            <p className="text-gray-600 leading-relaxed mb-4">
              S.G. Agrotech supplies a wide range of hardware and agricultural
              utility materials for farmers, shopkeepers, contractors, and general
              customers. Our focus is on quality products, dependable service, and
              practical solutions for day-to-day supply needs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              From garden pipes and tarpaulin to nets, dori, PVC fittings, and murghas
              bags — we help customers find the right materials for farming, gardening,
              and hardware requirements.
            </p>
            <Button to="/about" variant="outline">
              Read More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
