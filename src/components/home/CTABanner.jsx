import AnimatedSection from "../AnimatedSection";
import Button from "../Button";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export default function CTABanner() {
  return (
    <AnimatedSection className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary-green via-green-700 to-primary-blue p-10 md:p-16 text-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-orange rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Hardware or Agricultural Utility Materials?
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with S.G. Agrotech for product enquiries, bulk
              requirements, and supply information.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                variant="primary"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}`}
                variant="whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Enquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
