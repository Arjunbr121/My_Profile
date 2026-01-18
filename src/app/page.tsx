"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Protfolio from "@/components/Protfolio";
import Skils from "@/components/Skils";
import Loading from "@/components/Loading";
import ScrollToTop from "@/components/ScrollToTop";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loading key="loading" />
        ) : (
          <div key="content">
            <Navbar />
            <Hero />
            <About />
            <Protfolio />
            <Skils />
            <Contact />
            <Footer />
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
