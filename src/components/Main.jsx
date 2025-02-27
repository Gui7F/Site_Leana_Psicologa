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
        <div className="bg-mint-100 lg:w-1500 m-auto p-2" >
          <div ref={homeRef} className="section text-center h-svh  pt-[80px]"><Home /></div>
          <div ref={aboutMeRef} className="section text-center h-svh pt-[80px]"><AboutMe /></div>
          <div ref={articlesRef} className="section text-center h-svh pt-[80px] lg:pl-4 lg:pr-4 lg:pb-4 " ><Articles /></div>
          <div ref={contactRef} className="section  h-svh pt-[80px] lato-bold"><Contact /></div>
        </div>
  
  
        {/* Roteamento dos Articles */}
       
        </>
    );
}

export default Main