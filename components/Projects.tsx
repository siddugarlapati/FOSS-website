import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-[#050505] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-yellow-400 text-sm tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            OUR PROJECTS
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">Repository</span>
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto mt-6 text-lg">
            Check out our featured open source project
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-yellow-400/30 transition-all hover:bg-neutral-900 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-yellow-400 text-2xl">📂</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">OnCampus Event Management</h3>
            <p className="text-neutral-400 mb-8 text-lg">
              A comprehensive event management system built for campus organizations
            </p>
            <a 
              href="https://gitlab.com/dharun-web/oncampus-event-management" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-yellow-400 text-black font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(241,196,15,0.2)]"
            >
              VIEW REPOSITORY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;