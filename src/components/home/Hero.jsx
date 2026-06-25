import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../Button";
import { farmerImage } from "../../data/productImages";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-light-bg via-white to-green-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-primary-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-200/50 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gray-200/30 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-green/10 text-primary-green text-sm font-semibold rounded-full mb-6">
              Hardware & Agricultural Supply
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-4">
              S.G.{" "}
              <span className="text-primary-green">Enterprises</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-blue font-medium mb-4">
              Quality Pipes, Nets, Tarpaulin, Dori & Hardware Supply Solutions
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
              S.G. Enterprises is a trusted supplier of hardware, agricultural utility,
              and material handling products. We provide quality garden pipes, tarpaulin,
              nylon and reshim dori, PVC and UPVC items, murghas bags, nets, and other
              essential materials for farming, gardening, and hardware needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/products" variant="primary">
                View Products
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button to="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </motion.div>

          {farmerImage && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-green/10 bg-white">
                <img
                  src={farmerImage.src}
                  alt="Farmer"
                  className="w-full aspect-[4/5] sm:aspect-[3/4] object-cover"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
