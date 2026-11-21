
"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Activity,
  BarChart3,
  Layers3,
  PanelsTopLeft,
  ShoppingCart,
} from "lucide-react";

const projects = [
  {
    number: "01",
    company: "CONCENTRIX",
    category: "ENERGY MANAGEMENT · HVAC",
    title: "Energy Conservation Management",
    description:
      "Developed and enhanced energy conservation capabilities for HVAC systems, focusing on operational efficiency and energy optimization.",
    challenge:
      "Optimizing HVAC operations across different pumping configurations while translating equipment conditions into actionable energy recommendations.",
    contributions: [
      "Enhanced ECM features for HVAC systems and chilled-water flow-rate setpoint optimization.",
      "Worked across primary, secondary and single-loop pumping configurations.",
      "Implemented DSL and rule-based logic using operating conditions and equipment parameters.",
      "Built React data-driven UI components and REST API integrations for equipment configuration and energy insights.",
    ],
    technologies: [
      "React.js",
      "REST APIs",
      "DSL",
      "Rule Engine",
      "HVAC",
      "Energy Optimization",
    ],
    icon: Activity,
  },
  {
    number: "02",
    company: "CONCENTRIX",
    category: "ENTERPRISE APPLICATION · ANALYTICS",
    title: "Business Analytics Platform",
    description:
      "Modernized a complex enterprise web application by transforming legacy interfaces into responsive, high-performance user experiences.",
    challenge:
      "Existing interfaces needed performance improvements, simpler navigation and smoother multi-step business workflows.",
    contributions: [
      "Modernized legacy UI screens into responsive interfaces based on client requirements.",
      "Optimized React rendering and Redux updates to reduce unnecessary re-renders.",
      "Developed Booking workflows and Data Analysis dashboards on a unified interface.",
      "Integrated REST APIs with asynchronous data handling, dynamic rendering and loading/error states.",
    ],
    technologies: [
      "React.js",
      "Micro-frontends",
      "Redux",
      "REST APIs",
      "JavaScript",
      "CSS3",
    ],
    icon: BarChart3,
  },
  {
    number: "03",
    company: "CONCENTRIX",
    category: "FRONTEND ARCHITECTURE · SYSTEM DESIGN",
    title: "Digital Experience Platform",
    description:
      "Owned frontend architecture and engineering initiatives for large-scale React applications, focusing on modularity, scalability and maintainability.",
    challenge:
      "Building scalable application structures with clear module boundaries, shared state and reliable communication across independent frontend modules.",
    contributions: [
      "Defined scalable application structure, component architecture and state-management strategies.",
      "Implemented Micro-frontend architecture with Redux, shared state and inter-module communication.",
      "Designed reusable components and modular frontend capabilities.",
      "Addressed rendering, API interaction, scalability and production-level engineering issues.",
    ],
    technologies: [
      "React.js",
      "Micro-frontends",
      "Redux",
      "Frontend System Design",
      "REST APIs",
      "Component Architecture",
    ],
    icon: Layers3,
  },
  {
    number: "04",
    company: "CONCENTRIX",
    category: "CONTENT MANAGEMENT · AEM",
    title: "Product Management Platform",
    description:
      "Developed content-driven digital experiences using Adobe Experience Manager alongside React-based application features.",
    challenge:
      "Delivering reusable, consistent interfaces while supporting content management, API integrations and cross-platform compatibility.",
    contributions: [
      "Developed AEM components using HTL, CSS, JavaScript and Client Libraries.",
      "Worked with Editable Templates and Experience Fragments.",
      "Integrated GraphQL and REST APIs with React UI features and Redux.",
      "Resolved AEM Forms rendering and integration issues while improving accessibility and cross-browser compatibility.",
    ],
    technologies: [
      "AEM",
      "HTL",
      "React.js",
      "Redux",
      "GraphQL",
      "REST APIs",
    ],
    icon: PanelsTopLeft,
  },
  {
    number: "05",
    company: "ACCENTURE",
    category: "WEB APPLICATIONS · E-COMMERCE",
    title: "Hotel Management & E-Commerce",
    description:
      "Built and optimized scalable web application experiences using modern React technologies, reusable UI components and frontend best practices.",
    challenge:
      "Improving application performance, code reusability and user experience across complex web application workflows.",
    contributions: [
      "Developed scalable interfaces using React.js, Next.js, Redux and TypeScript.",
      "Built reusable UI components to improve consistency and code reuse.",
      "Optimized page loading and application performance.",
      "Applied accessibility and cross-browser compatibility best practices.",
    ],
    impact: [
      "30% improved application performance",
      "50% higher concurrent-user capacity",
      "45% better code reuse",
      "30% reduced page-load time",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "HTML5",
      "CSS3",
    ],
    icon: ShoppingCart,
  },
];

export default function Projects() {
  return (
    <section className="content-section" id="work">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">PROFESSIONAL EXPERIENCE</div>

          <h2 className="section-title">
            Engineering in action.
          </h2>

          <p className="section-description">
            Selected enterprise projects showcasing frontend architecture,
            application modernization, performance engineering and
            business-focused product development.
          </p>
        </motion.div>

        <div className="project-showcase">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className="case-study-card"
                key={project.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 2) * 0.12,
                }}
                whileHover={{ y: -5 }}
              >
                <div className="case-study-top">
                  <div className="case-study-icon">
                    <Icon size={23} />
                  </div>

                  <span className="case-study-number">
                    {project.number}
                  </span>
                </div>

                <div className="case-study-category">
                  {project.company} · {project.category}
                </div>

                <h3>{project.title}</h3>

                <p className="case-study-description">
                  {project.description}
                </p>

                <div className="case-study-challenge">
                  <span>THE CHALLENGE</span>
                  <p>{project.challenge}</p>
                </div>

                <div className="case-study-contribution">
                  <span>MY CONTRIBUTIONS</span>

                  <ul>
                    {project.contributions.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                {project.impact && (
                  <div className="case-study-impact">
                    <span>SELECTED IMPACT</span>

                    <div className="impact-list">
                      {project.impact.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span className="hero-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a className="case-study-link" href="#contact">
                  Discuss similar work
                  <ArrowUpRight size={15} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
