import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[60vh] bg-white dark:bg-black text-black dark:text-white px-10 py-20 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Text Content */}
            <div>
                <p className="text-xl text-purple-600 dark:text-purple-400 font-bold mb-4 tracking-wide uppercase">
                    Who I Am & What I Can Do
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    I am a passionate Web Developer with a strong focus on building
                    <span className="font-semibold text-purple-500"> clean, scalable, and user-friendly</span> web applications. 
                    I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                    My core strength lies in <span className="text-purple-500 font-medium">JavaScript, React, Node.js</span>, and modern UI development. 
                    I continuously learn new technologies and improve my skills to deliver high-quality products that create real value.
                </p>
            </div>

            {/* Right Side: Stats / Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                 {/* Decorative backend glow */}
                 <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-20 blur-2xl animate-pulse"></div>

                <div className="relative glass rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300">
                    <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">2+</h3>
                     <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Years Experience</h4>
                    <p className="text-gray-600 dark:text-gray-400">Hands-on project-based experience in Full Stack Dev.</p>
                </div>

                <div className="relative glass rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300">
                     <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">20+</h3>
                     <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Projects Built</h4>
                    <p className="text-gray-600 dark:text-gray-400">Frontend, Full Stack & UI Engineering focused.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
