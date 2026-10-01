"use client";

import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "../ui/FadeIn";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { CursorEyes } from "../ui/CursorEyes";

const GREETINGS = ["HELLO", "HOLA", "BONJOUR", "CIAO", "HALLO", "OLÀ", "NAMASTE", "KONNICHIWA", "MARHABA"];
const MARQUEE_TEXT = [...GREETINGS, ...GREETINGS, ...GREETINGS, ...GREETINGS];

export function Contact() {
  const { contact, hero } = portfolioData;

  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden flex items-center justify-center min-h-[70vh]">
      
      {/* Animated Marquee Background */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center gap-4 opacity-[0.03] pointer-events-none overflow-hidden select-none">
        <motion.div 
          className="flex whitespace-nowrap text-7xl md:text-[12rem] font-bold uppercase tracking-tighter leading-none"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {MARQUEE_TEXT.map((word, i) => (
            <span key={i} className="mr-8 md:mr-16">{word}</span>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex whitespace-nowrap text-7xl md:text-[12rem] font-bold uppercase tracking-tighter leading-none"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {MARQUEE_TEXT.map((word, i) => (
            <span key={i} className="mr-8 md:mr-16">{word}</span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8">
              Let's build <br />
              <span className="text-muted">something great.</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-muted mb-12 max-w-xl mx-auto">
              {contact.message}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col items-center gap-8">
            <a 
              href={`mailto:${contact.email}`}
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-foreground text-background font-medium rounded-full overflow-hidden transition-transform active:scale-95 text-lg shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Say Hello
                <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
                  <Send className="absolute w-4 h-4 transition-all duration-500 ease-[0.21,0.47,0.32,0.98] group-hover:translate-x-5 group-hover:-translate-y-5" />
                  <Send className="absolute w-4 h-4 -translate-x-5 translate-y-5 transition-all duration-500 ease-[0.21,0.47,0.32,0.98] group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.21,0.47,0.32,0.98]" />
            </a>

            <div className="flex items-center gap-6 mt-4">
              <a 
                href={hero.socials.find(s => s.name === 'GitHub')?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-background text-foreground hover:bg-foreground hover:text-background hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a 
                href={hero.socials.find(s => s.name === 'LinkedIn')?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-background text-foreground hover:bg-foreground hover:text-background hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Interactive Staring Eyes */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <CursorEyes />
      </div>
    </section>
  );
}
