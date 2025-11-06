import { motion } from "framer-motion";


export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 left-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-lg"
    >
      <ul className="flex justify-center gap-10 py-4 text-lg">
        <li>
          <a href="#hero" className="hover:text-[#00eaff] transition">
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-[#00eaff] transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-[#00eaff] transition">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#00eaff] transition">
            Contact
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}
