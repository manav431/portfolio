"use client";

import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "../ui/FadeIn";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
            <FadeIn>
              <h2 className="text-sm font-medium tracking-widest text-muted uppercase sticky top-32">
                Experience
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col space-y-16 lg:space-y-24">
              {experience.map((job, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="group flex flex-col md:flex-row md:items-baseline md:space-x-8 p-6 -ml-6 rounded-2xl hover:bg-muted/5 transition-all duration-300 cursor-default">
                    
                    <div className="md:w-1/4 mb-4 md:mb-0 text-muted font-medium shrink-0 group-hover:text-foreground transition-colors duration-300">
                      {job.duration}
                    </div>
                    
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-medium mb-1 group-hover:translate-x-2 transition-transform duration-300">
                        {job.role}
                      </h3>
                      <div className="text-lg text-muted mb-6 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                        {job.company}
                      </div>
                      
                      <p className="text-muted leading-relaxed mb-6 max-w-2xl group-hover:text-foreground/90 transition-colors duration-300">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="text-xs font-medium px-3 py-1 bg-muted/10 text-muted rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* Minimal AI Brain Background for Experience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center">
        
        {/* Massive AI Brain Image (Anchored to the left) */}
        <div 
          className="absolute left-[-10%] top-0 bottom-0 w-[80vw] max-w-[1200px] opacity-[0.15]"
          style={{ 
            backgroundImage: "url('/ai-brain-bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "200% auto", // Zoom in massively
            backgroundPosition: "center center",
            WebkitMaskImage: "linear-gradient(to right, black 40%, transparent)",
            maskImage: "linear-gradient(to right, black 40%, transparent)"
          }}
        />
        
        {/* Visible, Soft Glow to separate from flat black */}
        <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] -translate-y-1/2 bg-foreground/[0.03] blur-[120px] rounded-full" />
      </div>

    </section>
  );
}
