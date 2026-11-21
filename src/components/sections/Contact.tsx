"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Code2, Mail } from "lucide-react";

// Add your real contact details here before publishing.
// Leave a value empty to hide that link; no placeholder links are shown.
const CONTACT_EMAIL = "";
const LINKEDIN_URL = "";
const GITHUB_URL = "https://github.com/gyanesh13";

interface ContactProps {
  year: number;
}

export default function Contact({ year }: ContactProps) {
  const reduceMotion = useReducedMotion();
  const primaryUrl = CONTACT_EMAIL
    ? `mailto:${CONTACT_EMAIL}?subject=Let's%20work%20together`
    : GITHUB_URL;
  const primaryIsExternal = !CONTACT_EMAIL;

  return (
    <section className="gp-contact" id="contact" aria-labelledby="gp-contact-title">
      <div className="gp-contact__container">
        <div className="gp-contact__topline">
          <span><b>06 /</b> GET IN TOUCH</span>
          <span>THE NEXT CHAPTER — {year}</span>
        </div>

        <div className="gp-contact__stage">
          <div className="gp-contact__geometry" aria-hidden="true">
            <span className="gp-contact__geometry-ring" />
            <span className="gp-contact__geometry-plus">+</span>
            <span className="gp-contact__geometry-number">GP / {year}</span>
          </div>

          <motion.div
            className="gp-contact__main"
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="gp-contact__eyebrow">
              <span className="gp-contact__signal" aria-hidden="true" />
              HAVE AN IDEA? LET'S TALK.
            </div>

            <h2 id="gp-contact-title">
              LET'S BUILD<br />
              <span>SOMETHING.</span>
            </h2>

            <p className="gp-contact__description">
              Great products start with a conversation. Whether it&apos;s a
              frontend challenge, a thoughtful interface, or a new product,
              I&apos;d love to hear what you&apos;re building.
            </p>

            <motion.a
              className="gp-contact__cta"
              href={primaryUrl}
              target={primaryIsExternal ? "_blank" : undefined}
              rel={primaryIsExternal ? "noopener noreferrer" : undefined}
              whileHover={reduceMotion ? undefined : { x: 5 }}
              aria-label={CONTACT_EMAIL ? "Send Gyanesh an email" : "Connect with Gyanesh on GitHub"}
            >
              <span>{CONTACT_EMAIL ? "SEND ME AN EMAIL" : "CONNECT ON GITHUB"}</span>
              <ArrowUpRight size={23} strokeWidth={1.8} aria-hidden="true" />
            </motion.a>
          </motion.div>

          <div className="gp-contact__side-label" aria-hidden="true">
            FRONTEND / DESIGN / ENGINEERING
          </div>
        </div>

        <div className="gp-contact__links">
          <div className="gp-contact__links-label">
            <span>FIND ME ONLINE</span>
            <small>LET'S STAY CONNECTED</small>
          </div>

          <div className="gp-contact__socials">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Code2 size={17} aria-hidden="true" /> GITHUB <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            {CONTACT_EMAIL && (
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Mail size={17} aria-hidden="true" /> EMAIL <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
            {LINKEDIN_URL && (
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                LINKEDIN <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div className="gp-contact__bottomline">
          <span>BUILT WITH REACT · NEXT.JS · ATTENTION TO DETAIL</span>
          <a href="#home">BACK TO TOP <ArrowDownRight size={15} className="gp-contact__up-icon" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
