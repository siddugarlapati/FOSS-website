
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Code, Zap, Globe, GraduationCap, Lightbulb } from 'lucide-react';

const Motion = motion as any;

const TERMINAL_LINES = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'AUGLUG: Anurag University GNU/Linux User Group' },
  { type: 'command', text: 'cat mission_statement.txt' },
  { type: 'output', text: 'Fostering software freedom and technical excellence since 2018.' },
  { type: 'command', text: 'ls -l /etc/philosophy' },
  { type: 'output', text: '-rw-r--r--  1 freedom 4096  open_source.txt' },
  { type: 'output', text: '-rw-r--r--  1 community 4096 privacy_first.md' },
  { type: 'command', text: 'sudo join --now' },
  { type: 'output', text: 'Requesting permission... [OK]' },
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
    <div className="relative w-full max-w-2xl mx-auto font-mono text-sm md:text-base leading-relaxed p-1">
      <div className="bg-black p-8 min-h-[420px] scanline relative overflow-hidden">
        <div className="flex flex-col space-y-3 relative z-10">
          {displayedLines.map((line, idx) => (
            <div key={idx} className={line.type === 'command' ? 'text-yellow-400' : 'text-emerald-400/90'}>
              {line.type === 'command' ? (
                <span className="flex items-center gap-2"><span className="opacity-40">auglug@server:~$</span> {line.text}</span>
              ) : (
                <span>{line.text}</span>
              )}
            </div>
          ))}

          {lineIndex < TERMINAL_LINES.length && (
            <div className={TERMINAL_LINES[lineIndex].type === 'command' ? 'text-yellow-400' : 'text-emerald-400'}>
              {TERMINAL_LINES[lineIndex].type === 'command' && (
                <span className="flex items-center gap-2">
                  <span className="opacity-40">auglug@server:~$</span>
                  {TERMINAL_LINES[lineIndex].text.slice(0, charIndex)}
                  <span className="w-2 h-5 bg-current animate-terminal-cursor" />
                </span>
              )}
              {TERMINAL_LINES[lineIndex].type === 'output' && (
                <span className="w-2 h-5 bg-emerald-400 animate-terminal-cursor inline-block" />
              )}
            </div>
          )}

          {lineIndex >= TERMINAL_LINES.length && (
            <div className="text-yellow-400 flex items-center gap-2">
              <span className="opacity-40">auglug@server:~$</span>
              <span className="w-2 h-5 bg-yellow-400 animate-terminal-cursor" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AboutAUGLUG: React.FC = () => {
  const stats = [
    { value: "100+", label: "Active Members", icon: <Users className="text-emerald-400" size={24} /> },
    { value: "4", label: "Projects", icon: <Code className="text-blue-400" size={24} /> },
    { value: "500+", label: "Commits", icon: <Zap className="text-purple-400" size={24} /> },
    { value: "1000+", label: "Internships", icon: <GraduationCap className="text-yellow-400" size={24} /> }
  ];

  const missions = [
    {
      title: "Promote FOSS",
      description: "Foundation for learning and innovation through Free and Open Source Software",
      icon: <Globe className="text-yellow-400" size={24} />,
      gradient: "from-yellow-400/10"
    },
    {
      title: "Hands-On Projects",
      description: "Real-world projects that address challenges and develop production-ready skills",
      icon: <Code className="text-emerald-400" size={24} />,
      gradient: "from-emerald-400/10"
    },
    {
      title: "AI & Emerging Tech",
      description: "Explore AI, ML, and next-gen technologies through guided sessions and projects",
      icon: <Lightbulb className="text-blue-400" size={24} />,
      gradient: "from-blue-400/10"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] font-mono font-bold text-yellow-400 uppercase tracking-[0.2em] mb-6 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
            AU GLUG - ANURAG UNIVERSITY GNU/LINUX USERS GROUP
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Building Tomorrow with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">Open Source & AI</span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            AU GLUG (Anurag University GNU/Linux Users Group) is the official Free and Open Source Software (FOSS) community of Anurag University. We are a student-led initiative dedicated to fostering a culture of open collaboration, technical excellence, and innovation across GNU/Linux, Open Source technologies, Artificial Intelligence, and emerging domains.
          </p>
        </Motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-neutral-800 rounded-xl group-hover:bg-neutral-700/50 group-hover:scale-110 transition-all">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-black text-white group-hover:text-yellow-400 transition-colors mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono uppercase text-neutral-600 tracking-widest">
                {stat.label}
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Our Mission Section */}
        <div className="mb-20">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-mono text-emerald-400 tracking-widest text-xs uppercase bg-emerald-400/5 px-3 py-1 rounded-full border border-emerald-400/10 mb-4 inline-block">
              Our Mission
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-white">
              Empowering Students Through Open Technology
            </h3>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden group bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 flex flex-col items-start hover:border-neutral-600 transition-colors shadow-2xl`}
              >
                {/* Animated Inner Glow */}
                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${mission.gradient} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                <div className="mb-6 p-3 bg-neutral-800 rounded-xl group-hover:bg-neutral-700/50 group-hover:rotate-6 transition-all duration-300">
                  {mission.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {mission.title}
                </h3>
                <p className="text-neutral-400 text-base leading-relaxed">
                  {mission.description}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-mono text-purple-400 tracking-widest text-xs uppercase bg-purple-400/5 px-3 py-1 rounded-full border border-purple-400/10 mb-4 inline-block">
              Our Values
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-white">
              Principles That Guide Us
            </h3>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { title: "Openness", description: "Knowledge grows when shared", icon: <Globe className="text-yellow-400" size={24} /> },
              { title: "Collaboration", description: "Better solutions are built together", icon: <Users className="text-emerald-400" size={24} /> },
              { title: "Learning by Doing", description: "Practical experience over passive learning", icon: <Code className="text-blue-400" size={24} /> },
              { title: "Responsibility", description: "Technology should serve society", icon: <Zap className="text-purple-400" size={24} /> },
              { title: "Innovation", description: "Continuous exploration of new ideas and tools", icon: <Lightbulb className="text-pink-400" size={24} /> },
            ].map((value, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 bg-neutral-900/30 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-colors"
              >
                <div className="p-2 bg-neutral-800 rounded-lg">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-neutral-400">{value.description}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>

        {/* Why Join Section */}
        <div className="bg-gradient-to-br from-neutral-900/50 to-black/50 border border-neutral-800 rounded-3xl p-10 md:p-16 mb-20">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="font-mono text-blue-400 tracking-widest text-xs uppercase bg-blue-400/5 px-3 py-1 rounded-full border border-blue-400/10 mb-4 inline-block">
              Why Join AU GLUG?
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-12">
              Opportunities Await You at AU GLUG
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Gain real-world experience in Open Source and AI",
                "Learn directly from peers and industry-connected mentors",
                "Build a strong technical portfolio through collaborative projects",
                "Develop leadership and communication skills",
                "Join our thriving community at Anurag University",
                "1000+ internships in our college provided by ViswamAI"
              ].map((benefit, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-black/40 border border-neutral-800 rounded-2xl text-center hover:border-yellow-400/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  </div>
                  <p className="text-neutral-300">{benefit}</p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>

        {/* Terminal Section */}
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-12"
          >
            <div className="space-y-4">
              <span className="font-mono text-yellow-500 tracking-widest text-xs uppercase bg-yellow-400/5 px-3 py-1 rounded-full border border-yellow-400/10">02. Community</span>
              <h2 className="text-4xl md:text-7xl font-black leading-[1.1] text-white">
                The Home of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">Digital Sovereignty.</span>
              </h2>
            </div>

            <div className="space-y-8 text-neutral-400 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                Our community brings together curious learners, builders, and future technologists who believe in the power of openness. AU GLUG serves as a platform where students move beyond theory—working on real-world projects, engaging in technical discussions, and developing industry-relevant skills through hands-on learning.
              </p>
              <p>
                With mentorship and developer access from Swecha Telangana, members gain exposure to authentic open-source ecosystems and community-driven development practices. Through workshops, hack sessions, study circles, and collaborative projects, AU GLUG empowers students to grow as responsible contributors to technology and society.
              </p>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
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
