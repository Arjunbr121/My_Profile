"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    { command: "whoami", output: "Arjun BR" },
    { command: "cat role.txt", output: "Full Stack Developer" },
    { command: "cat skills.txt", output: "React • Next.js • Node.js" },
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
      setTimeout(() => {
        setCurrentLineIndex(0);
        setDisplayText("");
      }, 3000);
      return;
    }

    const currentLine = terminalLines[currentLineIndex];
    const fullText = `$ ${currentLine.command}\n${currentLine.output}`;

    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setDisplayText("");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentLineIndex]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-4 mt-16">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff41 2px, #00ff41 4px)`,
            animation: "scan 8s linear infinite",
          }}
        ></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/90 backdrop-blur-xl rounded-lg overflow-hidden shadow-2xl border border-emerald-500/20"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800/90 px-4 py-3 flex items-center gap-2 border-b border-gray-700/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-right">
              <span className="text-gray-400 text-sm font-mono">
                arjun@portfolio:~
              </span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 md:p-12 font-mono">
            <div className="space-y-6">
              {/* Welcome message */}
              <div className="text-emerald-400 text-sm md:text-base mb-8">
                <span className="text-gray-500">
                  // Welcome to my portfolio
                </span>
              </div>

              {/* Main typing display */}
              <div className="text-2xl md:text-4xl lg:text-5xl min-h-[160px]">
                <pre className="text-white whitespace-pre-wrap">
                  {displayText}
                  <span
                    className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity text-emerald-400`}
                  >
                    ▊
                  </span>
                </pre>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="border-l-4 border-emerald-500 pl-4 py-2"
              >
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  Full Stack Developer focused on creating websites that provide
                  the best experience for the user. Specializing in modern web
                  technologies and clean code.
                </p>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="flex flex-wrap gap-4 pt-6"
              >
                <a
                  href="#portfolio"
                  className="group relative px-6 py-3 bg-emerald-500 text-black font-semibold rounded overflow-hidden transition-all hover:scale-105"
                >
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border-2 border-emerald-500 text-emerald-500 font-semibold rounded hover:bg-emerald-500/10 transition-all"
                >
                  Get in Touch
                </a>
              </motion.div>

              {/* System info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="pt-8 text-xs md:text-sm text-gray-600 space-y-1"
              >
                <div>System: Portfolio v2.0.0</div>
                <div>
                  Status: <span className="text-emerald-500">● Online</span>
                </div>
                <div>Last updated: {new Date().toLocaleDateString()}</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Floating elements */}
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
          className="absolute -top-12 -right-12 opacity-20"
        >
          <div className="text-9xl">{"</>"}</div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-12 -left-12 opacity-20"
        >
          <div className="text-9xl">{"{ }"}</div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
