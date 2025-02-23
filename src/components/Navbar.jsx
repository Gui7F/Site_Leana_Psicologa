// components/Navbar.jsx

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar({
  scrollToSection,
  homeRef,
  aboutMeRef,
  articlesRef,
  contactRef,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //   Botoes Navbar mecanismo
  const getSectionRef = (page) => {
    switch (page) {
      case "home":
        return homeRef;
      case "about":
        return aboutMeRef;
      case "article":
        return articlesRef;
      case "contact":
        return contactRef;
      default:
        return null;
    }
  };

  const getButtonLabel = (page) => {
    switch (page) {
      case "home":
        return "Home";
      case "about":
        return "Sobre Mim";
      case "article":
        return "Artigos";
      case "contact":
        return "Contato";
      default:
        return page;
    }
  };
  const [isActivated, setIsActivated] = useState("home");

  return (
    <>
    
      <div className="flex justify-around items-center border border-b-black  bg-[var(--color-mint-200)] h-[67px]">
        {/* Logo */}
        <div className="max-[480px]:absolute left-0 pl-2">
          <h1>logo</h1>
        </div>

        {/* Navbar */}
        <div className="flex m-auto max-[480px]:hidden">
        {["home", "contact", "about", "article"].map((page) => (
          <nav key={page} className="flex ">
          <button
            onClick={() => {
              scrollToSection(getSectionRef(page));
              setIsActivated(page);
            }}
            className={`px-4 py-2 ${
              isActivated === page ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {getButtonLabel(page)}
          </button>
          </nav>
        ))}
        </div>

        {/* Icone Navbar Mobile */}
        <div className="lg:hidden max-[480px]:absolute right-2.5 pr-2">
          <button
            onClick={toggleMenu}
            className="text-[var(--color-mint-100)] focus:outline-none text-[20px] "
          >
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faBars} className="hidden" />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>


       {/* Menu Mobile */}

      <div
        style={{
          transition: "transform 0.2s ease-in-out",
          transform: isMenuOpen ? "scale(1)" : "scale(0)",
        }}
        className="fixed border inset-0 bg-[var(--color-mint-300)] bg-opacity-95 flex flex-col items-end justify-center z-50 w-3/4 ml-auto"
      > 
        
        <button
          onClick={toggleMenu}
          className="absolute top-2.5 right-2.5 text-[var(--color-mint-100)] focus:outline-none text-[25px]"
        >
          {/* Ícone de fechar */}
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        
        <nav className="grid grid-rows-4 gap-0 mt-10 w-full h-[87%]">
          <div className="border border-zinc-800 text-zinc-300 h-10"> 
          <button
            className="w-full text-end"
            onClick={() => {
              scrollToSection(homeRef);
              toggleMenu();
            }}
          >
            Home
          </button>
          </div>
          
          <div className="border border-zinc-800 text-zinc-300 h-10"> 
          <button
            className="w-full text-end"
            onClick={() => {
              scrollToSection(aboutMeRef);
              toggleMenu();
            }}
          >
            Sobre Mim
          </button>
          </div>
          <div className="border border-zinc-800 text-zinc-300 h-10"> 
          <button
            className="w-full text-end"
            onClick={() => {
              scrollToSection(articlesRef);
              toggleMenu();
            }}
          >
            Artigos
          </button>
          </div>
          <div className="border border-zinc-800 text-zinc-300 h-10"> 
          <button
            className="w-full text-end"
            onClick={() => {
              scrollToSection(contactRef);
              toggleMenu();
            }}
          >
            Contato
          </button>
          </div>
        </nav>
      </div>
    </>
  );
}
Navbar.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  homeRef: PropTypes.object.isRequired,
  aboutMeRef: PropTypes.object.isRequired,
  articlesRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired,
};

export default Navbar;
