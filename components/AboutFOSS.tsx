
import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Lock, Code2, Users } from 'lucide-react';

// Fix: Cast motion to any to bypass environment-specific type errors for motion props
const Motion = motion as any;

const AboutFOSS: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a] font-mono text-sm">
      <div className="max-w-5xl mx-auto border border-neutral-800 rounded-lg bg-black shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
        {/* Terminal Title Bar */}
        <div className="bg-neutral-900 px-4 py-2 border-b border-neutral-800 flex items-center justify-between sticky top-0 z-10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-neutral-500 text-xs">auglug@server: ~/philosophy</div>
          <div className="w-10" />
        </div>

        {/* Terminal Content */}
        <div className="p-8 text-neutral-300 space-y-8 overflow-y-auto">

          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">cat</span> README.md
          </Motion.div>

          {/* Section 1 */}
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pl-4 border-l-2 border-neutral-800"
          >
            <h3 className="text-xl font-bold text-white mb-2"># 01. The Philosophy</h3>
            <p className="leading-relaxed opacity-80 max-w-2xl">
              FOSS isn't just about 'free of charge'. It's about <span className="text-white font-bold">'free as in speech'</span>.
              It grants you the liberty to study, change, and distribute software without
              permission from corporate gatekeepers.
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-emerald-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">ls</span> -la ./core_values/
          </Motion.div>

          {/* Directory Listing / Values */}
          <div className="grid gap-4">
            {[
              { perm: "drwxr-xr-x", size: "4096", name: "Full_Transparency", desc: "Read, modify, and improve. No black boxes." },
              { perm: "-rw-r--r--", size: "2048", name: "Shared_Knowledge", desc: "Built on the shoulders of giants." },
              { perm: "-rwx------", size: "8192", name: "Community_Driven", desc: "Owned by no one, used by everyone." },
              { perm: "lrwxrwxrwx", size: "1024", name: "Freedom_to_Run", desc: "No licensing fees or vendor lock-in." },
            ].map((item, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 font-mono hover:bg-white/5 p-2 rounded transition-colors"
              >
                <div className="flex gap-4 text-xs sm:text-sm opacity-50 shrink-0">
                  <span className="w-24">{item.perm}</span>
                  <span className="w-12 text-right">{item.size}</span>
                  <span className="w-24">auglug</span>
                </div>
                <div className="flex-1">
                  <span className="text-yellow-400 font-bold group-hover:underline decoration-emerald-400 underline-offset-4">{item.name}</span>
                  <span className="text-neutral-500 text-xs sm:text-sm block sm:inline mt-1 sm:mt-0 ml-0 sm:ml-4"># {item.desc}</span>
                </div>
              </Motion.div>
            ))}
          </div>

          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="pt-8"
          >
            <span className="text-emerald-400">➜</span> <span className="text-blue-400">~</span> <span className="animate-pulse">_</span>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutFOSS;
