import { motion } from "framer-motion";

function Skills() {
  const skills = [
   "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", 
    "Vue.js", "Vite.js", "Redux", "Tailwind CSS", "Bootstrap", 
    "Material UI", "Node.js", "Express.js", "Nest.js", "MongoDB", 
    "MySQL", "Firebase", "PostgreSQL", "Prisma", "AWS", 
    "Docker", "Git", "GitHub", "GitLab"
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} label={skill} index={index} />
          ))}
        </div>
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
    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-pink-600 mb-2">
      {label.charAt(0)}
    </div>
    <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200 text-center">
      {label}
    </span>
  </motion.div>
);

export default Skills;
