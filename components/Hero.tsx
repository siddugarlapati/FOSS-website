import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { ChevronRight, ShieldCheck, Folder, Terminal, Chrome, Code, Settings, Wifi, Volume2, Battery } from 'lucide-react';

const Motion = motion as any;

const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Apple-style sophisticated scroll transforms
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const rotateTransform = useTransform(scrollYProgress, [0, 1], [0, -3]);
  
  // Ultra-smooth Apple springs
  const smoothY = useSpring(yTransform, { stiffness: 700, damping: 85 });
  const smoothScale = useSpring(scaleTransform, { stiffness: 700, damping: 85 });
  const smoothOpacity = useSpring(opacityTransform, { stiffness: 700, damping: 85 });

  const [screenIndex, setScreenIndex] = React.useState(0);
  const [showFileManager, setShowFileManager] = React.useState(true);
  const [autoResetEnabled, setAutoResetEnabled] = React.useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setScreenIndex(prev => (prev + 1) % 4);
      if (autoResetEnabled) {
        setShowFileManager(true); // Reset file manager when switching distros
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [autoResetEnabled]);

  const screens = [
    { 
      name: "Ubuntu", 
      color: "#E95420", 
      text: "Humanity to others",
      wallpaper: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Ubuntu_25.10_default_desktop_-_English.png",
      gradient: "from-orange-600/30 via-purple-900/20 to-black/50",
      accentColor: "bg-orange-500"
    },
    { 
      name: "Arch Linux", 
      color: "#1793D1", 
      text: "Keep it simple",
      wallpaper: "https://arkapravo.in/ark-artworks/blue_arch_nowatermark.png",
      gradient: "from-blue-600/30 via-cyan-900/20 to-black/50",
      accentColor: "bg-blue-500"
    },
    { 
      name: "Fedora", 
      color: "#294172", 
      text: "Freedom. Friends. Features.",
      wallpaper: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
      gradient: "from-blue-800/30 via-indigo-900/20 to-black/50",
      accentColor: "bg-indigo-600"
    },
    { 
      name: "Debian", 
      color: "#D70A53", 
      text: "The Universal OS",
      wallpaper: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80",
      gradient: "from-red-600/30 via-pink-900/20 to-black/50",
      accentColor: "bg-red-500"
    }
  ];

  const handleJoinWhatsApp = () => {
    window.location.href = "https://chat.whatsapp.com/IipGdNeCoy01MhQAO2he4b";
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 bg-[#050505] selection:bg-yellow-400 selection:text-black">
      {/* Background Particle/Code Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #f1c40f 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16 items-center relative z-10">

        {/* Top: Text Content */}
        <div className="text-center max-w-4xl mx-auto">
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] font-mono font-bold text-yellow-400 uppercase tracking-[0.2em] mb-8 bg-yellow-400/10 border border-yellow-400/20 rounded-full"
          >
            <ShieldCheck size={14} /> decentralized_community.v3
          </Motion.div>

          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-10 text-white"
          >
            FREEDOM GROWS WITH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-emerald-400">OPEN SOFTWARE.</span>
          </Motion.h1>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={handleJoinWhatsApp}
              className="group px-8 py-4 bg-yellow-400 text-black font-black text-lg rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-[0_0_40px_rgba(241,196,15,0.2)]"
            >
              JOIN VIA WHATSAPP <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Motion.div>
        </div>

        {/* Bottom: Ultra-Realistic Laptop Simulation */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ delay: 0.6, duration: 1, type: "spring" }}
          className="relative w-full max-w-6xl perspective-2000 mt-8"
        >
          {/* Laptop Body */}
          <div className="relative mx-auto transform-style-3d group">

            {/* Lid / Screen */}
            <div className="bg-neutral-900 rounded-t-3xl p-3 pb-0 shadow-2xl border-t border-l border-r border-white/10 relative z-20">
              <div className="bg-black rounded-t-2xl overflow-hidden relative border border-white/5 aspect-[16/10] shadow-inner">

                {/* Simulated Webcam */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black border border-neutral-700 z-50">
                  <div className="w-1 h-1 bg-blue-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 animate-pulse" />
                </div>

                {/* REALISTIC LINUX DESKTOP */}
                <div className="absolute inset-0 flex flex-col">
                  
                  {/* Wallpaper Background */}
                  <AnimatePresence mode="wait">
                    <Motion.div
                      key={`wallpaper-${screenIndex}`}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0"
                    >
                      <img 
                        src={screens[screenIndex].wallpaper}
                        alt={`${screens[screenIndex].name} desktop`}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${screens[screenIndex].gradient}`} />
                    </Motion.div>
                  </AnimatePresence>

                  {/* TOP PANEL (GNOME/KDE Style) */}
                  <div className="h-8 bg-black/80 backdrop-blur-2xl flex items-center justify-between px-4 text-[11px] font-medium text-white/90 border-b border-white/10 relative z-40 shadow-lg">
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-white">Activities</span>
                      <span className="text-white/70 text-[10px]">{screens[screenIndex].name}</span>
                    </div>
                    <span className="font-mono text-white/80 text-[10px]">
                      {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} • {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <div className="flex gap-3 items-center">
                      <Wifi size={12} className="text-white/70" />
                      <Volume2 size={12} className="text-white/70" />
                      <Battery size={12} className="text-emerald-400" />
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border border-white/20" />
                    </div>
                  </div>

                  {/* DESKTOP AREA WITH WINDOWS */}
                  <div className="flex-1 relative overflow-hidden p-4">
                    
                    {/* Desktop Icons (Left Side) */}
                    <div className="absolute top-4 left-4 space-y-3 z-10">
                      <div className="flex flex-col items-center gap-1 text-white/90 hover:bg-white/10 p-2 rounded-lg transition-colors cursor-pointer">
                        <Folder size={24} className="drop-shadow-lg" />
                        <span className="text-[9px] font-medium drop-shadow-md">Home</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 text-white/90 hover:bg-white/10 p-2 rounded-lg transition-colors cursor-pointer">
                        <Folder size={24} className="drop-shadow-lg" />
                        <span className="text-[9px] font-medium drop-shadow-md">Documents</span>
                      </div>
                    </div>

                    {/* TERMINAL WINDOW (Main Focus) */}
                    <AnimatePresence mode="wait">
                      <Motion.div
                        key={`terminal-${screenIndex}`}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-lg bg-black/95 backdrop-blur-xl rounded-xl border border-white/20 shadow-2xl overflow-hidden z-30"
                      >
                        {/* Window Title Bar */}
                        <div className="h-8 bg-neutral-900/90 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-3">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors cursor-pointer" />
                          </div>
                          <span className="text-white/70 text-[10px] font-medium">Terminal</span>
                          <div className="w-12" />
                        </div>
                        
                        {/* Terminal Content */}
                        <div className="p-4 font-mono text-xs space-y-1.5 text-neutral-200 min-h-[200px]">
                          <p className="text-emerald-400">user@{screens[screenIndex].name.toLowerCase().replace(' ', '-')}:~$<span className="text-white ml-2">neofetch</span></p>
                          <div className="flex gap-4 my-2">
                            <div className="text-4xl" style={{ color: screens[screenIndex].color }}>
                              {screens[screenIndex].name[0]}
                            </div>
                            <div className="space-y-0.5 text-[10px]">
                              <p className="text-neutral-500">-------------------</p>
                              <p><span className="text-emerald-400">OS:</span> <span className="text-white">{screens[screenIndex].name} Linux</span></p>
                              <p><span className="text-emerald-400">Host:</span> <span className="text-white">ThinkPad X1 Carbon</span></p>
                              <p><span className="text-emerald-400">Kernel:</span> <span className="text-white">6.{Math.floor(Math.random() * 8)}.{Math.floor(Math.random() * 30)}-generic</span></p>
                              <p><span className="text-emerald-400">Uptime:</span> <span className="text-white">{Math.floor(Math.random() * 10)} days, {Math.floor(Math.random() * 24)} hours</span></p>
                              <p><span className="text-emerald-400">Packages:</span> <span className="text-white">{1200 + Math.floor(Math.random() * 500)} (apt)</span></p>
                              <p><span className="text-emerald-400">Shell:</span> <span className="text-white">zsh 5.9</span></p>
                              <p><span className="text-emerald-400">DE:</span> <span className="text-white">GNOME 45</span></p>
                              <p><span className="text-emerald-400">WM:</span> <span className="text-white">Mutter</span></p>
                              <p><span className="text-emerald-400">Theme:</span> <span className="text-white">Adwaita-dark</span></p>
                              <p><span className="text-emerald-400">CPU:</span> <span className="text-white">Intel i7-1165G7 (8) @ 4.7GHz</span></p>
                              <p><span className="text-emerald-400">GPU:</span> <span className="text-white">Intel Iris Xe Graphics</span></p>
                              <p><span className="text-emerald-400">Memory:</span> <span className="text-white">3847MiB / 15872MiB</span></p>
                            </div>
                          </div>
                          <p className="text-emerald-400 mt-3">user@{screens[screenIndex].name.toLowerCase().replace(' ', '-')}:~$<span className="text-white ml-2 animate-pulse">_</span></p>
                        </div>
                      </Motion.div>
                    </AnimatePresence>

                    {/* FILE MANAGER WINDOW (Background) */}
                    <AnimatePresence mode="wait">
                      {showFileManager && (
                        <Motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-8 left-8 w-64 bg-neutral-900/90 backdrop-blur-xl rounded-lg border border-white/20 shadow-xl overflow-hidden z-20"
                        >
                        <div className="h-7 bg-neutral-800/90 border-b border-white/10 flex items-center justify-between px-2">
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500/80 hover:bg-red-600 transition-colors cursor-pointer" onClick={() => {setAutoResetEnabled(false); setShowFileManager(false);}} />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                            <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-white/60 text-[9px]">Files</span>
                          <div className="w-8" />
                        </div>
                        <div className="p-2 space-y-1 text-[9px] text-white/80">
                          <div className="flex items-center gap-2 p-1.5 hover:bg-white/10 rounded">
                            <Folder size={12} />
                            <span>Projects</span>
                          </div>
                          <div className="flex items-center gap-2 p-1.5 hover:bg-white/10 rounded">
                            <Folder size={12} />
                            <span>Documents</span>
                          </div>
                          <div className="flex items-center gap-2 p-1.5 hover:bg-white/10 rounded">
                            <Folder size={12} />
                            <span>Downloads</span>
                          </div>
                        </div>
                      </Motion.div>
                    )}
                  </AnimatePresence>

                  </div>

                  {/* BOTTOM DOCK (Ubuntu/GNOME Style) */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40">
                    <div className="bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl px-3 py-2 flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${screens[screenIndex].accentColor} flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer`}>
                        <span className="text-lg font-black">{screens[screenIndex].name[0]}</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer hover:scale-110">
                        <Chrome size={20} />
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer hover:scale-110">
                        <Code size={20} />
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer hover:scale-110">
                        <Terminal size={20} />
                      </div>
                      <div 
                        className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer hover:scale-110"
                        onClick={() => {
                          if (!showFileManager) {
                            setAutoResetEnabled(true); // Re-enable auto-reset when opening manually
                          } else {
                            setAutoResetEnabled(false); // Disable auto-reset when closing manually
                          }
                          setShowFileManager(!showFileManager)
                        }}
                      >
                        <Folder size={20} />
                      </div>
                      <div className="w-px h-8 bg-white/20" />
                      <div className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer hover:scale-110">
                        <Settings size={20} />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Base / Keyboard Deck */}
            <div className="bg-neutral-800 h-16 rounded-b-[2rem] relative z-10 shadow-2xl border-b border-l border-r border-white/10 mx-1">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-3 bg-neutral-700/50 rounded-b-xl border border-white/5" />
            </div>

            {/* Reflection */}
            <div className="absolute top-full left-4 right-4 h-24 bg-gradient-to-b from-white/5 to-transparent blur-3xl rounded-full opacity-50" />
          </div>
        </Motion.div>

      </div>

      <Motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-yellow-400 to-transparent" />
      </Motion.div>
    </section>
  );
};

export default Hero;
