import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "../data/siteConfig";
import { logoImage } from "../data/productImages";
import Button from "../components/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            {logoImage ? (
              <img
                src={logoImage.src}
                alt="Logo"
                className="w-20 h-20 rounded-lg object-contain bg-white border border-border-gray group-hover:border-primary-green transition-colors"
              />
            ) : (
              <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center group-hover:bg-green-800 transition-colors">
                <span className="text-white font-bold text-sm">SG</span>
              </div>
            )}
            <div>
              <span className="font-bold text-lg text-charcoal block leading-tight">
                S.G. Agrotech
              </span>
              <span className="text-xs text-gray-500 hidden sm:block">
                Hardware & Agri Supply
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary-green"
                    : "text-gray-600 hover:text-primary-green"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary-green rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              variant="outline"
              className="py-2.5 px-4 text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
            <Button to="/contact" variant="primary" className="py-2.5 px-4 text-sm">
              Get Quote
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border-gray overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg font-medium ${
                    location.pathname === link.path
                      ? "bg-green-50 text-primary-green"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 space-y-2">
                <Button
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  variant="outline"
                  className="w-full text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
                <Button to="/contact" variant="primary" className="w-full text-sm">
                  Get Quote
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
