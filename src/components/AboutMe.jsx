const AboutMe = () => {
  return (
    <div className=" m-auto 2xl:w-full xl:w-5/6 lg:w-full py-20 text-color-clear">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="w-full 2xl:max-w-[500px] xl:max-w-[420px] xl:mr-3 md:max-w-[400px] md:ml-10 max-[480px]:pb-10 max-[480px]:pr-10 max-[480px]:pl-10 h-auto">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            src="./sobre-mim1.jpg"
            alt=""
          />
        </div>
        <div className="w-full 2xl:ml-20 xl:w-2/3  m-auto max-[600px]:p-3 shadow-inner lg:shadow-color-text-content p-10">
          <h1 className=" bodoni-moda-regular text-start lg:text-5xl text-2xl mb-[20px]">
            SOBRE MIM
          </h1>
          <p className="text-justify  lg:mr-7 2xl:text-xl xl:text-base mb-[8px]">
            Durante a minha graduação, tive o privilégio de ter dois filhos.
            Sempre fui apaixonada pela psicologia infantil, mas foi nesse
            período que percebi, na prática, o quão desafiador é entender e
            acolher os sentimentos das crianças. Sob forte influência do meu
            esposo, que é psiquiatra e aplica amplamente a psicanálise na sua
            prática médica, me aprofundei ainda mais nos estudos dessa
            abordagem. Percebi como é valioso criar nossos filhos utilizando
            técnicas bem fundamentadas e reconhecidas pela psicologia, algo que
            também aplico no meu trabalho clínico. Sou muito grata por ter
            adquirido esse conhecimento e poder usá-lo tanto no desenvolvimento
            dos meus filhos quanto no cuidado dos meus pacientes.
          </p>
          <p className="text-justify lg:mr-7 2xl:text-xl xl:text-base">
            Percebi como é valioso criar nossos filhos utilizando técnicas bem
            fundamentadas e reconhecidas pela psicologia, algo que também aplico
            no meu trabalho clínico. Sou muito grata por ter adquirido esse
            conhecimento e poder usá-lo tanto no desenvolvimento dos meus filhos
            quanto no cuidado dos meus pacientes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
