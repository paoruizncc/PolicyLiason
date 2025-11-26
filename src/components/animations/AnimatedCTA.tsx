"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedCTAProps {
  children: ReactNode;
  className?: string;
}

interface AnimatedCTAButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export function AnimatedCTAContainer({ children, className = "" }: AnimatedCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCTAButton({ children, href, className = "" }: AnimatedCTAButtonProps) {
  return (
    <motion.a
      href={href}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
}

export default AnimatedCTAContainer;
