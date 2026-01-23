import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 md:px-12 w-full">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Education & Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Column */}
          <div className="glass p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-12 border-l-2 border-purple-200 dark:border-purple-900 ml-4 pl-8 relative">
              <ResumeItem 
                title="Bachelor of Technology"
                subtitle="Computer Science • 2020 - 2024"
                description="Specialized in Full Stack Development and Cloud Computing. Graduated with distinction."
              />
               <ResumeItem 
                title="Higher Secondary School"
                subtitle="Science Stream • 2018 - 2020"
                description="Focused on Physics, Chemistry, and Mathematics."
              />
            </div>
          </div>

          {/* Experience Column */}
          <div className="glass p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
               <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Experience</h3>
            </div>
            
             <div className="space-y-12 border-l-2 border-pink-200 dark:border-pink-900 ml-4 pl-8 relative">
              <ResumeItem 
                title="Full Stack Developer"
                subtitle="Tech Corp Inc. • 2024 - Present"
                description="Developing scalable web applications using React, Node.js, and AWS. Improved system performance by 30%."
              />
               <ResumeItem 
                title="Frontend Developer Intern"
                subtitle="Startup Hub • 2023 - 2024"
                description="Built responsive UI components and integrated RESTful APIs. Collaborated with design team for UI revamp."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResumeItem = ({ title, subtitle, description }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative group"
  >
    {/* Dot */}
    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white dark:bg-gray-900 border-4 border-purple-500 dark:border-purple-600 transition-colors group-hover:border-pink-500"></div>
    
    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{title}</h4>
    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">{subtitle}</p>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

export default Resume;
