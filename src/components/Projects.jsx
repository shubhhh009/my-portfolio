const projects = [
  {
    title: "AstroVibes",
    description:
      "A modern astrology web app providing horoscope insights with a clean UI and smooth user experience.",
    tech: ["React", "Tailwind CSS", "Local Storage"],
    live: "https://astrology-app-ashen.vercel.app/login",
    github: "https://github.com/shubhhh009/Astrology-app",
  },
  {
    title: "WebInsight AI",
    description:
      "An AI-powered web scraper that extracts website data and answers user queries using background jobs.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "BullMQ"],
    live: "https://new-ai-scrapper-l43e.vercel.app/",
    github: "https://github.com/shubhhh009/NEW_AI_SCRAPPER",
  },
  {
    title: "Gemini Clone",
    description:
      "A full-stack application inspired by Google Gemini with AI-powered conversational capabilities.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://react-ai-tool-oljv.vercel.app/",
    github: "https://github.com/shubhhh009/react-ai-tool",
  },
  {
    title: "Upcoming Project",
    description:
      "",
    tech: [""],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#2f2f2f] px-10 py- text-white"
    >
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-4xl font-semibold">
            My <span className="text-purple-600">Projects</span>
          </h2>

         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project,index)=>(
               <div 
               key={index}
               className="rounded-xl border border-white/10 bg-white/5 
               p-6 hover:scale-[1.02] hover:border-purple-500/50
               transition-all duration-300"
               >
                <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t,i)=>(
                        <span 
                        key={i}
                         className="text-xs px-3 py-1 rounded-full
                                 bg-purple-500/10 text-purple-400
                                 border border-purple-500/20  hover:text-white"
                        >
                        {t}
                        </span>
                    ))}
                </div>
                 <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-purple-400 hover:text-purple-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-400 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
               </div>
            ))}
         </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
