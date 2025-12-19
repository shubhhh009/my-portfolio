import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50
                 bg-white/80 dark:bg-black/80
                 backdrop-blur border-b
                 border-black/10 dark:border-white/10"
    >
      <div className="w-full px-6 py-4 flex items-center">
      
        <h1 className="text-xl font-bold text-purple-600">
          Shubham <span className="text-black dark:text-white">Tiwari.</span>
        </h1>

        
        <ul className="ml-96 hidden md:flex gap-8 text-base font-bold">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-black dark:text-purple-500
                           hover:text-purple-600 dark:hover:text-white
                           transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

       
        <button
          onClick={toggleTheme}
          className="ml-auto w-10 h-10 rounded-full
                     flex items-center justify-center
                     border border-black/10 dark:border-white/10
                     hover:bg-black/5 dark:hover:bg-white/10
                     transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-4 md:hidden text-2xl z-50
                     text-black dark:text-white"
        >
          ☰
        </button>
      </div>

     
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0
                       w-full bg-white dark:bg-black
                       border-t border-black/10 dark:border-white/10"
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 font-semibold
                           text-black dark:text-white
                           hover:bg-purple-100 dark:hover:bg-purple-900"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
