
import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Lock, Code2, Users, Eye, Target } from 'lucide-react';

// Fix: Cast motion to any to bypass environment-specific type errors for motion props
const Motion = motion as any;

const AboutFOSS: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a] font-mono text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Vision Section */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <span className="font-mono text-emerald-400 tracking-widest text-xs uppercase bg-emerald-400/5 px-3 py-1 rounded-full border border-emerald-400/10 mb-4 inline-block">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
              Building a Strong Open-Technology Ecosystem
            </h2>
            <p className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed">
              To build a strong open-technology ecosystem at Anurag University—where students actively contribute to FOSS, innovate with Artificial Intelligence, and lead the future of ethical, community-driven technology.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neutral-900/50 to-black/50 border border-neutral-800 rounded-3xl p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Eye className="text-yellow-400" size={32} />
                  Our Vision Statement
                </h3>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  We envision a university environment where students are not just consumers of technology but creators and innovators.
                  Our goal is to establish Anurag University as a hub for open-source development and AI research, where students
                  contribute meaningfully to global technology initiatives.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed">
                  Through our community, we aim to bridge the gap between academic learning and real-world application,
                  preparing students to become leaders in the open technology movement.
                </p>
              </div>
              <div className="bg-black p-8 rounded-2xl border border-neutral-800 min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/10 rounded-full mb-6">
                    <Target className="text-yellow-400" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Future Impact</h4>
                  <p className="text-neutral-400">
                    Creating pathways for students to become responsible contributors to technology and society
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* What We Do Section */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <span className="font-mono text-blue-400 tracking-widest text-xs uppercase bg-blue-400/5 px-3 py-1 rounded-full border border-blue-400/10 mb-4 inline-block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
              Empowering Through Action
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Open Source Learning",
                description: "We introduce students to GNU/Linux and FOSS tools, helping them understand open ecosystems while building strong technical fundamentals.",
                icon: <Code2 className="text-yellow-400" size={32} />
              },
              {
                title: "AI & Emerging Technologies",
                description: "Members explore Artificial Intelligence, Machine Learning, and next-generation technologies through guided sessions, projects, and experiments.",
                icon: <Lock className="text-emerald-400" size={32} />
              },
              {
                title: "Hands-On Projects",
                description: "AU GLUG emphasizes learning by building—students collaborate on practical applications that address real challenges and develop production-ready skills.",
                icon: <Share2 className="text-purple-400" size={32} />
              },
              {
                title: "Community & Leadership",
                description: "Beyond technology, AU GLUG nurtures teamwork, leadership, and initiative—encouraging members to organize events, mentor peers, and drive innovation.",
                icon: <Users className="text-blue-400" size={32} />
              }
            ].map((activity, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden group bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 flex flex-col items-start hover:border-neutral-600 transition-colors shadow-2xl"
              >
                {/* Animated Inner Glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-yellow-400/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="mb-6 p-3 bg-neutral-800 rounded-xl group-hover:bg-neutral-700/50 group-hover:rotate-6 transition-all duration-300">
                  {activity.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-neutral-400 text-base leading-relaxed">
                  {activity.description}
                </p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        {/* Terminal Philosophy Section */}
        <div className="border border-neutral-800 rounded-lg bg-black shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
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
      </div>
    </section>
  );
};

export default AboutFOSS;
