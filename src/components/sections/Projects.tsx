"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Layers3, PanelsTopLeft } from "lucide-react";

type Project = {
  number: string;
  category: string;
  title: string;
  summary: string;
  challenge: string;
  contributions: string[];
  technologies: string[];
  visual: "workflow" | "experience";
};

const projects: Project[] = [
  {
    number: "01",
    category: "ENTERPRISE APPLICATION / ECM",
    title: "Enterprise ECM Platform",
    summary:
      "Modernizing complex enterprise workflows with reusable React interfaces, micro-frontend architecture and thoughtful UI engineering.",
    challenge:
      "Legacy screens needed a more consistent experience, improved responsiveness and smoother multi-step workflows.",
    contributions: [
      "Owned end-to-end frontend feature development.",
      "Integrated REST APIs and managed shared state with Redux.",
      "Delivered onboarding, booking and data-analysis interfaces.",
      "Modernized existing screens for usability and performance.",
    ],
    technologies: ["REACT.JS", "REDUX", "MICRO-FRONTENDS", "REST APIS", "CSS3"],
    visual: "workflow",
  },
  {
    number: "02",
    category: "DIGITAL EXPERIENCE / AEM",
    title: "Digital Experience Platform",
    summary:
      "Building reusable, content-driven digital experiences with Adobe Experience Manager, React and modern API integrations.",
    challenge:
      "Creating consistent, maintainable interfaces while supporting flexible content authoring and connected application experiences.",
    contributions: [
      "Developed AEM components using HTL, CSS and JavaScript.",
      "Worked with Clientlibs, Editable Templates and Experience Fragments.",
      "Integrated GraphQL and REST APIs.",
      "Built React features with Redux state management.",
    ],
    technologies: ["AEM", "REACT.JS", "HTL", "GRAPHQL", "REDUX", "JAVASCRIPT"],
    visual: "experience",
  },
];

function ProjectVisual({ variant }: { variant: Project["visual"] }) {
  const workflow = variant === "workflow";

  return (
    <div
      className={`gp-work__visual gp-work__visual--${variant}`}
      aria-hidden="true"
    >
      <div className="gp-work__visual-top">
        <div className="gp-work__window-dots"><i /><i /><i /></div>
        <span>{workflow ? "enterprise / workflow" : "digital / experience"}</span>
        <span>↗</span>
      </div>

      {workflow ? (
        <div className="gp-work__dashboard">
          <div className="gp-work__dashboard-sidebar">
            <Layers3 size={17} strokeWidth={1.6} />
            <span className="is-selected" />
            <span /><span /><span />
          </div>
          <div className="gp-work__dashboard-main">
            <div className="gp-work__mini-eyebrow">WORKFLOW OVERVIEW</div>
            <div className="gp-work__dashboard-heading">
              <strong>Enterprise workspace</strong>
              <span>SYSTEM VIEW</span>
            </div>
            <div className="gp-work__metric-grid">
              <div><small>FRONTEND</small><b>UI</b><em>↗</em></div>
              <div><small>INTEGRATION</small><b>API</b><em>↗</em></div>
              <div><small>ARCHITECTURE</small><b>MFE</b><em>→</em></div>
            </div>
            <div className="gp-work__chart">
              <div className="gp-work__chart-label">ACTIVITY / LAST 7 DAYS</div>
              <div className="gp-work__bars">
                {[34, 56, 45, 72, 62, 87, 68, 95, 74, 100, 78, 89].map((h, i) => (
                  <span key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="gp-work__dashboard-rows"><span /><span /><span /></div>
          </div>
        </div>
      ) : (
        <div className="gp-work__cms">
          <div className="gp-work__cms-sidebar">
            <PanelsTopLeft size={18} strokeWidth={1.6} />
            <span className="is-selected" />
            <span /><span /><span /><span />
          </div>
          <div className="gp-work__cms-main">
            <div className="gp-work__mini-eyebrow">CONTENT EXPERIENCE</div>
            <strong>Build once. Publish everywhere.</strong>
            <div className="gp-work__cms-hero">
              <div><small>MODULAR CONTENT</small><b>Digital experiences, refined.</b></div>
              <span>↗</span>
            </div>
            <div className="gp-work__cms-grid">
              <div><i /><span /><span /></div>
              <div><i /><span /><span /></div>
              <div><i /><span /><span /></div>
            </div>
          </div>
        </div>
      )}
      <span className="gp-work__visual-caption">ILLUSTRATIVE INTERFACE / NOT A PRODUCT SCREENSHOT</span>
    </div>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="gp-work" id="work" aria-labelledby="gp-work-heading">
      <div className="gp-work__container">
        <div className="gp-work__topline">
          <span><b>03 /</b> SELECTED WORK</span>
          <span>ENTERPRISE PROJECTS / 02</span>
        </div>

        <motion.div
          className="gp-work__heading"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div>
            <span className="gp-work__eyebrow">ENGINEERING IN ACTION</span>
            <h2 id="gp-work-heading">SELECTED<br /><span>WORK.</span></h2>
          </div>
          <p>
            A closer look at enterprise frontend work — from complex
            application workflows to reusable content-driven experiences.
          </p>
        </motion.div>

        <div className="gp-work__list">
          {projects.map((project, index) => (
            <motion.article
              className={`gp-work__project ${index % 2 ? "gp-work__project--reverse" : ""}`}
              key={project.number}
              initial={reduceMotion ? false : { opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.13 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              <div className="gp-work__media">
                <ProjectVisual variant={project.visual} />
                <div className="gp-work__media-footer">
                  <span>FIG. {project.number}</span>
                  <span>UI / SYSTEMS / ARCHITECTURE</span>
                </div>
              </div>

              <div className="gp-work__details">
                <div className="gp-work__project-meta">
                  <span>{project.number} / 02</span>
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="gp-work__summary">{project.summary}</p>

                <div className="gp-work__challenge">
                  <span>THE CHALLENGE</span>
                  <p>{project.challenge}</p>
                </div>

                <div className="gp-work__contributions">
                  <span>MY CONTRIBUTIONS</span>
                  <ul>
                    {project.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                </div>

                <div className="gp-work__tags" aria-label="Technologies used">
                  {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                </div>

                <a href="#contact" className="gp-work__link">
                  DISCUSS SIMILAR WORK <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="gp-work__bottomline">
          <span>BUILT FOR SCALE. DESIGNED FOR PEOPLE.</span>
          <span>INDEPENDENT BUILDS FOLLOW BELOW</span>
        </div>
      </div>
    </section>
  );
}
