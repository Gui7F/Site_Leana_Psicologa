const Home = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-20 lg:ml-44 lg:mt-44 text-start lg:w-[1400px] m-auto text-color-text-content ">
      <div className="lg:mt-44 max-[480px]:pl-10 max-[480px]:pr-10 ">
        <h1 className="playfair-display-extrabold lg:text-9xl text-5xl absolute z-0 top-[140px] lg:left-[620px]">
          LEANA BERALDO
        </h1>
        <h2 className="playfair-display-extrabold lg:text-[70px] text-2xl mb-[20px] max-[480px]:mt-[150px] lg:ml-[80px]">
          Psicóloga Cliníca
        </h2>
        <p className="lg:text-[20px] lg:w-[700px]  lg:ml-[80px] text-justify shadow-color-text-content ">
          Olá, seja bem vindo(a), meu nome é Leana da Costa Beraldo amet
          consectetur adipisicing elit. Saepe, rerum deserunt reiciendis eos
          quia quod beatae nemo deleniti! Soluta accusamus rem id cum
          voluptatibus excepturi quisquam
        </p>
        <button
          onClick={() => {
            window.open(
              "https://wa.me/5516988187713?text=Olá,%20Leana%20Beraldo%20quero%20agendar%20uma%20consulta",
              "_blank",
              "noopener,noreferrer"
            );
          }}
          className="w-auto px-5 py-3  text-center bg-color-button-home text-white rounded-lg mt-10 lg:ml-[80px] whitespace-nowrap"
        >
          Entre em contato comigo
        </button>
      </div>
      <div className="w-full lg:max-w-[480px] lg:h-auto lg:mx-auto max-[480px]:pb-20 max-[480px]:pr-10 max-[480px]:pl-10">
        <img
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          src="./home-leana.jpg"
          alt="Leana Beraldo"
        />
      </div>
    </div>
  );
};

export default Home;
