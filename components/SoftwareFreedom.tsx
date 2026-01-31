
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Search, Share2, Wrench } from 'lucide-react';

const Motion = motion as any;

const SoftwareFreedom: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for the section
  const yTransform = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const freedoms = [
    {
      num: "0",
      icon: <Search className="text-yellow-400" />,
      title: "The freedom to run the program as you wish, for any purpose.",
      desc: "No corporate restrictions, no subscription tiers. Your software, your rules."
    },
    {
      num: "1",
      icon: <Code2 className="text-emerald-400" />,
      title: "The freedom to study how the program works, and change it.",
      desc: "Access to the source code is a precondition for this. Learn from the best."
    },
    {
      num: "2",
      icon: <Share2 className="text-blue-400" />,
      title: "The freedom to redistribute copies to help others.",
      desc: "Sharing is building. Help your fellow students by providing the tools they need."
    },
    {
      num: "3",
      icon: <Wrench className="text-purple-400" />,
      title: "The freedom to distribute copies of your modified versions.",
      desc: "Contribute improvements to the community. Improve the world one commit at a time."
    }
  ];

  return (
    <Motion.section 
      ref={containerRef}
      className="py-32 px-6 relative bg-[#050505]"
      style={{
        y: yTransform,
        opacity: opacityTransform
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <Motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-emerald-400 text-sm tracking-[0.3em] uppercase mb-8 block"
            >
              The Four Freedoms
            </Motion.span>
            <Motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight"
            >
              Freedom grows with <br /> <span className="text-yellow-400 italic">open software.</span>
            </Motion.h2>
            <Motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-neutral-500 text-lg leading-relaxed mb-10"
            >
              Richard Stallman established these principles to protect our digital sovereignty. At AUGLUG, we live by them every day.
            </Motion.p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900 rounded-3xl overflow-hidden shadow-2xl">
            {freedoms.map((f, idx) => (
              <Motion.div 
                key={idx} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#080808] p-10 hover:bg-neutral-900 transition-colors group"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-neutral-800 rounded-xl group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <span className="text-4xl font-mono font-black text-neutral-800 group-hover:text-yellow-400/20 transition-colors">
                    #{f.num}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </Motion.section>
  );
};

export default SoftwareFreedom;
