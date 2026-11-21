"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "HOME", number: "01" },
  { id: "experience", label: "EXPERIENCE", number: "02" },
  { id: "work", label: "PROJECTS", number: "03" },
  { id: "personal-projects", label: "PERSONAL PROJECTS", number: "04" },
  { id: "expertise", label: "EXPERTISE", number: "05" },
  { id: "contact", label: "CONTACT", number: "06" },
] as const;

type SectionId = (typeof NAV_ITEMS)[number]["id"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateNav = () => {
      frame = 0;
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? Math.min(1, scrollY / maxScroll) : 0);
      setIsScrolled(scrollY > 12);

      // Use a fixed viewport guide so the active item follows the section in view.
      const guide = Math.min(190, window.innerHeight * 0.28);
      let current: SectionId = "home";
      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= guide) {
          current = item.id;
        }
      }
      if (maxScroll > 0 && scrollY >= maxScroll - 4) current = "contact";
      setActiveSection(current);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateNav);
    };

    updateNav();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const selectSection = (id: SectionId) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <header className={`gp-nav${isScrolled ? " gp-nav--scrolled" : ""}`}>
      <div className="gp-nav__inner">
        <a
          href="#home"
          className="gp-nav__brand"
          aria-label="Gyanesh Patidar — back to home"
          onClick={() => selectSection("home")}
        >
          <span className="gp-nav__mark" aria-hidden="true">
            <span>G</span>
            <i />
          </span>
          <span className="gp-nav__brand-text">
            <strong>GYANESH <em>PATIDAR.</em></strong>
            <small>FRONTEND ENGINEER <span> / </span> PORTFOLIO 2026</small>
          </span>
        </a>

        <nav
          id="gp-primary-navigation"
          className={`gp-nav__links${menuOpen ? " gp-nav__links--open" : ""}`}
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`gp-nav__link${activeSection === item.id ? " gp-nav__link--active" : ""}`}
              aria-current={activeSection === item.id ? "location" : undefined}
              onClick={() => selectSection(item.id)}
            >
              {/* <span className="gp-nav__link-number" aria-hidden="true">{item.number}</span> */}
              <span>{item.label}</span>
              <span className="gp-nav__link-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
          <a
            href="#contact"
            className="gp-nav__mobile-cta"
            onClick={() => selectSection("contact")}
          >
            LET'S TALK <ArrowUpRight size={21} strokeWidth={1.8} aria-hidden="true" />
          </a>
          <div className="gp-nav__mobile-foot" aria-hidden="true">
            <span>DESIGN × CODE</span>
            <span>© 2026 GP</span>
          </div>
        </nav>

        <a
          className="gp-nav__cta"
          href="#contact"
          onClick={() => selectSection("contact")}
        >
          <span>LET'S TALK</span>
          <ArrowUpRight size={20} strokeWidth={2} aria-hidden="true" />
        </a>

        <button
          className="gp-nav__toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="gp-primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} strokeWidth={1.8} /> : <Menu size={24} strokeWidth={1.8} />}
        </button>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="gp-nav__scrim"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className="gp-nav__progress-track" aria-hidden="true">
        <div className="gp-nav__progress-fill" style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>
    </header>
  );
}
