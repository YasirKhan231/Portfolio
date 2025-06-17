"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
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

        {/* Fixed Moon - Bottom Left */}
        {/* <div className="absolute bottom-24 left-16 w-16 h-16">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 rounded-full shadow-xl">
              <div className="absolute top-2 left-3 w-1 h-1 bg-gray-700 rounded-full opacity-60"></div>
              <div className="absolute bottom-3 right-2 w-1.5 h-1.5 bg-gray-800 rounded-full opacity-50"></div>
              <div className="absolute top-5 right-4 w-0.5 h-0.5 bg-gray-700 rounded-full opacity-40"></div>
              <div className="absolute inset-0 bg-white rounded-full opacity-8 blur-sm scale-105"></div>
            </div>
          </div>        </div>   */}

        {/* Fixed Moon - Center Left */}
        {/* <div className="absolute top-1/2 left-8 w-12 h-12 transform -translate-y-1/2">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-350 to-gray-500 rounded-full shadow-lg">
              <div className="absolute top-1.5 left-2 w-1 h-1 bg-gray-600 rounded-full opacity-60"></div>
              <div className="absolute bottom-2 right-1.5 w-0.5 h-0.5 bg-gray-700 rounded-full opacity-50"></div>
              <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-gray-600 rounded-full opacity-40"></div>
              <div className="absolute inset-0 bg-white rounded-full opacity-6 blur-sm scale-110"></div>
            </div>
          </div>
        </div> */}

        {/* Fixed Moon - Top Center */}
        {/* <div className="absolute top-12 left-1/2 w-14 h-14 transform -translate-x-1/2">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-250 via-gray-400 to-gray-550 rounded-full shadow-lg">
              <div className="absolute top-2 left-2.5 w-1 h-1 bg-gray-650 rounded-full opacity-65"></div>
              <div className="absolute bottom-2.5 right-2 w-1 h-1 bg-gray-750 rounded-full opacity-55"></div>
              <div className="absolute top-4 right-3.5 w-0.5 h-0.5 bg-gray-650 rounded-full opacity-45"></div>
              <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-gray-700 rounded-full opacity-35"></div>
              <div className="absolute inset-0 bg-white rounded-full opacity-7 blur-sm scale-108"></div>
            </div>
          </div>
        </div> */}
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
                  href="mailto:yasirkhan0184@gmail.com"
                  className="underline hover:text-white"
                >
                  Contact me
                </Link>
              </p>
            </div>
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

        {/* Contact */}
        <section id="contact">
          <h2 className="text-xl font-semibold mb-6">Reach out to me.</h2>
          <p className="text-gray-300 mb-6">
            Feel free to reach out to me via email, LinkedIn, or Twitter for any
            queries, collaboration opportunities, or further details.
          </p>
          <div className="flex gap-4">
            <Button
              asChild
              variant="outline"
              className="bg-gray-200 border-gray-800 text-gray-800 hover:bg-gray-300"
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
              className="bg-gray-200 border-gray-800 text-gray-800 hover:bg-gray-300"
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
              className="bg-gray-200 border-gray-800 text-gray-800 hover:bg-gray-300"
            >
              <Link href="mailto:yasirkhan0184@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-gray-200 border-gray-800 text-gray-800 hover:bg-gray-300"
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
