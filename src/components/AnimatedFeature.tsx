"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedFeatureProps {
  index: number;
  icon: ReactNode;
  title: string;
  content: string;
  bulletpoints: string[];
  button?: { enable: boolean; label: string; link: string };
  checkIcon: ReactNode;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function AnimatedFeature({
  index,
  icon,
  title,
  content,
  bulletpoints,
  button,
  checkIcon,
}: AnimatedFeatureProps) {
  const isEven = index % 2 === 0;

  return (
    <section className={`section-sm ${isEven ? "bg-gradient" : ""}`}>
      <div className="container">
        <div className="row items-center justify-between">
          {/* Icon */}
          <motion.div
            className={`mb-6 md:col-5 flex justify-center items-center md:mb-0 ${
              !isEven ? "md:order-2" : ""
            }`}
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {icon}
          </motion.div>

          {/* Content */}
          <div className={`md:col-7 lg:col-6 ${!isEven ? "md:order-1" : ""}`}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
              <h2
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p
                className="mb-8 text-lg"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </motion.div>

            {/* Bullet points with stagger */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {bulletpoints.map((bullet, i) => (
                <motion.li
                  key={i}
                  className="relative mb-4 pl-6"
                  variants={bulletVariants}
                >
                  <span className="absolute left-0 top-1.5">{checkIcon}</span>
                  <span dangerouslySetInnerHTML={{ __html: bullet }} />
                </motion.li>
              ))}
            </motion.ul>

            {/* Button */}
            {button?.enable && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              >
                <a className="btn btn-primary mt-5" href={button.link}>
                  {button.label}
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
