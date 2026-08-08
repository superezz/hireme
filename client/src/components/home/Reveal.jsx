import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useReducedMotion } from "framer-motion";

export const Reveal = ({ children, width = "100%", delay = 0, yOffset = 30 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay } },
      }
    : {
        hidden: { opacity: 0, y: yOffset },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay } },
      };

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};
