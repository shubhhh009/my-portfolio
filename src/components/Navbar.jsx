import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur border-b border-white/10 z-50 ">
        <div className="w-full px-6 py-4 flex items-center ">
            {/* logo */}
            <h1 className="text-xl font-bold text-purple-600 ">
             Shubham <span className="text-white">Tiwari.</span>
            </h1>

         {/* Links  */}
         <ul className=" ml-auto hidden md:flex gap-8 text-base text-purple-500 font-bold">
             <li>
            <a href="#home" className="hover:text-white transition">Home</a>
          </li>
           <li>
            <a href="#about" className="hover:text-white transition">About</a>
          </li>
            <li>
            <a href="#skills" className="hover:text-white transition">Skills</a>
          </li>
             <li>
            <a href="#projects" className="hover:text-white transition">Projects</a>
          </li>
            <li className="hover:text-white cursor-pointer">Contact</li>
         </ul>
         
         <button className="md:hidden text-white text-xl">
          ☰
        </button>
        </div>

    </nav>
  )
}

export default Navbar