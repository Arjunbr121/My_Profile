"use client";
import Image from "next/image";
import project from "../assets/proj1.jpg";
import project1 from "../assets/proj2.jpg";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

import { useState } from "react";
import { motion } from "framer-motion";
const projects = [
  {
    title: "Project1 ",
    description: " poiuytredcfvghjkl,mnbvcxc ",
    link: "#",
    git: "#",
    src: project,
    devStack: "MongoDB,Expresss, React, Node JS",
  },
  {
    title: "Project1 ",
    description: " poiuytredcfvghjkl,mnbvcxc ",
    link: "#",
    git: "#",
    devStack: "MongoDB,Expresss, React, Node JS",
    src: project,
  },
  {
    title: "Project1 ",
    description: " poiuytredcfvghjkl,mnbvcxc ",
    link: "#",
    git: "#",
    devStack: "MongoDB,Expresss, React, Node JS",
    src: project1,
  },
];

const Protfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52 transition-all duration-500 ease-in-out"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
        About <span className="text-orange-400">Me</span>
      </h1>
      <div className="px-6 md:px-0 max-w-[1000px] mx-auto space-y-24 mt-40">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex mt-12 flex-col${
              index % 2 === 1
                ? " md:flex-row-reverse gap-12"
                : " md:flex-row gap-12"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg">{project.description}</p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devStack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4 ">
                <a href={project.link} className="mr-6">
                  Link
                </a>
                <a href={project.git}>Git</a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[250px] md:h-[350px] w-[550px] object-cover border rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Protfolio;
