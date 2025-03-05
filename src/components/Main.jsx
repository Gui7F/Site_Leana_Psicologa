import { useRef } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Articles from "./Articles";
import Contact from "./Contact";
const Main = () => {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const articlesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <div className=" m-auto">
        <div className=" bg-cover bg-center m-auto border border-black bg-[url('./assets/img/green-cup-1920x1080.png')]">
          <div
            ref={homeRef}
            className="  section text-center xl:h-screen xl:w-[1500px] md:h-screen m-auto pt-[170px] bg-[url('./assets/img/green-cup-1920x1080.png')]"
          >
            <Home />
          </div>
        </div>

        <div className="bg-cover bg-center m-auto border border-black bg-[url('./assets/img/bg-aboutme-1920x1080.png')] ">
          <div
            ref={aboutMeRef}
            className="section text-center h-auto 2xl:w-width-content m-auto "
          >
            <AboutMe />
          </div>
        </div>

        <div className="bg-cover bg-center m-auto border border-black bg-[url('./assets/img/green-cup-1920x1080.png')]">
          <div
            ref={articlesRef}
            className="section text-center 2xl:h-screen 2xl:w-width-content m-auto py-20 sm:px-3"
          >
            <Articles />
          </div>
        </div>

        <div className="bg-cover bg-center m-auto border border-black bg-[url('./assets/img/bg-aboutme-1920x1080.png')]">
          <div
            ref={contactRef}
            className="section h-auto 2xl:w-width-content xl:h-auto m-auto lato-bold"
          >
            <Contact />
          </div>
        </div>
      </div>

      {/* Roteamento dos Articles */}
    </>
  );
};

export default Main;
