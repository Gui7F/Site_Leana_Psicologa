import { useState } from "react";
import emailjs from "emailjs-com";
import "../Sendbutton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_0yj6tgm";
    const templateID = "template_mc26wi9";
    const userID = "pnCCWaS-uwATSWwW9";

    const templateParams = {
      from_name: nome,
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log(
          "E-mail enviado com sucesso!",
          response.status,
          response.text
        );
        alert("Mensagem enviada com sucesso!");
        setNome("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Erro ao enviar o e-mail:", error);
        alert("Erro ao enviar a mensagem. Tente novamente."); // Feedback para o usuário
      });
  };

  return (
    <main className="flex justify-center text-zinc-800 lg:mt-72 mt-20">
      <div className="w-full lg:max-w-xl max-w-sm border border-zinc-600 p-6 rounded-lg ">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h1 className="lg:text-3xl text-xl max-[400px]:text-2xl ">
              Email<i className="fa-solid fa-comments"></i>
            </h1>
          </div>

          <div className="mb-4">
            <label
              htmlFor="nome"
              className="block text-start text-base font-medium  "
            >
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="nome"
              className="block text-base text-start font-medium "
            >
              Email:
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
              placeholder="Digite seu email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="nome"
              className="block text-base text-start font-medium "
            >
              Mensagem:
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full p-2 h-40 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
            />
            {/* SendButton form */}
            <div className="flex justify-end text-slate-300">
              <button className="sendbutton">
                <div className="svg-wrapper">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                <span className="block ml-[0.3em] transition-all duration-300 ease-in-out">
                  Enviar
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contato;
