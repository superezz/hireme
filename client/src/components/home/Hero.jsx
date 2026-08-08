import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

  return (
    <>
      <div className="min-h-screen pb-20 flex flex-col">
        {/* Navbar */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`z-50 sticky top-0 flex items-center justify-between w-full px-6 md:px-16 lg:px-24 xl:px-40 text-sm transition-all duration-300 ${
            scrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-4"
          }`}
        >
          <a href="https://superezz.com">
            <img src="/viewme-logo.png" alt="ViewMe" className="h-11 w-auto object-contain" />
          </a>

          <div className="hidden md:flex items-center gap-8 text-slate-800 font-medium">
            <a href="#" className="hover:text-brand-primary transition-colors duration-200">
              Home
            </a>
            <a href="#features" className="hover:text-brand-primary transition-colors duration-200">
              Features
            </a>
            <a href="#testimonials" className="hover:text-brand-primary transition-colors duration-200">
              Testimonials
            </a>
            <a href="#cta" className="hover:text-brand-primary transition-colors duration-200">
              Contact
            </a>
          </div>

          <div className="flex gap-2">
            <Link
              to="/app?state=register"
              className="hidden md:block px-6 py-2 bg-brand-primary hover:bg-brand-primary-hover hover:-translate-y-0.5 active:scale-95 transition-all duration-200 rounded-full text-white shadow-sm hover:shadow-md"
              hidden={user}
            >
              Get started
            </Link>
            <Link
              to="app?state=login"
              className="hidden md:block px-6 py-2 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:scale-95 transition-all duration-200 rounded-full text-slate-700"
              hidden={user}
            >
              Login
            </Link>
            <Link
              to="/app"
              className="hidden md:block px-8 py-2 bg-brand-primary hover:bg-brand-primary-hover hover:-translate-y-0.5 active:scale-95 transition-all duration-200 rounded-full text-white shadow-sm hover:shadow-md"
              hidden={!user}
            >
              Dashboard
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden active:scale-95 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu text-slate-700"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </motion.nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-[100] bg-white text-slate-800 flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a href="#" className="hover:text-brand-primary font-medium transition-colors" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#features" className="hover:text-brand-primary font-medium transition-colors" onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="#testimonials" className="hover:text-brand-primary font-medium transition-colors" onClick={() => setMenuOpen(false)}>
            Testimonials
          </a>
          <a href="#contact" className="hover:text-brand-primary font-medium transition-colors" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="mt-4 active:scale-95 size-10 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Hero Section */}
        <div className="flex-1 relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black mt-10 md:mt-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center w-full"
          >
            {/* Avatars + Stars */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop"
                  alt="User 1"
                  className="size-9 object-cover rounded-full border-2 border-white shadow-sm z-[1]"
                />
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&h=100&auto=format&fit=crop"
                  alt="User 2"
                  className="size-9 object-cover rounded-full border-2 border-white shadow-sm z-[2]"
                />
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop"
                  alt="User 3"
                  className="size-9 object-cover rounded-full border-2 border-white shadow-sm z-[3]"
                />
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&h=100&auto=format&fit=crop"
                  alt="User 4"
                  className="size-9 object-cover rounded-full border-2 border-white shadow-sm z-[4]"
                />
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="flex gap-0.5 mb-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        className="text-yellow-400"
                        aria-hidden="true"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                </div>
                <p className="text-[13px] font-medium text-slate-600">Built for modern job seekers</p>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold max-w-[900px] text-center leading-[1.15] text-brand-navy tracking-tight"
            >
              Land your dream job with an{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                AI-powered
              </span>{" "}
              resume.
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-[540px] text-center text-base sm:text-lg text-slate-500 my-8 leading-relaxed">
              Create, edit, and download professional, ATS-friendly resumes in minutes with intelligent AI assistance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                to="/app"
                className="w-full sm:w-auto group bg-brand-primary hover:bg-brand-primary-hover text-white rounded-full px-8 h-12 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm hover:shadow-md font-medium"
              >
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
              <button className="w-full sm:w-auto group flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 rounded-full px-8 h-12 text-slate-700 font-medium active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:text-brand-primary transition-colors"
                  aria-hidden="true"
                >
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                  <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                </svg>
                <span>Try demo</span>
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-20 w-full max-w-4xl px-4 hidden sm:block">
              <div className="text-center mb-8">
                <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Create resumes that stand out</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
