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
      <div className="flex justify-around items-center p-5 border border-b-black ">
        {/* Logo */}
        <div>
          <h1>logo</h1>
        </div>

        {/* Navbar */}
        <div className="flex m-auto">
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
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-500 focus:outline-none"
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
        className="fixed inset-0 bg-gray-800 bg-opacity-95 flex flex-col items-end justify-center z-50 w-3/4 ml-auto p-4 pb-44 "
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-blue-500 focus:outline-none"
        >
          {/* Ícone de fechar */}
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>

        <nav>
          <button
            onClick={() => {
              scrollToSection(aboutMeRef);
              toggleMenu();
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection(aboutMeRef);
              toggleMenu();
            }}
          >
            Sobre Mim
          </button>
          <button
            onClick={() => {
              scrollToSection(aboutMeRef);
              toggleMenu();
            }}
          >
            Artigos
          </button>
          <button
            onClick={() => {
              scrollToSection(aboutMeRef);
              toggleMenu();
            }}
          >
            Contato
          </button>
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
