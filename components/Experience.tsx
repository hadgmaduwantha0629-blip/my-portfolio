"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 35%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="site-section experience-section" ref={ref}>
      <div className="section-shell">
        <SectionLabel number="04" label="Experience" />
        <div className="timeline-layout">
          <div className="timeline-title">
            <p className="technical-kicker">Chronology</p>
            <h2>Experience and education, drawn as a system path.</h2>
          </div>
          <div className="timeline">
            <span className="timeline-base" aria-hidden="true" />
            <motion.span className="timeline-progress" style={{ scaleY }} aria-hidden="true" />
            {timeline.map((item, index) => (
              <motion.article
                className="timeline-item"
                key={item.label}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <span className="timeline-dot" />
                <span className="timeline-number">{item.number}</span>
                <div>
                  <p>{item.meta}</p>
                  <h3>{item.label}</h3>
                  <strong>{item.organization}</strong>
                  <span>{item.detail}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
