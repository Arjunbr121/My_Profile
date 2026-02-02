"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "about", path: "#about", command: "cd about/" },
  { title: "portfolio", path: "#portfolio", command: "ls projects/" },
  { title: "skills", path: "#skills", command: "cat skills.json" },
  { title: "contact", path: "#contact", command: "mail --to arjun" },
];

const Navbar = ({ setShowScrollToTop }: { setShowScrollToTop: (show: boolean) => void }) => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
    setShowScrollToTop(false);
  };

  const closeNav = () => {
    setNav(false);
    setShowScrollToTop(true);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-lg border-b border-emerald-500/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <Link href="/" className="group">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-emerald-400 text-lg font-bold">
                  arjun@dev
                </span>
                <span className="text-gray-500 font-mono">:~$</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-4 py-2 group"
                >
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      $
                    </span>
                    <span className="text-gray-300 group-hover:text-emerald-400 transition-colors">
                      {link.title}
                    </span>
                  </div>

                  {/* Hover tooltip showing command */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-full left-0 mt-2 px-3 py-1 bg-gray-800 border border-emerald-500/30 rounded text-xs font-mono text-gray-400 whitespace-nowrap"
                      >
                        {link.command}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Active indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              ))}

              {/* Terminal command button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500 text-emerald-400 rounded font-mono text-sm hover:bg-emerald-500/20 transition-all"
              >
                <span className="hidden lg:inline">./contact.sh</span>
                <span className="lg:hidden">Contact</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleNav}
              className="md:hidden p-2 border border-emerald-500/50 rounded bg-gray-900/50 backdrop-blur-sm text-emerald-400"
            >
              {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeNav}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-gray-900 border-l border-emerald-500/30 z-50 md:hidden overflow-hidden"
            >
              {/* Terminal header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-gray-400 text-sm font-mono">
                    menu.sh
                  </span>
                </div>
                <button
                  onClick={closeNav}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <AiOutlineClose size={20} />
                </button>
              </div>

              {/* Menu content */}
              <div className="p-6 font-mono">
                <div className="text-emerald-400 text-sm mb-6">
                  <span className="text-gray-500"># Navigation Menu</span>
                </div>

                <ul className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.path}
                        onClick={closeNav}
                        className="block group"
                      >
                        <div className="text-gray-500 text-xs mb-1">
                          {link.command}
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-800/50 border border-gray-700 rounded hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all">
                          <span className="text-emerald-500">$</span>
                          <span className="text-gray-300 text-lg group-hover:text-emerald-400 transition-colors">
                            {link.title}
                          </span>
                          <span className="ml-auto text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </span>
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Contact command */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded"
                >
                  <div className="text-gray-500 text-xs mb-2">$ execute</div>
                  <Link
                    href="#contact"
                    onClick={closeNav}
                    className="block text-emerald-400 text-lg font-semibold hover:text-emerald-300 transition-colors"
                  >
                    ./contact.sh --now
                  </Link>
                </motion.div>

                {/* System info */}
                <div className="mt-8 pt-6 border-t border-gray-700 text-xs text-gray-600 space-y-1">
                  <div>User: guest@portfolio</div>
                  <div>
                    Status: <span className="text-emerald-500">● Active</span>
                  </div>
                  <div>Session: {new Date().toLocaleTimeString()}</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
