"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedTestimonialCardProps {
  children: ReactNode;
  index: number;
  className?: string;
}

export default function AnimatedTestimonialCard({
  children,
  index,
  className = "",
}: AnimatedTestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
