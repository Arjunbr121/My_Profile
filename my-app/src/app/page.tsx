import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Protfolio from "@/components/Protfolio";
import Skils from "@/components/Skils";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Protfolio />
      <Skils />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
