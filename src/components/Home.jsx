const Home = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-20 lg:ml-44 lg:mt-44 text-start">
      <div className="lg:mt-44 ">
        <h1 className="lg:text-9xl text-5xl playfair-display-extrabold absolute z-0">
          Leana Beraldo
        </h1>
        <h2 className="lg:text-5xl text-2xl lg:ml-3 lg:mt-[125px] mt-[50px] playfair-display-extrabold">Psicóloga Cliníca</h2>
        <p className="lg:text-[20px] w-full lg:ml-3 ">
          Olá, seja bem vindo(a), meu nome é Leana da Costa Beraldo amet
          consectetur adipisicing elit. Saepe, rerum deserunt reiciendis eos
          quia quod beatae nemo deleniti! Soluta accusamus rem id cum
          voluptatibus excepturi quisquam
        </p>
      </div>
      <div className="max-[480px]:w-[200px] ml-[90px] ">
        <img className="cover" src="./home-leana.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
