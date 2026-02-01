import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, ExternalLink, Code2, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

const Motion = motion as any;

const PROJECTS = [
  {
    name: "dharun-web/oncampus-event-management",
    desc: "A comprehensive event management system built for campus organizations. Streamline event planning, registration, and attendance tracking.",
    url: "https://gitlab.com/dharun-web/oncampus-event-management",
    lang: "Full Stack",
    stars: "N/A", // GitLab doesn't use stars like GitHub
    tag: "EVENT-MGMT"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 relative bg-black min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-24">
          <Motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-emerald-400 font-mono text-sm uppercase tracking-widest mb-6"
          >
            <Code2 size={16} /> /home/auglug/projects
          </Motion.div>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            Featured <br /> <span className="text-emerald-400">Project.</span>
          </h2>
          <p className="text-neutral-500 text-xl md:text-2xl max-w-3xl leading-relaxed">
            Explore our featured open source project designed to help campus organizations 
            manage events efficiently. Built with modern technologies for scalability and usability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-neutral-900 border-y border-neutral-900">
          {PROJECTS.map((project, idx) => (
            <Motion.a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-10 bg-black hover:bg-neutral-950 transition-all relative overflow-hidden"
            >
              <div className="flex-1 z-10">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 rounded uppercase">
                    {project.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.name.split('/')[1]}
                  </h3>
                </div>
                <p className="text-neutral-500 text-lg max-w-2xl font-medium">
                  {project.desc}
                </p>
              </div>

              <div className="mt-8 md:mt-0 flex items-center gap-10 text-neutral-500 font-mono z-10">
                <div className="flex flex-col items-end">
                  <span className="text-white flex items-center gap-1.5 text-lg"><Github size={16} className="text-yellow-400" /> {project.stars}</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-40">{project.lang}</span>
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-neutral-800 group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all">
                  <ExternalLink size={20} />
                </div>
              </div>

              {/* Gradient Reveal */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Motion.a>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 text-white font-bold text-xl cursor-pointer group"
          >
            <GraduationCap className="text-yellow-400" /> 
            <span>CONTRIBUTE TO OPEN SOURCE</span>
            <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;