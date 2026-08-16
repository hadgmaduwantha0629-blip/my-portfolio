"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";

export function Projects() {
  return (
    <section id="projects" className="site-section projects-section">
      <div className="section-shell">
        <SectionLabel number="03" label="Projects" />
        <div className="projects-intro">
          <h2>Case studies as technical drawings.</h2>
          <p>
            Large editorial frames for AI, embedded, mobile and full-stack work, composed with
            precise linework and restrained motion.
          </p>
        </div>
        <div className="project-stack">
          {projects.map((project, index) => (
            <motion.article
              className="project-case backdrop-blur-md bg-white/5 border border-white/10 shadow-xl rounded-2xl overflow-hidden relative"
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
            >
              <div className="project-case-head p-6">
                <span className="project-number">{project.number}</span>
                <div>
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
              </div>
              <div className="project-visual" aria-label={`${project.title} visual frame`}>
                <div className="project-visual-grid" aria-hidden="true" />
                <span className="corner corner-tl" />
                <span className="corner corner-tr" />
                <span className="corner corner-bl" />
                <span className="corner corner-br" />
                <span className="scan-line" />
                <span className="visual-coordinate">asset.{project.number}</span>
              </div>
              <div className="project-case-foot">
                <p>{project.summary}</p>
                <ul aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a href="#contact" className="project-link">
                  Discuss project
                  <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
