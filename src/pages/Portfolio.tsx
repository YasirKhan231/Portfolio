"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  FileText,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const skills = [
    "TailwindCSS",
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Prisma",
    "PostgreSQL",
    "Nextauth",
    "Zod",
    "Docker",
    "CI/CD",
    "AWS",
    "Postman",
    "Data Structure",
    "REST Api",
    "Git",
    "VS Code",
    "C++",
  ];

  const projects = [
    {
      id: 1,
      title: "PrepforLaw",
      description:
        "A comprehensive Bar Exam preparation platform combining subject-wise practice sets, AI-generated explanations, progress tracking, and law-specific analytics.",
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
      id: 2,
      title: "SmartExpense",
      description:
        "A modern expense tracker that helps users manage daily spending, categorize expenses, visualize insights, and export reports in one click.",
      image: "/expense.png",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Next.js",
        "Prisma",
        "Postgresql",
        "Shadcn UI",
      ],
      github: "https://github.com/YasirKhan231/Expense-tracker",
      live: "https://expense-tracker-git-main-yasirkhan231s-projects.vercel.app/",
    },
    {
      id: 3,
      title: "CryptoPlace",
      description:
        "A real-time cryptocurrency tracker that displays top coins, live price charts, historical data .",
      image: "/crypto.png",
      technologies: ["React.js", "TailwindCSS", "CoinGecko API", "Recharts"],
      github: "https://github.com/YasirKhan231/Crypto-tracker",
      live: "https://crypto-tracker-tau-eight.vercel.app/",
    },
  ];

  const education = {
    college: "Arya collage of engineering and technology",
    degree: "Computer Science and Engineering",
    duration: "2022 - 2026",
    description:
      "Bachelor's degree in Computer Science and Engineering with focus on software development, algorithms, and system design.",
  };

  const experiences = [
    {
      id: 1,
      company: "Startup Bricks",
      role: "Software Engineer Intern",
      timeline: "Jan 2025 - Present",
      description:
        "Developed web applications using Nextjs ,React and Node.js, implemented REST APIs, and collaborated with cross-functional teams.",
    },
    {
      id: 2,
      company: "GirlScript summer of code ",
      role: "Contributer",
      timeline: "Oct 2024 - Nov 2024",
      description:
        "Contributing to open source projects, fixing bugs, and implementing new features in JavaScript and TypeScript.",
    },
    {
      id: 3,
      company: "The skill Guru Foundation",
      role: "Full stack developer",
      timeline: "Sep 2024 - Sep 2024",
      description:
        "Developed the web products for the foundation in differnt niches , Managging the whole team to make a full software .",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgvyzwjq", {
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
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Simple 2D Cosmic Background */}
      <div className="fixed inset-0 z-0">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Fixed Moon - Top Right */}
        <div className="absolute top-16 right-20 w-24 h-24">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-500 rounded-full shadow-2xl">
              {/* Moon craters */}
              <div className="absolute top-3 left-4 w-2 h-2 bg-gray-600 rounded-full opacity-70"></div>
              <div className="absolute bottom-4 right-3 w-1.5 h-1.5 bg-gray-700 rounded-full opacity-60"></div>
              <div className="absolute top-8 right-6 w-1 h-1 bg-gray-600 rounded-full opacity-50"></div>
              <div className="absolute bottom-7 left-7 w-1 h-1 bg-gray-700 rounded-full opacity-40"></div>
              <div className="absolute top-6 left-6 w-1.5 h-1.5 bg-gray-600 rounded-full opacity-50"></div>
              {/* Moon glow */}
              <div className="absolute inset-0 bg-white rounded-full opacity-10 blur-sm scale-110"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold">Hi, I'm Yasir 👋</h1>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/yasir-khan-397989234/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/YasirKhan231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/yasir_juned"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1roVvfO0GqokwXcAEL1N_tq1S1aSTVaHu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FileText className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:yasirkhan0184@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              yasirkhan0184@gmail.com
            </Link>
          </div>
        </header>

        {/* About Me */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">About Me.</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-white mt-1">•</span>
              <p>
                Hi, I am Yasir Khan, a Full-stack Developer passionate about
                creating and delivering projects that make a real-world impact.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-white mt-1">•</span>
              <p>
                I specialize in full-stack development with Next.js and
                Express.js, using TypeScript for type safety. I have experience
                with modern web technologies and tools.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-white mt-1">•</span>
              <p>
                Have an idea, want to collaborate, or have an internship
                opportunity? Feel free to message me! I'm always excited to
                connect and work on great projects.{" "}
                <Link
                  href="#contact-form"
                  className="underline hover:text-white"
                >
                  Contact me
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Education</h2>
          </div>
          <div className="border-l-2 border-gray-700 pl-6 ml-2">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{education.college}</h3>
                <span className="text-gray-400 text-sm">
                  {education.duration}
                </span>
              </div>
              <p className="text-gray-300">{education.degree}</p>
              <p className="text-gray-400 text-sm">{education.description}</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="border-l-2 border-gray-700 pl-6 ml-2"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <span className="text-gray-400 text-sm">
                      {exp.timeline}
                    </span>
                  </div>
                  <p className="text-gray-300 font-medium">{exp.role}</p>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Skills & Tools</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-gray-200 text-gray-800 hover:bg-gray-300 border-gray-200"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Projects</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.id} className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-lg font-medium">{project.id}.</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    {/* Project Image */}
                    <div className="mb-4">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} preview`}
                        width={400}
                        height={200}
                        className="rounded-lg border border-gray-800"
                      />
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-200 text-gray-800 hover:bg-gray-300 border-gray-200 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 text-sm">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        GitHub
                      </Link>
                      <span className="text-gray-600">|</span>
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Live
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <p className="text-gray-300 mb-6">
                Feel free to reach out to me via email, LinkedIn, or Twitter for
                any queries, collaboration opportunities, or further details.
              </p>
              <div className="flex flex-col gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="bg-gray-200 border-gray-800 text-gray-800 hover:bg-gray-300 justify-start"
                >
                  <Link
                    href="https://x.com/yasir_juned"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-gray-200 border-gray-800 text-gray-800 hover:bg-gray-300 justify-start"
                >
                  <Link
                    href="https://www.linkedin.com/in/yasir-khan-397989234/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-gray-200 border-gray-800 text-gray-800 hover:bg-gray-300 justify-start"
                >
                  <Link href="mailto:yasirkhan0184@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-gray-200 border-gray-800 text-gray-800 hover:bg-gray-300 justify-start"
                >
                  <Link
                    href="https://github.com/YasirKhan231"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    placeholder="Tell me more about your project or inquiry..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-gray-200"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {submitStatus === "success" && (
                  <p className="text-green-400 text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm">
                    Failed to send message. Please try again or contact me
                    directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
