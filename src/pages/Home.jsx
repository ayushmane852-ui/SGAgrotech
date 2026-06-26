import SEO from "../components/SEO";
import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import AboutPreview from "../components/home/AboutPreview";
import ProductCategories from "../components/home/ProductCategories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import GalleryPreview from "../components/home/GalleryPreview";
import CTABanner from "../components/home/CTABanner";
import ContactPreview from "../components/home/ContactPreview";

export default function Home() {
  return (
    <>
      <SEO
        title="S.G. Agrotech | Hardware & Agricultural Material Supplier"
        description="S.G. Agrotech supplies garden pipes, tadpatri, nylon dori, PVC cocks, UPVC pipes, murghas bags, nets, and other hardware and agricultural utility materials."
      />
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ProductCategories />
      <FeaturedProducts />
      <WhyChooseUsSection />
      <GalleryPreview />
      <CTABanner />
      <ContactPreview />
    </>
  );
}
