import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#030712]">
      {/* Background Grid & Blur */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-primary opacity-20 blur-[100px]"></div>

      {/* Floating Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-4 z-50 flex items-center justify-between w-[90%] max-w-5xl px-6 py-3 mx-auto rounded-full border border-white/10 transition-all duration-300",
          scrolled ? "bg-black/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]" : "bg-transparent border-transparent"
        )}
      >
        <a href="/" className="flex items-center gap-2">
          {/* Mock Logo using text for dark theme adaptability */}
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">ViewMe</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
        </div>

        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link
                to="/app?state=login"
                className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <Link
                to="/app?state=register"
                className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all"
              >
                Get Started
              </Link>
            </>
          ) : (
            <Link
              to="/app"
              className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand-primary hover:bg-brand-primary-hover rounded-full shadow-[0_0_15px_rgba(82,69,255,0.5)] transition-all"
            >
              Dashboard
            </Link>
          )}

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-slate-300 hover:text-white"
            aria-label="Open main menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[1400px] px-6 pt-48 pb-24 mx-auto text-center">
        
        {/* Animated Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 text-xs font-semibold uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-slate-300 backdrop-blur-sm"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse"></span>
          Intelligent AI Resume Builder
        </motion.div>

        {/* Giant Typography Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter text-white mb-8 leading-[0.85] w-full"
        >
          <span className="block text-slate-100">CRAFT YOUR</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-br from-brand-primary via-purple-400 to-white">
            NARRATIVE.
          </span>
        </motion.h1>

        {/* Structured Subheadline Container */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-8 max-w-4xl border-t border-white/10 pt-8"
        >
          <p className="text-left text-lg md:text-xl text-slate-400 leading-relaxed max-w-md">
            Stop blending in. Use intelligent AI to generate dynamic, ATS-friendly resumes that highlight your true potential.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              to="/app"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 text-base font-semibold text-white transition-all duration-300 bg-brand-primary rounded-full hover:bg-brand-primary-hover shadow-[0_0_20px_rgba(82,69,255,0.4)] hover:shadow-[0_0_40px_rgba(82,69,255,0.6)] hover:-translate-y-0.5"
            >
              Start Building
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center"
        >
          <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-widest">Trusted by professionals at</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Minimal SVG Logos for companies */}
            <svg className="h-6 w-auto text-white" viewBox="0 0 100 30" fill="currentColor"><path d="M10,15 L20,15 L15,5 Z M30,5 L30,25 M40,5 L40,25 M50,5 L50,25 L60,15 M70,5 L80,5 L80,25 L70,25 Z M90,5 L100,5 L95,25 Z"/></svg>
            <svg className="h-6 w-auto text-white" viewBox="0 0 100 30" fill="currentColor"><path d="M10,5 L10,25 L25,25 M35,5 L45,5 M40,5 L40,25 M55,5 L70,5 M62.5,5 L62.5,25 M80,5 L95,5 M80,15 L90,15 M80,25 L95,25"/></svg>
            <svg className="h-6 w-auto text-white" viewBox="0 0 100 30" fill="currentColor"><path d="M10,25 L15,5 L20,25 M30,5 L45,5 M37.5,5 L37.5,25 M55,25 L60,5 L65,25 M75,25 L80,5 L85,25"/></svg>
          </div>
        </motion.div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#030712]/95 backdrop-blur-xl flex flex-col items-center justify-center p-6">
          <button 
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <div className="flex flex-col items-center gap-8 text-xl font-medium text-white">
            <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
            {!user ? (
              <Link to="/app?state=login" onClick={() => setMenuOpen(false)}>Sign In</Link>
            ) : (
              <Link to="/app" onClick={() => setMenuOpen(false)}>Dashboard</Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
