import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import AnimatedSection from "../components/AnimatedSection";
import ContactForm from "../components/ContactForm";
import { siteConfig } from "../data/siteConfig";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact S.G. Enterprises for product enquiries, bulk orders, and supply information. Call, WhatsApp, or visit our shop."
      />
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for product enquiries and supply information"
        breadcrumb="Home / Contact"
      />

      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="bg-light-bg rounded-2xl p-8 border border-border-gray">
                <h2 className="text-2xl font-bold text-charcoal mb-6">
                  Contact Details
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-green/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Phone</p>
                      <a
                        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                        className="text-gray-600 hover:text-primary-green"
                      >
                        {siteConfig.phone}
                      </a>
                      {siteConfig.phoneAlt && (
                        <a
                          href={`tel:${siteConfig.phoneAlt.replace(/\s/g, "")}`}
                          className="block text-gray-500 text-sm hover:text-primary-green"
                        >
                          Alt: {siteConfig.phoneAlt}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-green/10 flex items-center justify-center shrink-0">
                      <InstagramIcon className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Instagram</p>
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary-green"
                      >
                        @{siteConfig.instagramHandle}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-green/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Email</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-gray-600 hover:text-primary-green"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-green/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Address</p>
                      <p className="text-gray-600">{siteConfig.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-green/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Business Hours</p>
                      <p className="text-gray-600">{siteConfig.hours.weekdays}</p>
                      <p className="text-gray-500 text-sm">{siteConfig.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25D366] hover:bg-[#1da851] rounded-2xl p-8 text-white transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">WhatsApp Enquiry</h3>
                    <p className="text-green-100 text-sm">
                      Chat with us for product availability and rates
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-light-bg rounded-2xl p-8 border border-border-gray">
              <h2 className="text-2xl font-bold text-charcoal mb-2">
                Send Enquiry
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Fill in the form below and we will get back to you shortly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-border-gray h-80 bg-light-bg flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-primary-green mx-auto mb-4" />
              <h3 className="font-bold text-charcoal text-lg mb-2">Find Us Here</h3>
              <p className="text-gray-600 text-sm mb-1">{siteConfig.address}</p>
              <p className="text-gray-400 text-xs">
                Map embed placeholder — replace with Google Maps iframe when address is confirmed
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
