"use client";

import { motion, type Variants } from "framer-motion";

const lineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.1, delay, ease: "easeOut" },
  }),
};

export function ConstructionLines({ compact = false }: { compact?: boolean }) {
  return (
    <motion.svg
      className={`construction-lines ${compact ? "construction-lines-compact" : ""}`}
      viewBox="0 0 1200 720"
      fill="none"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.path
        d="M58 116H438L514 190H822L900 268H1140"
        stroke="currentColor"
        strokeWidth="1"
        variants={lineVariants}
        custom={0.05}
      />
      <motion.path
        d="M180 612H438L586 464H810L940 334"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="8 10"
        variants={lineVariants}
        custom={0.18}
      />
      <motion.path
        d="M968 84L762 290L830 358L604 584"
        stroke="currentColor"
        strokeWidth="1"
        variants={lineVariants}
        custom={0.28}
      />
      <motion.path
        d="M84 342H302L378 266H512"
        stroke="currentColor"
        strokeWidth="1"
        variants={lineVariants}
        custom={0.35}
      />
      <motion.circle cx="438" cy="116" r="7" stroke="currentColor" variants={lineVariants} custom={0.45} />
      <motion.circle cx="810" cy="464" r="9" stroke="currentColor" variants={lineVariants} custom={0.55} />
      <motion.circle cx="940" cy="334" r="4" fill="currentColor" variants={lineVariants} custom={0.62} />
      <motion.rect x="650" y="148" width="168" height="94" stroke="currentColor" variants={lineVariants} custom={0.72} />
    </motion.svg>
  );
}
