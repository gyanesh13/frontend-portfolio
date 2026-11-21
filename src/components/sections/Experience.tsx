
"use client";

import { motion } from "motion/react";
import { BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    company: "Concentrix",
    role: "Frontend Developer",
    period: null,
    description:
      "Working on enterprise ECM applications, focusing on scalable React interfaces, Micro-frontend architecture and frontend performance.",
    highlights: [
      "Developed end-to-end UI features using React.js and Micro-frontends.",
      "Integrated APIs and managed application state using Redux.",
      "Modernized existing interfaces based on client requirements.",
      "Improved UI responsiveness and application performance.",
      "Delivered onboarding, Booking and Data Analysis features.",
    ],
    technologies: ["React.js", "Redux", "Micro-frontends", "REST APIs", "CSS3"],
    current: true,
  },
  {
    company: "Accenture",
    role: "Application Development Analyst",
    period: "Sep 2021 — Jun 2024",
    description:
      "Worked on enterprise digital experience platforms, building reusable frontend components and integrating modern web technologies.",
    highlights: [
      "Developed React.js interfaces and reusable UI components.",
      "Built AEM components using HTL, CSS, JavaScript and Clientlibs.",
      "Worked with Editable Templates and Experience Fragments.",
      "Integrated GraphQL and REST APIs.",
      "Improved frontend performance, accessibility and cross-browser compatibility.",
    ],
    technologies: ["React.js", "AEM", "JavaScript", "Redux", "GraphQL", "CSS"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section
      className="content-section experience-section"
      id="experience"
    >
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">MY JOURNEY</div>
          <h2 className="section-title">
            Experience & ownership.
          </h2>
          <p className="section-description">
            My professional journey building enterprise applications,
            solving frontend challenges and delivering scalable digital
            experiences.
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.article
              className="timeline-item"
              key={item.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <div className="timeline-marker">
                <BriefcaseBusiness size={15} />
              </div>

              <div className="experience-card">
                <div className="experience-heading">
                  <div className="experience-company-info">
                    {item.period && (
                      <span className="experience-period">
                        {item.period}
                      </span>
                    )}

                    <h3>{item.company}</h3>
                    <p className="experience-role">{item.role}</p>
                  </div>

                  {item.current && (
                    <span className="current-label">
                      <span className="current-dot" />
                      CURRENT
                    </span>
                  )}
                </div>

                <p className="experience-description">
                  {item.description}
                </p>

                <ul className="experience-highlights">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="project-tags">
                  {item.technologies.map((tech) => (
                    <span className="hero-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
