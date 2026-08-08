import { Reveal } from "./Reveal";

const CallToAction = () => {
  return (
    <Reveal delay={0.2}>
      <div 
        id="cta"
        className="border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-6 sm:px-16 mt-28 mb-10">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-6 md:px-10 border-x border-dashed border-slate-200 py-16 sm:py-20 w-full">
          <p className="text-2xl font-medium max-w-md text-brand-navy leading-tight">
            Build a Professional Resume That Helps You Stand Out and Get Hired
          </p>
          <a
            href="/app"
            className="group flex items-center gap-2 rounded-full py-4 px-10 bg-brand-primary hover:bg-brand-primary-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-white font-medium whitespace-nowrap active:scale-95"
          >
            <span>Get Started</span>
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
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </Reveal>
  );
};

export default CallToAction;
