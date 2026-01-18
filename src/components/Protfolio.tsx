"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import project from "../assets/proj1.jpg";
import project2 from "../assets/proj3.png";
import project1 from "../assets/project1.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaFolder,
  FaTerminal,
} from "react-icons/fa";
import { useState } from "react";

// You'll need to import your actual images
// For now using placeholder - replace with your actual imports
const projects = [
  {
    title: "Tomato",
    description: "A clone of Zomato - A personal Project",
    link: "#",
    git: "#",
    src: project1,
    devStack: ["MongoDB", "Express", "React", "Node.js"],
    type: "Full Stack",
    status: "Completed",
  },
  {
    title: "Secretly Said",
    description: "A private space for users to express thoughts and emotions.",
    link: "https://secretly-said-deb4.vercel.app/",
    git: "https://github.com/Arjunbr121/secretly_said",
    devStack: ["Next.js", "Tailwind"],
    type: "Web App",
    status: "Live",
    src: project3,
  },
  {
    title: "Family Golf",
    description: "It is a practice dummy project",
    link: "https://practse-project-1.vercel.app/",
    git: "https://github.com/Arjunbr121/Practse-project-1.git",
    devStack: ["HTML", "CSS", "JavaScript"],
    type: "Frontend",
    status: "Live",
    src: project2,
  },
  {
    title: "Keepable",
    description:
      "It is a modern web application to save, organize, and tag links or notes effortlessly",
    link: "https://keepable.vercel.app/",
    git: "https://github.com/Arjunbr121/keepable",
    devStack: ["HTML", "CSS", "JavaScript"],
    type: "Frontend",
    status: "Live",
    src: project4,
  },
];

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-24 bg-black relative overflow-hidden" id="portfolio">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

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
                  projects.sh
                </span>
              </div>
              <div className="px-6 py-4 font-mono">
                <div className="text-gray-500 text-sm mb-2">
                  $ ls -la ~/projects/featured/
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-white">My</span>{" "}
                  <span className="text-emerald-400">Projects</span>
                </h2>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Directory listing style intro */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 font-mono text-sm text-gray-500 bg-gray-900/50 border border-gray-800 rounded p-4"
        >
          <div className="flex gap-4">
            <span className="text-emerald-400">total {projects.length}</span>
            <span>drwxr-xr-x featured/</span>
          </div>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
                {/* Terminal Header */}
                <div className="bg-gray-800/80 px-4 py-2 flex items-center justify-between border-b border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/70"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/70"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500/70"></div>
                    </div>
                    <FaFolder className="text-emerald-400" size={14} />
                    <span className="text-gray-400 text-xs font-mono">
                      {project.title.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-600">
                      {project.type}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        project.status === "Live"
                          ? "bg-green-500 animate-pulse"
                          : "bg-blue-500"
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left: Info */}
                    <div className="flex-1 space-y-4">
                      {/* Project Number and Title */}
                      <div>
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="text-5xl font-bold text-emerald-500/30 font-mono">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
                      </div>

                      {/* Command output style */}
                      <div className="font-mono text-sm">
                        <div className="text-gray-500 mb-1">
                          $ cat README.md
                        </div>
                        <div className="border-l-2 border-emerald-500/30 pl-4">
                          <p className="text-gray-400 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="font-mono text-sm">
                        <div className="text-gray-500 mb-2">
                          $ cat package.json | grep dependencies
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.devStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4">
                        <a
                          href={project.git}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 hover:border-emerald-500 text-gray-300 hover:text-emerald-400 rounded font-mono text-sm transition-all"
                        >
                          <FaGithub />
                          <span>git clone</span>
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500 text-emerald-400 hover:bg-emerald-500/20 rounded font-mono text-sm transition-all"
                        >
                          <FaExternalLinkAlt />
                          <span>./run.sh</span>
                        </a>
                      </div>
                    </div>

                    {/* Right: Preview Terminal */}
                    <div className="lg:w-80">
                      <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
                        <div className="bg-gray-900/80 px-3 py-1.5 border-b border-gray-700 flex items-center gap-2">
                          <FaTerminal className="text-emerald-400" size={10} />
                          <span className="text-gray-500 text-xs font-mono">
                            preview
                          </span>
                        </div>
                        <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 p-4 flex items-center justify-center">
                          {/* You can replace this with actual project images */}
                          <div className="text-center">
                            <div className="text-6xl text-emerald-500/20 mb-2">
                              <FaFolder />
                            </div>
                            <div className="font-mono text-xs text-gray-600">
                              {project.title.toLowerCase()}
                            </div>
                          </div>
                          {/* Uncomment when you have images: */}
                          <Image
                            src={project.src}
                            alt={project.title}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom status */}
                  <div className="mt-4 pt-4 border-t border-gray-800 font-mono text-xs text-gray-600 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span>Status: {project.status}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-700">chmod +x</span>
                      <span>Modified: 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom terminal output */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 font-mono text-sm bg-gray-900/50 border border-gray-800 rounded overflow-hidden"
        >
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-emerald-500">✓</span>
              <span>Listed {projects.length} project(s)</span>
              <span className="text-gray-800">|</span>
              <span>Exit code: 0</span>
            </div>

            <div className="border-t border-gray-800 pt-3">
              <div className="text-gray-500 mb-2">
                $ echo "Want to see more?"
              </div>
              <a
                href="https://github.com/Arjunbr121"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 hover:border-emerald-500 text-emerald-400 hover:text-emerald-300 rounded transition-all group"
              >
                <FaGithub size={18} />
                <span>git clone github.com/Arjunbr121</span>
                <FaExternalLinkAlt
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <div className="text-xs text-gray-600 mt-2">
                → Check out all my projects on GitHub
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
