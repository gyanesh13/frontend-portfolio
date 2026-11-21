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
  visual: "workflow" | "experience" | "architecture" | "management";
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
  {
    number: "03",
    category: "CONCENTRIX / FRONTEND ARCHITECTURE",
    title: "Digital Experience Platform — Architecture",
    summary:
      "Leading frontend architecture and system design for large-scale React applications, with modular micro-frontends, shared state and performance-focused engineering.",
    challenge:
      "Designing scalable, independently deployable frontend modules while keeping application flows, integrations, performance and security maintainable at enterprise scale.",
    contributions: [
      "Owned frontend architecture and system design for large-scale React.js applications, defining scalable application structures, component architecture, state-management strategies, API integration patterns and technical solutions based on business requirements.",
      "Engineered micro-frontend architecture with Redux, defining module boundaries, shared-state patterns, inter-module communication and reusable components for scalable, independently deployable frontend modules.",
      "Led performance and scalability initiatives, identifying architectural bottlenecks in rendering, API interactions, state management and application flows to improve responsiveness, maintainability and stability.",
      "Managed end-to-end frontend engineering: evaluated requirements, drove technical decisions, resolved complex production and security issues, and maintained alignment with enterprise standards.",
    ],
    technologies: ["REACT.JS", "MICRO-FRONTENDS", "REDUX", "REST APIS", "SYSTEM DESIGN", "PERFORMANCE"],
    visual: "architecture",
  },
  {
    number: "04",
    category: "CONCENTRIX / AEM + REACT",
    title: "Product Management Platform",
    summary:
      "Developing reusable AEM and React interfaces with dynamic content delivery, API integrations and enterprise-grade frontend engineering.",
    challenge:
      "Supporting flexible content authoring and connected React experiences while resolving AEM Forms rendering and integration issues and improving accessibility and cross-browser compatibility.",
    contributions: [
      "Developed and customized reusable AEM components using HTL, CSS, JavaScript, Clientlibs, Editable Templates and Experience Fragments; integrated GraphQL and REST APIs for dynamic content delivery.",
      "Delivered React.js UI features with reusable component architecture, Redux/state management, REST API integrations and event-driven communication, while optimizing performance, accessibility and cross-browser compatibility.",
      "Resolved complex AEM Forms UI, rendering and integration issues; used AI prompt engineering to accelerate UI development and supported enterprise delivery with GitLab, Docker and Kubernetes.",
    ],
    technologies: ["AEM", "HTL", "REACT.JS", "REDUX", "GRAPHQL", "REST APIS", "GITLAB", "DOCKER", "KUBERNETES"],
    visual: "management",
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
        <span>{variant === "workflow" ? "enterprise / workflow" : variant === "experience" ? "digital / experience" : variant === "architecture" ? "react / micro-frontends" : "aem / product management"}</span>
        <span>↗</span>
      </div>

      {variant === "architecture" ? (
        <div className="gp-work__architecture">
          <div className="gp-work__arch-top">
            <span>FRONTEND SYSTEM DESIGN</span>
            <strong>MODULAR / SCALABLE</strong>
          </div>
          <div className="gp-work__arch-shell">
            <span>APPLICATION SHELL</span>
            <strong>React.js Experience</strong>
          </div>
          <div className="gp-work__arch-connector" />
          <div className="gp-work__arch-modules">
            <div><small>01 / MODULE</small><strong>Experience UI</strong></div>
            <div><small>02 / MODULE</small><strong>Shared Features</strong></div>
            <div><small>03 / MODULE</small><strong>API Layer</strong></div>
          </div>
          <div className="gp-work__arch-connector" />
          <div className="gp-work__arch-state"><span>SHARED STATE</span><strong>REDUX</strong><span>REST APIs ↗</span></div>
          <div className="gp-work__arch-footer">MICRO-FRONTENDS <span>•</span> INDEPENDENT DEPLOYMENT</div>
        </div>
      ) : variant === "management" ? (
        <div className="gp-work__management">
          <div className="gp-work__management-side">
            <PanelsTopLeft size={18} strokeWidth={1.6} />
            <span className="is-selected" /><span /><span /><span />
          </div>
          <div className="gp-work__management-main">
            <div className="gp-work__mini-eyebrow">AEM / CONTENT WORKSPACE</div>
            <div className="gp-work__management-heading"><strong>Product content</strong><span>AUTHOR MODE</span></div>
            <div className="gp-work__management-hero">
              <small>REUSABLE COMPONENT SYSTEM</small>
              <b>Build once.<br />Deliver dynamically.</b>
            </div>
            <div className="gp-work__management-cards">
              <div><span>COMPONENT</span><strong>HTL + CSS</strong></div>
              <div><span>CONTENT API</span><strong>GRAPHQL</strong></div>
              <div><span>REACT UI</span><strong>REDUX</strong></div>
            </div>
            <div className="gp-work__management-status"><span>●</span> FORMS / INTEGRATIONS <strong>CONNECTED</strong></div>
          </div>
        </div>
      ) : workflow ? (
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
          <span>ENTERPRISE PROJECTS / {String(projects.length).padStart(2, "0")}</span>
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
                  <span>{project.number} / {String(projects.length).padStart(2, "0")}</span>
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
