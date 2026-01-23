import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AstroVibes",
    description:
      "A modern astrology web app providing horoscope insights with a clean UI and smooth user experience.",
    tech: ["React", "Tailwind CSS", "Local Storage"],
    live: "https://astrology-app-ashen.vercel.app/login",
    github: "https://github.com/shubhhh009/Astrology-app",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "WebInsight AI",
    description:
      "An AI-powered web scraper that extracts website data and answers user queries using background jobs.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "BullMQ"],
    live: "https://new-ai-scrapper-l43e.vercel.app/",
    github: "https://github.com/shubhhh009/NEW_AI_SCRAPPER",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Gemini Clone",
    description:
      "A full-stack application inspired by Google Gemini with AI-powered conversational capabilities.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://react-ai-tool-oljv.vercel.app/",
    github: "https://github.com/shubhhh009/react-ai-tool",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Modern School Management System",
    description:
      "VidhyaPro is a modern education-focused learning application designed to provide students and learners with a simple, structured, and efficient learning experience.",
    tech: ["HTML", "CSS", "Javascript"],
    live: "https://school-project-five-lilac.vercel.app/",
    github: "#",
    color: "from-orange-500 to-red-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden glass hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Colored Top Border */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-purple-500 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
