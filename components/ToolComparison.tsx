
import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const Motion = motion as any;

const ToolComparison: React.FC = () => {
  const tools = [
    { paid: "Windows 11 ($139+)", free: "Linux Mint / Ubuntu ($0)", icon: "💻" },
    { paid: "MS Office 365 ($99/yr)", free: "LibreOffice / OnlyOffice ($0)", icon: "📝" },
    { paid: "Adobe Photoshop ($20/mo)", free: "GIMP / Krita ($0)", icon: "🎨" },
    { paid: "Matlab ($2,000+)", free: "GNU Octave / Python ($0)", icon: "📊" },
    { paid: "Sublime Text (License)", free: "VS Codium / Neovim ($0)", icon: "⌨️" },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-emerald-400 text-sm tracking-widest uppercase mb-4 block"
          >
            04. The Switch
          </Motion.span>
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Paid vs <span className="text-emerald-400">Freedom</span>
          </Motion.h2>
          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-neutral-500 max-w-2xl mx-auto"
          >
            Why pay for licenses when the open source alternatives are often more powerful and privacy-respecting?
          </Motion.p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-11 gap-4 items-center px-4 py-2 font-mono text-xs uppercase text-neutral-600">
            <div className="col-span-5 text-center">Proprietary (Locked)</div>
            <div className="col-span-1"></div>
            <div className="col-span-5 text-center">FOSS (Free)</div>
          </div>

          {tools.map((item, idx) => (
            <Motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="grid grid-cols-11 gap-4 items-center"
            >
              <div className="col-span-5 bg-red-500/5 border border-red-500/20 p-4 rounded-xl flex items-center justify-between group hover:border-red-500/40 transition-colors">
                <span className="text-neutral-500 font-medium text-xs md:text-sm">{item.paid}</span>
                <XCircle size={18} className="text-red-500/50" />
              </div>
              <div className="col-span-1 flex justify-center text-xl grayscale group-hover:grayscale-0 transition-all">
                {item.icon}
              </div>
              <div className="col-span-5 bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl flex items-center justify-between group hover:border-emerald-500/40 transition-colors">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span className="text-white font-bold text-xs md:text-sm">{item.free}</span>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolComparison;
