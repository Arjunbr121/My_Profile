"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaTerminal } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            {/* Terminal window */}
            <div className="bg-gray-900/90 backdrop-blur-lg border border-emerald-500/30 rounded-lg overflow-hidden shadow-xl shadow-emerald-500/20 hover:border-emerald-500/60 transition-all">
              {/* Button content */}
              <div className="p-4 flex flex-col items-center gap-2">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-emerald-400"
                >
                  <FaArrowUp size={20} />
                </motion.div>
                <span className="text-xs font-mono text-gray-400 group-hover:text-emerald-400 transition-colors">
                  TOP
                </span>
              </div>

              {/* Pulsing indicator */}
              <div className="absolute top-2 right-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                />
              </div>
            </div>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
            >
              <div className="bg-gray-900 border border-emerald-500/30 rounded px-3 py-1.5 font-mono text-xs text-emerald-400">
                $ cd /top
              </div>
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
