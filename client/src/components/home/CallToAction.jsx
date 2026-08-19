import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <div id="cta" className="relative w-full overflow-hidden mt-10">
      
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(45deg,#5245ff,#7c3aed,#121870,#5245ff)] bg-[length:400%_400%] animate-aurora opacity-50 blur-[50px] scale-150 transform-gpu"></div>
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center p-12 md:p-20 rounded-[3rem] bg-black/40 backdrop-blur-2xl border border-white/20 shadow-[0_0_80px_rgba(82,69,255,0.2)]"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Ready to stand out?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
            Join thousands of professionals who have already accelerated their careers with ViewMe's AI resume builder.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="/app?state=register"
              className="group flex items-center justify-center gap-2 rounded-full py-4 px-10 bg-white text-brand-navy hover:bg-slate-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 font-semibold text-lg"
            >
              <span>Build your resume free</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">No credit card required</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;
