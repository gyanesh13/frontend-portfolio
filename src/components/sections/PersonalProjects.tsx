
"use client";

import { motion } from "motion/react";
import {
    ArrowUpRight,
    FileText,
    FileStack,
    Scissors,
    FileDown,
    Stethoscope,
    CalendarDays,
    ClipboardCheck,
    Clock3,
} from "lucide-react";


const personalProjects = [
    {
        id: "pdfeditor",
        number: "01",
        name: "PDFEditor",
        type: "Independent SaaS Product",
        status: "Live Product",
        liveUrl: "https://pdfvaale.vercel.app/",
        description:
            "A web-based PDF utility platform designed to simplify everyday document workflows with fast and accessible PDF tools.",
        features: [
            "Merge & Split PDFs",
            "PDF Compression",
            "PDF to Word, Excel & PPT",
            "Passport Photo Print Layouts",
        ],
        technologies: ["React.js", "Vite", "Supabase", "Vercel"],
        icon: FileText,
    },
    {
        id: "nitya",
        number: "02",
        name: "Nitya Ayurveda & Homeopathy",
        type: "Independent Web Application",
        status: "In Development",
        liveUrl: null,
        description:
            "A digital clinic platform built to simplify patient appointments, consultation workflows and day-to-day clinic management.",
        features: [
            "Clinic & Online Appointments",
            "Doctor & Service Management",
            "Admin Appointment Dashboard",
            "Email Notifications",
        ],
        technologies: ["Next.js", "React.js", "Prisma", "Supabase", "Resend"],
        icon: Stethoscope,
    },
];


export default function PersonalProjects() {
    return (
        <section className="personal-projects-section" id="personal-projects">
            <div className="personal-projects-container">
                <motion.div
                    className="personal-projects-heading"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="personal-projects-eyebrow">
                        BEYOND PROFESSIONAL WORK
                    </span>

                    <h2 className="personal-projects-title">
                        Personal <span>Projects</span>
                    </h2>

                    <p className="personal-projects-subtitle">
                        Products I independently build, develop and bring to life —
                        turning ideas into real-world applications.
                    </p>
                </motion.div>

                <div className="personal-projects-grid">
                    {personalProjects.map((project, index) => {
                        const Icon = project.icon;

                        return (
                            <motion.article
                                key={project.id}
                                className={`personal-project-card personal-project-${project.id}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.55, delay: index * 0.12 }}
                            >
                                <div className="personal-project-card-top">
                                    <div className="personal-project-icon">
                                        <Icon size={25} strokeWidth={1.7} />
                                    </div>

                                    <span className={`personal-project-status ${project.liveUrl ? "" : "status-development"
                                        }`}>
                                    </span>

                                    <span className="personal-project-number">
                                        {project.number}
                                    </span>
                                </div>

                                <div className="personal-project-content">
                                    <span className="personal-project-type">
                                        {project.type}
                                    </span>

                                    <h3>{project.name}</h3>

                                    <p className="personal-project-description">
                                        {project.description}
                                    </p>

                                    <div className="personal-project-features">
                                        {project.features.map((feature) => (
                                            <span key={feature} className="personal-feature-chip">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="personal-project-footer">
                                    <div className="personal-project-tech">
                                        <span className="tech-label">TECH STACK</span>
                                        <div className="personal-tech-list">
                                            {project.technologies.map((tech) => (
                                                <span key={tech}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {project.liveUrl ? (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="personal-project-action"
                                        >
                                            Live Demo
                                            <ArrowUpRight size={17} />
                                        </a>
                                    ) : (
                                        <span className="personal-project-action is-disabled">
                                            Coming Soon
                                            <Clock3 size={16} />
                                        </span>
                                    )}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                <motion.p
                    className="personal-projects-note"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Independently conceptualized, developed and maintained.
                </motion.p>
            </div>
        </section>
    );
}
