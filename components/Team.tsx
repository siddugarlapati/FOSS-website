
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

// Fix: Cast motion to any to bypass environment-specific type errors for motion props
const Motion = motion as any;

const Team: React.FC = () => {
  const team = [
    { name: "Dharun", role: "Lead Coordinator", responsibility: "Oversees initiative, coordinates with authorities", cpu: "98.5" },
    { name: "Vighnesh", role: "Linux Evangelist", responsibility: "Promotes FOSS, organizes install fests", cpu: "95.2" },
    { name: "Siddu", role: "Development Lead", responsibility: "Guides programming, Git/GitHub basics", cpu: "94.8" },
    { name: "Akshita", role: "Workshops Lead", responsibility: "Plans hands-on workshops & sessions", cpu: "92.1" },
    { name: "Amulya", role: "Community Lead", responsibility: "Manages onboarding & mentorship", cpu: "91.5" },
    { name: "Kashatishka", role: "Content Lead", responsibility: "Maintains learning materials & docs", cpu: "89.4" },
    { name: "Kuldeep", role: "Events Lead", responsibility: "Organizes events & outreach", cpu: "88.7" },
    { name: "Sloka", role: "Tools Lead", responsibility: "Manages GitHub & infrastructure", cpu: "87.9" }
  ];

  return (
    <section id="team" className="py-24 px-6 bg-[#050505] min-h-screen font-mono text-sm md:text-base">
      <div className="max-w-7xl mx-auto">

        {/* Process List Table */}
        <div className="overflow-x-auto bg-black rounded-lg border border-neutral-800 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-900 text-black">
                <th className="py-3 px-4 bg-white font-bold uppercase tracking-wider text-xs">PID</th>
                <th className="py-3 px-4 bg-white font-bold uppercase tracking-wider text-xs">USER</th>
                <th className="py-3 px-4 bg-white font-bold uppercase tracking-wider text-xs">PR</th>
                <th className="py-3 px-4 bg-white font-bold uppercase tracking-wider text-xs">NI</th>
                <th className="py-3 px-4 bg-white font-bold uppercase tracking-wider text-xs">VIRT</th>
                <th className="py-3 px-4 bg-white font-bold uppercase tracking-wider text-xs">RES</th>
                <th className="py-3 px-4 bg-white font-bold uppercase tracking-wider text-xs">%CPU</th>
                <th className="py-3 px-4 bg-white font-bold uppercase tracking-wider text-xs">%MEM</th>
                <th className="py-3 px-4 bg-white font-bold uppercase tracking-wider text-xs">TIME+</th>
                <th className="py-3 px-4 bg-white font-bold uppercase tracking-wider text-xs">COMMAND</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900">
              {team.map((member, idx) => (
                <Motion.tr
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="hover:bg-neutral-900/50 transition-colors group"
                >
                  <td className="py-3 px-4 text-emerald-400 font-bold">{3000 + idx}</td>
                  <td className="py-3 px-4 text-yellow-400 font-bold">{member.name}</td>
                  <td className="py-3 px-4 text-neutral-500">20</td>
                  <td className="py-3 px-4 text-neutral-500">0</td>
                  <td className="py-3 px-4 text-neutral-500">10.5g</td>
                  <td className="py-3 px-4 text-neutral-500">2.1g</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">{member.cpu}</td>
                  <td className="py-3 px-4 text-neutral-500">5.2</td>
                  <td className="py-3 px-4 text-neutral-500">999:00</td>
                  <td className="py-3 px-4">
                    <span className="text-white font-bold block">{member.role}</span>
                    <span className="text-neutral-500 text-xs text-[10px] md:text-xs">-- {member.responsibility.toLowerCase()}</span>
                  </td>
                </Motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-neutral-600 text-xs">Press <span className="text-white bg-neutral-800 px-1.5 py-0.5 rounded">q</span> to quit (just kidding, you can't quit freedom)</p>
        </div>

      </div>
    </section>
  );
};

export default Team;
