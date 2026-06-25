import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { DynamicIcon } from "../components/DynamicIcon";
import { whyChooseUsPoints } from "../data/whyChooseUs";
import CTABanner from "../components/home/CTABanner";
import Button from "../components/Button";
import { ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <>
      <SEO
        title="Why Choose Us"
        description="Discover why customers choose S.G. Enterprises for hardware and agricultural material supply — quality products, bulk support, and reliable service."
      />
      <PageHero
        title="Why Choose Us"
        subtitle="Quality supply, practical products, and customer-first service"
        breadcrumb="Home / Why Choose Us"
      />

      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            At S.G. Enterprises, we understand that customers need dependable products
            for farming, gardening, and hardware work. That is why we focus on practical
            quality, wide product availability, and helpful enquiry support for every
            customer — from individual buyers to bulk traders.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Benefits"
            title="What Sets Us Apart"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsPoints.map((point) => (
              <StaggerItem
                key={point.title}
                className="bg-white rounded-2xl p-8 border border-border-gray shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-green to-primary-blue flex items-center justify-center mb-5">
                  <DynamicIcon name={point.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                subtitle="Commitment"
                title="Our Supply Promise"
                align="left"
              />
              <ul className="space-y-4">
                {[
                  "Wide product range covering essential hardware and agri materials",
                  "Trusted local supply support for the region",
                  "Focus on practical quality for daily use",
                  "Suitable for agricultural, gardening, and hardware needs",
                  "Helpful customer support for enquiries and orders",
                  "Reliable supply for retail and bulk buyers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary-green/10 flex items-center justify-center shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3 text-primary-green" />
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-green/20 via-primary-blue/20 to-accent-orange/20 flex items-center justify-center border border-border-gray">
              <div className="text-center p-8">
                <p className="text-6xl font-bold text-primary-green mb-2">SG</p>
                <p className="text-xl font-semibold text-charcoal">Trusted Supply Partner</p>
                <p className="text-gray-500 mt-2">Hardware & Agri Materials</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
            Start Your Enquiry Today
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </AnimatedSection>

      <CTABanner />
    </>
  );
}
