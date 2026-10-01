"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Typewriter({ 
  text, 
  className, 
  delay = 0,
  speed = 0.02
}: { 
  text: string; 
  className?: string; 
  delay?: number;
  speed?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  // Split by words for a premium, professional reveal
  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      className={cn("inline-flex flex-wrap", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: speed,
            delayChildren: delay,
          },
        },
        hidden: {},
      }}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block mr-[0.25em] whitespace-nowrap"
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
            visible: { 
              opacity: 1, 
              y: 0, 
              filter: "blur(0px)",
              transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } 
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
