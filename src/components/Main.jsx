import { useRef } from 'react';
import Navbar from "./Navbar"
import Home from "./Home";
import AboutMe from "./AboutMe";
import Articles from "./Articles";
import Contact from "./Contact";
;

const Main = () => {
  
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
        <div className="bg-[var(--color-mint-100)] w-[1500px] sm:w-full m-auto" >
        <div ref={homeRef} className="section text-center h-svh  pt-[80px] pl-1 pr-1"><Home /></div>
        <div ref={aboutMeRef} className="section text-center h-svh bg-[var(--color-mint-300)] pt-[80px] pl-1 pr-1"><AboutMe /></div>
        <div ref={articlesRef} className="section text-center h-svh bg-zinc-500 pt-[80px] pl-1 pr-1" ><Articles /></div>
        <div ref={contactRef} className="section text-center h-svh bg-zinc-400 pt-[80px] pl-1 pr-1"><Contact /></div>
        </div>
  
  
        {/* Roteamento dos Articles */}
       
        </>
    );
}

export default Main