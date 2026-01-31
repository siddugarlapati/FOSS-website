import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollEffects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Apple-inspired ultra-smooth scroll tracking
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 800,
    damping: 90,
    mass: 1.2,
    restDelta: 0.00001
  });
  
  // Apple-style progress tracking (matches MacBook Pro scroll distance)
  const progress = useTransform(smoothScrollY, [0, 2500], [0, 1]);
  
  // Sophisticated parallax layers like Apple
  const slowParallax = useTransform(progress, [0, 1], [0, -120]);
  const mediumParallax = useTransform(progress, [0, 1], [0, -250]);
  const fastParallax = useTransform(progress, [0, 1], [0, -400]);
  
  // Apple's signature subtle scaling effects
  const globalScale = useTransform(progress, [0, 0.4], [1, 0.98]);
  const contentScale = useTransform(progress, [0, 1], [0.95, 1.02]);
  
  // Smooth opacity transitions like Apple's product pages
  const progressBarOpacity = useTransform(progress, [0, 0.1], [0.7, 1]);
  const backgroundOpacity = useTransform(progress, [0, 0.6], [0.01, 0.05]);
  
  // Apple's minimalist aesthetic
  const gradientProgress = useTransform(progress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef}>
      {/* Apple-style minimalist progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 z-[100] origin-left"
        style={{ 
          scaleX: progress,
          opacity: progressBarOpacity
        }}
      />
      
      {/* Secondary Apple-style indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-px bg-white/20 z-[99] origin-left"
        style={{ scaleX: useTransform(progress, [0, 1], [0, 0.8]) }}
      />

      {/* Apple-inspired background with subtle sophistication */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
        {/* Ultra-subtle dot grid (Apple's precision) */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: backgroundOpacity,
            backgroundImage: `radial-gradient(#f1c40f 0.3px, transparent 0.3px)`,
            backgroundSize: '28px 28px'
          }}
        />
        
        {/* Apple's signature floating elements with perfect motion */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-yellow-400/2 to-transparent rounded-full blur-3xl"
          style={{ 
            y: slowParallax,
            x: useTransform(progress, [0, 1], [0, 80])
          }}
        />
        
        <motion.div 
          className="absolute top-2/3 right-1/3 w-64 h-64 bg-gradient-to-tl from-emerald-400/2 to-transparent rounded-full blur-3xl"
          style={{ 
            y: mediumParallax,
            x: useTransform(progress, [0, 1], [0, -100])
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-400/2 to-blue-400/2 rounded-full blur-3xl"
          style={{ 
            y: fastParallax,
            x: useTransform(progress, [0, 1], [0, 60])
          }}
        />
        
        {/* Apple's subtle gradient overlay system */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: useTransform(
              gradientProgress,
              [0, 33, 66, 100],
              [
                'linear-gradient(to bottom, transparent 0%, transparent 70%)',
                'linear-gradient(to bottom, rgba(241, 196, 15, 0.01) 0%, transparent 70%)',
                'linear-gradient(to bottom, rgba(46, 204, 113, 0.015) 0%, transparent 70%)',
                'linear-gradient(to bottom, rgba(52, 152, 219, 0.02) 0%, transparent 70%)'
              ]
            )
          }}
        />
      </div>
    </div>
  );
};

export default ScrollEffects;