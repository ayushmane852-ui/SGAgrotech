import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { ProductImageDetailBlock } from "../components/ProductCard";
import Button from "../components/Button";
import { productImages } from "../data/productImages";
import { Phone, MessageCircle, Package } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Products() {
  return (
    <>
      <SEO
        title="Products"
        description="Browse hardware and agricultural products from S.G. Agrotech — garden pipes, tadpatri, dori, PVC cocks, UPVC pipes, murghas bags, nets, and more."
      />
      <PageHero
        title="Our Products"
        subtitle="Hardware and agricultural utility materials for every need"
        breadcrumb="Home / Products"
      />

      <AnimatedSection className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-light-bg rounded-2xl p-6 mb-8 border border-border-gray">
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              S.G. Agrotech supplies a comprehensive range of hardware and
              agricultural utility materials. Browse our products below and contact
              us for availability, rates, and bulk supply enquiries.
            </p>
          </div>

          <SectionHeading
            subtitle="Catalogue"
            title="Product Images & Details"
            description="Detailed information for each product from our supply range."
          />

          {productImages.map((product, i) => (
            <ProductImageDetailBlock
              key={product.id}
              product={product}
              index={i}
              reverse={i % 2 !== 0}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-blue to-primary-green rounded-2xl p-8 md:p-12 text-center text-white">
            <Package className="w-12 h-12 mx-auto mb-4 text-accent-orange" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Need Bulk Supply?</h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Contact us for bulk order enquiries, trader requirements, and
              regular supply support for shops and businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                variant="primary"
              >
                <Phone className="w-4 h-4" />
                Call for Bulk Enquiry
              </Button>
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}`}
                variant="whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Bulk Order
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
