const AboutMe = () => {
  return (
    <div className="">
      <h1 className="text-start text-5xl">Sobre Mim</h1>
      <div className="flex w-[1000px]">
      <p className="w-1/2">
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
      
      <div className="grid grid-cols-2 w-[500px] h-[300px] m-auto ">
        <div className="overflow-hidden h-[250px] w-[250px]">
          <img
            className="w-full h-full object-cover"
            src="./fotos-sobre-mim4.jpg"
            alt=""
          />
        </div>

        <div className="overflow-hidden h-[500px] w-[500px]">
          <img
            className="w-full h-full object-cover"
            src="./fotos-sobre-mim1.jpg"
            alt=""
          />
        </div>

        <div className="overflow-hidden h-[250px] w-[250px] absolute">
          <img
            className="w-full h-full object-cover "
            src="./fotos-sobre-mim3.jpg"
            alt=""
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutMe;
