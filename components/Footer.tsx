
import React from 'react';
import { Github, Twitter, Mail, Heart, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-neutral-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black text-xs">AU</div>
            <span className="text-2xl font-bold text-white tracking-tighter">AUGLUG</span>
          </div>
          <p className="text-neutral-500 max-w-sm mb-8 leading-relaxed">
            The AU GNU/Linux User Group is a student-run organization dedicated to the promotion and education of Free and Open Source Software.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all">
              <MessageSquare size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Community</h4>
          <ul className="space-y-4 text-neutral-500">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Code of Conduct</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Newsletter</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Sponsorships</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-neutral-500">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Linux Distro Guide</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Git Workshop</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Rust Tutorials</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Open Roles</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-neutral-900">
        <div className="flex items-center gap-2 text-neutral-500 font-mono text-sm">
          <span>built_with_love.sh</span>
          <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
          <span className="w-2 h-4 bg-neutral-700 animate-pulse ml-1" />
        </div>
        
        <p className="text-neutral-600 text-xs font-mono">
          &copy; {currentYear} AUGLUG. COPYLEFT — SHARE ALIKE.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
