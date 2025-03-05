const Home = () => {
  return (
    <div className=" text-start m-auto text-color-text-content ">
      <div className="lg:min-w-full">

      <h1 className="playfair-display-extrabold 2xl:text-[150px] 2xl:ml-[80px]  xl:ml-[120px] xl:text-[90px] md:ml-[60px] md:text-[60px] text-5xl max-[480px]:text-center">
        LEANA BERALDO
      </h1>
      </div>
      <div className="lg:flex justify-center items-center ">
        <div className=" 2x1:mt-44 2xl:ml-[80px] xl:ml-[120px] md:ml-[60px] max-[480px]:pl-10 max-[480px]:pr-10 ">
          <h2 className="playfair-display-extrabold 2xl:text-6xl xl:text-4xl text-2xl mb-[20px] max-[480px]:mt-[150px] ">
            Psicóloga Cliníca
          </h2>
          <p className="2xl:text-[20px] 2xl:w-[700px]  xl:w-2/4 md:w-5/6 text-justify shadow-color-text-content ">
            Olá, seja bem-vindo(a)! Meu nome é Leana da Costa Beraldo, sou
            psicóloga e tenho como missão auxiliar pessoas no desenvolvimento do
            bem-estar emocional e mental. Acredito que cada indivíduo possui sua
            própria jornada e, por meio da escuta acolhedora e do diálogo,
            podemos juntos encontrar caminhos para lidar com desafios, promover
            autoconhecimento e alcançar uma vida mais equilibrada e
            satisfatória. Atuo com abordagem humanista, considerando a
            singularidade de cada pessoa e respeitando suas necessidades e
            potencialidades. Se você deseja iniciar um processo de psicoterapia,
            entre em contato comigo para agendarmos uma consulta. Estou à
            disposição para te ajudar!
          </p>
          <button
            onClick={() => {
              window.open(
                "https://wa.me/5516988187713?text=Olá,%20Leana%20Beraldo%20quero%20agendar%20uma%20consulta",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            className="w-auto px-5 py-3 mb-5 text-center bg-color-button-home text-white rounded-lg mt-10 whitespace-nowrap"
          >
            Entre em contato comigo
          </button>
        </div>
        <div className="w-full 2xl:max-w-[400px] 2xl:static xl:max-w-[300px] xl:absolute xl:right-12 xl:bottom-40 xl:top-44 xl:left-auto h-auto mx-auto md:max-w-[350px] md:absolute md:left-[60px] md:top-[590px] max-[480px]:pb-20 max-[480px]:pr-10 max-[480px]:pl-10">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            src="./home-leana.jpg"
            alt="Leana Beraldo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
