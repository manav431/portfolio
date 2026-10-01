"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-foreground origin-left z-[60]"
      style={{ scaleX }}
    />
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 lg:px-12 py-6",
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm" : ""
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        <Link href="/" className="relative z-50 text-lg font-medium tracking-wide">
          Manav<span className="text-muted">Bhut</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center space-y-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={cn("w-6 h-px bg-foreground transition-transform origin-center", mobileMenuOpen ? "rotate-45 translate-y-2" : "")} />
          <span className={cn("w-6 h-px bg-foreground transition-opacity", mobileMenuOpen ? "opacity-0" : "")} />
          <span className={cn("w-6 h-px bg-foreground transition-transform origin-center", mobileMenuOpen ? "-rotate-45 -translate-y-2" : "")} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-medium tracking-tight hover:text-muted transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
