import BackButton from "./BackButton";

const Article_3 = () => {
  return (
    <div className="bg-[url('./assets/img/bg-aboutme-1920x1080.png')]">
    <div className="lg:w-[90%] max-w-[1500px] bg-  m-auto text-xl p-3 text-color-text-content bg-[url('./assets/img/green-cup-1920x1080.png')] text-justify">
      <BackButton />
      <h1 className="lg:text-5xl text-3xl font-bold text-center mb-6">
        Sinais de que seu filho precisa de ajuda psicológica (e não é só uma fase)
      </h1>
      <p className="mb-4">
        Como pais, é natural se perguntar se certos comportamentos do seu filho fazem parte do desenvolvimento ou se escondem um sofrimento mais profundo. Crianças e adolescentes enfrentam desafios emocionais, mas alguns sinais podem indicar que eles precisam de ajuda psicológica. Afinal, nem tudo é “só uma fase”.
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-4">1. Mudanças no comportamento: Quando se preocupar?</h2>
      <p className="mb-4">
        Alterações no humor e na rotina fazem parte do crescimento, mas se seu filho tem apresentado:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Irritabilidade excessiva ou agressividade sem motivo aparente.</li>
        <li>Isolamento repentino, evitando amigos e família.</li>
        <li>Mudanças bruscas no desempenho escolar, sem explicação concreta.</li>
        <li>Alteração no apetite e no sono, como insônia ou pesadelos frequentes.</li>
      </ul>
      <p className="mb-4">
        Esses sinais podem indicar algo mais profundo, como ansiedade, depressão ou dificuldades emocionais.
      </p>
      <p className="mb-4">
        <strong>Caso realista:</strong> Bento, 12 anos, sempre foi um menino falante. Nos últimos meses, começou a evitar encontros com amigos, perdeu o interesse pelos jogos que adorava e passou a responder tudo com “não sei”. Os pais achavam que era só “coisa de adolescente”, até que a escola relatou sua queda no rendimento e um professor percebeu que ele chorava sozinho no recreio.
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-4">2. Medos e ansiedades excessivas: Um alerta silencioso</h2>
      <p className="mb-4">
        Medo do escuro, da separação ou de provas na escola são comuns, mas quando passam a impedir a rotina, é importante investigar. Observe se seu filho:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Demonstra medo intenso e persistente, diferente dos colegas da mesma idade.</li>
        <li>Tem dores de cabeça ou barriga frequentes sem causa médica.</li>
        <li>Evita atividades que antes gostava, com desculpas constantes.</li>
      </ul>
      <p className="mb-4">
        <strong>Caso realista:</strong> Soraia, 7 anos, sempre dormiu bem, mas após mudar de escola, passou a pedir para dormir com os pais todas as noites. Quando tentavam colocá-la na própria cama, ela chorava e dizia que algo ruim aconteceria. Com o tempo, começou a se recusar a ir à escola.
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-4">3. Sintomas físicos que escondem sofrimento emocional</h2>
      <p className="mb-4">
        A mente e o corpo estão conectados. Se uma criança ou adolescente está sofrendo emocionalmente, o corpo pode dar sinais como:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Enurese noturna (xixi na cama) em crianças mais velhas, após terem passado da fase esperada.</li>
        <li>Dores sem explicação médica, como enxaquecas frequentes ou dores no estômago.</li>
        <li>Cansaço excessivo e desânimo constante.</li>
      </ul>
      <p className="mb-4">
        Se esses sintomas persistirem, vale investigar além do físico e considerar um olhar emocional.
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-4">Quando buscar ajuda profissional?</h2>
      <p className="mb-4">
        Se um ou mais desses sinais se tornaram frequentes e estão impactando a rotina do seu filho, um acompanhamento psicológico pode fazer a diferença. Um profissional especializado pode ajudá-lo a compreender e lidar com suas emoções de forma saudável.
      </p>
    </div>
    </div>
  );
};

export default Article_3;
