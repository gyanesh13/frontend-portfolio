"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Layers3,
  LoaderCircle,
  Mail,
  Send,
} from "lucide-react";

// Configure these in .env.local and in your deployment's environment settings.
// Web3Forms access keys are designed for public/browser-based forms.
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "";
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";
const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ?? "";
const GITHUB_URL = "https://github.com/gyanesh13";

const PROJECT_TYPES = [
  "Website / Web App",
  "Frontend Development",
  "UI Implementation",
  "Freelance Collaboration",
  "Other",
] as const;

const WORK_MODES = ["Remote", "Hybrid", "On-site", "Flexible"] as const;
const PROJECT_TIMELINES = ["ASAP", "Within 1 month", "1–3 months", "Flexible"] as const;

type InquiryType = "hire" | "project";
type FormStatus = "idle" | "sending" | "success" | "error";

interface ContactProps {
  year: number;
}

function getField(data: FormData, name: string): string {
  return String(data.get(name) ?? "").trim();
}

// Keep user input out of email subject line breaks.
function subjectPart(value: string): string {
  return value.replace(/[\r\n]+/g, " ").slice(0, 100);
}

export default function Contact({ year }: ContactProps) {
  const reduceMotion = useReducedMotion();
  const [inquiryType, setInquiryType] = useState<InquiryType>("hire");
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formMessage, setFormMessage] = useState("");
  const isFormReady = Boolean(WEB3FORMS_ACCESS_KEY);
  const isHiring = inquiryType === "hire";

  function chooseInquiry(type: InquiryType) {
    if (formStatus === "sending") return;
    setInquiryType(type);
    setFormStatus("idle");
    setFormMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formStatus === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    if (getField(data, "botcheck")) return; // Spam honeypot.

    if (!isFormReady) {
      setFormStatus("error");
      setFormMessage("The form is not configured yet. Please use the email link instead.");
      return;
    }

    const name = getField(data, "name");
    const email = getField(data, "email");
    const message = getField(data, "message");
    const company = getField(data, "company");
    const role = getField(data, "role");
    const workMode = getField(data, "workMode");
    const location = getField(data, "location");
    const jobUrl = getField(data, "jobUrl");
    const projectType = getField(data, "projectType");
    const timeline = getField(data, "timeline");

    if (!name || !email || !message || (isHiring ? !company || !role : !projectType)) {
      setFormStatus("error");
      setFormMessage("Please complete all required fields.");
      return;
    }

    const subject = isHiring
      ? `Hiring Opportunity — ${subjectPart(company)} — ${subjectPart(role)}`
      : `Project Inquiry — ${subjectPart(projectType)}`;

    const details = isHiring
      ? [
          "ENQUIRY TYPE: HIRING / RECRUITMENT",
          `Recruiter: ${name}`,
          `Work email: ${email}`,
          `Company: ${company}`,
          `Position: ${role}`,
          `Work mode: ${workMode || "Not specified"}`,
          `Location: ${location || "Not specified"}`,
          `Job posting: ${jobUrl || "Not provided"}`,
        ]
      : [
          "ENQUIRY TYPE: PROJECT / COLLABORATION",
          `Contact: ${name}`,
          `Email: ${email}`,
          `Company / brand: ${company || "Not provided"}`,
          `Project type: ${projectType}`,
          `Timeline: ${timeline || "Not specified"}`,
        ];

    setFormStatus("sending");
    setFormMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          subject,
          message: `${details.join("\n")}\n\nMESSAGE / DETAILS\n${message}`,
          from_name: "Gyanesh Patidar Portfolio",
          botcheck: "",
        }),
      });

      const result: { success?: boolean } = await response.json();
      if (!response.ok || !result.success) throw new Error("Email delivery failed");

      form.reset();
      setFormStatus("success");
      setFormMessage(
        isHiring
          ? "Opportunity sent! Thanks for reaching out — I'll review the role and reply soon."
          : "Project enquiry sent! Thanks — I'll get back to you soon.",
      );
    } catch {
      setFormStatus("error");
      setFormMessage("Couldn't send your message. Please try again or reach out by email.");
    }
  }

  return (
    <section className="gp-contact" id="contact" aria-labelledby="gp-contact-title">
      <div className="gp-contact__container">
        <div className="gp-contact__topline">
          <span><b>06 /</b> HIRE ME &amp; GET IN TOUCH</span>
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
              OPEN TO THE RIGHT OPPORTUNITY &amp; COLLABORATIONS
            </div>

            <h2 id="gp-contact-title">
              LET&apos;S WORK<br />
              <span>TOGETHER.</span>
            </h2>

            <p className="gp-contact__description">
              Hiring a frontend engineer or planning a digital product?
              I&apos;m always up for a meaningful conversation. Choose the path
              that fits and tell me what you have in mind.
            </p>

            <div className="gp-contact__hero-actions">
              <motion.a
                className="gp-contact__cta"
                href="#gp-contact-form"
                onClick={() => chooseInquiry("hire")}
                whileHover={reduceMotion ? undefined : { x: 4 }}
              >
                <span>HIRE ME</span>
                <ArrowUpRight size={22} strokeWidth={1.8} aria-hidden="true" />
              </motion.a>
              <motion.a
                className="gp-contact__cta gp-contact__cta--secondary"
                href="#gp-contact-form"
                onClick={() => chooseInquiry("project")}
                whileHover={reduceMotion ? undefined : { x: 4 }}
              >
                <span>DISCUSS A PROJECT</span>
                <ArrowUpRight size={22} strokeWidth={1.8} aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>

          <div className="gp-contact__side-label" aria-hidden="true">
            FRONTEND / DESIGN / ENGINEERING
          </div>
        </div>

        <div className="gp-contact__form-section" id="gp-contact-form">
          <motion.div
            className="gp-contact__form-intro"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <span className="gp-contact__form-kicker">01 / CHOOSE YOUR PATH</span>
            <h3>LET&apos;S<br /><span>CONNECT.</span></h3>
            <p>
              {isHiring
                ? "Recruiter or hiring manager? Share the role and company details. Your opportunity will land directly in my inbox."
                : "Have a product, website, or collaboration in mind? Share your requirements and let's explore what's possible."}
            </p>
            {CONTACT_EMAIL && (
              <div className="gp-contact__direct-email">
                <span>PREFER EMAIL? REACH OUT DIRECTLY</span>
                <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(isHiring ? "Hiring opportunity" : "Project inquiry")}`}>
                  <Mail size={18} aria-hidden="true" />
                  {CONTACT_EMAIL}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            )}
          </motion.div>

          <motion.div
            className="gp-contact__form-panel"
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <div className="gp-contact__inquiry-tabs" role="group" aria-label="Reason for contacting Gyanesh">
              <button
                id="gp-contact-hire-tab"
                className={`gp-contact__inquiry-tab${isHiring ? " is-active" : ""}`}
                type="button"
                aria-pressed={isHiring}
                disabled={formStatus === "sending"}
                onClick={() => chooseInquiry("hire")}
              >
                <BriefcaseBusiness size={19} aria-hidden="true" />
                <span><strong>HIRE ME</strong><small>HR / Recruiters</small></span>
              </button>
              <button
                id="gp-contact-project-tab"
                className={`gp-contact__inquiry-tab${!isHiring ? " is-active" : ""}`}
                type="button"
                aria-pressed={!isHiring}
                disabled={formStatus === "sending"}
                onClick={() => chooseInquiry("project")}
              >
                <Layers3 size={19} aria-hidden="true" />
                <span><strong>PROJECT INQUIRY</strong><small>Clients / Teams</small></span>
              </button>
            </div>

            <div id="gp-contact-inquiry-panel">
              <div className="gp-contact__form-heading">
                <div>
                  <span>{isHiring ? "CAREER OPPORTUNITY" : "PROJECT / COLLABORATION"}</span>
                  <h4>{isHiring ? "LET'S TALK ROLES." : "LET'S BUILD IT."}</h4>
                </div>
                <span className="gp-contact__form-symbol" aria-hidden="true">↗</span>
              </div>

              <form onSubmit={handleSubmit} className="gp-contact__form">
                <div className="gp-contact__form-row">
                  <label className="gp-contact__field">
                    <span>{isHiring ? "RECRUITER / YOUR NAME" : "YOUR NAME"} <b>*</b></span>
                    <input name="name" type="text" placeholder="Full name" autoComplete="name" required minLength={2} maxLength={100} disabled={formStatus === "sending"} />
                  </label>
                  <label className="gp-contact__field">
                    <span>{isHiring ? "WORK EMAIL" : "EMAIL ADDRESS"} <b>*</b></span>
                    <input name="email" type="email" placeholder="you@company.com" autoComplete="email" required maxLength={254} disabled={formStatus === "sending"} />
                  </label>
                </div>

                {isHiring ? (
                  <>
                    <div className="gp-contact__form-row">
                      <label className="gp-contact__field">
                        <span>COMPANY NAME <b>*</b></span>
                        <input name="company" type="text" placeholder="Company / organization" autoComplete="organization" required maxLength={120} disabled={formStatus === "sending"} />
                      </label>
                      <label className="gp-contact__field">
                        <span>JOB ROLE <b>*</b></span>
                        <input name="role" type="text" placeholder="Senior Frontend Developer" required maxLength={140} disabled={formStatus === "sending"} />
                      </label>
                    </div>
                    <div className="gp-contact__form-row">
                      <label className="gp-contact__field">
                        <span>WORK MODE <em>OPTIONAL</em></span>
                        <select name="workMode" defaultValue="" disabled={formStatus === "sending"}>
                          <option value="">Select work mode</option>
                          {WORK_MODES.map((mode) => <option key={mode} value={mode}>{mode}</option>)}
                        </select>
                      </label>
                      <label className="gp-contact__field">
                        <span>JOB LOCATION <em>OPTIONAL</em></span>
                        <input name="location" type="text" placeholder="City / Remote" maxLength={120} disabled={formStatus === "sending"} />
                      </label>
                    </div>
                    <label className="gp-contact__field">
                      <span>JOB POSTING LINK <em>OPTIONAL</em></span>
                      <input name="jobUrl" type="url" placeholder="https://company.com/careers/..." maxLength={500} disabled={formStatus === "sending"} />
                    </label>
                  </>
                ) : (
                  <>
                    <div className="gp-contact__form-row">
                      <label className="gp-contact__field">
                        <span>COMPANY / BRAND <em>OPTIONAL</em></span>
                        <input name="company" type="text" placeholder="Company or brand name" autoComplete="organization" maxLength={120} disabled={formStatus === "sending"} />
                      </label>
                      <label className="gp-contact__field">
                        <span>PROJECT TYPE <b>*</b></span>
                        <select name="projectType" defaultValue="" required disabled={formStatus === "sending"}>
                          <option value="" disabled>Select project type</option>
                          {PROJECT_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
                        </select>
                      </label>
                    </div>
                    <label className="gp-contact__field">
                      <span>EXPECTED TIMELINE <em>OPTIONAL</em></span>
                      <select name="timeline" defaultValue="" disabled={formStatus === "sending"}>
                        <option value="">Not decided yet</option>
                        {PROJECT_TIMELINES.map((time) => <option key={time} value={time}>{time}</option>)}
                      </select>
                    </label>
                  </>
                )}

                <label className="gp-contact__field">
                  <span>{isHiring ? "ROLE DETAILS / MESSAGE" : "PROJECT DETAILS / MESSAGE"} <b>*</b></span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={isHiring
                      ? "Share the job description, tech stack, hiring process, or any relevant details..."
                      : "Tell me what you're building, the goals, scope, and anything I should know..."}
                    required
                    minLength={10}
                    maxLength={3000}
                    disabled={formStatus === "sending"}
                  />
                </label>

                <div className="gp-contact__honeypot" aria-hidden="true">
                  <label htmlFor="gp-contact-botcheck">Leave this field blank</label>
                  <input id="gp-contact-botcheck" name="botcheck" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <button className="gp-contact__submit" type="submit" disabled={formStatus === "sending" || !isFormReady}>
                  <span>{formStatus === "sending" ? "SENDING..." : isHiring ? "SEND JOB OPPORTUNITY" : "SEND PROJECT INQUIRY"}</span>
                  {formStatus === "sending"
                    ? <LoaderCircle className="gp-contact__spinner" size={20} aria-hidden="true" />
                    : <Send size={19} strokeWidth={1.9} aria-hidden="true" />}
                </button>

                {!isFormReady && (
                  <p className="gp-contact__form-note" role="status">
                    Email form setup pending. Add a Web3Forms access key to enable submissions.
                  </p>
                )}
                {formMessage && (
                  <p
                    className={`gp-contact__form-feedback gp-contact__form-feedback--${formStatus}`}
                    role={formStatus === "error" ? "alert" : "status"}
                    aria-live="polite"
                  >
                    {formStatus === "success" && <CheckCircle2 size={18} aria-hidden="true" />}
                    {formMessage}
                  </p>
                )}
                <p className="gp-contact__form-privacy">
                  Your details will be sent to my email via Web3Forms and used only to reply to your enquiry. Please avoid sensitive information.
                </p>
              </form>
            </div>
          </motion.div>
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
