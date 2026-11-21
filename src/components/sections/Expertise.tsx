"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  GitBranch,
  Network,
  PanelsTopLeft,
  Sparkles,
  Zap,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Building responsive, scalable, and maintainable interfaces with modern frontend technologies.",
    icon: Code2,
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Architecture & Performance",
    description:
      "Designing modular frontend systems and optimizing applications for real-world performance.",
    icon: Network,
    skills: [
      "Frontend System Design",
      "Micro Frontends",
      "Component Architecture",
      "Design Patterns",
      "Low-Level Design",
      "Scalability",
      "Performance Optimization",
    ],
  },
  {
    number: "03",
    title: "Backend & API Integration",
    description:
      "Connecting interfaces to reliable services and data-driven application workflows.",
    icon: Database,
    skills: ["Node.js", "SQL", "GraphQL", "REST APIs"],
  },
  {
    number: "04",
    title: "Adobe Experience Manager",
    description:
      "Creating reusable enterprise content components and flexible digital experiences.",
    icon: PanelsTopLeft,
    skills: [
      "Adobe Experience Manager",
      "AEM Components",
      "HTL",
      "Templates",
      "Client Libraries",
      "Editable Templates",
      "Experience Fragments",
    ],
  },
  {
    number: "05",
    title: "AI-Assisted Development",
    description:
      "Using AI tools to accelerate implementation, exploration, and everyday problem-solving.",
    icon: Sparkles,
    skills: ["Claude", "Cursor AI", "GitHub Copilot", "Prompt Engineering"],
  },
  {
    number: "06",
    title: "DevOps & Developer Tools",
    description:
      "Working across version control, deployment workflows, and collaborative engineering tools.",
    icon: GitBranch,
    skills: ["Docker", "Kubernetes", "CI/CD", "Git", "GitLab", "Rally", "VS Code"],
  },
  {
    number: "07",
    title: "Energy Management",
    description:
      "Domain experience with HVAC workflows, energy conservation measures, and optimization.",
    icon: Zap,
    skills: ["HVAC Engineering", "ECM", "DSL", "Rule Engine", "Energy Optimization"],
  },
] as const;

export default function Expertise() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="gp-skills" id="expertise" aria-labelledby="gp-skills-title">
      <div className="gp-skills__container">
        <div className="gp-skills__topline">
          <span><b>05 /</b> TECHNICAL EXPERTISE</span>
          <span>CAPABILITIES & TOOLS — 2026</span>
        </div>

        <div className="gp-skills__layout">
          <motion.div
            className="gp-skills__intro"
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="gp-skills__eyebrow">WHAT I WORK WITH</div>
            <h2 id="gp-skills-title">
              THE<br />
              <span>STACK.</span>
            </h2>
            <p className="gp-skills__intro-copy">
              A practical toolkit shaped by building enterprise applications,
              scalable frontend systems, and independent digital products.
            </p>
            <div className="gp-skills__intro-rule" aria-hidden="true">
              <span />
            </div>
            <div className="gp-skills__intro-footnote">
              <span>FRONTEND FIRST.</span>
              <span>ENGINEERING ALWAYS.</span>
            </div>
          </motion.div>

          <div className="gp-skills__list" aria-label="Technology categories">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.article
                  className={`gp-skills__item${index === 0 ? " gp-skills__item--featured" : ""}`}
                  key={group.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.24), ease: "easeOut" }}
                >
                  <div className="gp-skills__item-head">
                    <span className="gp-skills__number">{group.number}</span>
                    <div className="gp-skills__icon" aria-hidden="true">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>
                    <div className="gp-skills__item-heading">
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                    </div>
                    <ArrowUpRight className="gp-skills__item-arrow" size={18} aria-hidden="true" />
                  </div>
                  <div className="gp-skills__tags" aria-label={`${group.title} technologies`}>
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="gp-skills__bottomline">
          <span>BUILDING THOUGHTFUL DIGITAL EXPERIENCES.</span>
          <a href="#contact">
            LET'S COLLABORATE <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
