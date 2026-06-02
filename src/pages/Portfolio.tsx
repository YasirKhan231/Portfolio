"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Moon,
  Send,
  Sun,
  Twitter,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Project = {
  id: number;
  title: string;
  summary: string[];
  image: string;
  technologies: string[];
  github: string;
  live: string;
};

type Experience = {
  id: number;
  company: string;
  role: string;
  timeline: string;
  points: string[];
};

type PortfolioTheme = {
  page: string;
  muted: string;
  subtle: string;
  line: string;
  input: string;
  icon: string;
  surface: string;
  chip: string;
  accent: string;
};

export default function Portfolio() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const skills = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "NextAuth",
    "Zod",
    "TailwindCSS",
    "Docker",
    "CI/CD",
    "AWS",
    "Postman",
    "Git",
    "Data Structures",
    "C++",
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Text Behind Image",
      summary: [
        "Built an online editor for placing styled text behind uploaded images.",
        "Designed high-quality exports for social posts, banners, and creative visuals.",
        "Focused on simple controls, responsive UI, and fast browser-side interactions.",
      ],
      image: "/Textbehindimage.png",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Node.js",
        "Shadcn UI",
        "Convex DB",
      ],
      github: "https://github.com/YasirKhan231/",
      live: "https://www.textbehindimageonline.com/",
    },
    {
      id: 2,
      title: "PrepforLaw",
      summary: [
        "Created a Bar Exam preparation platform with subject-wise practice flows.",
        "Added AI-generated explanations, progress tracking, and law-focused analytics.",
        "Implemented authentication and structured learning modules for students.",
      ],
      image: "/barexam.png",
      technologies: [
        "TailwindCSS",
        "Node.js",
        "Next.js",
        "Firebase",
        "Shadcn UI",
        "NextAuth",
      ],
      github: "https://github.com/YasirKhan231/LSAT-training-",
      live: "https://lsat-training.vercel.app/",
    },
    {
      id: 3,
      title: "GitHub Profile README Generator",
      summary: [
        "Developed a generator for professional GitHub profile README files.",
        "Let developers add skills, social links, GitHub stats, and profile sections quickly.",
        "Used a polished UI to make README creation fast and beginner-friendly.",
      ],
      image: "/github-readme.png",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Framer Motion",
        "Shadcn UI",
        "TypeScript",
      ],
      github: "https://github.com/YasirKhan231/Github-profile-readme-generator",
      live: "https://github-profile-readme-generator-eight.vercel.app/",
    },
    {
      id: 4,
      title: "SmartExpense",
      summary: [
        "Built an expense tracker for daily spending, categories, and financial reporting.",
        "Added charts, insights, and report export features for quick decision-making.",
        "Connected database models with clean frontend flows for managing transactions.",
      ],
      image: "/expense.png",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "Shadcn UI",
      ],
      github: "https://github.com/YasirKhan231/Expense-tracker",
      live: "https://expense-tracker-git-main-yasirkhan231s-projects.vercel.app/",
    },
    {
      id: 5,
      title: "CryptoPlace",
      summary: [
        "Created a cryptocurrency tracker with live market data for top coins.",
        "Displayed price charts and historical data using external API integrations.",
        "Built a responsive interface for scanning coin prices and market movement.",
      ],
      image: "/crypto.png",
      technologies: ["React.js", "TailwindCSS", "CoinGecko API", "Recharts"],
      github: "https://github.com/YasirKhan231/Crypto-tracker",
      live: "https://crypto-tracker-tau-eight.vercel.app/",
    },
    {
      id: 6,
      title: "ShinePro Windows - Landing Page",
      summary: [
        "Built a conversion-focused landing page for a window cleaning business.",
        "Added booking calls-to-action, pricing, testimonials, and service-area mapping.",
        "Structured the page for clear service discovery and lead generation.",
      ],
      image: "/window.png",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "shadcn/ui",
        "Leaflet",
      ],
      github: "https://github.com/YasirKhan231/window-clining-landing",
      live: "https://window-clining-landing.vercel.app/",
    },
    {
      id: 7,
      title: "Figma to Next.js - 45+ Pages",
      summary: [
        "Converted a large Figma design into a production-ready Next.js application.",
        "Created reusable components, typed routes, and responsive layouts.",
        "Delivered a pixel-focused AI reputation website across 45+ pages.",
      ],
      image: "/ai-reputation.png",
      technologies: ["Next.js", "TypeScript", "CSS"],
      github: "https://github.com/YasirKhan231",
      live: "https://ai-reputation-psi.vercel.app/",
    },
  ];

  const education = {
    college: "Arya College of Engineering and Technology",
    degree: "Computer Science and Engineering",
    duration: "2022 - 2026",
    points: [
      "Bachelor's degree focused on software development, algorithms, and system design.",
      "Built practical projects using full-stack web technologies and database systems.",
      "Strengthened fundamentals in programming, data structures, and application architecture.",
    ],
  };

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Filflo",
      role: "Software Developer",
      timeline: "Oct 2025 - Present",
      points: [
        "Developed end-to-end full-stack features, including scalable backend APIs, frontend interfaces, and system integrations.",
        "Built sales dashboards, analytics modules, and data visualizations to simplify business reporting and decision-making.",
        "Automated business workflows, including GRN processing and vendor portal integrations, reducing manual effort and improving efficiency.",
        "Collaborated with clients to gather requirements, deliver features on time, optimize performance, and resolve critical issues.",
      ],
    },
    {
      id: 2,
      company: "Startup Bricks",
      role: "Software Engineer Intern",
      timeline: "Jan 2025 - July 2025",
      points: [
        "Developed web applications using Next.js, React, Node.js, and REST APIs.",
        "Implemented frontend screens, backend routes, and reusable UI components.",
        "Worked with cross-functional teams to ship features and improve application quality.",
      ],
    },
    {
      id: 3,
      company: "Upwork & Fiverr",
      role: "Freelancer",
      timeline: "Mar 2025 - Oct 2025",
      points: [
        "Built MVPs, landing pages, dashboards, and consumer-facing websites for founders.",
        "Translated client requirements into clean user flows, components, and working products.",
        "Handled delivery, revisions, bug fixes, and deployment support across projects.",
      ],
    },
    {
      id: 4,
      company: "GirlScript Summer of Code",
      role: "Contributor",
      timeline: "Oct 2024 - Nov 2024",
      points: [
        "Contributed to open-source projects using JavaScript and TypeScript.",
        "Fixed bugs, improved components, and added small features through pull requests.",
        "Practiced collaborative development with maintainers and community contributors.",
      ],
    },
    {
      id: 5,
      company: "The Skill Guru Foundation",
      role: "Full Stack Developer",
      timeline: "Sep 2024 - Sep 2024",
      points: [
        "Developed web products for different foundation initiatives and business needs.",
        "Coordinated with the team to plan features, divide work, and complete software delivery.",
        "Worked across frontend, backend, and deployment tasks for full product execution.",
      ],
    },
  ];

  const theme: PortfolioTheme = {
    page: isLightTheme
      ? "bg-zinc-50 text-zinc-950"
      : "bg-black text-zinc-50",
    muted: isLightTheme ? "text-zinc-600" : "text-zinc-400",
    subtle: isLightTheme ? "text-zinc-700" : "text-zinc-300",
    line: isLightTheme ? "border-zinc-200" : "border-zinc-800",
    input: isLightTheme
      ? "border-zinc-300 bg-white text-zinc-950 placeholder:text-zinc-500"
      : "border-zinc-800 bg-black text-zinc-50 placeholder:text-zinc-500",
    icon: isLightTheme
      ? "text-zinc-700 hover:text-zinc-950"
      : "text-zinc-400 hover:text-white",
    surface: isLightTheme
      ? "border-zinc-200 bg-white/80 shadow-sm"
      : "border-zinc-800 bg-zinc-950/80",
    chip: isLightTheme
      ? "border-zinc-200 bg-zinc-100 text-zinc-900"
      : "border-zinc-800 bg-zinc-900 text-zinc-100",
    accent: isLightTheme
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : "border-emerald-900 bg-emerald-950 text-emerald-300",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      if (!process.env.NEXT_PUBLIC_FORMSPREE_URL) {
        throw new Error("Formspree URL is not defined");
      }

      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${theme.page}`}
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-5 py-6 sm:px-6 sm:py-8">
        <header
          className={`flex items-center justify-between border-b pb-5 ${theme.line}`}
        >
          <Link href="#top" className="text-sm font-semibold">
            Yasir Khan
          </Link>

          <div className="flex items-center gap-2">
            <IconLink
              href="https://github.com/YasirKhan231"
              label="GitHub"
              className={theme.icon}
            >
              <Github className="h-4 w-4" />
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/yasir-khan-397989234/"
              label="LinkedIn"
              className={theme.icon}
            >
              <Linkedin className="h-4 w-4" />
            </IconLink>
            <button
              type="button"
              onClick={() => setIsLightTheme((value) => !value)}
              aria-label={
                isLightTheme ? "Switch to dark theme" : "Switch to light theme"
              }
              title={
                isLightTheme ? "Switch to dark theme" : "Switch to light theme"
              }
              className={`grid h-9 w-9 place-items-center rounded-md transition-colors ${theme.icon}`}
            >
              {isLightTheme ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </header>

        <section
          id="top"
          className={`rounded-lg border p-5 sm:p-7 ${theme.surface}`}
        >
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <Badge variant="secondary" className={`w-fit border ${theme.accent}`}>
                Full-stack software developer
              </Badge>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Hi, I&apos;m Yasir Khan.
              </h1>
            </div>
            <BulletList
              items={[
                "Full-stack Developer passionate about creating and delivering projects that make a real-world impact.",
                "I work with Next.js, React, Node.js, Express.js, TypeScript, REST APIs, and modern databases.",
                "I build dashboards, analytics modules, workflow automations, business tools, and clean frontend interfaces.",
                "I collaborate with clients and teams to understand requirements, deliver features, optimize performance, and resolve issues.",
              ]}
              isLightTheme={isLightTheme}
            />

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className={
                  isLightTheme
                    ? "bg-zinc-950 text-white hover:bg-zinc-800"
                    : "bg-white text-black hover:bg-zinc-200"
                }
              >
                <Link href="#projects">
                  View Projects
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className={theme.chip}>
                <Link
                  href="https://drive.google.com/file/d/1U_FdUqWynOQS_R6rmlNM5Zc7M9RvGK77/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="experience" className="space-y-6">
          <SectionHeader
            eyebrow="Work"
            title="Experience"
            icon={<Briefcase className="h-5 w-5" />}
            theme={theme}
          />
          <div className={`relative space-y-6 border-l pl-5 ${theme.line}`}>
            {experiences.map((exp) => (
              <article
                key={exp.id}
                className="relative"
              >
                <span
                  className={`absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 ${
                    isLightTheme
                      ? "border-zinc-50 bg-zinc-950"
                      : "border-black bg-zinc-100"
                  }`}
                />
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <p className={`mt-1 text-sm font-medium ${theme.subtle}`}>
                      {exp.role}
                    </p>
                  </div>
                  <span className={`text-sm ${theme.muted}`}>{exp.timeline}</span>
                </div>
                <BulletList items={exp.points} isLightTheme={isLightTheme} />
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Education"
            title="Education"
            icon={<GraduationCap className="h-5 w-5" />}
            theme={theme}
          />
          <div className={`rounded-lg border p-5 ${theme.surface}`}>
            <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{education.college}</h3>
                <p className={`mt-1 text-sm font-medium ${theme.subtle}`}>
                  {education.degree}
                </p>
              </div>
              <span className={`text-sm ${theme.muted}`}>
                {education.duration}
              </span>
            </div>
            <BulletList items={education.points} isLightTheme={isLightTheme} />
          </div>
        </section>

        <section id="skills" className="space-y-6">
          <SectionHeader
            eyebrow="Stack"
            title="Skills & Tools"
            theme={theme}
          />
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className={`rounded-md border px-3 py-1.5 text-sm ${theme.chip}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <SectionHeader
            eyebrow="Selected work"
            title="Projects"
            theme={theme}
          />
          <div className="space-y-5">
            <FeaturedProject
              project={projects[0]}
              isLightTheme={isLightTheme}
              theme={theme}
            />
            <div className="grid gap-4">
              {projects.slice(1).map((project, index) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  index={index}
                  isLightTheme={isLightTheme}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="space-y-6 pb-10">
          <SectionHeader
            eyebrow="Contact"
            title="Get In Touch"
            theme={theme}
          />
          <div className={`rounded-lg border p-5 sm:p-6 ${theme.surface}`}>
            <div className="mb-6 flex flex-wrap gap-4 text-sm">
              {[
                {
                  label: "Email",
                  href: "mailto:yasirkhan0184@gmail.com",
                  icon: <Mail className="h-4 w-4" />,
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/yasir-khan-397989234/",
                  icon: <Linkedin className="h-4 w-4" />,
                },
                {
                  label: "Twitter",
                  href: "https://x.com/yasir_juned",
                  icon: <Twitter className="h-4 w-4" />,
                },
                {
                  label: "GitHub",
                  href: "https://github.com/YasirKhan231",
                  icon: <Github className="h-4 w-4" />,
                },
              ].map((contact) => (
                <Link
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    contact.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`inline-flex items-center gap-2 font-medium ${theme.icon}`}
                >
                  {contact.icon}
                  {contact.label}
                </Link>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className={`border-t pt-6 ${theme.line}`}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={theme.input}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={theme.input}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className={theme.input}
                  placeholder="Project, internship, or collaboration"
                />
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={theme.input}
                  placeholder="Tell me what you want to build..."
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`mt-5 w-full ${
                  isLightTheme
                    ? "bg-zinc-950 text-white hover:bg-zinc-800"
                    : "bg-white text-black hover:bg-zinc-200"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
              {submitStatus === "success" && (
                <p className="mt-3 text-sm text-green-500">
                  Message sent successfully. I will get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="mt-3 text-sm text-red-500">
                  Failed to send message. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

function FeaturedProject({
  project,
  isLightTheme,
  theme,
}: {
  project: Project;
  isLightTheme: boolean;
  theme: PortfolioTheme;
}) {
  return (
    <article
      className={`overflow-hidden rounded-lg border ${theme.surface}`}
    >
      <Image
        src={project.image}
        alt={`${project.title} preview`}
        width={896}
        height={504}
        className={`aspect-video w-full border-b object-cover ${theme.line}`}
      />
      <div className="space-y-5 p-5 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Badge variant="secondary" className={`mb-3 border ${theme.accent}`}>
              Featured Project
            </Badge>
            <h3 className="text-xl font-semibold">{project.title}</h3>
          </div>
          <div className="flex gap-3 text-sm">
            <ProjectLink href={project.github} label="GitHub" theme={theme} />
            <ProjectLink href={project.live} label="Live" theme={theme} />
          </div>
        </div>
        <BulletList
          items={project.summary}
          isLightTheme={isLightTheme}
          compact
        />
        <TechList technologies={project.technologies} theme={theme} />
      </div>
    </article>
  );
}

function ProjectRow({
  project,
  index,
  isLightTheme,
  theme,
}: {
  project: Project;
  index: number;
  isLightTheme: boolean;
  theme: PortfolioTheme;
}) {
  const reverse = index % 2 === 1;

  return (
    <article
      className={`grid gap-4 rounded-lg border p-4 ${
        reverse ? "sm:grid-cols-[1fr_180px]" : "sm:grid-cols-[180px_1fr]"
      } ${theme.surface}`}
    >
      <Image
        src={project.image}
        alt={`${project.title} preview`}
        width={360}
        height={220}
        className={`aspect-[4/3] w-full rounded-md border object-cover ${
          reverse ? "sm:order-2" : ""
        } ${theme.line}`}
      />
      <div className="flex flex-col justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <span className={`text-xs ${theme.muted}`}>
              0{project.id}
            </span>
          </div>
          <BulletList
            items={project.summary.slice(0, 2)}
            isLightTheme={isLightTheme}
            compact
          />
        </div>
        <div className="space-y-3">
          <TechList technologies={project.technologies.slice(0, 4)} theme={theme} />
          <div className="flex gap-3 text-sm">
            <ProjectLink href={project.github} label="GitHub" theme={theme} />
            <ProjectLink href={project.live} label="Live" theme={theme} />
          </div>
        </div>
      </div>
    </article>
  );
}

function TechList({
  technologies,
  theme,
}: {
  technologies: string[];
  theme: PortfolioTheme;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <Badge
          key={tech}
          variant="secondary"
          className={`rounded-md border text-xs ${theme.chip}`}
        >
          {tech}
        </Badge>
      ))}
    </div>
  );
}

function ProjectLink({
  href,
  label,
  theme,
}: {
  href: string;
  label: string;
  theme: PortfolioTheme;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 font-medium ${theme.icon}`}
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </Link>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  icon,
  theme,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  theme: {
    muted: string;
    subtle: string;
  };
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className={`flex items-center gap-2 text-xs uppercase tracking-[0.22em] ${theme.muted}`}>
        {icon}
        {eyebrow}
      </div>
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        {description ? (
          <p className={`mt-3 max-w-2xl leading-7 ${theme.subtle}`}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function BulletList({
  items,
  isLightTheme,
  compact = false,
}: {
  items: string[];
  isLightTheme: boolean;
  compact?: boolean;
}) {
  return (
    <ul className={compact ? "space-y-2" : "space-y-3"}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7">
          <span
            className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${
              isLightTheme ? "bg-zinc-950" : "bg-zinc-100"
            }`}
          />
          <span className={isLightTheme ? "text-zinc-700" : "text-zinc-300"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function IconLink({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`grid h-9 w-9 place-items-center rounded-md transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
