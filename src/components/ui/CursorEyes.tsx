"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function CursorEyes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculatePupilOffset = (eyeElement: HTMLDivElement | null, isLeft: boolean) => {
    if (!eyeElement) return { x: 0, y: 0 };
    
    const rect = eyeElement.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    
    const deltaX = mousePosition.x - eyeCenterX;
    const deltaY = mousePosition.y - eyeCenterY;
    
    const angle = Math.atan2(deltaY, deltaX);
    
    const maxDistance = 14; // Limit pupil from going outside the pill
    const distance = Math.min(Math.hypot(deltaX, deltaY) / 15, maxDistance);
    
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  };

  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  const leftOffset = leftEyeRef.current ? calculatePupilOffset(leftEyeRef.current, true) : {x:0, y:0};
  const rightOffset = rightEyeRef.current ? calculatePupilOffset(rightEyeRef.current, false) : {x:0, y:0};

  return (
    <div className="flex justify-center items-center gap-3 py-4 relative z-20">
      
      {/* Left Eye */}
      <div ref={leftEyeRef} className="relative w-[50px] h-[70px] bg-white rounded-full overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute w-[30px] h-[30px] bg-black rounded-full"
          animate={{ x: leftOffset.x, y: leftOffset.y }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Pupil Highlight */}
          <div className="absolute bottom-1.5 right-1.5 w-[8px] h-[8px] bg-white rounded-full" />
        </motion.div>
      </div>

      {/* Right Eye */}
      <div ref={rightEyeRef} className="relative w-[50px] h-[70px] bg-white rounded-full overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute w-[30px] h-[30px] bg-black rounded-full"
          animate={{ x: rightOffset.x, y: rightOffset.y }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Pupil Highlight */}
          <div className="absolute bottom-1.5 right-1.5 w-[8px] h-[8px] bg-white rounded-full" />
        </motion.div>
      </div>

    </div>
  );
}
