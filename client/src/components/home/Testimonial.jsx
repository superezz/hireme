import Title from "./Title";
import { BookUserIcon } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ViewMe made creating my resume an absolute breeze. The AI suggestions were spot on.",
      name: "Richard Nelson",
      role: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
    },
    {
      quote: "This platform helped me land my dream job twice as fast as expected.",
      name: "Ava Johnson",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
    },
    {
      quote: "Incredible templates and a fantastic experience from start to finish.",
      name: "Liam Carter",
      role: "Engineering Lead",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60"
    },
    {
      quote: "A seamless resume builder that saved me countless hours of formatting.",
      name: "Noah Patel",
      role: "Data Analyst",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop"
    },
    {
      quote: "The user experience is outstanding and customizing the sections was a breeze.",
      name: "Oliver Brooks",
      role: "Marketing Director",
      avatar: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png"
    },
    {
      quote: "My resume has never looked better. Highly recommended for anyone job hunting.",
      name: "Sophia Lee",
      role: "Product Designer",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60"
    }
  ];

  // Duplicate for seamless loop
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <div id="testimonials" className="flex flex-col items-center py-24 bg-[#030712] overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center z-10 px-4"
      >
        <div className="flex items-center gap-2 text-sm text-brand-primary bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4 py-1.5 mb-6">
          <BookUserIcon className="size-4" />
          <span className="font-medium">Loved by thousands</span>
        </div>
        <Title
          title="Don't just take our word for it"
          description="See how our platform is transforming careers and helping job seekers stand out."
        />
      </motion.div>

      <div className="relative flex w-full max-w-[100vw] mt-16 overflow-hidden">
        
        {/* Left/Right Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="flex w-max animate-marquee gap-6 py-4 px-3 hover:[animation-play-state:paused]">
          {marqueeItems.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[350px] shrink-0 bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 flex flex-col justify-between"
            >
              <p className="text-base text-slate-300 leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  className="size-12 rounded-full object-cover border border-white/10"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <h2 className="flex items-center gap-1.5 text-base text-white font-medium">
                    {testimonial.name}
                    <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.7801 5.89736C11.0185 5.65898 11.0185 5.2725 10.7801 5.03412C10.5418 4.79575 10.1552 4.79575 9.91688 5.03412L6.27923 8.6718L5.0831 7.4757C4.84472 7.23735 4.45824 7.23735 4.21987 7.4757C3.9815 7.71405 3.9815 8.10053 4.21987 8.33895L5.84759 9.96668C6.08595 10.205 6.47243 10.205 6.71085 9.96668L10.7801 5.89736Z" fill="#16a34a"/>
                    </svg>
                  </h2>
                  <p className="text-[13px] text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
