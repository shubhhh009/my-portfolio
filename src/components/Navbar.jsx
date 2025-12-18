import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

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

  return (
    <nav className="fixed top-0 left-0 w-full
                    bg-white/80 dark:bg-black/80
                    backdrop-blur border-b
                    border-black/10 dark:border-white/10
                    z-50">
      <div className="w-full px-6 py-4 flex items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-purple-600">
          Shubham <span className="text-black dark:text-white">Tiwari.</span>
        </h1>

        {/* Links */}
        <ul className="ml-auto hidden md:flex gap-8 text-base font-bold">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
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

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-6 w-10 h-10 rounded-full
                     flex items-center justify-center
                     border border-black/10 dark:border-white/10
                     hover:bg-black/5 dark:hover:bg-white/10
                     transition"
        >
          {darkMode ? (
            // Sun
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2m0 14v2m9-9h-2M5 12H3
                   m15.364-6.364l-1.414 1.414
                   M7.05 16.95l-1.414 1.414
                   M16.95 16.95l1.414 1.414
                   M7.05 7.05L5.636 5.636
                   M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          ) : (
            // Moon
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12.79A9 9 0 1111.21 3
                   a7 7 0 009.79 9.79z"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <button className="ml-4 md:hidden text-black dark:text-white text-xl">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;