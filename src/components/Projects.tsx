import { motion } from "framer-motion";

const projects = [
  {
    title: "Weatherly App",
    desc: "A modern web application built to provide accurate and real-time weather updates with a seamless user experience.",
    link: "https://github.com/mohamed-abdelhafiz-dev/React-Weatherly-App",
  },
  {
    title: "Reading Corner App",
    desc: "A sleek, modern web application that helps users discover and manage their favorite books. Powered by the Google Books API and built with React, TypeScript, and Redux Toolkit",
    link: "https://github.com/mohamed-abdelhafiz-dev/Reading-Corner-App",
  },
  {
    title: "E-Commerce Website",
    desc: "E-commerce multi-page website like Amazon using html,css,js and api to fetch the products from supersimplebackend.dev/products",
    link: "https://github.com/mohamed-abdelhafiz-dev/E-Commerce-website",
  },
  {
    title: "Todo App",
    desc: "Todo-list app using react.js with some cool features that helped me practise while learning react.",
    link: "https://github.com/mohamed-abdelhafiz-dev/React-Todo-app",
  },
  {
    title: "Note Taking App",
    desc: "A note-taking app built with React and TypeScript, featuring a clean UI and local storage support.",
    link: "https://github.com/mohamed-abdelhafiz-dev/Note-taking-app",
  },
  {
    title: "Currency Converter App",
    desc: "Currency-Converter-App using react , TypeScript and tailwind with api for real time currency conversion rate",
    link: "https://github.com/mohamed-abdelhafiz-dev/React-Currency-Converter-App",
  },
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
            target="_blank"
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
