import React, { useState } from "react";
import { Form } from "@unform/web";
import { Button } from "../../Page/styles";
import "./Modal.css";
import InputText from "../Form/input";
import Input from "../Form/inputText";
import InputNumero from "../Form/inputNumero";
import api from "../../../services/api";

const Modal = ({ children, ...props }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  /*   if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  } */

  async function handleSubmit(data) {
    console.log(data);
    const dados = {
      title: data.title,
      email: data.email,
      differential: data.differential,
      description: data.description,
      author: data.author,
      contact: {
        ddd: data.contato.slice(1, 3),
        number: data.contato.slice(5, 10) + data.contato.slice(11, 20),
        type: 1,
      },
      edict_id: 65,
    };

    api
      .post("https://biticev-api.herokuapp.com/api/proposal/submit", dados)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Button onClick={toggleModal} className="btn-modal">
        {children}
      </Button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Formulario de Inscrição da Proposta</h2>
            <Form onSubmit={handleSubmit} className="form">
              <p> Autor: </p>
              <Input
                name="author"
                placeholder="Informe o Autor do Projeto"
              ></Input>
              <p> TITULO </p>
              <Input
                name="title"
                placeholder="Informe o Titulo do Projeto"
              ></Input>
              <p> E-mail </p>
              <Input
                name="email"
                type="email"
                placeholder="Informe o e-mail"
              ></Input>
              <p> RELEVÂNCIA E DIFERENCIAL DO PROBLEMA: </p>
              <InputText
                name="differential"
                rows="6"
                placeholder="Relevancia da proposta"
              ></InputText>
              <p> DESCRIÇÃO: </p>
              <InputText
                name="description"
                rows="6"
                placeholder="Breve descrição da proposta"
              ></InputText>
              <p> CONTATO</p>
              <InputNumero name="contato"></InputNumero>
              <Button className="btn-modal">Enviar</Button>
            </Form>
            <button className="close-modal" onClick={toggleModal}>
              FECHAR
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
