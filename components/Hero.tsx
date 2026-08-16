"use client";

import { motion, type Variants, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GeometricBackground } from "./GeometricBackground";
import { profile } from "@/lib/data";

const reveal: Variants = {
  hidden: { y: 28, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 90, damping: 24 });
  const smoothY = useSpring(my, { stiffness: 90, damping: 24 });
  const x = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const y = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);

  return (
    <section
      id="top"
      className="hero-section"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set((event.clientX - rect.left) / rect.width - 0.5);
        my.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <GeometricBackground />
      <motion.div className="hero-parallax" style={{ x, y }} aria-hidden="true">
        <span className="hero-node hero-node-a" />
        <span className="hero-node hero-node-b" />
        <span className="hero-diagonal" />
      </motion.div>
      <div className="hero-inner">
        <motion.p className="technical-kicker" variants={reveal} initial="hidden" animate="visible" custom={0.35}>
          01 / Introduction
        </motion.p>
        <motion.h1 className="hero-title" variants={reveal} initial="hidden" animate="visible" custom={0.45}>
          <span>{profile.firstName}</span>
          <span>{profile.lastName}</span>
        </motion.h1>
        <motion.div className="hero-role" variants={reveal} initial="hidden" animate="visible" custom={0.58}>
          <span>{profile.role}</span>
          <span>{profile.secondaryRole}</span>
        </motion.div>
        <motion.p className="hero-copy" variants={reveal} initial="hidden" animate="visible" custom={0.7}>
          Building digital experiences across web, mobile, AI and IoT.
        </motion.p>
        <motion.div className="hero-meta" variants={reveal} initial="hidden" animate="visible" custom={0.82}>
          <span>Computer Studies Undergraduate</span>
          <span>{profile.location}</span>
          <span>Web / Mobile / AI / IoT</span>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <span />
        Scroll
      </a>
    </section>
  );
}
