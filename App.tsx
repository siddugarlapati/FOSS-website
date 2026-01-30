import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Join from './pages/Join';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const joinSignal = () => {
    window.location.href = "https://signal.group/#CjQKIOzI6_Y9_Y3zV8vP...";
  };

  return (
    <Router>
      <div className="min-h-screen relative selection:bg-yellow-400 selection:text-black bg-[#050505]">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 z-[100] origin-left"
          style={{ scaleX }}
        />

        {/* Persistent Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
          {/* Modern Dot Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(#f1c40f 0.5px, transparent 0.5px)`,
              backgroundSize: '32px 32px'
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <Navbar />

        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>

        {/* Floating Signal Button */}
        <button
          onClick={joinSignal}
          className="fixed bottom-8 right-8 z-[90] p-5 bg-yellow-400 text-black rounded-full shadow-2xl shadow-yellow-400/20 hover:scale-110 active:scale-95 transition-all group"
        >
          <MessageSquare size={24} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-black text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-neutral-800">
            JOIN SIGNAL GROUP
          </span>
        </button>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
