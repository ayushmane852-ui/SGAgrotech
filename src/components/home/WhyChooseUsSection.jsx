import AnimatedSection, { StaggerContainer, StaggerItem } from "../AnimatedSection";
import SectionHeading from "../SectionHeading";
import { DynamicIcon } from "../DynamicIcon";
import { whyChooseUsPoints } from "../../data/whyChooseUs";

export default function WhyChooseUsSection() {
  return (
    <AnimatedSection className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Why Us"
          title="Why Choose S.G. Enterprises"
          description="Practical supply solutions backed by quality products and customer-focused service."
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsPoints.map((point) => (
            <StaggerItem
              key={point.title}
              className="bg-white rounded-xl p-6 border border-border-gray shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center mb-4">
                <DynamicIcon name={point.icon} className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="font-bold text-charcoal mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
