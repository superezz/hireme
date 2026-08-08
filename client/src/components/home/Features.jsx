import { Zap, FileText, Layout, Sparkles } from "lucide-react";
import Title from "./Title";
import { Reveal } from "./Reveal";

const Features = () => {
  return (
    <div id="features" className="flex flex-col items-center my-20 scroll-mt-24 px-4">
      <Reveal delay={0.1}>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-sm text-brand-primary bg-brand-light border border-brand-primary/20 rounded-full px-4 py-1.5 mb-2">
            <Zap className="size-4" />
            <span className="font-medium">Simple Process</span>
          </div>
          <Title
            title="Build your resume faster"
            description="Our streamlined process helps you create a professional, ATS-friendly resume in minutes with intelligent AI-powered tools."
          />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mx-auto mt-16">
        <Reveal delay={0.2}>
          <div className="h-full flex flex-col p-8 bg-white border border-slate-200 hover:border-brand-primary rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
            <div className="size-12 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors">
              <Sparkles className="size-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              AI-Powered Writing
            </h3>
            <p className="text-slate-600 leading-relaxed flex-1">
              Generate stronger professional summaries, experience descriptions, and perfectly tailored resume content with intelligent AI suggestions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="h-full flex flex-col p-8 bg-white border border-slate-200 hover:border-brand-navy rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
            <div className="size-12 rounded-lg bg-slate-50 text-brand-navy flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors">
              <FileText className="size-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              ATS-Friendly Formats
            </h3>
            <p className="text-slate-600 leading-relaxed flex-1">
              Create clean, professional resume layouts designed specifically to remain readable and parseable by Applicant Tracking Systems.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="h-full flex flex-col p-8 bg-white border border-slate-200 hover:border-brand-accent rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
            <div className="size-12 rounded-lg bg-purple-50 text-brand-accent flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
              <Layout className="size-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Easy Customization
            </h3>
            <p className="text-slate-600 leading-relaxed flex-1">
              Effortlessly customize colors, sections, skills, experience, and education to match your personal brand and career goals.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Features;
