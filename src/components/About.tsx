"use client";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLightbulb,
  FaLaptopCode,
} from "react-icons/fa";

const aboutData = [
  {
    icon: <FaGraduationCap size={40} />,
    title: "Education",
    description:
      "I hold a degree in Information Science Engineering and I am focusing on technologies like React, Next.js, and Tailwind CSS.",
    command: "cat education.txt",
    color: "emerald",
  },
  {
    icon: <FaLightbulb size={40} />,
    title: "Problem Solving",
    description: "I approach problems with a logical and systematic approach",
    command: "grep -r 'solution' ./brain",
    color: "cyan",
  },
  {
    icon: <FaCode size={40} />,
    title: "Experience",
    description: "I have a diverse portfolio of projects",
    command: "ls -la ~/projects/",
    color: "purple",
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: "Technical Skills",
    description:
      "As a full stack web developer, I specialize in React JS, Next JS, and Tailwind CSS.",
    command: "npm list --global",
    color: "orange",
  },
];

const About = () => {
  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        bg: "bg-emerald-500/5",
        glow: "shadow-emerald-500/20",
      },
      cyan: {
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        bg: "bg-cyan-500/5",
        glow: "shadow-cyan-500/20",
      },
      purple: {
        border: "border-purple-500/30",
        text: "text-purple-400",
        bg: "bg-purple-500/5",
        glow: "shadow-purple-500/20",
      },
      orange: {
        border: "border-orange-500/30",
        text: "text-orange-400",
        bg: "bg-orange-500/5",
        glow: "shadow-orange-500/20",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="py-24 bg-black relative overflow-hidden" id="about">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block">
            {/* Terminal window header */}
            <div className="bg-gray-900/90 backdrop-blur-sm border border-emerald-500/30 rounded-lg overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono ml-2">
                  about.sh
                </span>
              </div>
              <div className="px-6 py-4 font-mono">
                <div className="text-gray-500 text-sm mb-2">
                  $ whoami --detailed
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-white">About</span>{" "}
                  <span className="text-emerald-400">Me</span>
                </h2>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {aboutData.map((item, index) => {
            const colors = getColorClasses(item.color);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`h-full bg-gray-900/50 backdrop-blur-sm border ${colors.border} rounded-lg overflow-hidden hover:shadow-xl ${colors.glow} transition-all duration-300 hover:scale-[1.02]`}
                >
                  {/* Terminal Header */}
                  <div className="bg-gray-800/80 px-4 py-2 flex items-center justify-between border-b border-gray-700/50">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/70"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/70"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500/70"></div>
                    </div>
                    <span className="text-gray-500 text-xs font-mono">
                      {item.title.toLowerCase()}.log
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Command prompt */}
                    <div className="mb-4 font-mono text-sm">
                      <span className="text-gray-500">$ </span>
                      <span className={colors.text}>{item.command}</span>
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`${colors.text} ${colors.bg} p-3 rounded-lg border ${colors.border}`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 font-mono">
                          {item.title}
                        </h3>
                        <div
                          className={`w-12 h-1 ${colors.text.replace("text", "bg")} rounded-full`}
                        ></div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className={`border-l-2 ${colors.border} pl-4 py-2`}>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Output indicator */}
                    <div className="mt-4 pt-4 border-t border-gray-800 font-mono text-xs text-gray-600 flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${colors.text.replace("text", "bg")} animate-pulse`}
                      ></div>
                      <span>Status: Active</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom terminal line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 font-mono text-sm text-gray-600 flex items-center gap-2"
        >
          <span className="text-emerald-500">●</span>
          <span>Process completed successfully</span>
          <span className="text-gray-800">|</span>
          <span>Exit code: 0</span>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
