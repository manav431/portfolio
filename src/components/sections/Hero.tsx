"use client";

import { portfolioData } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/FadeIn";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";

import { motion } from "framer-motion";

export function Hero() {
  const { hero } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <StaggerContainer className="max-w-4xl mx-auto flex flex-col items-start space-y-8">
          <StaggerItem>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-foreground/5 border border-border text-sm font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>{hero.status}</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1]">
              <span className="block text-muted text-3xl md:text-5xl mb-4 font-normal">
                I'm {hero.name}.
              </span>
              {hero.title}
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed">
              {hero.statement}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={hero.primaryCta.href}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-full overflow-hidden transition-transform active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {hero.primaryCta.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.21,0.47,0.32,0.98]" />
              </Link>
              
              <Link
                href={hero.secondaryCta.href}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent text-foreground border border-border font-medium rounded-full overflow-hidden transition-all duration-300 active:scale-95 hover:border-foreground hover:bg-foreground hover:text-background hover:scale-105 hover:-translate-y-1 hover:shadow-md"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Right Sidebar (Scroll Down) */}
      <div className="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-6 text-[10px] font-semibold tracking-[0.2em] text-muted uppercase z-20">
        <span className="w-[1px] h-12 bg-muted"></span>
        <span style={{ writingMode: 'vertical-rl' }} className="rotate-180 opacity-80">Scroll Down</span>
        <ArrowDown className="w-4 h-4 opacity-80" />
      </div>

      {/* Advanced Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        
        {/* Geometric Wireframe 'M' */}
        <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
          <motion.svg 
            viewBox="0 0 100 100" 
            className="w-[90vw] max-w-[1000px] h-auto text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.6"
            strokeLinejoin="miter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2 }}
          >
            <motion.path 
              d="M 15 90 V 15 L 50 55 L 85 15 V 90 H 65 V 45 L 50 65 L 35 45 V 90 Z" 
              initial={{ pathLength: 0, pathOffset: 1 }}
              animate={{ pathLength: 1, pathOffset: 0 }}
              transition={{ 
                duration: 6, 
                ease: "easeInOut",
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            />
          </motion.svg>
        </div>

        {/* Rotating Orbital Ring */}
        <motion.div 
          className="absolute w-[120vw] h-[120vw] md:w-[70vw] md:h-[70vw] max-w-[900px] max-h-[900px] rounded-full border border-foreground opacity-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08, rotate: 360 }}
          transition={{ 
            opacity: { duration: 2 },
            rotate: { repeat: Infinity, duration: 40, ease: "linear" } 
          }}
        >
          {/* Orbital Dot */}
          <div className="absolute top-1/2 -right-1 w-2 h-2 bg-foreground rounded-full shadow-[0_0_15px_currentColor]" />
        </motion.div>

        {/* Cinematic Lighting/Gradients */}
        <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-foreground/[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vh] bg-foreground/[0.02] blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
