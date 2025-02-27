//Imports do icones FontAwesome
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"; 
import { faBook } from "@fortawesome/free-solid-svg-icons"; 

//hook
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
      <div className="fixed w-full flex justify-around items-center border border-b-black  bg-mint-200 h-[67px]">
        {/* Logo */}
        <div className="max-[480px]:absolute left-0 pl-2">
          <h1 className="text">logo</h1>
        </div>

        {/* Navbar */}
        <div className="flex m-auto max-[480px]:hidden">
  {["home", "about", "article", "contact"].map((page) => (
    <nav key={page} className="flex">
      <button
        onClick={() => {
          scrollToSection(getSectionRef(page));
          setIsActivated(page);
        }}
        className={`relative px-6 py-1 ml-10 rounded-2xl text-[16px] font-extrabold transition-all duration-300 overflow-hidden 
          ${isActivated === page ? "text-zinc-300" : "text-gray-900"}
          `}
      >
        <span className="relative z-10">{getButtonLabel(page)}</span>
        <span
          className={`absolute top-0 left-0 w-full h-full bg-zinc-700 rounded-2xl transition-all duration-300 -z-10
            ${isActivated === page ? "scale-x-100" : "scale-x-0"}
          `}
        ></span>
      </button>
    </nav>
  ))}
</div>

        {/* Icone Navbar Mobile */}
        <div className="lg:hidden md:hidden sm:hidden max-[480px]:absolute right-2.5 pr-2">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none text-[20px]"
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
        className="fixed border inset-0 bg-gray-700 bg-opacity-60 flex flex-col items-end justify-center z-50 w-3/4 ml-auto"
      >
        <div className="absolute  top-[25px] w-full text-[18px]">
          <button
            onClick={toggleMenu}
            className="absolute top-[-10px] right-2.5 text-zinc-300 focus:outline-none text-[25px]"
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <nav className="lato-bold grid grid-rows-5 gap-0 mt-10 w-full  border border-zinc-800">
            <div className="border-b border-zinc-800 text-zinc-300 h-14 flex items-center ">
              <button
                className="w-full text-end px-4"
                onClick={() => {
                  scrollToSection(homeRef);
                  toggleMenu();
                }}
              >
                Home <FontAwesomeIcon icon={faHouse}/>
              </button>
            </div>

            <div className="border-b border-zinc-800 text-zinc-300 h-14 flex items-center">
              <button
                className="w-full text-end px-4"
                onClick={() => {
                  scrollToSection(aboutMeRef);
                  toggleMenu();
                }}
              >
                Sobre Mim <FontAwesomeIcon icon={faAddressCard}/>
              </button>
            </div>

            <div className="border-b border-zinc-800 text-zinc-300 h-14 flex items-center">
              <button
                className="w-full text-end px-4"
                onClick={() => {
                  scrollToSection(articlesRef);
                  toggleMenu();
                }}
              >
                Artigos <FontAwesomeIcon icon={faBook}/>
              </button>
            </div>

            <div className="border-b border-zinc-800 text-zinc-300 h-14 flex items-center">
              <button
                className="w-full text-end px-4"
                onClick={() => {
                  scrollToSection(contactRef);
                  toggleMenu();
                }}
              >
                Contato <FontAwesomeIcon icon={faComment}/>
              </button>
            </div>

            <div className="border-b border-zinc-800 text-zinc-300 h-14 flex items-center">
              <button
                className="w-full text-end px-4"
                onClick={() => {
                  scrollToSection(contactRef);
                  toggleMenu();
                }}
              >
                WhatsApp <FontAwesomeIcon icon={faSquareWhatsapp}/>
              </button>
            </div>
          </nav>
        </div>
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
