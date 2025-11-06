// src/components/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  { title: "Weather App", desc: "React + API", link: "#" },
  { title: "E-Commerce", desc: "Full MERN App", link: "#" },
  { title: "Social Media App", desc: "Authentication + CRUD", link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="p-20">
      <h2 className="text-4xl font-bold mb-14 text-center drop-shadow-[0_0_12px_#00eaff]">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #00eaff" }}
            transition={{ duration: 0.4 }}
            key={i}
            href={p.link}
            className="p-6 border border-[#00eaff] rounded-xl"
          >
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
