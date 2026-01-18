"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("");

  const loadingSteps = [
    "Initializing system...",
    "Loading components...",
    "Compiling assets...",
    "Starting services...",
    "Almost ready...",
    "Welcome!",
  ];

  useEffect(() => {
    let currentStep = 0;
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const textInterval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep]);
        currentStep++;
      }
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[10000] bg-black flex items-center justify-center"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Terminal Window */}
      <div className="relative z-10 w-full max-w-2xl mx-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900/90 backdrop-blur-xl border border-emerald-500/30 rounded-lg overflow-hidden shadow-2xl shadow-emerald-500/20"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800/90 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-400 text-sm font-mono">
                arjun@portfolio:~$ init
              </span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 md:p-12 font-mono">
            {/* System info */}
            <div className="text-emerald-400 text-sm mb-6 space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>Portfolio System v2.0.0</span>
              </div>
              <div className="text-gray-500">Starting Arjun's Portfolio...</div>
            </div>

            {/* Loading text */}
            <div className="mb-6 min-h-[60px]">
              <motion.div
                key={loadingText}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-gray-400 text-sm md:text-base"
              >
                <span className="text-emerald-500">$ </span>
                {loadingText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-emerald-400"
                >
                  ▊
                </motion.span>
              </motion.div>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>Loading...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* Loading dots animation */}
            <div className="mt-8 flex items-center gap-2">
              <span className="text-gray-600 text-sm">Processing</span>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-emerald-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* System status */}
            <div className="mt-6 pt-6 border-t border-gray-800 text-xs text-gray-600 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">●</span>
                <span>System: OK</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">●</span>
                <span>Network: Connected</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-yellow-500"
                >
                  ●
                </motion.span>
                <span>Status: Loading...</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating code symbols */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-12 -right-12 text-emerald-500/20 text-6xl"
        >
          {"</>"}
        </motion.div>
      </div>
    </motion.div>
  );
}
