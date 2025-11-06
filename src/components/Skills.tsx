// src/components/Skills.jsx
import { motion } from 'framer-motion'

const skills = [
  "JavaScript", "React", "Node.js", "MongoDB", "Git", "Tailwind CSS"
]

export default function Skills() {
  return (
    <section id="skills" className="p-20 text-center bg-[#0f0f0f]">
      <h2 className="text-4xl font-bold mb-10 drop-shadow-[0_0_10px_#00eaff]">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill, i) => (
          <motion.span
            whileHover={{ scale: 1.15, boxShadow: "0 0 15px #00eaff" }}
            key={i}
            className="px-5 py-2 border border-[#00eaff] rounded-full text-sm text-[#00eaff]"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  )
}