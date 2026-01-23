import profileImg from "../assets/Profile.PNG";
import { motion, scrollInfo } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 5, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12"
    >
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <p className="text-2xl text-purple-600 dark:text-purple-400 font-semibold tracking-wide">
            Hi There! I’m
          </p>

          <motion.h1
            whileHover={{ scale: 1.02 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white"
          >
            Shubham <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Tiwari</span>
          </motion.h1>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300">
            Full Stack Developer
          </h2>

          <p className="max-w-xl text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            I craft modern, high-performance web applications with a focus on 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> scalable architecture</span> and 
            <span className="font-semibold text-pink-600 dark:text-pink-400"> user-centric design</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
              className="bg-white dark:bg-white/10 text-gray-800 dark:text-white border border-gray-200 dark:border-white/10 px-8 py-4 rounded-2xl font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div 
         whileHover={{ scale: 1.05 }}
         transition={{ type: "spring", stiffness: 100 }}
         className="relative mt-20 md:mt-10"
        >
          {/* Decorative Blob - Keeping it but adjusting opacity or removing if clashes, let's keep for now as background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full p-1.5 bg-[conic-gradient(#EA4335_0deg_90deg,#4285F4_90deg_180deg,#34A853_180deg_270deg,#FBBC05_270deg_360deg)] shadow-2xl">
            <img
              src={profileImg}
              alt="Shubham Tiwari"
              className="w-full h-full rounded-full object-contain border-4 border-white dark:border-white/10"
            />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Hero;
