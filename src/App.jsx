import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";


function App() {
  return (
    <>
    <Navbar />
     <div className="pt-15">
      <Hero />
      <About />
      <Skills />
      </div>
    </>
  );
}

export default App;
