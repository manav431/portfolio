"use client";

import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "../ui/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="work" className="py-32 relative">
      <ProjectsBackground />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <FadeIn>
          <h2 className="text-sm font-medium tracking-widest text-muted uppercase mb-16">
            Selected Work
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div ref={ref} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      
      <div className={`lg:col-span-7 overflow-hidden rounded-2xl relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={600}
          quality={100}
          unoptimized={true}
          className="w-full h-auto object-cover transition-transform duration-700 ease-[0.21,0.47,0.32,0.98] group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
      </div>

      <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
        <FadeIn delay={0.1}>
          <div className="flex items-center space-x-4 mb-6 text-sm text-muted">
            <span>{project.year}</span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span>{project.category}</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-medium mb-6">
            {project.title}
          </h3>
          
          <p className="text-lg text-muted mb-8 leading-relaxed max-w-md">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.map((tech: string, i: number) => (
              <span 
                key={i} 
                className="px-3 py-1 rounded-full border border-border text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-6">
            {project.links.map((link: any, i: number) => (
              <Link 
                key={i} 
                href={link.href}
                className="inline-flex items-center space-x-2 text-sm font-medium uppercase tracking-wider group/link relative"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover/link:w-full" />
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>

    </div>
  );
}

function ProjectsBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
      {/* Geometric Wireframe 'W' */}
      <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
        <motion.svg 
          viewBox="0 0 100 100" 
          className="w-[120vw] max-w-[1400px] h-auto text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.4"
          strokeLinejoin="miter"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 2 }}
        >
          {/* Geometric W path (inverse of M) */}
          <motion.path 
            d="M 15 10 V 85 L 50 45 L 85 85 V 10 H 65 V 55 L 50 35 L 35 55 V 10 Z" 
            initial={{ pathLength: 0, pathOffset: 1 }}
            whileInView={{ pathLength: 1, pathOffset: 0 }}
            viewport={{ once: false }}
            transition={{ 
              duration: 6, 
              ease: "easeInOut",
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
        </motion.svg>
      </div>

      {/* Cinematic Lighting/Gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vh] bg-foreground/[0.02] blur-[120px] rounded-full" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vh] bg-foreground/[0.02] blur-[120px] rounded-full" />
    </div>
  );
}
