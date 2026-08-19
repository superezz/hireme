import { motion, useReducedMotion } from "framer-motion";

const Banner = () => {
  const shouldReduceMotion = useReducedMotion();

  const bannerVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }
    : {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
      };

  const badgeVariants = shouldReduceMotion
    ? {}
    : {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: [0.9, 1.1, 1], opacity: 1, transition: { delay: 0.3, duration: 0.4 } },
      };

  return (
    <motion.div
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-50 w-full py-2.5 font-medium text-sm text-slate-300 text-center bg-[#02040a] border-b border-white/10"
    >
      <p className="flex items-center justify-center">
        <motion.span
          variants={badgeVariants}
          className="px-3 py-1 rounded-full text-white bg-brand-primary mr-3 text-xs tracking-wide shadow-[0_0_10px_rgba(82,69,255,0.5)]"
        >
          New
        </motion.span>
        AI Resume Feature Added
      </p>
    </motion.div>
  );
};

export default Banner;
