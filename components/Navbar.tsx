import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Github, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/team' },
  ];

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div
        layout
        initial={{ width: 'auto', height: 60, borderRadius: 30 }}
        animate={{
          width: isOpen ? 320 : 'auto',
          height: isOpen ? 'auto' : 60,
          borderRadius: 30
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="pointer-events-auto bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
      >
        <div className="flex items-center justify-between px-2 h-[60px] min-w-[200px]">
          <Link to="/" className="flex items-center space-x-2 pl-4" onClick={() => setIsOpen(false)}>
            <div className="bg-yellow-400 p-1.5 rounded-full">
              <Terminal size={16} className="text-black" />
            </div>
            <span className="font-bold text-white tracking-tight">AUGLUG</span>
          </Link>

          {/* Desktop Links (Hidden when expanded mobile menu, distinct from Island expansion logic usually, but here combined for simplicity or separated?) 
              Actually for Dynamic Island, usually it's compact. Let's keep desktop links visible if not expanded?
              Or better yet, "Dynamic Island" usually implies valid interactions.
              
              Let's try a hybrid: 
              - Compact pill on mobile (expands on click).
              - Wider pill on desktop (always visible links).
          */}
          <div className="hidden md:flex items-center gap-6 px-6">
            {navLinks.map(link => (
              <Link key={link.name} to={link.href} className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
            <div className="w-px h-4 bg-white/10" />
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
              <Github size={18} />
            </a>
            <Link to="/join" className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold hover:bg-yellow-400 transition-colors">
              Join
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-neutral-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Content (Animate properties) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-6 pb-6 pt-2 md:hidden flex flex-col gap-4"
            >
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-neutral-300 hover:text-yellow-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <div className="flex items-center justify-between">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 flex items-center gap-2">
                  <Github size={18} /> GitHub
                </a>
                <Link to="/join" className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold" onClick={() => setIsOpen(false)}>
                  Join Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
