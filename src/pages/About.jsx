import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import AnimatedSection, { StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { DynamicIcon } from "../components/DynamicIcon";
import { missionValues, industriesServed } from "../data/whyChooseUs";
import CTABanner from "../components/home/CTABanner";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about S.G. Enterprises — a trusted supplier of hardware and agricultural utility materials for farmers, shops, and local customers."
      />
      <PageHero
        title="About S.G. Enterprises"
        subtitle="Your trusted partner for hardware and agricultural utility supply"
        breadcrumb="Home / About"
      />

      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            S.G. Enterprises is a hardware and agricultural utility material supplier
            serving farmers, garden users, hardware shops, contractors, and general
            customers. We focus on practical products that support daily farming,
            gardening, and hardware needs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our product range includes garden pipes, tadpatri/tarpaulin, nylon and
            reshim dori, PVC cocks, UPVC pipes, murghas bags, culture powder, various
            nets, and other essential supply materials. We aim to provide dependable
            service, helpful enquiry support, and quality-focused supply for both
            retail and bulk requirements.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Values"
            title="Mission & Values"
            description="Built on quality, reliability, and customer-focused supply."
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionValues.map((value) => (
              <StaggerItem
                key={value.title}
                className="bg-white rounded-xl p-6 text-center border border-border-gray shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary-green/10 flex items-center justify-center mb-4">
                  <DynamicIcon name={value.icon} className="w-7 h-7 text-primary-green" />
                </div>
                <h3 className="font-bold text-charcoal mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Customers"
            title="Who We Serve"
            description="Supporting a wide range of customers with practical supply solutions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesServed.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-xl border border-border-gray hover:border-primary-green/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center shrink-0">
                  <DynamicIcon name={item.icon} className="w-6 h-6 text-primary-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Trust"
            title="Why Customers Trust Us"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Wide range of hardware and agri utility products",
              "Quality-focused and practical product selection",
              "Support for both retail and bulk supply needs",
              "Helpful enquiry support via phone and WhatsApp",
              "Local business with dependable service",
              "Products suited for farming, gardening, and hardware use",
            ].map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border-gray"
              >
                <span className="w-2 h-2 rounded-full bg-accent-orange shrink-0" />
                <span className="text-gray-700 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTABanner />
    </>
  );
}
