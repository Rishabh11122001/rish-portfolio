import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import WhatIDo from "@/components/portfolio/WhatIDo";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import MiniProjects from "@/components/portfolio/MiniProjects";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";
import ScrollReveal from "@/components/portfolio/ScrollReveal";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <WhatIDo />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <MiniProjects />
        <Achievements />
        <Contact />
      </main>
      <ScrollReveal />
    </>
  );
}
