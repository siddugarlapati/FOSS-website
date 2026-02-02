import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Terminal, GitBranch, Menu, X } from 'lucide-react';
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
              <motion.div
                key={link.name}
                className="relative px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 group"
                onMouseEnter={() => setHoveredItem(link.name)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleNavigation(link.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span 
                  className={`font-medium text-base tracking-wide block transition-all duration-200 ${hoveredItem === link.name ? 'text-yellow-400' : 'text-white'}`}
                >
                  {link.name}
                </span>
                
                {/* Enhanced glow effect */}
                {hoveredItem === link.name && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-yellow-400/20 blur-md -z-10"
                    layoutId="navbarGlow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                
                {/* Pop-on underline indicator */}
                <motion.div
                  className="absolute bottom-2 left-1/2 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: hoveredItem === link.name ? '80%' : 0,
                    opacity: hoveredItem === link.name ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Center Logo - Enhanced Animation */}
          <motion.div 
            className="flex-shrink-0 mx-12 cursor-pointer transition-transform duration-300"
            onClick={() => handleNavigation('/')}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <LogoIcon />
          </motion.div>

          {/* Right Navigation Items - Optimized for speed */}
          <div className="flex items-center space-x-4">
            {navLinks.slice(3).map((link) => (
              <motion.div
                key={link.name}
                className="relative px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 group"
                onMouseEnter={() => setHoveredItem(link.name)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleNavigation(link.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                <span 
                  className={`font-medium text-base tracking-wide block transition-all duration-200 ${hoveredItem === link.name ? 'text-yellow-400' : 'text-white'}`}
                >
                  {link.name}
                </span>
                
                {/* Enhanced glow effect */}
                {hoveredItem === link.name && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-yellow-400/20 blur-md -z-10"
                    layoutId="navbarGlow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                
                {/* Pop-on underline indicator */}
                <motion.div
                  className="absolute bottom-2 left-1/2 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: hoveredItem === link.name ? '80%' : 0,
                    opacity: hoveredItem === link.name ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
            ))}
            
            {/* GitLab Icon - Enhanced animation */}
            <motion.a
              href="https://gitlab.com/au-glug/au-glug-website"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-white transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1, color: "#f1c40f" }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <GitBranch size={24} />
            </motion.a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between px-6 h-[90px]">
          <Link to="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
            <LogoIcon />
          </Link>
          
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-xl text-white transition-colors"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu - Ultra-fast */}
        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 animate-slideDown">
            <div className="py-6 space-y-3 px-6">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  className="px-6 py-4 rounded-xl transition-all duration-300 cursor-pointer"
                  onClick={() => handleNavigation(link.href)}
                  whileHover={{ x: 10, backgroundColor: "rgba(241, 196, 15, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="block text-white font-medium text-lg transition-colors duration-200">{link.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
