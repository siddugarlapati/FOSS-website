import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Motion = motion as any;

const Events: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Timeline scroll effects
  const yTransform = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  
  const handleEventClick = () => {
    window.location.href = "https://signal.group/#CjQKIOzI6_Y9_Y3zV8vP...";
  };

  return (
    <Motion.section 
      ref={containerRef}
      id="events" 
      className="py-32 px-6 relative bg-[#050505] min-h-screen"
      style={{
        y: yTransform,
        opacity: opacityTransform
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 font-mono text-yellow-400 text-sm tracking-widest uppercase mb-6"
          >
            <Calendar size={16} /> /var/log/events
          </Motion.div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter">Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">Roadmap</span></h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-800 -translate-x-1/2" />

          <div className="space-y-24">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center relative"
            >
              {/* Node */}
              <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 bg-gray-400 border-gray-400" />

              {/* Content */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                <div
                  onClick={handleEventClick}
                  className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-yellow-400/30 transition-all hover:bg-neutral-900 relative"
                >
                  <div className="flex items-center gap-3 mb-4 text-xs font-mono font-bold">
                    <span className="text-yellow-400">JAN 23-24</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-700" />
                    <span className="text-gray-400">COMPLETED</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">Linux Installation Fest v1</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">Join us for a hands-on Linux installation workshop! We'll help students install and explore various Linux distributions. Perfect for beginners and enthusiasts alike.</p>

                </div>
              </div>

              {/* Empty Spacer for alternating layout */}
              <div className="hidden md:block w-1/2" />
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center relative"
            >
              {/* Node */}
              <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 bg-emerald-400 border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.5)] animate-pulse" />

              {/* Content */}
              <div className="hidden md:block w-1/2" />

              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 md:ml-auto">
                <div
                  className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-emerald-400/30 transition-all hover:bg-neutral-900 relative"
                >
                  <div className="flex items-center gap-3 mb-4 text-xs font-mono font-bold">
                    <span className="text-emerald-400">FEB 11-12</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-700" />
                    <span className="text-emerald-400">UPCOMING</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">FOSS Summit</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">Join us for the annual Free and Open Source Software Summit! Come learn, share, and collaborate with fellow developers and enthusiasts.</p>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>

      </div>
    </Motion.section>
  );
};

export default Events;
