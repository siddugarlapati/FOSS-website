import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';

interface AppleScrollProps {
  children: React.ReactNode;
}

const AppleScrollProvider: React.FC<AppleScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Enhanced spring physics matching Apple's smooth feel
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 800,
    damping: 90,
    mass: 1.2,
    restDelta: 0.001
  });

  // Apple-style progress tracking
  const progress = useTransform(smoothScrollY, [0, 2000], [0, 1]);
  
  // Sophisticated parallax layers
  const slowParallax = useTransform(progress, [0, 1], [0, -100]);
  const mediumParallax = useTransform(progress, [0, 1], [0, -200]);
  const fastParallax = useTransform(progress, [0, 1], [0, -400]);
  
  // Apple's signature scaling effects
  const heroScale = useTransform(progress, [0, 0.3], [1, 0.95]);
  const contentScale = useTransform(progress, [0, 1], [0.9, 1.05]);
  
  // Smooth opacity transitions
  const heroOpacity = useTransform(progress, [0, 0.2, 0.8, 1], [1, 1, 0.8, 0.3]);
  const contentOpacity = useTransform(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.4]);

  return (
    <div ref={containerRef} className="relative">
      {/* Apple-style scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 z-[100] origin-left"
        style={{ scaleX: progress }}
      />
      
      {/* Enhanced background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
        {/* Subtle gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/10 to-gray-100/20"
          style={{ opacity: useTransform(progress, [0, 1], [0.3, 0.8]) }}
        />
        
        {/* Floating elements with Apple's smooth motion */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"
          style={{ 
            y: slowParallax,
            x: useTransform(progress, [0, 1], [0, 50])
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-tl from-emerald-100/20 to-cyan-100/20 rounded-full blur-3xl"
          style={{ 
            y: mediumParallax,
            x: useTransform(progress, [0, 1], [0, -75])
          }}
        />
      </div>
      
      {/* Main content with Apple-style transforms */}
      <motion.div
        style={{
          scale: heroScale,
          opacity: heroOpacity
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AppleScrollProvider;