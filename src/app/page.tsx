import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Preloader } from "@/components/ui/Preloader";

export default function Home() {
  return (
    <Preloader>
      <main className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </Preloader>
  );
}
