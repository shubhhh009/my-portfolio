import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, Twitter, Download, Sun, Moon, Menu, X } from "lucide-react";
import profileImg from "../assets/Profile.PNG";

const Sidebar = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
        {/* Mobile Top Bar */}
        <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-white/70 dark:bg-black/80 backdrop-blur-md z-50 flex items-center justify-between px-6 border-b border-white/10 shadow-sm">
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Shubham Tiwari</span>
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>

        {/* Sidebar container */}
        <aside 
            className={`fixed top-0 left-0 h-screen bg-white/80 dark:bg-black/90 md:bg-white/70 md:dark:bg-black/50 backdrop-blur-2xl border-r border-white/20 dark:border-white/10 shadow-2xl transition-transform duration-300 z-40 ease-in-out
            w-[280px] lg:w-[300px]
            ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
            flex flex-col items-center py-8`}
        >
          
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8 text-center px-6 w-full mt-16 md:mt-0">
            <div className="relative w-28 h-28 mb-4 rounded-full p-1 bg-[conic-gradient(#EA4335_0deg_90deg,#4285F4_90deg_180deg,#34A853_180deg_270deg,#FBBC05_270deg_360deg)] shadow-lg">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-black"
              />
            </div>
            <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 truncate w-full">
              Shubham Tiwari
            </h1>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
              Full Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 w-full px-6 overflow-y-auto hide-scrollbar">
            <ul className="flex flex-col gap-2 md:gap-4">
              <NavItem to="home" label="Home" onClick={() => setIsOpen(false)} />
              <NavItem to="about" label="About Me" onClick={() => setIsOpen(false)} />
              <NavItem to="resume" label="Resume" onClick={() => setIsOpen(false)} />
              <NavItem to="skills" label="Skills" onClick={() => setIsOpen(false)} />
              <NavItem to="projects" label="Projects" onClick={() => setIsOpen(false)} />
              <NavItem to="contact" label="Contact" onClick={() => setIsOpen(false)} />
            </ul>
          </nav>

          {/* Footer / Socials */}
          <div className="w-full px-6 mt-6 flex flex-col gap-4">
            {/* Theme Toggle Button */}
            <button 
                onClick={toggleTheme}
                className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all font-medium"
            >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>

            <div className="flex justify-center gap-4 text-gray-500 dark:text-gray-400">
              <SocialIcon href="https://github.com/shubhhh009" icon={<Github size={20} />} />
              <SocialIcon href="https://www.linkedin.com/in/shubham-tiwari-64b4b824b/" icon={<Linkedin size={20} />} />
              <SocialIcon href="https://x.com/sachint34801982" icon={<Twitter size={20} />} />
              <SocialIcon href="mailto:tiwarisachin8482@gmail.com" icon={<Mail size={20} />} />
            </div>
            
            <a 
                href="/resume.pdf" 
                download
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1"
            >
                <Download size={18} /> Download CV
            </a>
          </div>
        </aside>
        
        {/* Overlay for mobile when menu is open */}
        {isOpen && (
            <div 
                className="fixed inset-0 bg-black/50 z-30 md:hidden"
                onClick={() => setIsOpen(false)}
            />
        )}
    </>
  );
};

const NavItem = ({ to, label, onClick }) => (
  <li>
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
      onClick={onClick}
      className="block cursor-pointer px-4 py-3 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-white/5 font-medium transition-all duration-300 hover:text-purple-600 dark:hover:text-purple-400"
    >
      {label}
    </Link>
  </li>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg hover:bg-white/40 dark:hover:bg-white/10 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
  >
    {icon}
  </a>
);

export default Sidebar;
