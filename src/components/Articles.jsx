import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
const Articles = () => {
  return (
    <div className="border border-zinc-600 rounded-lg h-full">
      <div className="flex justify-between text-5xl border-b border-b-zinc-600">
        <h1 className="text-start p-3">Artigos</h1>

        <FontAwesomeIcon icon={faPaperclip} className="p-3"/>
      </div>
      <div className="border-b border-zinc-600 text-start pt-5 pb-5 text-2xl ">
        <Link target="_blank" to="article_1">
        <div className="flex">

        <span className="pl-4">
          1.
        </span>
          <h2>
            Como a psicanálise ajuda crianças que não sabem falar sobre seus
            sentimentos?          
          </h2>
        </div>
        </Link>
      </div>
      <div className="border-b border-zinc-600 text-start pt-5 pb-5 text-2xl ">
        <Link target="_blank" to="article_1">
        <div className="flex">

        <span className="pl-4">
          1.
        </span>
          <h2>
          Terapia para adolescentes: por que muitos resistem e como a
          psicanálise pode ajudar?     
          </h2>
        </div>
        </Link>
      </div>
      <div className="border-b border-zinc-600 text-start pt-5 pb-5 text-2xl ">
        <Link target="_blank" to="article_1">
        <div className="flex">

        <span className="pl-4">
          1.
        </span>
          <h2>
          Sinais de que seu filho precisa de ajuda psicológica (e não é só uma
            fase)
          </h2>
        </div>
        </Link>
      </div>
      <div className="border-b border-zinc-600 text-start pt-5 pb-5 text-2xl ">
        <Link target="_blank" to="article_1">
        <div className="flex">

        <span className="pl-4">
          1.
        </span>
          <h2>
          A TCC foca no presente e busca modificar padrões de pensamento e
          comportamento que causam sofrimento. Para crianças e adolescentes,
          isso pode significar:
          </h2>
        </div>
        </Link>
      </div>
      <div className="border-b border-zinc-600 text-start pt-5 pb-5 text-2xl ">
        <Link target="_blank" to="article_1">
        <div className="flex">

        <span className="pl-4">
          1.
        </span>
          <h2>
          Como a psicanálise ajuda crianças que não sabem falar sobre seus
          sentimentos?
          </h2>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Articles;
