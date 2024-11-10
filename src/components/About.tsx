"use client";
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

import { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 b-4">
        About <span className="text-orange-400">Me</span>
      </h1>

      <div className="px-6 md:px-0 grid md:grid-cols-8 gap-6 place-items-center">
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border-white/20 rounded overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy">
            {" "}
          </div>
          <div className="flex lex-row p-6">
            <Image src={book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-6">
              <h2 className="text-2xl font-bold text-white/80 ">Education</h2>
              <p className="text-lg mt-2 text-white/70 ">
                I hold a degree in Information Science Engineering and I am
                focusing on technologies like React, Next.js, and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border-white/20 rounded overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy">
            {" "}
          </div>
          <div className="flex lex-row p-6">
            <Image src={finance} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-6">
              <h2 className="text-2xl font-bold text-white/80 ">
                Problem Solving
              </h2>
              <p className="text-lg mt-2 text-white/70 ">
                I approach problems with a logical and systematic approach
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border-white/20 rounded overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy">
            {" "}
          </div>
          <div className="flex lex-row p-6">
            <Image src={card} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-6">
              <h2 className="text-2xl font-bold text-white/80 ">Experience</h2>
              <p className="text-lg mt-2 text-white/70 ">
                I have a diverse portfolio of projects
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border-white/20 rounded overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy">
            {" "}
          </div>
          <div className="flex lex-row p-6">
            <Image src={pc} alt="pc" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-6">
              <h2 className="text-2xl font-bold text-white/80 ">
                Technical Skills
              </h2>
              <p className="text-lg mt-2 text-white/70 ">
                As a full stack web developer, I specialize in React JS, Next
                JS, and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
