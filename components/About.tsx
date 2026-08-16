"use client";

import { motion } from "framer-motion";
import { focusAreas } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";
import { GeometricBackground } from "./GeometricBackground";

export function About() {
  return (
    <section id="about" className="site-section about-section">
      <GeometricBackground compact />
      <div className="section-shell">
        <SectionLabel number="02" label="About" />
        <div className="about-layout">
          <motion.div
            className="about-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
          >
            <p className="technical-kicker">Computer Studies</p>
            <h2>Undergraduate building practical digital systems.</h2>
          </motion.div>
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <p>
              Final-year Computer Studies undergraduate and software developer interested in web,
              mobile, AI/ML, IoT and creative technology. The work sits between practical product
              thinking and technical experimentation.
            </p>
            <div className="focus-grid" aria-label="Focus areas">
              {focusAreas.map((area, index) => (
                <span key={area}>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
