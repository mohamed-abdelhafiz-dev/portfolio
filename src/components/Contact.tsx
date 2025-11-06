import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="p-20 text-center bg-black">
      <h2 className="text-4xl font-bold mb-6 drop-shadow-[0_0_10px_#00eaff]">
        Contact
      </h2>
      <p className="text-gray-400 mb-6">
        Let’s build something awesome together!
      </p>
      <motion.a
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px #00eaff" }}
        href="mailto:mohamed.abdelhafiz.dev@gmail.com"
        className="px-6 py-3 rounded-lg bg-[#00eaff] text-black font-semibold"
      >
        Email Me
      </motion.a>
      <p className="mt-6 text-gray-500 text-sm">
        © 2025 Mo. All Rights Reserved.
      </p>
    </section>
  );
}
