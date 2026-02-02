
import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Lock, Code2, Users } from 'lucide-react';

// Fix: Cast motion to any to bypass environment-specific type errors for motion props
const Motion = motion as any;

const AboutFOSS: React.FC = () => {
  return (
    <section id="about-foss" className="py-32 px-6 bg-[#0a0a0a] font-mono text-sm">
      <div className="max-w-6xl mx-auto">

        {/* Vision Section */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <span className="font-mono text-emerald-400 tracking-widest text-xs uppercase mb-6 inline-block">
              Our Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              Open Technology Ecosystem
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-12" />
            <p className="text-neutral-400 text-xl max-w-3xl mx-auto leading-relaxed">
              To build a strong open-technology ecosystem at Anurag University—where students actively contribute to FOSS, innovate with AI, and lead the future of ethical, community-driven technology.
            </p>
          </div>
        </Motion.div>

        {/* What We Do Section */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <span className="font-mono text-blue-400 tracking-widest text-xs uppercase mb-6 inline-block">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Empowering Through Action
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Open Source Learning",
                description: "Introducing students to GNU/Linux and FOSS tools while building strong technical fundamentals.",
                icon: <Code2 className="text-yellow-400" size={32} />
              },
              {
                title: "AI & Emerging Tech",
                description: "Exploring AI, ML, and next-generation technologies through guided sessions and experiments.",
                icon: <Lock className="text-emerald-400" size={32} />
              },
              {
                title: "Community Leadership",
                description: "Nurturing teamwork, leadership, and initiative—organizing events, mentoring peers, and driving innovation.",
                icon: <Users className="text-blue-400" size={32} />
              }
            ].map((activity, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  {activity.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {activity.title}
                </h3>
                <p className="text-neutral-400 text-base leading-relaxed">
                  {activity.description}
                </p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-32" />

        {/* Terminal Philosophy Section */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="border border-neutral-800/50 rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden">
            {/* Terminal Title Bar */}
            <div className="bg-neutral-900/50 px-4 py-2 border-b border-neutral-800/50 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              </div>
              <div className="text-neutral-500 text-xs">~/philosophy</div>
              <div className="w-10" />
            </div>

            {/* Terminal Content */}
            <div className="p-8 text-neutral-300 space-y-8">

              <Motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-emerald-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">cat</span> README.md
              </Motion.div>

              {/* Philosophy */}
              <Motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pl-4 border-l-2 border-neutral-800/50"
              >
                <h3 className="text-xl font-bold text-white mb-3"># The Philosophy</h3>
                <p className="leading-relaxed opacity-80 max-w-2xl">
                  FOSS isn't just about 'free of charge'. It's about <span className="text-white font-bold">'free as in speech'</span>.
                  It grants you the liberty to study, change, and distribute software without permission from corporate gatekeepers.
                </p>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-emerald-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-400">ls</span> ./core_values/
              </Motion.div>

              {/* Values */}
              <div className="grid gap-3">
                {[
                  { name: "Full_Transparency", desc: "Read, modify, and improve. No black boxes." },
                  { name: "Shared_Knowledge", desc: "Built on the shoulders of giants." },
                  { name: "Community_Driven", desc: "Owned by no one, used by everyone." },
                  { name: "Freedom_to_Run", desc: "No licensing fees or vendor lock-in." },
                ].map((item, idx) => (
                  <Motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-center gap-4 hover:bg-white/5 p-2 rounded transition-colors"
                  >
                    <span className="text-yellow-400 font-bold">{item.name}</span>
                    <span className="text-neutral-500 text-sm"># {item.desc}</span>
                  </Motion.div>
                ))}
              </div>

              <Motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="pt-4"
              >
                <span className="text-emerald-400">➜</span> <span className="text-blue-400">~</span> <span className="animate-pulse">_</span>
              </Motion.div>

            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default AboutFOSS;
