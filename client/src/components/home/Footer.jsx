
const Footer = () => {
  return (
    <footer className="relative flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-slate-500 bg-[#030712] border-t border-white/10 z-10">
      <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
        <a href="https://superezz.com">
          <img src="/viewme-logo.png" alt="ViewMe" className="h-10 w-auto object-contain" />
        </a>
        <div>
          <p className="text-white font-semibold mb-4 text-sm">Product</p>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-white transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white transition-colors duration-200">
                Support
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white transition-colors duration-200">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white transition-colors duration-200">
                Affiliate
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-4 text-sm">Resources</p>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-white transition-colors duration-200">
                Company
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white transition-colors duration-200">
                Blogs
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white transition-colors duration-200">
                Community
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center hover:text-white transition-colors duration-200">
                Careers
                <span className="text-[10px] uppercase font-bold text-white bg-brand-primary rounded ml-2 px-1.5 py-0.5">
                  Hiring
                </span>
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white transition-colors duration-200">
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-4 text-sm">Legal</p>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-white transition-colors duration-200">
                Privacy
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white transition-colors duration-200">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col max-md:items-center max-md:text-center gap-3 items-end">
        <p className="max-w-xs text-slate-500 leading-relaxed md:text-right">
          Building professional resumes that help you stand out and land your dream job.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all duration-200">
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
              className="lucide lucide-dribbble size-5"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
              <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/superezz"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
          >
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
              className="lucide lucide-linkedin size-5"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://x.com/superezz" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all duration-200">
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
              className="lucide lucide-twitter size-5"
              aria-hidden="true"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@supereezz"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
          >
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
              className="lucide lucide-youtube size-6"
              aria-hidden="true"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
              <path d="m10 15 5-3-5-3z"></path>
            </svg>
          </a>
        </div>
        <p className="mt-4 text-center text-slate-500">
          © 2025 <a href="https://superezz.com" className="hover:text-white transition-colors">SUPEREZZ</a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
