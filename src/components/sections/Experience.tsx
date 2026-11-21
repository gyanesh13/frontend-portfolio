"use client";

import { motion, useReducedMotion } from "motion/react";

const experiences = [
  {
    number: "01",
    company: "Concentrix Catalyst",
    role: "Software Engineer II",
    period: "JUN 2025 — PRESENT",
    current: true,
    description:
      "Building and modernizing enterprise ECM experiences with scalable React interfaces, micro-frontend architecture, and performance-focused UI engineering.",
    highlights: [
      "Developed end-to-end UI features using React and Micro-frontends.",
      "Integrated REST APIs and managed application state with Redux.",
      "Modernized existing interfaces to meet evolving client requirements.",
      "Delivered onboarding, booking, and data-analysis features.",
    ],
    technologies: ["REACT.JS", "REDUX", "MICRO-FRONTENDS", "REST APIS", "CSS3"],
  },
  {
    number: "02",
    company: "Accenture",
    role: "Application Development Senior Analyst",
    period: "SEP 2021 — MAY 2025",
    current: false,
    description:
      "Created reusable enterprise web experiences with React and Adobe Experience Manager, focusing on maintainable components, API integrations, and accessible interfaces.",
    highlights: [
      "Developed reusable React interfaces and UI components.",
      "Built AEM components with HTL, JavaScript, CSS, and Clientlibs.",
      "Worked with Editable Templates and Experience Fragments.",
      "Integrated GraphQL and REST APIs and improved frontend performance.",
    ],
    technologies: ["REACT.JS", "AEM", "HTL", "GRAPHQL", "REDUX", "JAVASCRIPT"],
  },
];

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="gp-exp" id="experience" aria-labelledby="experience-heading">
      <div className="gp-exp__container">
        <div className="gp-exp__topline">
          <span><b>02 /</b> CAREER JOURNEY</span>
          <span>EXPERIENCE / 2021 — NOW</span>
        </div>

        <div className="gp-exp__layout">
          <motion.div
            className="gp-exp__intro"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="gp-exp__eyebrow"><span className="gp-exp__eyebrow-line" /> WHAT I'VE BUILT</div>
            <h2 id="experience-heading">WORK<span>.</span><br />EXPERIENCE</h2>
            <p>
              From reusable UI components to complex enterprise platforms,
              I focus on frontend systems that are scalable, intuitive,
              and built to last.
            </p>
            <div className="gp-exp__signature">
              <strong>5+</strong>
              <span>YEARS OF<br />FRONTEND ENGINEERING</span>
            </div>
          </motion.div>

          <div className="gp-exp__timeline">
            {experiences.map((item, index) => (
              <motion.article
                className="gp-exp__entry"
                key={item.number}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
              >
                <div className="gp-exp__entry-top">
                  <span className="gp-exp__number">{item.number} / 02</span>
                  <span className="gp-exp__period">{item.period}</span>
                </div>

                <div className="gp-exp__company-row">
                  <h3>{item.company}</h3>
                  {item.current && (
                    <span className="gp-exp__current"><span /> CURRENT</span>
                  )}
                </div>
                <p className="gp-exp__role">{item.role}</p>
                <p className="gp-exp__description">{item.description}</p>

                <div className="gp-exp__detail-label">SELECTED CONTRIBUTIONS</div>
                <ul className="gp-exp__highlights">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="gp-exp__tags" aria-label="Technologies used">
                  {item.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <div className="gp-exp__bottomline">
          <span>ENGINEERING WITH INTENTION</span>
          <span>02 — 06</span>
        </div>
      </div>
    </section>
  );
}
