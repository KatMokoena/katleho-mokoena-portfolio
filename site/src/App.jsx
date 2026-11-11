import { useEffect, useState } from "react";
import {
  certificates,
  education,
  experience,
  filters,
  languages,
  experienceLead,
  intro,
  profile,
  projects,
  skills,
} from "./content.js";

const cvHref = `${import.meta.env.BASE_URL}${profile.cv}`;

function AwsLogo() {
  return (
    <svg className="aws-logo" viewBox="0 0 120 72" role="img" aria-label="AWS">
      <text
        x="60"
        y="34"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="34"
        fontWeight="700"
        fill="currentColor"
      >
        aws
      </text>
      <path
        d="M22 46c16 12 60 14 78 2"
        fill="none"
        stroke="#ff9900"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function External({ href, className, children }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [openRun, setOpenRun] = useState(null);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const visible = projects.filter(
    (project) => filter === "All" || project.tags.includes(filter)
  );

  function chooseFilter(next) {
    setFilter(next);
    setOpenRun(null);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>

      <header className="nav">
        <div className="wrap nav-row">
          <a className="brand" href="#content" onClick={closeMenu}>
            {profile.title} · 5+ years
          </a>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <nav id="site-menu" className={menuOpen ? "menu open" : "menu"} aria-label="Page">
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
            <External className="menu-github" href={profile.github}>
              GitHub
            </External>
            <External href={profile.linkedin}>LinkedIn</External>
          </nav>
        </div>
      </header>
      {menuOpen ? <button className="backdrop" type="button" aria-label="Close menu" onClick={closeMenu} /> : null}

      <main id="content">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>{profile.name}</h1>
              <p className="lede">{intro}</p>
              <div className="actions">
                <External className="button solid" href={profile.github}>
                  GitHub profile
                </External>
                <a className="button line" href={cvHref} download>
                  Download CV
                </a>
                <a className="button text" href="#contact">
                  Contact
                </a>
              </div>
            </div>
            <aside className="now">
              <p className="eyebrow">Now</p>
              <h2>{experience[0].title}</h2>
              <p>
                <External href={experience[0].companyHref}>{experience[0].company}</External>
                {" · "}
                {experience[0].dates}
              </p>
              <p>{profile.stack}</p>
              <ul>
                <li>{profile.location}</li>
                <li>{profile.workModel}</li>
                <li>
                  <a href={profile.phoneHref}>081 538 6428</a>
                </li>
                <li>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li>
                  <External href={profile.linkedin}>LinkedIn</External>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="projects" className="band">
          <div className="wrap">
            <p className="eyebrow">Projects</p>
            <div className="section-head">
              <h2>Public repositories</h2>
              <p>
                Four public repositories on{" "}
                <External href={profile.github}>github.com/KatMokoena</External>. Filter them by
                the stack, then open the repo and run the demo.
              </p>
            </div>
            <div className="filters" role="toolbar" aria-label="Filter projects">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={item === filter ? "chip on" : "chip"}
                  aria-pressed={item === filter}
                  onClick={() => chooseFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="count">
              Showing {visible.length} of {projects.length}
            </p>
            <div className="cards">
              {visible.map((project) => {
                const open = openRun === project.href;
                return (
                  <article className="card" key={project.href}>
                    <h3>
                      <External href={project.href}>{project.name}</External>
                    </h3>
                    <p>{project.summary}</p>
                    <ul className="tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>
                          <button type="button" onClick={() => chooseFilter(tag)}>
                            {tag}
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="card-actions">
                      <External className="button line" href={project.href}>
                        Open repository
                      </External>
                      <button
                        type="button"
                        className="button text"
                        aria-expanded={open}
                        onClick={() => setOpenRun(open ? null : project.href)}
                      >
                        {open ? "Hide how to run it" : "How to run it"}
                      </button>
                    </div>
                    {open ? <p className="run">{project.run}</p> : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="band alt">
          <div className="wrap">
            <p className="eyebrow">Experience</p>
            <div className="section-head">
              <h2>Work history</h2>
              <p>{experienceLead}</p>
            </div>
            <div className="timeline">
              {experience.map((job) => (
                <article className="job" key={`${job.title}-${job.dates}`}>
                  <div className="job-top">
                    <h3>{job.title}</h3>
                    <p>{job.dates}</p>
                  </div>
                  {job.company ? (
                    <p className="where">
                      {job.companyHref ? (
                        <External href={job.companyHref}>{job.company}</External>
                      ) : (
                        job.company
                      )}
                    </p>
                  ) : null}
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="band">
          <div className="wrap">
            <p className="eyebrow">Skills</p>
            <div className="section-head">
              <h2>The tools on the CV</h2>
              <p>Click a highlighted skill to filter the projects above.</p>
            </div>
            <div className="skill-grid">
              {skills.map((group) => (
                <article className="skill-card" key={group.label}>
                  <h3>{group.label}</h3>
                  <ul className="tags">
                    {group.items.map((item) => {
                      const label = `${item.name} · ${item.level}`;
                      return (
                        <li key={item.name}>
                          {item.filter ? (
                            <button type="button" onClick={() => chooseFilter(item.filter)}>
                              {label}
                            </button>
                          ) : (
                            <span>{label}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </article>
              ))}
            </div>
            <ul className="languages">
              {languages.map(([language, level]) => (
                <li key={language}>
                  <strong>{language}</strong>
                  <span>{level}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="education" className="band alt">
          <div className="wrap">
            <p className="eyebrow">Education</p>
            <div className="section-head">
              <h2>Education</h2>
            </div>
            <div className="cards slim">
              {education.map((item) => (
                <article className="card" key={item.title}>
                  <h3>
                    {item.href ? (
                      <External href={item.href}>{item.title}</External>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p>{item.place}</p>
                  <p className="where">{item.dates}</p>
                  {item.note ? <p>{item.note}</p> : null}
                  {item.href ? (
                    <p>
                      <External href={item.href}>View certificate</External>
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="band">
          <div className="wrap">
            <p className="eyebrow">Certificates</p>
            <div className="section-head">
              <h2>Certificates</h2>
            </div>
            <div className="cards slim">
              {certificates.map((item) => (
                <article className="card cert" key={item.name}>
                  {item.href ? <AwsLogo /> : <span className="cert-mark" aria-hidden="true">🏆</span>}
                  <h3>
                    {item.href ? <External href={item.href}>{item.name}</External> : item.name}
                  </h3>
                  <p className="where">{item.issuer}</p>
                  {item.date ? <p className="where">{item.date}</p> : null}
                  {item.href ? (
                    <p>
                      <External href={item.href}>View certificate</External>
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="band contact">
          <div className="wrap contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Johannesburg. Remote and hybrid.</h2>
              <p>The GitHub profile is the fastest way to see the work.</p>
            </div>
            <ul>
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={profile.phoneHref}>081 538 6428</a>
              </li>
              <li>
                <External href={profile.linkedin}>LinkedIn</External>
              </li>
              <li>
                <External href={profile.github}>github.com/KatMokoena</External>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>{profile.name} · {profile.title}</p>
        </div>
      </footer>
    </>
  );
}
