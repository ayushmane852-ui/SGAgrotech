import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DynamicIcon } from "./DynamicIcon";

export default function CategoryCard({ category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-xl border border-border-gray p-6 shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <DynamicIcon name={category.icon} className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-lg font-bold text-charcoal mb-2">{category.name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {category.description}
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center gap-1 text-primary-green font-semibold text-sm group-hover:text-accent-orange transition-colors"
      >
        Enquire Now
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
