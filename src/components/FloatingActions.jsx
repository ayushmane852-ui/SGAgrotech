import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="md:hidden w-14 h-14 bg-primary-blue rounded-full flex items-center justify-center shadow-lg shadow-blue-700/30 text-white"
        aria-label="Call now"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      <motion.a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 text-white"
        aria-label="WhatsApp enquiry"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
