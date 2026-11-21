
import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import PersonalProjects from "@/components/sections/PersonalProjects";
import Expertise from "@/components/sections/Expertise";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Professional Experience */}
        <Experience />

        {/* Company Projects */}
        <Projects />

        {/* Independently Built Products */}
        <PersonalProjects />

        {/* Technical Expertise */}
        <Expertise />

        {/* Contact */}
        <Contact year={0} />
      </main>
    </>
  );
}
