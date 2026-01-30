
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
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
              We are a collective of tinkerers, engineers, and activists at Anurag University. While others learn to use software, we learn to <span className="text-white">own it</span>.
            </p>
            <p>
              From custom kernel builds to self-hosted private clouds, our labs are the training grounds for the next generation of engineers who actually understand how things work under the hood.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-12 pt-8">
            <div className="group">
              <div className="text-4xl font-black text-white group-hover:text-yellow-400 transition-colors">1.2k+</div>
              <div className="text-[10px] font-mono uppercase text-neutral-600 tracking-widest">Git Commits</div>
            </div>
            <div className="text-neutral-800 text-3xl font-thin">/</div>
            <div className="group">
              <div className="text-4xl font-black text-white group-hover:text-emerald-400 transition-colors">24</div>
              <div className="text-[10px] font-mono uppercase text-neutral-600 tracking-widest">Internal Tools</div>
            </div>
            <div className="text-neutral-800 text-3xl font-thin">/</div>
            <div className="group">
              <div className="text-4xl font-black text-white group-hover:text-blue-400 transition-colors">650</div>
              <div className="text-[10px] font-mono uppercase text-neutral-600 tracking-widest">Active Members</div>
            </div>
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
    </section>
  );
};

export default AboutAUGLUG;
