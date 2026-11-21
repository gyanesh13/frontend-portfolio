"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, FileText, Leaf } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "PDFVAALE",
    category: "PDF UTILITIES / WEB APP",
    status: "LIVE PROJECT",
    live: true,
    url: "https://pdfvaale.vercel.app/",
    description:
      "An independent browser-based PDF tools project focused on making document workflows straightforward and accessible.",
    tags: ["PDF TOOLS", "WEB APPLICATION", "FRONTEND"],
    visual: "pdf",
  },
  {
    number: "02",
    name: "NITYA AYURVEDA",
    category: "AYURVEDA / WEB EXPERIENCE",
    status: "IN DEVELOPMENT",
    live: false,
    url: null,
    description:
      "An Ayurveda-focused web experience exploring thoughtful product presentation, clear content hierarchy, and a calm visual identity.",
    tags: ["WEB EXPERIENCE", "UI DESIGN", "IN PROGRESS"],
    visual: "nitya",
  },
] as const;

function BrowserChrome({ label }: { label: string }) {
  return (
    <div className="gp-personal__browser-top">
      <span className="gp-personal__browser-dots"><i /><i /><i /></span>
      <span className="gp-personal__browser-label">{label}</span>
      <span className="gp-personal__browser-right">↗</span>
    </div>
  );
}

function PdfPreview() {
  return (
    <div className="gp-personal__preview gp-personal__preview--pdf" aria-hidden="true">
      <div className="gp-personal__preview-index">01 / INDEPENDENT BUILD</div>
      <div className="gp-personal__browser gp-personal__browser--pdf">
        <BrowserChrome label="pdfvaale / workspace" />
        <div className="gp-personal__pdf-app">
          <aside className="gp-personal__pdf-sidebar">
            <div className="gp-personal__pdf-logo"><FileText size={15} /><b>PDFVAALE</b></div>
            <span className="gp-personal__pdf-sidebar-item is-selected">DOCUMENT TOOLS</span>
            <span className="gp-personal__pdf-sidebar-item">CONVERT</span>
            <span className="gp-personal__pdf-sidebar-item">ORGANIZE</span>
            <span className="gp-personal__pdf-sidebar-item">UTILITIES</span>
          </aside>
          <div className="gp-personal__pdf-workspace">
            <div className="gp-personal__pdf-eyebrow">YOUR DOCUMENT WORKSPACE</div>
            <strong>WORK WITH PDFS.</strong>
            <div className="gp-personal__pdf-tool-row">
              <span>PDF</span><span>TOOLS</span><span>WORKSPACE</span>
            </div>
            <div className="gp-personal__pdf-paper-wrap">
              <div className="gp-personal__pdf-paper gp-personal__pdf-paper--back">
                <i /><i /><i />
              </div>
              <div className="gp-personal__pdf-paper gp-personal__pdf-paper--front">
                <b>PDF</b><i /><i /><i /><i />
              </div>
              <div className="gp-personal__pdf-add">+</div>
            </div>
          </div>
        </div>
      </div>
      <span className="gp-personal__preview-caption">ILLUSTRATIVE UI / NOT A SCREENSHOT</span>
    </div>
  );
}

function NityaPreview() {
  return (
    <div className="gp-personal__preview gp-personal__preview--nitya" aria-hidden="true">
      <div className="gp-personal__preview-index">02 / INDEPENDENT BUILD</div>
      <div className="gp-personal__browser gp-personal__browser--nitya">
        <BrowserChrome label="nitya ayurveda / concept" />
        <div className="gp-personal__nitya-app">
          <div className="gp-personal__nitya-nav">
            <span><Leaf size={13} /> NITYA</span>
            <span>AYURVEDA · WELLNESS</span>
          </div>
          <div className="gp-personal__nitya-hero">
            <div className="gp-personal__nitya-copy">
              <small>INSPIRED BY NATURE</small>
              <strong>NATURE.<br />BALANCE.<br /><em>EVERY DAY.</em></strong>
              <span>ROOTED IN WELLNESS</span>
            </div>
            <div className="gp-personal__nitya-art">
              <div className="gp-personal__nitya-disc" />
              <div className="gp-personal__nitya-stem" />
              <i className="gp-personal__leaf gp-personal__leaf--a" />
              <i className="gp-personal__leaf gp-personal__leaf--b" />
              <i className="gp-personal__leaf gp-personal__leaf--c" />
              <i className="gp-personal__leaf gp-personal__leaf--d" />
            </div>
          </div>
          <div className="gp-personal__nitya-footer"><span>HERITAGE</span><span>WELLNESS</span><span>NATURE</span></div>
        </div>
      </div>
      <span className="gp-personal__preview-caption">ILLUSTRATIVE CONCEPT / NOT A SCREENSHOT</span>
    </div>
  );
}

export default function PersonalProjects() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="gp-personal" id="personal-projects" aria-labelledby="gp-personal-title">
      <div className="gp-personal__container">
        <div className="gp-personal__topline">
          <span><b>04 /</b> INDEPENDENT BUILDS</span>
          <span>PERSONAL PROJECTS / 02</span>
        </div>

        <motion.div
          className="gp-personal__heading"
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div>
            <span className="gp-personal__eyebrow">BUILT BEYOND THE DAY JOB</span>
            <h2 id="gp-personal-title">SIDE<br /><span>PROJECTS.</span></h2>
          </div>
          <p>
            Independent ideas, thoughtfully designed and built — a space to
            experiment, solve practical problems and explore new experiences.
          </p>
        </motion.div>

        <div className="gp-personal__grid">
          {projects.map((project, index) => (
            <motion.article
              className="gp-personal__card"
              key={project.number}
              initial={reduceMotion ? false : { opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.13 }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
            >
              {project.visual === "pdf" ? <PdfPreview /> : <NityaPreview />}

              <div className="gp-personal__card-body">
                <div className="gp-personal__card-meta">
                  <span>{project.number} / 02</span>
                  <span className={project.live ? "gp-personal__status gp-personal__status--live" : "gp-personal__status"}>
                    <i /> {project.status}
                  </span>
                </div>
                <p className="gp-personal__category">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="gp-personal__description">{project.description}</p>
                <div className="gp-personal__tags" aria-label="Project categories">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="gp-personal__card-footer">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="gp-personal__link">
                      VIEW LIVE PROJECT <ArrowUpRight size={17} />
                    </a>
                  ) : (
                    <span className="gp-personal__unavailable">PREVIEW NOT PUBLIC YET</span>
                  )}
                  <span className="gp-personal__card-number">0{index + 1}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="gp-personal__bottomline">
          <span>EXPERIMENT. BUILD. IMPROVE.</span>
          <a href="#contact">HAVE AN IDEA? LET'S TALK <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
