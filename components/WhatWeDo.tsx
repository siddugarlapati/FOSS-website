
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Rocket, GitPullRequest, Globe, ChevronRight } from 'lucide-react';

// Fix: Cast motion to any to bypass environment-specific type errors for motion props
const Motion = motion as any;

const WhatWeDo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Card entrance animations
  const yTransform = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  
  const activities = [
    {
      title: "Learn",
      description: "Weekly workshops on Linux, Shell Scripting, Docker, and Rust programming.",
      icon: <BookOpen className="text-yellow-400" size={32} />,
      gradient: "from-yellow-400/10"
    },
    {
      title: "Build",
      description: "Collaborative project sprints to create tools used by thousands of students.",
      icon: <Rocket className="text-emerald-400" size={32} />,
      gradient: "from-emerald-400/10"
    },
    {
      title: "Contribute",
      description: "Guided sessions on making your first PR to major upstream FOSS projects.",
      icon: <GitPullRequest className="text-purple-400" size={32} />,
      gradient: "from-purple-400/10"
    },
    {
      title: "Share",
      description: "Tech talks and demo days to show off what you've built to the world.",
      icon: <Globe className="text-blue-400" size={32} />,
      gradient: "from-blue-400/10"
    }
  ];

  return (
    <Motion.section 
      ref={containerRef}
      className="py-24 px-6 relative overflow-hidden"
      style={{
        y: yTransform,
        scale: scaleTransform
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Empowering Every Engineer
          </Motion.h2>
          <p className="text-neutral-500 text-lg font-medium">Four pillars of our community growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-3xl p-10 flex flex-col items-start hover:border-neutral-600 transition-colors shadow-2xl`}
            >
              {/* Animated Inner Glow */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${item.gradient} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="mb-8 p-4 bg-neutral-800 rounded-2xl group-hover:bg-neutral-700/50 group-hover:rotate-6 transition-all duration-300">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                {item.description}
              </p>
              
              <div className="mt-auto flex items-center text-sm font-bold text-neutral-500 group-hover:text-white transition-all cursor-pointer group-hover:translate-x-1">
                READ MORE <ChevronRight size={16} className="ml-1" />
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </Motion.section>
  );
};

export default WhatWeDo;
