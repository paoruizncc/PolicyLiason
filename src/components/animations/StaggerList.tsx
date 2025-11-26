"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerListProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

const containerVariants = {
  hidden: {},
  visible: (custom: { staggerDelay: number; initialDelay: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.initialDelay,
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function StaggerList({
  children,
  className = "",
  staggerDelay = 0.08,
  initialDelay = 0.3,
}: StaggerListProps) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      custom={{ staggerDelay, initialDelay }}
      className={className}
    >
      {children}
    </motion.ul>
  );
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.li variants={itemVariants} className={className}>
      {children}
    </motion.li>
  );
}

export default StaggerList;
