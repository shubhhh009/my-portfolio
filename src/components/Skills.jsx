import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

function Skills() {
  const [showAll, setShowAll] = useState(false);
  
  const skills = [
   "JavaScript", "TypeScript", "React.js", "Next.js", "HTML", "CSS", "Bootstrap", "Material UI", "Node.js", "Express.js", "Nest.js", "MongoDB", "MySQL", "Firebase", "PostgreSQL", "Prisma", "AWS", "Docker", "Git", "GitHub", "GitLab"
  ];

  const visibleSkills = showAll ? skills : skills.slice(0, 5);

  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleSkills.map((skill, index) => (
              <SkillCard key={skill} label={skill} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {skills.length > 5 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all active:scale-95 group"
            >
              {showAll ? (
                <>
                  See Less <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  See More <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

const SkillCard = ({ label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    whileHover={{ scale: 1.05 }}
    className="aspect-square flex flex-col items-center justify-center p-4 rounded-3xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/5 shadow-lg backdrop-blur-sm hover:bg-white/60 dark:hover:bg-white/10 transition-all cursor-default"
  >
    <div className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-br from-purple-600 to-pink-600 mb-2">
      {label.charAt(0)}
    </div>
    <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200 text-center">
      {label}
    </span>
  </motion.div>
);

export default Skills;
