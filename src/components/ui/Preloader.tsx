"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Unlock scroll immediately when animation finishes
      document.body.style.overflow = '';
    }, 3400); // Perfectly synced with the end of the zoom animation
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* The Logo Animation */}
            <motion.div
              animate={{ 
                scale: [1, 0.8, 150], 
                opacity: [1, 1, 0] 
              }}
              transition={{ 
                times: [0, 0.3, 1], 
                duration: 1.5, 
                ease: "easeInOut", 
                delay: 2.0 
              }}
              className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center will-change-transform"
            >
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full text-foreground drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
                strokeLinejoin="miter"
              >
                <motion.path 
                  d="M 15 90 V 15 L 50 55 L 85 15 V 90 H 65 V 45 L 50 65 L 35 45 V 90 Z" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
            </motion.div>

            {/* Cinematic Loading Bar & Typography */}
            <motion.div 
              className="absolute bottom-24 flex flex-col items-center gap-6"
              animate={{ opacity: [1, 1, 0], y: [0, 0, 20] }}
              transition={{ duration: 0.8, delay: 1.8, ease: "easeInOut" }}
            >
              <div className="text-xs md:text-sm tracking-[0.4em] text-muted font-medium uppercase">
                Initializing
              </div>
              <div className="w-48 md:w-64 h-[1px] bg-foreground/10 overflow-hidden relative">
                <motion.div 
                  className="absolute left-0 top-0 h-full bg-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        {children}
      </motion.div>
    </>
  );
}
