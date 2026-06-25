import { motion } from "framer-motion";
import Button from "./Button";
import { DynamicIcon } from "./DynamicIcon";

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden border border-border-gray shadow-sm hover:shadow-2xl transition-all duration-300"
    >
      {product.src ? (
        <figure>
          <div className="h-48 bg-light-bg overflow-hidden">
            <img
              src={product.src}
              alt={product.imageName || product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          {product.imageName && (
            <figcaption className="text-center text-xs font-semibold text-charcoal py-2 px-2 bg-light-bg border-t border-border-gray">
              {product.imageName}
            </figcaption>
          )}
        </figure>
      ) : (
        <div
          className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
          <DynamicIcon
            name={product.icon}
            className="w-16 h-16 text-white/90 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-charcoal mb-2">
          {product.imageName || product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        {product.useCase && (
          <p className="text-gray-500 text-xs mb-5 italic">{product.useCase}</p>
        )}
        <Button to="/contact" variant="primary" className="w-full text-sm py-2.5">
          Enquire Now
        </Button>
      </div>
    </motion.div>
  );
}

export function ProductDetailBlock({ product, index = 0, reverse = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.5 }}
      id={product.id}
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center py-12 border-b border-border-gray last:border-0 scroll-mt-28`}
    >
      <div className="w-full lg:w-2/5">
        <div
          className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}
        >
          <DynamicIcon name={product.icon} className="w-24 h-24 text-white/90" />
        </div>
      </div>
      <div className="w-full lg:w-3/5">
        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
          {product.title}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
        <div className="mb-6">
          <h4 className="font-semibold text-charcoal mb-3">Applications / Uses</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.applications.map((app) => (
              <li
                key={app}
                className="flex items-center gap-2 text-gray-600 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-green shrink-0" />
                {app}
              </li>
            ))}
          </ul>
        </div>
        <Button to="/contact" variant="secondary">
          Enquire About This Product
        </Button>
      </div>
    </motion.div>
  );
}

export function ProductImageDetailBlock({ product, index = 0, reverse = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.5 }}
      id={product.id}
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center py-12 border-b border-border-gray last:border-0 scroll-mt-28`}
    >
      <div className="w-full lg:w-2/5">
        <figure>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-light-bg shadow-lg border border-border-gray">
            <img
              src={product.src}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="text-center text-sm font-semibold text-charcoal mt-3">
            {product.name}
          </figcaption>
        </figure>
      </div>
      <div className="w-full lg:w-3/5">
        <span className="inline-block px-3 py-1 bg-primary-green/10 text-primary-green text-xs font-semibold rounded-full mb-3">
          {product.category}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
          {product.name}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
        <div className="mb-6">
          <h4 className="font-semibold text-charcoal mb-3">Applications / Uses</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.applications.map((app) => (
              <li
                key={app}
                className="flex items-center gap-2 text-gray-600 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-green shrink-0" />
                {app}
              </li>
            ))}
          </ul>
        </div>
        <Button to="/contact" variant="secondary">
          Enquire About This Product
        </Button>
      </div>
    </motion.div>
  );
}
