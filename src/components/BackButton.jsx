import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BackButton = () => {
  const backButtonRef = useRef(null);

  useEffect(() => {
    if (backButtonRef.current) {
      backButtonRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="back-button-container" ref={backButtonRef}>
     <Link to="/">
      <button className="back-button p-4">
        <FontAwesomeIcon icon={faArrowLeft} /> Voltar
      </button>
     </Link>
    </div>
  );
};

export default BackButton;