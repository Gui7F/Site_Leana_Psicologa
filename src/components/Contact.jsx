

import { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_0yj6tgm"
    const templateID = "template_mc26wi9"
    const userID = "pnCCWaS-uwATSWwW9"

    const templateParams = {
      from_name : nome,
      from_email : email,
      message : message
    }

    emailjs
     .send(serviceID, templateID, templateParams, userID)
     .then((response) => {
      console.log("E-mail enviado com sucesso!", response.status, response.text);
      alert("Mensagem enviada com sucesso!"); 
      setNome(""); 
      setEmail(""); 
      setMessage("");
    })
    .catch((error) => {
      console.error("Erro ao enviar o e-mail:", error);
      alert("Erro ao enviar a mensagem. Tente novamente."); // Feedback para o usuário
    })
  };

  return (
    <main className="flex justify-center items-center lg:h-screen max-[400px]:p-5 ">
      <div className="w-full max-w-md border border-blue-500 p-6 rounded-lg shadow-2xl shadow-blue-500">
      <form onSubmit={handleSubmit} >
       <div className="mb-4">
        <h1 className="lg:text-3xl max-[400px]:text-2xl text-slate-300">Contacte-me <i className="fa-solid fa-comments"></i></h1>
       </div>

      <div className="mb-4">
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-slate-300 "
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite seu nome"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-slate-300"
          >
            Email:
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite seu email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-slate-300"
          >
            Mensagem:
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full p-2 h-40 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button><FontAwesomeIcon icon={faPaperPlane}/></button>
        </div>
      </form>
      </div>
    </main>
  );
};

export default Contato;