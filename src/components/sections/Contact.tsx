
"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  BriefcaseBusiness,
  GitBranch,
  Download,
} from "lucide-react";

// Replace these with your actual details
const CONTACT_EMAIL = "YOUR_EMAIL@example.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/YOUR-PROFILE/";
const GITHUB_URL = "https://github.com/YOUR-USERNAME";

export default function Contact({ year }: { year: number }) {
  return (
    <section className="portfolio-contact-section" id="contact">
      <div className="portfolio-contact-container">
        <motion.div
          className="portfolio-contact-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="portfolio-contact-eyebrow">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p className="portfolio-contact-description">
            I'm open to exciting frontend engineering opportunities,
            product collaborations and conversations about building
            scalable digital experiences.
          </p>

          <motion.a
            href={`mailto:${CONTACT_EMAIL}`}
            className="portfolio-contact-primary"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={18} />
            Get in touch
            <ArrowUpRight size={18} />
          </motion.a>

          <div className="portfolio-contact-divider" />

          <div className="portfolio-contact-bottom">
            <div className="portfolio-contact-socials">
              <span>CONNECT WITH ME</span>

              <div className="portfolio-social-links">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <BriefcaseBusiness size={19} />
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitBranch size={19} />
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  aria-label="Email"
                >
                  <Mail size={19} />
                </a>
              </div>
            </div>

            <a
              href="/resume/Gyanesh-Patidar-Resume.pdf"
              download
              className="portfolio-resume-link"
            >
              <Download size={16} />
              Download Resume
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        <div className="portfolio-contact-copyright">
          <span>© {year} Gyanesh Patidar</span>
          <span>Designed & built with passion.</span>
        </div>
      </div>
    </section>
  );
}
