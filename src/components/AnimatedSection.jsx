import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

/**
 * Wrapper component that adds scroll-triggered fade-in animation
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {number} props.delay - Animation delay in seconds (default: 0)
 * @param {number} props.threshold - Intersection threshold (default: 0.1)
 */
export function AnimatedSection({ children, delay = 0, threshold = 0.1, ...props }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
