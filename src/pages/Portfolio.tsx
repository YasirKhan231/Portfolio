"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Command,
  FileText,
  Github,
  Linkedin,
  Mail,
  Pause,
  Play,
  Search,
  Send,
  X,
} from "lucide-react";
import { education, experiences, projects, skills } from "@/lib/portfolio-data";
import GitHubActivity from "@/components/GitHubActivity";

const github = "https://github.com/YasirKhan231";
const linkedin = "https://www.linkedin.com/in/yasir-khan-397989234/";
const email = "yasirkhan0184@gmail.com";
const resume =
  "https://drive.google.com/file/d/1U_FdUqWynOQS_R6rmlNM5Zc7M9RvGK77/view?usp=sharing";

export default function Portfolio() {
  const [selected, setSelected] = useState(0);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const project = projects[selected];
  const visible = projects.filter(
    (item) =>
      filter === "All" ||
      item.technologies.some((tech) => tech.startsWith(filter)),
  );
  function chooseFilter(value: string) {
    setFilter(value);
    const matches = projects.filter(
      (item) =>
        value === "All" ||
        item.technologies.some((tech) => tech.startsWith(value)),
    );
    if (matches.length && !matches.some((item) => item.id === project.id)) {
      setSelected(projects.findIndex((item) => item.id === matches[0]?.id));
    }
  }
  function stepProject(direction: number) {
    const current = visible.findIndex((item) => item.id === project.id);
    const next =
      visible[(current + direction + visible.length) % visible.length];
    if (next) setSelected(projects.findIndex((item) => item.id === next.id));
  }
  const commands = [
    { label: "About Yasir", detail: "Profile", href: "#top" },
    { label: "Selected projects", detail: "Work", href: "#work" },
    { label: "Experience", detail: "Background", href: "#experience" },
    { label: "GitHub activity", detail: "Contributions", href: "#activity" },
    { label: "Contact", detail: email, href: "#contact" },
    { label: "GitHub profile", detail: "External link", href: github },
    { label: "LinkedIn", detail: "External link", href: linkedin },
    { label: "Résumé", detail: "External link", href: resume },
    ...projects.map((item, index) => ({
      label: item.title,
      detail: "Project",
      href: "#work",
      index,
    })),
  ];
  function openCommands() {
    setQuery("");
    dialog.current?.showModal();
    searchInput.current?.focus();
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActiveSection(
              entry.target.id === "profile" ? "" : entry.target.id,
            );
        });
      },
      { rootMargin: "-12% 0px -65% 0px" },
    );
    ["profile", "work", "experience", "activity", "contact"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (dialog.current?.open) dialog.current.close();
        else {
          setQuery("");
          dialog.current?.showModal();
          searchInput.current?.focus();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="console-portfolio studio-portfolio" id="top">
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <header className="console-header">
        <a href="#top" className="console-logo">
          YK<span>_</span>
        </a>
        <nav aria-label="Main navigation">
          {["work", "experience", "activity", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
            >
              /{id}
            </a>
          ))}
        </nav>
        <button
          ref={trigger}
          className="command-trigger"
          onClick={openCommands}
        >
          <Command size={15} />
          <span>Jump to</span>
          <kbd>Ctrl K</kbd>
        </button>
      </header>
      <main className="console-main">
        <section
          id="profile"
          className="identity-section"
          aria-labelledby="identity-title"
        >
          <div className="identity-top">
            <span>
              <i /> FULL-STACK DEVELOPER
            </span>
            <span>PERSONAL INDEX / {new Date().getFullYear()}</span>
          </div>
          <div className="identity-grid">
            <div className="identity-copy">
              <p className="shell-prompt">yasir@portfolio:~$ whoami</p>
              <h1 id="identity-title">
                YASIR
                <br />
                <span>KHAN</span>
                <b aria-hidden="true">_</b>
              </h1>
              <p className="identity-bio">
                Software developer at Filflo. I work on web applications,
                dashboards, and the APIs behind them.
              </p>
              <div className="identity-socials">
                <ExternalLink href={github}>
                  <Github size={17} /> GitHub <ArrowUpRight size={14} />
                </ExternalLink>
                <ExternalLink href={linkedin}>
                  <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
                </ExternalLink>
                <ExternalLink href={resume}>
                  <FileText size={17} /> Résumé <ArrowUpRight size={14} />
                </ExternalLink>
              </div>
              <div className="profile-footnote">
                <span className="profile-footnote-label">CURRENTLY</span>
                <span>
                  Software Developer <span className="muted-separator">/</span>{" "}
                  Filflo
                </span>
              </div>
            </div>
            <AsciiObject />
          </div>
          <div className="identity-footer">
            <span>
              React <i>/</i> Next.js <i>/</i> TypeScript <i>/</i> Node.js
            </span>
            <a href="#work">
              SCROLL TO WORK <span>↓</span>
            </a>
          </div>
        </section>
        <section id="work" className="console-work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / PROJECT DIRECTORY</p>
              <h2>
                SELECTED<span>_WORK</span>
              </h2>
            </div>
            <span className="section-number">
              {String(projects.length).padStart(2, "0")} PROJECTS
            </span>
          </div>
          <div className="work-console">
            <div className="project-directory">
              <div className="directory-label">
                <span>~/projects</span>
                <span>{visible.length} files</span>
              </div>
              <div className="filters" aria-label="Filter projects">
                {["All", "Next.js", "React"].map((item) => (
                  <button
                    key={item}
                    aria-pressed={filter === item}
                    onClick={() => chooseFilter(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="directory-items">
                {visible.map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      setSelected(
                        projects.findIndex((entry) => entry.id === item.id),
                      )
                    }
                    aria-pressed={project.id === item.id}
                    aria-controls="project-display"
                  >
                    <span>{String(item.id).padStart(2, "0")}</span>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.technologies.slice(0, 2).join(" · ")}</small>
                    </span>
                    <ArrowUpRight size={15} />
                  </button>
                ))}
              </div>
              <p className="directory-note">
                <span>
                  {String(
                    visible.findIndex((item) => item.id === project.id) + 1,
                  ).padStart(2, "0")}{" "}
                  / {String(visible.length).padStart(2, "0")}
                </span>{" "}
                Select a project to inspect.
              </p>
            </div>
            <article className="project-display" id="project-display">
              <div className="display-top">
                <span>PREVIEW / {String(project.id).padStart(2, "0")}</span>
                <div>
                  <button
                    aria-label="Previous project"
                    onClick={() => stepProject(-1)}
                  >
                    <ArrowLeft size={17} />
                  </button>
                  <button
                    aria-label="Next project"
                    onClick={() => stepProject(1)}
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
              <div className="preview-address">
                <span className="preview-lights" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>{new URL(project.live).hostname}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <ExternalLink
                className="console-preview"
                href={project.live}
                label={`Open ${project.title}`}
              >
                <Image
                  key={project.id}
                  src={project.image}
                  alt={`${project.title} website preview`}
                  width={1200}
                  height={750}
                  sizes="(max-width: 850px) 90vw, 65vw"
                />
              </ExternalLink>
              <div className="display-details" aria-live="polite">
                <div className="project-heading">
                  <h3>{project.title}</h3>
                  <ExternalLink
                    href={project.github}
                    className="source-link"
                    label={`View ${project.title} on GitHub`}
                  >
                    <Github size={21} />
                  </ExternalLink>
                </div>
                <p>{project.summary[0]}</p>
                <div className="technology-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="preview-actions">
                  <ExternalLink href={project.live} className="preview-primary">
                    Visit website <ArrowUpRight size={16} />
                  </ExternalLink>
                  <ExternalLink
                    href={project.github}
                    className="preview-secondary"
                  >
                    <Github size={16} /> View source
                  </ExternalLink>
                </div>
                <details className="project-notes" key={project.id}>
                  <summary>
                    Implementation notes <span>+</span>
                  </summary>
                  <ul>
                    {project.summary.slice(1).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </details>
              </div>
            </article>
          </div>
        </section>

        <section id="experience" className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">BACKGROUND</p>
              <h2>Experience</h2>
            </div>
            <span className="section-number">02</span>
          </div>
          <div className="experience-list">
            {experiences.map((item, index) => (
              <details
                className="experience-entry"
                key={item.id}
                open={index === 0}
              >
                <summary>
                  <span className="experience-year">{item.timeline}</span>
                  <span>
                    <strong>{item.company}</strong>
                    <small>{item.role}</small>
                  </span>
                  <span className="expand-mark">+</span>
                </summary>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
          <div className="background-grid">
            <div>
              <h3>Tools I work with</h3>
              <div className="technology-tags">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>Education</h3>
              <p>{education.college}</p>
              <p className="muted">
                {education.degree}
                <br />
                {education.duration}
              </p>
              <details className="project-notes">
                <summary>
                  Coursework <span>+</span>
                </summary>
                <ul>
                  {education.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </details>
            </div>
          </div>
        </section>
        <section id="activity" className="content-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ON GITHUB</p>
              <h2>Activity</h2>
            </div>
            <span className="section-number">03</span>
          </div>
          <GitHubActivity />
        </section>
        <section id="contact" className="content-section contact-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GET IN TOUCH</p>
              <h2>Say hello.</h2>
            </div>
            <span className="section-number">04</span>
          </div>
          <div className="contact-grid">
            <div>
              <p>For work, projects, or a conversation.</p>
              <a className="email-link" href={`mailto:${email}`}>
                {email}
                <ArrowUpRight size={17} />
              </a>
              <div className="contact-socials">
                <ExternalLink href={github}>
                  GitHub <ArrowUpRight size={15} />
                </ExternalLink>
                <ExternalLink href={linkedin}>
                  LinkedIn <ArrowUpRight size={15} />
                </ExternalLink>
                <ExternalLink href="https://x.com/yasir_juned">
                  X / Twitter <ArrowUpRight size={15} />
                </ExternalLink>
                <ExternalLink href={resume}>
                  Résumé <ArrowUpRight size={15} />
                </ExternalLink>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
        <footer>
          <span>Yasir Khan · {new Date().getFullYear()}</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </main>
      <dialog
        className="command-dialog"
        ref={dialog}
        aria-label="Jump to a page or project"
        onClose={() => trigger.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const bounds = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < bounds.left ||
              event.clientX > bounds.right ||
              event.clientY < bounds.top ||
              event.clientY > bounds.bottom
            )
              event.currentTarget.close();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            const links = Array.from(
              event.currentTarget.querySelectorAll<HTMLAnchorElement>(
                ".command-results a",
              ),
            );
            const index = links.indexOf(
              document.activeElement as HTMLAnchorElement,
            );
            const next =
              event.key === "ArrowDown"
                ? index + 1
                : index < 0
                  ? links.length - 1
                  : index - 1;
            links[(next + links.length) % links.length]?.focus();
          }
        }}
      >
        <div className="command-search">
          <Search size={18} />
          <input
            ref={searchInput}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Find a project, page, or link…"
            aria-label="Search commands"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                dialog.current
                  ?.querySelector<HTMLAnchorElement>(".command-results a")
                  ?.click();
              }
            }}
          />
          <button
            aria-label="Close command menu"
            onClick={() => dialog.current?.close()}
          >
            <X size={18} />
          </button>
        </div>
        <div className="command-results">
          {commands
            .filter((command) =>
              `${command.label} ${command.detail}`
                .toLowerCase()
                .includes(query.toLowerCase()),
            )
            .map((command) => (
              <a
                key={`${command.detail}-${command.label}`}
                href={command.href}
                target={command.href.startsWith("https") ? "_blank" : undefined}
                rel={
                  command.href.startsWith("https")
                    ? "noopener noreferrer"
                    : undefined
                }
                onClick={() => {
                  if ("index" in command && typeof command.index === "number") {
                    setSelected(command.index);
                    setFilter("All");
                  }
                  dialog.current?.close();
                }}
              >
                <span>
                  <strong>{command.label}</strong>
                  <small>{command.detail}</small>
                </span>
                <ArrowUpRight size={15} />
              </a>
            ))}
          {!commands.some((command) =>
            `${command.label} ${command.detail}`
              .toLowerCase()
              .includes(query.toLowerCase()),
          ) && (
            <p className="command-empty" role="status">
              No matching projects or pages.
            </p>
          )}
        </div>
        <div className="command-footer">
          ↑ ↓ NAVIGATE · ENTER OPEN · ESC CLOSE
        </div>
      </dialog>
    </div>
  );
}
function AsciiObject() {
  const output = useRef<HTMLPreElement>(null);
  const [running, setRunning] = useState(false);
  const [shape, setShape] = useState<"sphere" | "torus">("sphere");
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(preference.matches);
      setRunning(!preference.matches);
    };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    let frame = 0;
    let last = 0;
    let visible = true;
    const element = output.current;
    const observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
    });
    if (element) observer.observe(element);
    function draw(time: number) {
      const width = 66,
        height = 32;
      const characters = Array<string>(width * height).fill(" ");
      const depth = Array<number>(width * height).fill(-Infinity);
      const angle = running && !reduced ? time * 0.0003 : 0.65;
      for (let i = 0; i < 2400; i++) {
        const u = i * 2.399963;
        const v = Math.acos(1 - (2 * (i + 0.5)) / 2400);
        const tube = ((i % 60) / 60) * Math.PI * 2;
        let x =
          shape === "sphere"
            ? Math.sin(v) * Math.cos(u)
            : (0.72 + 0.3 * Math.cos(tube)) * Math.cos(u);
        let y = shape === "sphere" ? Math.cos(v) : 0.3 * Math.sin(tube);
        const z =
          shape === "sphere"
            ? Math.sin(v) * Math.sin(u)
            : (0.72 + 0.3 * Math.cos(tube)) * Math.sin(u);
        const rotatedX = x * Math.cos(angle) + z * Math.sin(angle);
        const rotatedZ = -x * Math.sin(angle) + z * Math.cos(angle);
        x = rotatedX;
        const finalZ = y * Math.sin(0.6) + rotatedZ * Math.cos(0.6);
        y = y * Math.cos(0.6) - rotatedZ * Math.sin(0.6);
        const scale = 2.8 / (3.2 - finalZ);
        const col = Math.round(width / 2 + x * 24 * scale);
        const row = Math.round(height / 2 + y * 13 * scale);
        if (col < 0 || col >= width || row < 0 || row >= height) continue;
        const index = row * width + col;
        if (finalZ > depth[index]) {
          depth[index] = finalZ;
          const light = Math.max(
            0,
            Math.min(1, (finalZ - x * 0.4 - y * 0.5 + 1.7) / 3),
          );
          const shade = ".,:;=+*#%@";
          characters[index] =
            shade[Math.min(shade.length - 1, Math.floor(light * shade.length))];
        }
      }
      if (element)
        element.textContent = Array.from({ length: height }, (_, row) =>
          characters.slice(row * width, (row + 1) * width).join(""),
        ).join("\n");
    }
    draw(0);
    function tick(time: number) {
      if (visible && !document.hidden && time - last > 90) {
        draw(time);
        last = time;
      }
      frame = requestAnimationFrame(tick);
    }
    if (running && !reduced) frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [running, reduced, shape]);
  return (
    <div className="ascii-panel">
      <div className="ascii-label">
        <span>ASCII / {shape.toUpperCase()}</span>
        <span aria-hidden="true">[ + ]</span>
      </div>
      <div
        className="ascii-stage"
        role="img"
        aria-label={`An ASCII ${shape}, rendered from characters`}
      >
        <pre ref={output} aria-hidden="true" />
        <span className="ascii-cross one" aria-hidden="true">
          +
        </span>
        <span className="ascii-cross two" aria-hidden="true">
          +
        </span>
      </div>
      <div className="ascii-controls">
        <div>
          <button
            aria-pressed={shape === "sphere"}
            onClick={() => setShape("sphere")}
          >
            SPHERE
          </button>
          <button
            aria-pressed={shape === "torus"}
            onClick={() => setShape("torus")}
          >
            TORUS
          </button>
        </div>
        <button
          disabled={reduced}
          onClick={() => setRunning(!running)}
          aria-label={
            reduced
              ? "Animation disabled by reduced-motion preference"
              : running
                ? "Pause ASCII animation"
                : "Play ASCII animation"
          }
        >
          {running ? <Pause size={14} /> : <Play size={14} />}
        </button>
      </div>
    </div>
  );
}

function ExternalLink({
  href,
  children,
  className,
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      {children}
    </a>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "draft"
  >("idle");
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL;
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!endpoint) {
      const subject = encodeURIComponent(String(data.get("subject")));
      const body = encodeURIComponent(
        `${data.get("message")}\n\nFrom: ${data.get("name")}\nEmail: ${data.get("email")}`,
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setStatus("draft");
      return;
    }
    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Message failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-pair">
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            placeholder="Alex Smith"
            required
            maxLength={100}
          />
        </label>
        <label>
          Email address
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="alex@example.com"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label>
        What are you thinking?
        <input
          name="subject"
          placeholder="A project, an opportunity, an idea…"
          required
          maxLength={200}
        />
      </label>
      <label>
        A little more detail
        <textarea
          name="message"
          placeholder="Tell me about it…"
          rows={4}
          required
          maxLength={5000}
        />
      </label>
      <button className="button button-primary" disabled={status === "sending"}>
        {status === "sending"
          ? "Sending…"
          : endpoint
            ? "Send message"
            : "Compose email"}
        <Send size={17} />
      </button>
      <p className="form-status" role="status">
        {status === "success"
          ? "Message sent. Thanks for getting in touch!"
          : status === "error"
            ? "The message could not be sent. Please try again or email me directly."
            : status === "draft"
              ? "Your email app will open with a draft. Send it there to get in touch."
              : !endpoint
                ? "Opens a draft in your email app."
                : ""}
      </p>
    </form>
  );
}
