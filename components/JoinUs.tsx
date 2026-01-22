
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Sparkles, MessageSquare } from 'lucide-react';

const Motion = motion as any;

const JoinUs: React.FC = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden">
      {/* Dynamic Background Noise/Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-widest">
            <Sparkles size={12} /> Recruitment Active
          </div>

          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
            Claim Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600">Freedom.</span>
          </h2>

          <p className="text-lg md:text-2xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Stop being a user. Become a contributor. Join the community that builds the tools of tomorrow, today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button className="w-full sm:w-auto px-12 py-6 bg-yellow-400 text-black font-black text-xl rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(241,196,15,0.2)] flex items-center justify-center gap-3">
              <TerminalIcon size={24} /> Join Discord
            </button>
            <button className="w-full sm:w-auto px-12 py-6 border border-neutral-800 text-neutral-400 font-bold text-xl rounded-full hover:bg-neutral-900 hover:text-white transition-all flex items-center justify-center gap-3">
              <MessageSquare size={24} /> Get Newsletter
            </button>
          </div>

          <div className="pt-12 font-mono text-sm text-neutral-700">
            $ curl -sL join.auglug.org | bash
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
