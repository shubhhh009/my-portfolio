import profileImg from "../assets/profile.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 5, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className=" min-h-[60vh] flex items-center bg-white dark:bg-black text-black dark:text-white px-10 py-8"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-2xl text-purple-600 dark:text-purple-400 font-semibold">
            Hi, I’m
          </p>

          <motion.h1
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Shubham <span className="text-purple-600">Tiwari</span>
          </motion.h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
            Web Developer
          </h2>

          <p className="max-w-xl text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            I build modern, high-performance web applications with clean UI,
            scalable architecture, and a focus on real-world problem solving.
          </p>

          <div className="flex gap-6 mt-4">
            <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded font-semibold">
              View Projects
            </button>
            <button className="border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white transition px-6 py-3 rounded font-semibold">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div 
         whileHover={{ scale: 1.1 }}
         transition={{ type: "spring", stiffness: 50 }}
        className="flex-1 flex justify-center">
          <img
            src={profileImg}
            alt="Shubham Tiwari"
            className="w-72 h-72 md:w-96 md:h-96 [50%_40%] rounded-full border-4 border-purple-600 shadow-lg mt-10"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
