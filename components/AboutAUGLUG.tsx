
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Zap, Terminal as TerminalIcon } from 'lucide-react';

const Motion = motion as any;

const TERMINAL_LINES = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'AUGLUG: Anurag University GNU/Linux User Group' },
  { type: 'command', text: 'cat mission.txt' },
  { type: 'output', text: 'Fostering software freedom and technical excellence since 2018.' },
  { type: 'command', text: 'sudo join --now' },
  { type: 'output', text: 'Welcome. You are now a contributor.' },
];

const Terminal: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<{ type: string; text: string }[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const typeNext = useCallback(() => {
    if (lineIndex >= TERMINAL_LINES.length) return;

    const currentLine = TERMINAL_LINES[lineIndex];

    if (currentLine.type === 'command') {
      if (charIndex < currentLine.text.length) {
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedLines(prev => [...prev, currentLine]);
          setLineIndex(prev => prev + 1);
          setCharIndex(0);
        }, 800);
      }
    } else {
      setDisplayedLines(prev => [...prev, currentLine]);
      setLineIndex(prev => prev + 1);
      setCharIndex(0);
    }
  }, [lineIndex, charIndex]);

  useEffect(() => {
    const isCommand = TERMINAL_LINES[lineIndex]?.type === 'command';
    const timer = setTimeout(typeNext, isCommand ? 60 : 300);
    return () => clearTimeout(timer);
  }, [typeNext, lineIndex]);

  return (
    <div className="relative w-full max-w-xl mx-auto font-mono text-sm leading-relaxed">
      <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl min-h-[280px] border border-neutral-800/50">
        <div className="flex flex-col space-y-2 relative z-10">
          {displayedLines.map((line, idx) => (
            <div key={idx} className={line.type === 'command' ? 'text-yellow-400' : 'text-emerald-400/90'}>
              {line.type === 'command' ? (
                <span className="flex items-center gap-2"><span className="opacity-40">$</span> {line.text}</span>
              ) : (
                <span>{line.text}</span>
              )}
            </div>
          ))}

          {lineIndex < TERMINAL_LINES.length && (
            <div className={TERMINAL_LINES[lineIndex].type === 'command' ? 'text-yellow-400' : 'text-emerald-400'}>
              {TERMINAL_LINES[lineIndex].type === 'command' && (
                <span className="flex items-center gap-2">
                  <span className="opacity-40">$</span>
                  {TERMINAL_LINES[lineIndex].text.slice(0, charIndex)}
                  <span className="w-2 h-4 bg-current animate-terminal-cursor" />
                </span>
              )}
              {TERMINAL_LINES[lineIndex].type === 'output' && (
                <span className="w-2 h-4 bg-emerald-400 animate-terminal-cursor inline-block" />
              )}
            </div>
          )}

          {lineIndex >= TERMINAL_LINES.length && (
            <div className="text-yellow-400 flex items-center gap-2">
              <span className="opacity-40">$</span>
              <span className="w-2 h-4 bg-yellow-400 animate-terminal-cursor" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AboutAUGLUG: React.FC = () => {
  const stats = [
    { value: "100+", label: "Active Members", icon: <Users className="text-emerald-400" size={28} /> },
    { value: "500+", label: "Commits", icon: <Zap className="text-purple-400" size={28} /> },
    { value: "1000+", label: "Internships", icon: <Code className="text-yellow-400" size={28} /> }
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] font-mono font-bold text-yellow-400 uppercase tracking-[0.2em] mb-6 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
            AU GLUG
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Building Tomorrow with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">Open Source & AI</span>
          </h2>
          <p className="text-neutral-400 text-xl max-w-3xl mx-auto leading-relaxed">
            AU GLUG is the official FOSS community at Anurag University. We foster open collaboration, technical excellence, and innovation across GNU/Linux, Open Source, AI, and emerging technologies.
          </p>
        </Motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-16 mb-32 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-5xl font-black text-white group-hover:text-yellow-400 transition-colors mb-2">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase text-neutral-500 tracking-widest">
                {stat.label}
              </div>
            </Motion.div>
          ))}
        </div>

        {/* What We Offer Section */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <span className="font-mono text-emerald-400 tracking-widest text-xs uppercase mb-6 inline-block">
              What We Offer
            </span>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              Empowering Students Through Open Technology
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 max-w-5xl mx-auto">
            {[
              { title: "FOSS Foundation", desc: "Learn and innovate with Free and Open Source Software" },
              { title: "Hands-On Projects", desc: "Real-world projects that develop production-ready skills" },
              { title: "AI & Emerging Tech", desc: "Explore AI, ML, and next-gen technologies" },
              { title: "Open Collaboration", desc: "Knowledge grows when shared across the community" },
              { title: "Practical Learning", desc: "Experience over theory, building over passive consumption" },
              { title: "Career Growth", desc: "1000+ internships through ViswamAI partnership" }
            ].map((item, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="text-center"
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mb-32" />

        {/* Community Section with Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="font-mono text-yellow-400 tracking-widest text-xs uppercase">Community</span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">
                The Home of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">Digital Sovereignty</span>
              </h2>
            </div>

            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
              <p>
                AU GLUG brings together curious learners and builders who believe in the power of openness. We work on real-world projects, engage in technical discussions, and develop industry-relevant skills.
              </p>
              <p>
                With mentorship from Swecha Telangana, members gain exposure to authentic open-source ecosystems and community-driven development practices.
              </p>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <Terminal />
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAUGLUG;
