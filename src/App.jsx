import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navigation />
      <About />
      <Skills />
      <Experiences />
      {/* <Project /> */}
      <Contact />
    </>
  );
}

export default App;
