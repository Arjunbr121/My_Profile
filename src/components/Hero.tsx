"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import profilePic from "../assets/profilepic.png";
import { motion, useAnimation, AnimationControls } from "framer-motion";

const Hero = () => {
  const cursorControls: AnimationControls = useAnimation();
  const lightningControls: AnimationControls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  type Constraints = {
    top: number;
    left: number;
    right: number;
    bottom: number;
  };

  const [constraints, setConstraints] = useState<Constraints>({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  // Set constraints based on window size
  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setConstraints({
        top: 0,
        left: 0,
        right: width,
        bottom: height,
      });
    }
  }, []);

  const phrases = ["Arjun BR", "Full Stack Developer", "Android Developer"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 150 : 100; // Slower typing speed for both typing and deleting

    const handleTyping = () => {
      setDisplayText((prevText) =>
        isDeleting
          ? currentPhrase.substring(0, prevText.length - 1)
          : currentPhrase.substring(0, prevText.length + 1)
      );

      // Decide whether to switch to deleting or move to next phrase
      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to next phrase
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, phrases]);

  const handleDragEnd = (
    controls: AnimationControls,
    initialPosition: { x: number; y: number }
  ) => {
    setTimeout(() => {
      controls.start({ x: initialPosition.x, y: initialPosition.y });
    }, 2000);
  };

  return (
    <div
      ref={containerRef}
      className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)] h-screen"
    >
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] bg-black top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80% ,#2B1942)]"></div>

      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h4 className="text-[#E48A57] text-5xl">{displayText}</h4>
        </div>

        <motion.div
          className="hidden md:block absolute left-[280px] top-[170px] z-10"
          drag
          dragConstraints={constraints}
          animate={cursorControls}
          onDragEnd={() => handleDragEnd(cursorControls, { x: 0, y: 0 })}
        >
          <Image
            src={cursor}
            alt="cursor icon"
            height={140}
            width={140}
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute right-[220px] top-[20px] z-10"
          drag
          dragConstraints={constraints}
          animate={lightningControls}
          onDragEnd={() => handleDragEnd(lightningControls, { x: 0, y: 0 })}
        >
          <Image
            src={lightning}
            alt="lightning icon"
            height={190}
            width={190}
            draggable="false"
          />
        </motion.div>

        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
          I am a fullStack Developer focused on creating websites that provide
          the best experience for the user.
        </p>
        <Image
          src={profilePic}
          alt="profile picture"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
