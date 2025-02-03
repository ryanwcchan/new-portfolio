import Skills from "../components/Skills";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Interests from "../components/Interests";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center w-full flex-1">
      <Hero />
      <Intro />
      <Skills />
      <Projects />
      <Contact />

      {/* Interests */}
      <Interests />
    </div>
  );
}
