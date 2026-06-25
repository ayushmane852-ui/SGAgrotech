import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { DynamicIcon } from "./DynamicIcon";

export default function Lightbox({ items, currentIndex, onClose, onPrev, onNext }) {
  if (currentIndex === null) return null;

  const item = items[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Close"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {item.src ? (
          <div className="aspect-video rounded-2xl overflow-hidden bg-white mb-4">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <div
            className={`aspect-video rounded-2xl bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center mb-4`}
          >
            <DynamicIcon name={item.icon} className="w-24 h-24 text-white/90" />
          </div>
        )}
        <div className="text-center">
          <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
          <p className="text-gray-400 text-sm">{item.category}</p>
        </div>
      </motion.div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-10 h-10" />
      </button>
    </motion.div>
  );
}

export function GalleryGridItem({ item, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative rounded-xl overflow-hidden cursor-pointer bg-white border border-border-gray shadow-sm hover:shadow-lg transition-shadow"
      onClick={() => onClick(index)}
    >
      <div className="aspect-square overflow-hidden bg-light-bg">
        {item.src ? (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
          >
            <DynamicIcon name={item.icon} className="w-12 h-12 text-white/80" />
          </div>
        )}
      </div>
      <div className="p-3 text-center bg-white">
        <p className="text-charcoal font-semibold text-sm leading-snug">{item.title}</p>
        {item.category && (
          <p className="text-gray-500 text-xs mt-1">{item.category}</p>
        )}
      </div>
    </motion.div>
  );
}

export function ImageWithLabel({ src, name, className = "", imageClassName = "" }) {
  return (
    <figure className={`flex flex-col ${className}`}>
      <div className={`overflow-hidden bg-light-bg ${imageClassName}`}>
        <img src={src} alt={name} className="w-full h-full object-cover" />
      </div>
      <figcaption className="text-center text-sm font-medium text-charcoal mt-2 px-1">
        {name}
      </figcaption>
    </figure>
  );
}
