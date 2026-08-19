import { Zap, FileText, Layout, Sparkles, Send, Download } from "lucide-react";
import Title from "./Title";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div id="features" className="flex flex-col items-center py-24 px-6 md:px-12 bg-[#030712] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center z-10"
      >
        <div className="flex items-center gap-2 text-sm text-brand-primary bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4 py-1.5 mb-6">
          <Zap className="size-4" />
          <span className="font-medium">Lightning Fast</span>
        </div>
        <Title
          title="Everything you need, in one place."
          description="A powerful suite of tools designed to get you hired faster. From intelligent AI suggestions to pixel-perfect PDF exports."
        />
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl w-full mx-auto mt-16 z-10">
        
        {/* Large Card 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-1 md:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-end hover:bg-white/10 transition-colors"
        >
          <div className="absolute top-0 right-0 p-8 text-brand-primary/30 group-hover:text-brand-primary/50 transition-colors">
            <Sparkles className="size-24" />
          </div>
          <div className="size-12 rounded-xl bg-gradient-to-br from-brand-primary to-purple-500 flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/25">
            <Sparkles className="size-6 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">AI-Powered Magic</h3>
          <p className="text-slate-400 leading-relaxed text-base">
            Never stare at a blank page again. Generate impactful professional summaries, dynamic job descriptions, and tailored achievements with a single click.
          </p>
        </motion.div>

        {/* Small Card 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
              <FileText className="size-6 text-white" />
            </div>
            <div className="flex gap-2">
              <span className="w-16 h-2 rounded-full bg-slate-700/50"></span>
              <span className="w-8 h-2 rounded-full bg-brand-primary"></span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">ATS-Optimized</h3>
          <p className="text-slate-400 text-sm">
            Layouts mathematically designed to pass through Applicant Tracking Systems flawlessly.
          </p>
        </motion.div>

        {/* Small Card 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="col-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy to-brand-primary border border-white/10 p-8"
        >
          <div className="size-12 rounded-xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-md">
            <Layout className="size-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Beautiful Themes</h3>
          <p className="text-white/80 text-sm">
            Stand out visually with modern, customizable templates.
          </p>
        </motion.div>

        {/* Small Card 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="col-span-1 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors flex flex-col items-center justify-center text-center"
        >
          <div className="size-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-transform duration-500">
            <Download className="size-8 text-slate-300" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-1">Export Anywhere</h3>
          <p className="text-slate-400 text-xs">High-res PDF generation</p>
        </motion.div>

      </div>
    </div>
  );
};

export default Features;
