"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the book opening
  const bookVariants = {
    closed: { rotateY: 0 },
    open: { rotateY: 180 },
  };

  const infoVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="h-screen flex items-center justify-center relative px-4"
      style={{
        backgroundImage: "url(/About.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="relative cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={bookVariants}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="w-[80vw] max-w-[400px] h-[150px] sm:h-[200px] bg-gradient-to-r from-purple-500 to-red-500 text-black font-extrabold text-[8vw] sm:text-[44px] rounded-2xl flex justify-center items-center">
          ABOUT ME
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4"
          variants={infoVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <div className="p-4 shadow-lg w-[90vw] max-w-[500px] sm:max-w-[600px] bg-blue-400 rounded-xl">
            <h1 className="text-xl sm:text-2xl font-bold">Hi, I’m Mahab Rizwan!</h1>
            <p className="mt-2 font-serif text-sm sm:text-base leading-relaxed">
              I’m a web developer passionate about creating user-friendly
              websites. Currently, I’m studying under the Governor Initiative
              for Artificial Intelligence, Web 3.0 & Metaverse. With skills in
              HTML, CSS, TypeScript, and Next.js, I enjoy blending design with
              functionality and tackling new challenges. Let’s connect and
              explore the tech world together!
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
