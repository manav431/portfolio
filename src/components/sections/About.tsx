"use client";

import { portfolioData } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/FadeIn";
import { Typewriter } from "../ui/Typewriter";
import { motion } from "framer-motion";

export function About() {
  const { about, skills } = portfolioData;

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 className="text-sm font-medium tracking-widest text-muted uppercase mb-8">
                About
              </h2>
            </FadeIn>
            
            <Typewriter 
              text={about.bio} 
              className="text-2xl md:text-3xl leading-relaxed font-medium mb-6" 
              speed={0.01} 
              delay={0.2}
            />

            <FadeIn delay={0.4}>
              <p className="text-lg text-muted mb-12 leading-relaxed">
                {about.focus}
              </p>
              
              <ul className="space-y-4">
                {about.facts.map((fact, i) => (
                  <li key={i} className="flex items-start text-muted">
                    <span className="mr-3 text-foreground mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <FadeIn delay={0.2}>
              <h2 className="text-sm font-medium tracking-widest text-muted uppercase mb-8">
                Capabilities
              </h2>
            </FadeIn>
              
            <StaggerContainer delay={0.1} className="space-y-12">
              {skills.map((skillGroup, index) => (
                <StaggerItem key={index}>
                  <h3 className="text-lg font-medium mb-6 border-b border-border pb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <li 
                        key={i}
                        className="px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:bg-foreground hover:text-background hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          
        </div>
      </div>
      
      {/* Simple & Clean Blueprint Background for About */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Fort Blueprint Image (Cropped to center dome and tower) */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-full md:w-[60vw] max-w-[900px] opacity-[0.12]"
          style={{ 
            backgroundImage: "url('/blueprint-bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "35% center",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 40%)",
            maskImage: "linear-gradient(to right, transparent, black 40%)"
          }}
        />
        
        {/* Soft Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-foreground/[0.02] blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[30vw] h-[30vw] bg-foreground/[0.015] blur-[100px] rounded-full" />
      </div>
    </section>
  );
}
