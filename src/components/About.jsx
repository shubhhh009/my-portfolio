import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[60vh] bg-[#2f2f2f] text-white px-10 py-20 flex "
    >
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="text-purple-500">Me</span>
        </h2>
        <p className="text-purple-400 font-semibold mb-2 ">
            Who I Am & What I Can Do 
        </p>
        <p className="text-gray-300 text-base leading-relaxed mb-4">
             I am a passionate Web Developer with a strong focus on building
          clean, scalable, and user-friendly web applications. I enjoy turning
          complex problems into simple, beautiful, and intuitive solutions.
        </p>

        <p className="text-gray-400 text-base leading-relaxed mb-6">
           My core strength lies in JavaScript, React, Node.js, and modern UI
          development. I continuously learn new technologies and improve my
          skills to deliver high-quality products that create real value.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border border-purple-600/40 rounded-xl p-5 bg-purple-600/80 ">
            <h3 className="text-purple-400 font-semibold mb-2">Experience</h3>
            <p className="text-gray-300">Hands-on project-based experience</p>
          </div>

          <div className="border border-purple-600/40 rounded-xl p-5 hover:bg-purple-600/80">
            <h3 className="text-purple-400 font-semibold mb-2">Focus</h3>
            <p className="text-gray-300">Frontend, Full Stack & UI Engineering</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
