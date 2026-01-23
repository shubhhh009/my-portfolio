import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume"; // We will create this next
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pt-24 md:pt-0 md:ml-[280px] lg:ml-[300px]">
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
