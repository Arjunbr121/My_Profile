import { div } from "framer-motion/client";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const skillIcons = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3Alt size={140} />, label: "CSS" },
  { icon: <FaReact size={140} />, label: "React" },
  { icon: <FaJsSquare size={140} />, label: "Java Script" },
  { icon: <FaPython size={140} />, label: "Python" },
  { icon: <TbBrandNextjs size={140} />, label: "Next.js" },
];

const Skils = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
      <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-4"> What I Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl h-[160px] w-[160px] md:h-[220px] md:w-[220px]"
            >
              {skill.icon}
              <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skils;
