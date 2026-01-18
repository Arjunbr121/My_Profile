"use client";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTerminal,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaGithub size={24} />,
      href: "#",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: <FaInstagram size={24} />,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black relative overflow-hidden border-t border-emerald-500/20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)`,
            backgroundSize: "25px 25px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="font-mono text-emerald-400 text-xl font-bold">
                arjun@dev
              </span>
            </div>
            <p className="text-gray-400 font-mono text-sm mb-4">
              Full Stack Developer
            </p>
            <div className="font-mono text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <FaTerminal className="text-emerald-500" />
                <span>$ Building the future, one line at a time</span>
              </div>
            </div>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h3 className="font-mono text-emerald-400 text-sm mb-4 uppercase">
              // Quick Access
            </h3>
            <div className="space-y-2 font-mono text-sm">
              <a
                href="#about"
                className="block text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <span className="text-emerald-500 mr-2">$</span>
                cd about/
              </a>
              <a
                href="#portfolio"
                className="block text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <span className="text-emerald-500 mr-2">$</span>
                ls projects/
              </a>
              <a
                href="#skills"
                className="block text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <span className="text-emerald-500 mr-2">$</span>
                cat skills.json
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <span className="text-emerald-500 mr-2">$</span>
                ./contact.sh
              </a>
            </div>
          </div>

          {/* Right - Social */}
          <div>
            <h3 className="font-mono text-emerald-400 text-sm mb-4 uppercase">
              // Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gray-800/50 border border-gray-700 p-3 rounded-lg text-gray-400 ${social.color} transition-all hover:border-emerald-500/50`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="mt-4 font-mono text-xs text-gray-600">
              <span className="text-emerald-500">●</span> Available for
              opportunities
            </div>
          </div>
        </div>

        {/* Terminal Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="font-mono text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">$</span>
              <span>echo "© {currentYear} Arjun BR. All rights reserved."</span>
            </div>
          </div>

          {/* Made with */}
          <div className="font-mono text-sm text-gray-600 flex items-center gap-2">
            <span>Built with</span>
            <FaHeart className="text-red-500 animate-pulse" size={14} />
            <span>using</span>
            <span className="text-emerald-400">Next.js</span>
            <span>&</span>
            <span className="text-cyan-400">Tailwind CSS</span>
          </div>
        </div>

        {/* Terminal Output */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 bg-gray-900/50 border border-gray-800 rounded-lg p-4 font-mono text-xs"
        >
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-emerald-400">$</span>
            <span>System status: All services running</span>
            <span className="text-gray-800">|</span>
            <span>Portfolio v2.0.0</span>
            <span className="text-gray-800">|</span>
            <span className="text-emerald-500">● Online</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
