const AboutMe = () => {
  return (
    <div className="lg:max-w-7xl m-auto lg:mt-80 lg:ml-60 w-full">
      <h1 className="text-start lg:text-5xl text-2xl playfair-display-extrabold">Sobre Mim</h1>
      <div className="lg:flex lg:w-[1000px]">
      <p className="lg:w-1/2 text-start mr-7 lg:text-xl">
        Durante a minha graduação, tive o privilégio de ter dois filhos. Sempre
        fui apaixonada pela psicologia infantil, mas foi nesse período que
        percebi, na prática, o quão desafiador é entender e acolher os
        sentimentos das crianças. Sob forte influência do meu esposo, que é
        psiquiatra e aplica amplamente a psicanálise na sua prática médica, me
        aprofundei ainda mais nos estudos dessa abordagem. Percebi como é
        valioso criar nossos filhos utilizando técnicas bem fundamentadas e
        reconhecidas pela psicologia, algo que também aplico no meu trabalho
        clínico. Sou muito grata por ter adquirido esse conhecimento e poder
        usá-lo tanto no desenvolvimento dos meus filhos quanto no cuidado dos
        meus pacientes.
      </p>
        <div className="overflow-hidden lg:h-[500px] lg:w-[500px] sm:w-[250px] sm:h-[250px] mb-52">
          <img
            className="w-full h-full object-cover"
            src="./fotos-sobre-mim1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
