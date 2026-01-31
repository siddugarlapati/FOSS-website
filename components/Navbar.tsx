import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Terminal, Github, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const { scrollY } = useScroll();
  
  // Optimized Apple-style navbar transforms (faster performance)
  const navbarY = useTransform(scrollY, [0, 100], [32, 20]);
  const navbarScale = useTransform(scrollY, [0, 100], [1, 0.97]);
  const navbarBg = useTransform(scrollY, [0, 50], ['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.95)']);
  const navbarBlur = useTransform(scrollY, [0, 50], ['blur(10px)', 'blur(20px)']);
  
  // Ultra-fast spring physics for snappy response
  const smoothNavbarY = useSpring(navbarY, { stiffness: 1200, damping: 100, mass: 0.8 });
  const smoothNavbarScale = useSpring(navbarScale, { stiffness: 1200, damping: 100, mass: 0.8 });

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setScrolled(latest > 20);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resources', href: '/resources' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/team' },
  ];

  // Ultra-fast hover effects with minimal computation
  const getHoverTransform = (itemName: string) => ({
    scale: hoveredItem === itemName ? 1.12 : 1,
    color: hoveredItem === itemName ? '#f1c40f' : '#ffffff',
  });

  const LogoIcon = () => (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Terminal className="text-yellow-400" size={24} />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
      </div>
      <span className="font-bold text-white text-lg tracking-tight">AUGLUG</span>
    </div>
  );

  // Fast navigation handler
  const handleNavigation = (href: string) => {
    setIsOpen(false);
    // Use requestAnimationFrame for immediate response
    requestAnimationFrame(() => {
      window.location.href = href;
    });
  };

  return (
    <motion.nav 
      className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none"
      style={{ 
        top: smoothNavbarY,
        scale: smoothNavbarScale
      }}
    >
      <motion.div
        layout
        initial={{ width: 'auto', height: 90, borderRadius: 40 }}
        animate={{
          width: isOpen ? 360 : 'auto',
          height: isOpen ? 'auto' : 90,
          borderRadius: 40
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="pointer-events-auto backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden bg-black/80"
        style={{
          backgroundColor: navbarBg,
          backdropFilter: navbarBlur
        }}
      >
        {/* Desktop Navigation - Centered Logo with Surrounding Items */}
        <div className="hidden md:flex items-center justify-between px-8 h-[90px]">
          {/* Left Navigation Items - Optimized for speed */}
          <div className="flex items-center space-x-4">
            {navLinks.slice(0, 3).map((link) => (
              <div
                key={link.name}
                className="relative px-6 py-3 rounded-xl cursor-pointer hover:bg-yellow-400/10 transition-all duration-150 group"
                onMouseEnter={() => setHoveredItem(link.name)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleNavigation(link.href)}
              >
                <span 
                  className="text-white font-medium text-base tracking-wide block"
                  style={getHoverTransform(link.name)}
                >
                  {link.name}
                </span>
                
                {/* Simplified underline indicator */}
                <div
                  className={`absolute bottom-2 left-1/2 w-0 h-0.5 bg-yellow-400 rounded-full transition-all duration-200 ${
                    hoveredItem === link.name ? 'w-4/5 left-[10%]' : ''
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Center Logo - Ultra-fast */}
          <div 
            className="flex-shrink-0 mx-12 cursor-pointer hover:scale-105 transition-transform duration-150"
            onClick={() => handleNavigation('/')}
          >
            <LogoIcon />
          </div>

          {/* Right Navigation Items - Optimized for speed */}
          <div className="flex items-center space-x-4">
            {navLinks.slice(3).map((link) => (
              <div
                key={link.name}
                className="relative px-6 py-3 rounded-xl cursor-pointer hover:bg-yellow-400/10 transition-all duration-150 group"
                onMouseEnter={() => setHoveredItem(link.name)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleNavigation(link.href)}
              >
                <span 
                  className="text-white font-medium text-base tracking-wide block"
                  style={getHoverTransform(link.name)}
                >
                  {link.name}
                </span>
                
                {/* Simplified underline indicator */}
                <div
                  className={`absolute bottom-2 left-1/2 w-0 h-0.5 bg-yellow-400 rounded-full transition-all duration-200 ${
                    hoveredItem === link.name ? 'w-4/5 left-[10%]' : ''
                  }`}
                />
              </div>
            ))}
            
            {/* GitHub Icon - Fast and simple */}
            <a
              href="https://github.com/AU-GLUG"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-white hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-150 hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between px-6 h-[90px]">
          <Link to="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
            <LogoIcon />
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-xl text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu - Ultra-fast */}
        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 animate-slideDown">
            <div className="py-6 space-y-3 px-6">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="px-6 py-4 rounded-xl hover:bg-yellow-400/10 transition-all duration-150 cursor-pointer hover:translate-x-3"
                  onClick={() => handleNavigation(link.href)}
                >
                  <span className="block text-white font-medium text-lg">{link.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
