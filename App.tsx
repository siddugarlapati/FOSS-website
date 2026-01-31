import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollEffects from './components/ScrollEffects';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Join from './pages/Join';
import Resources from './pages/Resources';

// Page transition wrapper component with loading indicator
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ 
          opacity: 0, 
          rotateY: -15,
          scale: 0.95
        }}
        animate={{ 
          opacity: 1, 
          rotateY: 0,
          scale: 1
        }}
        exit={{ 
          opacity: 0, 
          rotateY: 15,
          scale: 0.95
        }}
        transition={{ 
          duration: 0.5,
          ease: "easeInOut"
        }}
        className="w-full relative"
      >
        {/* Loading indicator during transition */}
        {isTransitioning && (
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const joinWhatsApp = () => {
    window.location.href = "https://chat.whatsapp.com/IipGdNeCoy01MhQAO2he4b";
  };

  return (
    <Router>
      <div className="min-h-screen relative selection:bg-yellow-400 selection:text-black bg-[#050505]">
        {/* Enhanced Scroll Effects */}
        <ScrollEffects />

        <Navbar />

        <main className="relative">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/events" element={<Events />} />
              <Route path="/join" element={<Join />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </PageTransition>
        </main>

        {/* Floating WhatsApp Button */}
        <button
          onClick={joinWhatsApp}
          className="fixed bottom-8 right-8 z-[90] p-5 bg-yellow-400 text-black rounded-full shadow-2xl shadow-yellow-400/20 hover:scale-110 active:scale-95 transition-all group"
        >
          <MessageSquare size={24} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-black text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-neutral-800">
            JOIN WHATSAPP GROUP
          </span>
        </button>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
