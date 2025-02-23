import "./App.css"
import "./index.css";

//hooks
import { useRef } from "react";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Articles from "./components/Articles";
import Contact from "./components/Contact";


function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const articlesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block:"start" });
  };

  return (
    <>
    <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        articlesRef={articlesRef}
        contactRef={contactRef}
      />
 
      {/* Seções do site */}
      <div className="bg-[var(--color-mint-100)]" >
      <div ref={homeRef} className="section text-center h-svh"><Home /></div>
      <div ref={aboutMeRef} className="section text-center h-svh"><AboutMe /></div>
      <div ref={articlesRef} className="section text-center h-svh"><Articles /></div>
      <div ref={contactRef} className="section text-center h-svh"><Contact /></div>
      </div>
      </>
  );
}

export default App;

