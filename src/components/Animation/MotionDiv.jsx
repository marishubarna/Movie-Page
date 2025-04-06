import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MotionDiv({ children, delay = 0 }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
      }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
