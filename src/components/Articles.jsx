import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
const Articles = () => {
  return (
    <div className="border border-zinc-600 rounded-lg h-full max-w-7xl m-auto max-[480px]:w-full">
      <div className="flex justify-between lg:text-5xl text-2xl border-b border-b-zinc-600 bg-mint-300 rounded text-slate-200">
        <h1 className="text-start p-3 playfair-display-extrabold">Artigos</h1>
        <FontAwesomeIcon icon={faPaperclip} className="p-3" />
      </div>

      <div className="border-b border-zinc-600 text-start pt-5 pb-5 lg:text-2xl">
        <Link target="_blank" to="article_1">
          <div className="flex">
            <span className="pl-4 pr-3">1º</span>
            <h2 className="line-clamp-2 hover:line-clamp-none transition-all duration-300">
              Como a psicanálise ajuda crianças que não sabem falar sobre seus
              sentimentos?
            </h2>
          </div>
        </Link>
      </div>

      <div className="border-b border-zinc-600 text-start pt-5 pb-5 lg:text-2xl">
        <Link target="_blank" to="article_1">
          <div className="flex">
            <span className="pl-4 pr-3">2º</span>
            <h2 className="line-clamp-2 hover:line-clamp-none transition-all duration-300">
              Terapia para adolescentes: por que muitos resistem e como a
              psicanálise pode ajudar?
            </h2>
          </div>
        </Link>
      </div>

      <div className="border-b border-zinc-600 text-start pt-5 pb-5 lg:text-2xl">
        <Link target="_blank" to="article_1">
          <div className="flex">
            <span className="pl-4 pr-3">3º</span>
            <h2 className="line-clamp-2 hover:line-clamp-none transition-all duration-300">
              Sinais de que seu filho precisa de ajuda psicológica (e não é só
              uma fase)
            </h2>
          </div>
        </Link>
      </div>

      <div className="border-b border-zinc-600 text-start pt-5 pb-5 lg:text-2xl">
        <Link target="_blank" to="article_1">
          <div className="flex">
            <span className="pl-4 pr-3">4º</span>
            <h2 className="line-clamp-2 hover:line-clamp-none transition-all duration-300">
              A TCC foca no presente e busca modificar padrões de pensamento e
              comportamento que causam sofrimento. Para crianças e adolescentes,
              isso pode significar:
            </h2>
          </div>
        </Link>
      </div>

      <div className="border-b border-zinc-600 text-start pt-5 pb-5 lg:text-2xl">
        <Link target="_blank" to="article_1">
          <div className="flex">
            <span className="pl-4 pr-3">5º</span>
            <h2 className="line-clamp-2 hover:line-clamp-none transition-all duration-300">
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
