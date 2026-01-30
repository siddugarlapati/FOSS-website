import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

const Motion = motion as any;

const Events: React.FC = () => {
  const handleEventClick = () => {
    window.location.href = "https://signal.group/#CjQKIOzI6_Y9_Y3zV8vP...";
  };

  return (
    <section id="events" className="py-32 px-6 relative bg-[#050505] min-h-screen">
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
              <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 bg-yellow-400 border-yellow-400 shadow-[0_0_20px_rgba(241,196,15,0.5)] animate-pulse" />

              {/* Content */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                <div
                  onClick={handleEventClick}
                  className="group cursor-pointer bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-yellow-400/30 transition-all hover:bg-neutral-900 relative"
                >
                  <div className="flex items-center gap-3 mb-4 text-xs font-mono font-bold">
                    <span className="text-yellow-400">JAN 23-24</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-700" />
                    <span className="text-emerald-400">HAPPENING NOW</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">Linux Installation Fest v2</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">Join us for a hands-on Linux installation workshop! We'll help students install and explore various Linux distributions. Perfect for beginners and enthusiasts alike.</p>

                  <div className="flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-widest">
                    JOIN SIGNAL <ChevronRight size={14} />
                  </div>
                </div>
              </div>

              {/* Empty Spacer for alternating layout */}
              <div className="hidden md:block w-1/2" />
            </Motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Events;
