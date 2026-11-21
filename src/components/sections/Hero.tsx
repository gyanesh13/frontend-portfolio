
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const technologies = [
  "React.js",
  "TypeScript",
  "Next.js",
  "Redux",
  "Micro-frontends",
  "Frontend Architecture",
];

export default function Hero() {
  return (
    <section className="editorial-hero" id="home">
      <div className="editorial-hero__texture" />

      <div className="editorial-hero__topline">
        <span>
          <i className="editorial-hero__status" />
          SENIOR FRONTEND DEVELOPER
        </span>
        <span>PORTFOLIO / 2026</span>
      </div>

      <div className="editorial-hero__wordmark" aria-hidden="true">
        PORTFOLIO
      </div>

      <div className="editorial-hero__layout">
        <motion.div
          className="editorial-hero__content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="editorial-hero__eyebrow">
            <span>01</span> / INTRODUCTION
          </p>

          <h1>
            Engineering
            <br />
            digital
            <br />
            <span>experiences.</span>
          </h1>

          <p className="editorial-hero__description">
            I'm a Senior Frontend Developer with 5+ years of experience
            building scalable digital products. I turn complex ideas into
            high-performance interfaces through React, TypeScript,
            frontend architecture and thoughtful engineering.
          </p>

          <div className="editorial-hero__actions">
            <motion.a
              href="#work"
              className="editorial-button editorial-button--primary"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              EXPLORE MY WORK
              <ArrowUpRight size={17} />
            </motion.a>

            <motion.a
              href="#contact"
              className="editorial-button editorial-button--secondary"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              LET'S TALK
              <ArrowDown size={16} />
            </motion.a>
          </div>

          <div className="editorial-hero__technologies">
            {technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="editorial-hero__visual"
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="editorial-hero__image-frame">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of a frontend developer"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 42vw"
              className="editorial-hero__photo"
            />

            <div className="editorial-hero__image-shade" />

            <div className="editorial-hero__image-caption">
              <span>GYANESH PATIDAR</span>
              <span>INDIA · 2026</span>
            </div>
          </div>

          <motion.div
            className="editorial-hero__experience"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <strong>5+</strong>
            <span>YEARS OF<br />EXPERIENCE</span>
          </motion.div>

          <div className="editorial-hero__side-label">
            DESIGN. ENGINEER. DELIVER.
          </div>
        </motion.div>
      </div>

      <div className="editorial-hero__bottom">
        <span>REACT · ARCHITECTURE · PERFORMANCE</span>
        <a href="#experience">
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
