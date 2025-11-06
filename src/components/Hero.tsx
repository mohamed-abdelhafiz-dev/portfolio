// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen text-center p-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold drop-shadow-[0_0_18px_#00eaff]"
      >
        Hi, I'm Mo
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl mt-4 text-gray-300 max-w-xl"
      >
        Full Stack MERN Developer building futuristic web experiences.
      </motion.p>

      <motion.a
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px #00eaff" }}
        href="#projects"
        className="mt-8 inline-block px-6 py-3 rounded-lg bg-[#00eaff] text-black font-semibold transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}
