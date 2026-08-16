"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";

export function Skills() {
  return (
    <section id="skills" className="site-section skills-section">
      <div className="section-shell">
        <SectionLabel number="05" label="Skills" />
        <div className="skills-heading">
          <p className="technical-kicker">Capability Network</p>
          <h2>Software stack mapped as a connected diagram.</h2>
        </div>
        <div className="skill-network">
          <motion.div
            className="skill-core"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            Development
          </motion.div>
          <div className="skill-branches">
            {skillGroups.map((group, index) => (
              <motion.article
                className="skill-node"
                key={group.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <span className="node-point" />
                <h3>{group.name}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
