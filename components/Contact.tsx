"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";

export function Contact() {
  return (
    <section id="contact" className="site-section contact-section">
      <div className="contact-geometry" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="section-shell">
        <SectionLabel number="06" label="Contact" />
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <h2>
            Let&apos;s build
            <span>something.</span>
          </h2>
          <div className="contact-links" aria-label="Contact links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.cv} download>CV Download</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
