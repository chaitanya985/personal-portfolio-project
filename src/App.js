import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 
import Hero from "./components/Hero";
import Skills from "./components/Skills"; 
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
export default function App(){
  return(
    <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Blog />
        <Contact />
        <Footer />
        
    </>
  );
}
