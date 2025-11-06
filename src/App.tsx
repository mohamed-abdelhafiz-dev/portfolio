import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
