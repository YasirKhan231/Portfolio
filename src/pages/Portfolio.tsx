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
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold">Hi, I'm Yasir 👋</h1>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/yasir-khan-397989234/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/YasirKhan231"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/yasir_juned"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1roVvfO0GqokwXcAEL1N_tq1S1aSTVaHu/view?usp=sharing"
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
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        GitHub
                      </Link>
                      <span className="text-gray-600">|</span>
                      <Link
                        href={project.live}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Live
                      </Link>
                      <span className="text-gray-600">|</span>
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
              <a
                href="https://x.com/yasir_juned"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-gray-200 border-gray-800 text-gray-800 hover:bg-gray-300"
            >
              <a
                href="https://www.linkedin.com/in/yasir-khan-397989234/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-gray-200 border-gray-800 text-gray-800 hover:bg-gray-300"
            >
              <a href="mailto:yasirkhan0184@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-gray-200 border-gray-800 text-gray-800 hover:bg-gray-300"
            >
              <a
                href="https://github.com/YasirKhan231"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
