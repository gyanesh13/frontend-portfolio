
"use client";

import { motion } from "motion/react";
import {
  Code2,
  Network,
  Database,
  PanelsTopLeft,
  Sparkles,
  GitBranch,
  Zap,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Building responsive, scalable and maintainable interfaces with modern frontend technologies.",
    icon: Code2,
    featured: true,
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
      "Designing scalable frontend systems, modular architectures and performance-focused solutions.",
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
      "Working with backend technologies and integrating data-driven services into frontend applications.",
    icon: Database,
    skills: ["Node.js", "SQL", "GraphQL", "REST APIs"],
  },
  {
    number: "04",
    title: "Adobe Experience Manager",
    description:
      "Developing reusable enterprise content components and dynamic digital experiences.",
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
      "Using AI-powered development tools and prompt engineering to accelerate UI development and problem-solving.",
    icon: Sparkles,
    skills: [
      "Claude",
      "Cursor AI",
      "GitHub Copilot",
      "Prompt Engineering",
    ],
  },
  {
    number: "06",
    title: "DevOps & Developer Tools",
    description:
      "Working with development workflows, version control and deployment infrastructure.",
    icon: GitBranch,
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "GitLab",
      "Rally",
      "VS Code",
    ],
  },
  {
    number: "07",
    title: "Energy Management",
    description:
      "Working on HVAC engineering workflows, energy conservation measures and data-driven optimization.",
    icon: Zap,
    energy: true,
    skills: [
      "HVAC Engineering",
      "ECM",
      "DSL",
      "Rule Engine",
      "Energy Optimization",
    ],
  },
];

export default function Expertise() {
  return (
    <section
      className="content-section skills-section"
      id="expertise"
    >
      <div className="site-container">
        <motion.div
          className="skills-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            MY TECH STACK
          </div>

          <h2 className="section-title">
            Engineering skills.
            <br />
            <span className="gradient-text">
              Built through experience.
            </span>
          </h2>

          <p className="section-description">
            Technologies, engineering practices and tools
            I work with to build scalable enterprise applications
            and modern digital experiences.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.number}
                className={`skill-card ${
                  group.featured ? "skill-card-featured" : ""
                } ${group.energy ? "skill-card-energy" : ""}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon">
                    <Icon size={21} />
                  </div>

                  <span className="skill-number">
                    {group.number}
                  </span>
                </div>

                <h3>{group.title}</h3>

                <p className="skill-description">
                  {group.description}
                </p>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
