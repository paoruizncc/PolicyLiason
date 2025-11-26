"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedHeroProps {
  children: ReactNode;
  className?: string;
}

interface AnimatedHeroItemProps {
  children: ReactNode;
  className?: string;
  order: 1 | 2 | 3 | 4 | 5;
}

const delays = {
  1: 0,
  2: 0.2,
  3: 0.35,
  4: 0.5,
  5: 0.6,
};

export function AnimatedHeroContainer({ children, className = "" }: AnimatedHeroProps) {
  return <div className={className}>{children}</div>;
}

export function AnimatedHeroItem({ children, className = "", order }: AnimatedHeroItemProps) {
  const isLogo = order === 1;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: isLogo ? 0 : 20,
        scale: isLogo ? 0.9 : 1,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: isLogo ? 0.6 : 0.5,
        delay: delays[order],
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedHeroContainer;
