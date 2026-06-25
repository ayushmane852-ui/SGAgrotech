import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Share2,
  Camera,
  MessageCircle,
} from "lucide-react";
import { siteConfig, navLinks } from "../data/siteConfig";
import { categories } from "../data/products";
import { logoImage } from "../data/productImages";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {logoImage ? (
                <img
                  src={logoImage.src}
                  alt="Logo"
                  className="w-10 h-10 rounded-lg object-contain bg-white"
                />
              ) : (
                <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SG</span>
                </div>
              )}
              <span className="font-bold text-xl text-white">S.G. Enterprises</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              A trusted supplier of hardware, agricultural utility, and material
              handling products for farmers, shops, contractors, and local customers.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent-orange transition-colors"
                aria-label="Facebook"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent-orange transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-accent-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {categories.slice(0, 8).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to="/products"
                    className="text-sm hover:text-accent-orange transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} S.G. Enterprises. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Hardware & Agricultural Material Supplier
          </p>
        </div>
      </div>
    </footer>
  );
}
