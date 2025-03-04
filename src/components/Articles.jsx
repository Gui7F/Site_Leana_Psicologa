import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// imagens
import article1Img from "../assets/article_imagens/article1-img.jpeg";
import article2Img from "../assets/article_imagens/article2-img.jpg";
import article3Img from "../assets/article_imagens/article3-img.jpg";
import article4Img from "../assets/article_imagens/article4-img.jpg";
import article5Img from "../assets/article_imagens/article5-img.jpg";

const articles = [
  {
    id: "article_1",
    title:
      "Como a psicanálise ajuda crianças que não sabem falar sobre seus sentimentos?",
    img: article1Img,
  },
  {
    id: "article_2",
    title:
      "Terapia para adolescentes: por que muitos resistem e como a psicanálise pode ajudar?",
    img: article2Img,
  },
  {
    id: "article_3",
    title:
      "Sinais de que seu filho precisa de ajuda psicológica (e não é só uma fase)",
    img: article3Img,
  },
  {
    id: "article_4",
    title:
      "Psicanálise x Terapias Comportamentais: Qual a Melhor Opção para Crianças e Adolescentes?",
    img: article4Img,
  },
  {
    id: "article_5",
    title:
      "Atendimento Psicológico Online: Vantagens, Desafios e o Papel do Sexo do Terapeuta",
    img: article5Img,
  },
];

export default function ArticleCarousel() {
  return (
    <div className="border border-black rounded-lg lg:h-1/2 h-auto max-w-7xl m-auto w-full p-4 bg-[url('./assets/img/bg-aboutme-1920x1080.png')] lg:mt-60">
      <div className="flex justify-between lg:text-5xl text-2xl border-b border-black bg-mint-300 rounded text-color-text-content">
        <h1 className="text-start p-3 playfair-display-extrabold">Artigos</h1>
        <FontAwesomeIcon icon={faPaperclip} className="p-3" />
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }} // Adiciona as setas de navegação
        className="mt-5"
      >
        {articles.map((article, index) => (
          <SwiperSlide
            key={index}
            className="border border-black rounded-lg p-4 bg-gray-100 flex flex-col justify-center items-center h-80"
          >
            <Link to={article.id} className="block text-center">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-80 object-cover rounded mb-3"
              />
              <h2 className="line-clamp-2 hover:line-clamp-none transition-all duration-300 text-lg font-bold">
                {index + 1}º {article.title}
              </h2>
            </Link>
          </SwiperSlide>
        ))}
        <div className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 text-color-button-home bg-color-pastel  p-3 rounded-full cursor-pointer z-10">
          ❮
        </div>
        <div className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 text-color-button-home bg-color-pastel p-3 rounded-full cursor-pointer z-10">
          ❯
        </div>
      </Swiper>
    </div>
  );
}
