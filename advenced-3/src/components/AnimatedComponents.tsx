import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface acProps {
  children: ReactNode;
}

const componentsVariants: Variants = {
  start: {
    y: -8,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -8,
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};

const AnimatedComponents = ({ children }: acProps) => {
  return (
    <motion.div
      variants={componentsVariants}
      initial="start"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponents;
