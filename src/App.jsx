import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navigation />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}

export default App;
