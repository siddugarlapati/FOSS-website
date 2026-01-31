import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Motion = motion as any;

const PenguinAnimation: React.FC = () => {
  const [animationStage, setAnimationStage] = useState<'walking' | 'transforming' | 'final'>('walking');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStage('transforming');
    }, 2000); // Start transformation after 2 seconds

    const finalTimer = setTimeout(() => {
      setAnimationStage('final');
    }, 4000); // Show final Linux symbol after 4 seconds

    return () => {
      clearTimeout(timer);
      clearTimeout(finalTimer);
    };
  }, []);

  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Walking Penguin Animation */}
      <AnimatePresence>
        {animationStage === 'walking' && (
          <Motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: '50%', opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ 
              duration: 3, 
              ease: "easeInOut",
              x: { type: "tween", duration: 2.5 }
            }}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20"
          >
            {/* Penguin SVG/Character */}
            <div className="relative">
              {/* Penguin Body */}
              <div className="w-16 h-20 bg-black rounded-full relative">
                {/* Belly */}
                <div className="absolute top-4 left-3 w-10 h-12 bg-white rounded-full" />
                {/* Eyes */}
                <div className="absolute top-3 left-4 w-2 h-2 bg-white rounded-full" />
                <div className="absolute top-3 right-4 w-2 h-2 bg-white rounded-full" />
                {/* Beak */}
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-orange-400 rounded-b-full" />
                {/* Feet */}
                <div className="absolute bottom-0 left-2 w-4 h-2 bg-orange-400 rounded-full" />
                <div className="absolute bottom-0 right-2 w-4 h-2 bg-orange-400 rounded-full" />
              </div>
              
              {/* Walking Animation */}
              <motion.div
                animate={{ 
                  y: [0, -5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 0.8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
              >
                <div className="flex gap-2">
                  <div className="w-2 h-1 bg-orange-400 rounded-full" />
                  <div className="w-2 h-1 bg-orange-400 rounded-full" />
                </div>
              </motion.div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Transformation Sequence */}
      <AnimatePresence>
        {animationStage === 'transforming' && (
          <Motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            {/* Morphing Penguin to Linux Symbol */}
            <div className="relative w-24 h-24">
              {/* Outer circle */}
              <motion.div
                className="absolute inset-0 border-4 border-yellow-400 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 0.5,
                  repeat: 2
                }}
              />
              
              {/* Inner penguin transforming */}
              <motion.div
                className="absolute inset-4 bg-black rounded-full flex items-center justify-center"
                animate={{ 
                  borderRadius: ['50%', '30%', '50%'],
                  backgroundColor: ['#000000', '#f1c40f', '#000000']
                }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 0.8, 1.2, 1],
                    rotate: [0, 90, 180, 360]
                  }}
                  transition={{ duration: 1 }}
                >
                  {/* Custom Linux "Tux" symbol */}
                  <div className="text-yellow-400">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Final Linux Symbol */}
      <AnimatePresence>
        {animationStage === 'final' && (
          <Motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="relative">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-400/30">
                <Linux size={40} className="text-black" />
              </div>
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-30"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
              />
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Snowflake-like particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
            style={{
              left: `${10 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`
            }}
          />
        ))}
      </div>

      {/* Ground/Snow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent" />
    </div>
  );
};

export default PenguinAnimation;