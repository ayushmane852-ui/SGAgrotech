import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";
import ContactForm from "../ContactForm";
import FAQSection from "../FAQSection";
import { faqItems } from "../../data/faq";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { industriesServed } from "../../data/whyChooseUs";
import { DynamicIcon } from "../DynamicIcon";

export default function ContactPreview() {
  return (
    <>
      <AnimatedSection className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Industries"
            title="Who We Serve"
            description="Supplying hardware and agri utility materials to diverse customers across the region."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industriesServed.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-4 text-center border border-border-gray hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 mx-auto rounded-lg bg-primary-green/10 flex items-center justify-center mb-2">
                  <DynamicIcon name={item.icon} className="w-5 h-5 text-primary-green" />
                </div>
                <p className="font-semibold text-sm text-charcoal">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Contact"
            title="Get In Touch"
            description="Reach out for product enquiries, bulk orders, or supply information."
          />
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-light-bg rounded-xl p-6 border border-border-gray">
                <h3 className="font-bold text-charcoal mb-4">Contact Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-charcoal">{siteConfig.phone}</p>
                      <p className="text-sm text-gray-500">Primary contact</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-charcoal">{siteConfig.email}</p>
                      <p className="text-sm text-gray-500">Email enquiry</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-charcoal">{siteConfig.address}</p>
                      <p className="text-sm text-gray-500">Visit our shop</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-charcoal">{siteConfig.hours.weekdays}</p>
                      <p className="text-sm text-gray-500">{siteConfig.hours.sunday}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-3 bg-light-bg rounded-xl p-6 md:p-8 border border-border-gray">
              <h3 className="font-bold text-charcoal mb-4">Quick Enquiry Form</h3>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-light-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Common questions about our products and supply services."
          />
          <FAQSection items={faqItems} />
        </div>
      </AnimatedSection>
    </>
  );
}
