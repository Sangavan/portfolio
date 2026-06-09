import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
    </main>
  );
}