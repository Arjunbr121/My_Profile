"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const skillsData = [
  {
    icon: <FaHtml5 size={60} />,
    label: "HTML",
    level: 90,
    version: "5.0",
    color: "orange",
  },
  {
    icon: <FaCss3Alt size={60} />,
    label: "CSS",
    level: 85,
    version: "3.0",
    color: "blue",
  },
  {
    icon: <FaReact size={60} />,
    label: "React",
    level: 88,
    version: "18.x",
    color: "cyan",
  },
  {
    icon: <FaJsSquare size={60} />,
    label: "JavaScript",
    level: 87,
    version: "ES6+",
    color: "yellow",
  },
  {
    icon: <FaPython size={60} />,
    label: "Python",
    level: 75,
    version: "3.x",
    color: "blue",
  },
  {
    icon: <FaNodeJs size={60} />,
    label: "Node.js",
    level: 82,
    version: "20.x",
    color: "green",
  },
  {
    icon: <TbBrandNextjs size={60} />,
    label: "Next.js",
    level: 86,
    version: "14.x",
    color: "white",
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  const getColorClasses = (color: string) => {
    const colors = {
      orange: {
        border: "border-orange-500",
        bg: "bg-orange-500",
        text: "text-orange-400",
      },
      blue: {
        border: "border-blue-500",
        bg: "bg-blue-500",
        text: "text-blue-400",
      },
      cyan: {
        border: "border-cyan-400",
        bg: "bg-cyan-400",
        text: "text-cyan-400",
      },
      yellow: {
        border: "border-yellow-400",
        bg: "bg-yellow-400",
        text: "text-yellow-400",
      },
      green: {
        border: "border-green-500",
        bg: "bg-green-500",
        text: "text-green-400",
      },
      white: { border: "border-white", bg: "bg-white", text: "text-white" },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="py-24 bg-black relative overflow-hidden" id="skills">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

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
            <div className="bg-gray-900/90 backdrop-blur-sm border border-emerald-500/30 rounded-lg overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono ml-2">
                  skills.config
                </span>
              </div>
              <div className="px-6 py-4 font-mono">
                <div className="text-gray-500 text-sm mb-2">
                  $ cat /etc/skills/installed.list
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-white">Tech</span>{" "}
                  <span className="text-emerald-400">Stack</span>
                </h2>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Terminal output header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 font-mono text-sm"
        >
          <div className="bg-gray-900/50 border border-gray-800 rounded p-4">
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-emerald-400">$</span>
              <span>npm list --depth=0</span>
            </div>
            <div className="mt-2 text-emerald-400">
              portfolio@2.0.0 /home/arjun/projects/portfolio
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {skillsData.map((skill, index) => {
            const colors = getColorClasses(skill.color);
            const isSelected = selectedSkill === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedSkill(isSelected ? null : index)}
                className="group cursor-pointer"
              >
                <div
                  className={`
                  relative bg-gray-900/50 backdrop-blur-sm border rounded-lg overflow-hidden
                  transition-all duration-300 hover:scale-105
                  ${
                    isSelected
                      ? `${colors.border} border-2 shadow-xl shadow-${skill.color}-500/20`
                      : "border-emerald-500/20 hover:border-emerald-500/50"
                  }
                `}
                >
                  {/* Terminal header */}
                  <div className="bg-gray-800/80 px-3 py-1.5 border-b border-gray-700/50 flex items-center justify-between">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/70"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/70"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500/70"></div>
                    </div>
                    <span className="text-gray-500 text-xs font-mono">
                      {skill.label.toLowerCase()}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col items-center justify-center min-h-[180px]">
                    {/* Icon */}
                    <div
                      className={`${colors.text} mb-3 transition-transform group-hover:scale-110 duration-300`}
                    >
                      {skill.icon}
                    </div>

                    {/* Label */}
                    <div className="text-white font-mono font-bold text-lg mb-2">
                      {skill.label}
                    </div>

                    {/* Version */}
                    <div className="text-gray-500 text-xs font-mono mb-3">
                      v{skill.version}
                    </div>

                    {/* Progress bar */}
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-mono text-gray-600">
                          proficiency
                        </span>
                        <span
                          className={`text-xs font-mono font-bold ${colors.text}`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full ${colors.bg} rounded-full`}
                        />
                      </div>
                    </div>

                    {/* Status indicator */}
                    <div className="mt-3 flex items-center gap-2">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${colors.bg} animate-pulse`}
                      ></div>
                      <span className="text-xs font-mono text-gray-600">
                        installed
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Package info output */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 font-mono text-sm"
        >
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-gray-500">├──</span>
              <div className="flex-1">
                <span className="text-emerald-400">Frontend:</span>
                <span className="text-gray-400 ml-2">
                  React, Next.js, HTML, CSS, JavaScript
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">├──</span>
              <div className="flex-1">
                <span className="text-emerald-400">Backend:</span>
                <span className="text-gray-400 ml-2">Node.js, Python</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">└──</span>
              <div className="flex-1">
                <span className="text-emerald-400">Total packages:</span>
                <span className="text-gray-400 ml-2">
                  {skillsData.length} installed
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800 flex items-center gap-2 text-gray-600">
            <span className="text-emerald-500">✓</span>
            <span>All dependencies up to date</span>
          </div>
        </motion.div>

        {/* Bottom terminal output */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-6 font-mono text-sm text-gray-600 flex items-center gap-2"
        >
          <span className="text-emerald-400">$</span>
          <span className="text-gray-500">Skills loaded successfully</span>
          <span className="animate-pulse">_</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
