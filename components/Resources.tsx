
import React from 'react';
import { motion } from 'framer-motion';
// Added ChevronRight to the import list
import { Github, Star, ExternalLink, Code2, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

const Motion = motion as any;

const REPOS = [
  {
    name: "ossu/computer-science",
    desc: "A complete self-taught education in Computer Science using free online resources.",
    url: "https://github.com/ossu/computer-science",
    lang: "Education",
    stars: "150k+",
    tag: "CURRICULUM"
  },
  {
    name: "kamranahmedse/developer-roadmap",
    desc: "Interactive roadmaps for every developer role. The best way to track your progress.",
    url: "https://github.com/kamranahmedse/developer-roadmap",
    lang: "Guidance",
    stars: "260k+",
    tag: "CAREER"
  },
  {
    name: "freeCodeCamp/freeCodeCamp",
    desc: "Learn to code for free. Build projects. Get certifications. The biggest community on Earth.",
    url: "https://github.com/freeCodeCamp/freeCodeCamp",
    lang: "Web",
    stars: "380k+",
    tag: "PRACTICE"
  },
  {
    name: "jwasham/coding-interview-university",
    desc: "A complete daily study plan to become a software engineer at a big tech company.",
    url: "https://github.com/jwasham/coding-interview-university",
    lang: "Interviews",
    stars: "280k+",
    tag: "JOBS"
  }
];

const Resources: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 relative bg-black min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-24">
          <Motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-emerald-400 font-mono text-sm uppercase tracking-widest mb-6"
          >
            <BookOpen size={16} /> /home/auglug/resources
          </Motion.div>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            Learning <br /> <span className="text-emerald-400">Resources.</span>
          </h2>
          <p className="text-neutral-500 text-xl md:text-2xl max-w-3xl leading-relaxed">
            We've curated the best educational resources for your learning journey. 
            These are the tools that build world-class engineers. Start your path here.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-neutral-900 border-y border-neutral-900">
          {REPOS.map((repo, idx) => (
            <Motion.a
              key={idx}
              href={repo.url}
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
                    {repo.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {repo.name.split('/')[1]}
                  </h3>
                </div>
                <p className="text-neutral-500 text-lg max-w-2xl font-medium">
                  {repo.desc}
                </p>
              </div>

              <div className="mt-8 md:mt-0 flex items-center gap-10 text-neutral-500 font-mono z-10">
                <div className="flex flex-col items-end">
                  <span className="text-white flex items-center gap-1.5 text-lg"><Star size={16} className="text-yellow-400" /> {repo.stars}</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-40">{repo.lang}</span>
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
            <span>ACCESS STUDENT DEVELOPER PACK</span>
            <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
