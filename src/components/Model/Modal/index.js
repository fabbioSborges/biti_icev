import React, { useState } from "react";
import { Form } from "@unform/web";
import { Button } from "../../Page/styles";
import "./Modal.css";
import Input from "../Form/input";

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

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      {/* <buton>teste</buton>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}
      <Button onClick={toggleModal} className="btn-modal">
        {children}
      </Button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Formulario de Inscrição da Proposta</h2>
            <Form onSubmit={handleSubmit} className="form">
              <p> Apresentação </p>
              <Input name="apresentacao" placeholder="teste"></Input>
              <p> DESCRIÇÃO DO PROBLEMA </p>
              <Input name="descricao"></Input>
              <p> PESSOAS E INSTITUIÇÕES IMPLICADAS: </p>
              <Input name="pessoas"></Input>
              <p> RECURSOS DISPONÍVEIS:</p>
              <Input name="recursos"></Input>
              <p> RELEVÂNCIA DO PROBLEMA: </p>
              <Input name="relevancia"></Input>
              <p> CONTATO INSTITUCIONAL:</p>
              <Input name="contato"></Input>
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
