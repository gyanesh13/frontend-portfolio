
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const stack = [
  "REACT",
  "TYPESCRIPT",
  "NEXT.JS",
  "MICRO-FRONTENDS",
  "AEM",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="gp-hero" id="home">
      <div className="gp-hero__noise" aria-hidden="true" />

      <div className="gp-hero__container">
        {/* TOP META */}
        <div className="gp-hero__top">
          <span className="gp-hero__availability">
            <span className="gp-hero__dot" />
            SENIOR FRONTEND DEVELOPER
          </span>

          <span className="gp-hero__edition">
            SELECTED WORK / 2026
          </span>
        </div>

        {/* MAIN EDITORIAL COMPOSITION */}
        <div className="gp-hero__stage">
          <motion.div
            className="gp-hero__headline"
            initial={reduceMotion ? false : {
              opacity: 0,
              y: 35,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
          >
            <h1>PORTFOLIO<span>.</span></h1>
          </motion.div>

          {/* RED GEOMETRIC BACKGROUND */}
          <motion.div
            className="gp-hero__accent-panel"
            aria-hidden="true"
            initial={reduceMotion ? false : {
              scaleY: 0,
            }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
          />

          <div
            className="gp-hero__circle"
            aria-hidden="true"
          />

          {/* PORTRAIT */}
          <motion.div
            className="gp-hero__portrait"
            initial={reduceMotion ? false : {
              opacity: 0,
              x: 45,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: "easeOut",
            }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Gyanesh Patidar"
              fill
              priority
              sizes="(max-width: 700px) 100vw, 52vw"
              className="gp-hero__photo"
            />

            <div className="gp-hero__photo-overlay" />
          </motion.div>

          {/* INTRODUCTION */}
          <motion.div
            className="gp-hero__intro"
            initial={reduceMotion ? false : {
              opacity: 0,
              y: 25,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.4,
            }}
          >
            <div className="gp-hero__intro-label">
              <span>01 /</span> INTRODUCTION
            </div>

            <h2>
              GYANESH
              <br />
              <span>PATIDAR.</span>
            </h2>

            <p className="gp-hero__role">
              SENIOR FRONTEND ENGINEER
            </p>

            <p className="gp-hero__description">
              I engineer scalable frontend systems,
              high-performance interfaces and thoughtful
              digital experiences with React, TypeScript
              and modern web technologies.
            </p>

            <motion.a
              href="#work"
              className="gp-hero__cta"
              whileHover={reduceMotion ? undefined : {
                x: 5,
              }}
            >
              EXPLORE MY WORK
              <ArrowUpRight size={17} />
            </motion.a>
          </motion.div>

          <div className="gp-hero__vertical-label">
            DESIGN / DEVELOP / DELIVER
          </div>

          <div className="gp-hero__portrait-meta">
            INDIA — 2026
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="gp-hero__bottom">
          <div className="gp-hero__stack">
            {stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <a href="#experience" className="gp-hero__scroll">
            SCROLL TO EXPLORE
            <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
