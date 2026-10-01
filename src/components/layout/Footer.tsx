"use client";

import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

export function Footer() {
  const { hero } = portfolioData;

  return (
    <footer className="py-12 border-t border-border mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn direction="none" delay={0.1}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="text-sm text-muted">
              © {new Date().getFullYear()} {hero.name}. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              {hero.socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors flex items-center gap-1 group"
                >
                  {social.name}
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>

          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
