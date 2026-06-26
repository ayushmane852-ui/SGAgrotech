import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../data/siteConfig";
import { logoImage } from "../data/productImages";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-gradient-to-br from-primary-green via-green-800 to-primary-blue overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center text-center px-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              {logoImage ? (
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white p-3 shadow-2xl shadow-black/20">
                  <img
                    src={logoImage.src}
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white flex items-center justify-center shadow-2xl">
                  <span className="text-3xl font-bold text-primary-green">SG</span>
                </div>
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-white/80 text-sm sm:text-base font-medium max-w-xs"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-10 w-48 sm:w-56"
            >
              <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent-orange rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
