import { useState } from "react";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Vue.js",
    "Vite.js",
    "Redux",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Node.js",
    "Express.js",
    "Nest.js",
    "MongoDB",
    "MySQL",
    "Firebase",
    "RESTful APIs",
    "JWT",
    "OAuth",
    "Git",
    "GitHub",
    "GitLab",
    "CI/CD Pipelines",
    "AWS",
    "Google Cloud",
    "Vercel",
    "Netlify",
    "Docker",
    "WebSockets",
  ];

  const VISIBLE_COUNT = 12;
  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll
    ? skills
    : skills.slice(0, VISIBLE_COUNT);

  return (
    <motion.section
     initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 1 }}
     viewport={{ once: true }}
      id="skills"
      className="min-h-[80vh] bg-white dark:bg-black text-black dark:text-white px-10 py-8"
    >
      <div className="w-full mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-purple-600">Skills</span>
        </h2>

        <p className="text-purple-400 font-semibold mb-12">
          Technologies & tools I work with
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-10 justify-center">
          {visibleSkills.map((skill, i) => (
            <SkillBubble key={i} label={skill} />
          ))}
        </div>

        {/* Show More / Less Button */}
        {skills.length > VISIBLE_COUNT && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full border border-purple-600
                         text-purple-400 font-semibold
                         hover:bg-purple-600 hover:text-white
                         transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

      </div>
    </motion.section>
  );
}

export default Skills;

/* ---------------- Skill Bubble ---------------- */

function SkillBubble({ label }) {
  const [explode, setExplode] = useState(false);

  return (
    <div
      className="relative w-28 h-28"
      onMouseEnter={() => setExplode(true)}
      onMouseLeave={() => setExplode(false)}
    >
      {/* Main Circle */}
      <div
        className={`absolute inset-0 flex items-center justify-center
        rounded-full bg-purple-600 font-semibold text-sm text-center px-2
        transition-all duration-500
        ${explode ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
      >
        {label}
      </div>

      {/* Particles */}
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className={`absolute w-2 h-2 bg-purple-400 rounded-full
          transition-all duration-700
          ${explode ? "opacity-100" : "opacity-0"}`}
          style={{
            top: "50%",
            left: "50%",
            transform: `rotate(${i * 30}deg) translate(${explode ? 50 : 0}px)`,
          }}
        />
      ))}
    </div>
  );
}
