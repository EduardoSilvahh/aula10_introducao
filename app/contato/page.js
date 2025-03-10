'use client'

import { useState } from "react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contato() {
  const [nome, alteraNome] = useState("");
  const [mensagem, alteraMensagem] = useState("");

  const showToast = (e) => {
    e.preventDefault(); // Evita que o formulário seja enviado

    // Verifica se os campos estão vazios
    if (mensagem === "" || nome === "") {
      toast("Por favor, preencha todos os campos...");
    } else {
      toast("Mensagem enviada com sucesso!");
    }
  };

  return (
    <div>
      <h1>Página de Contato</h1>
      <p>Entre em contato conosco</p>

      <hr />

      <form>
        <label>
          Digite seu nome:
          <input onChange={(e) => alteraNome(e.target.value)}/>
        </label>

        <br />

        <label>
          Digite sua mensagem:
          <input onChange={(e) => alteraMensagem(e.target.value)}/>
        </label>

        <br />

        <button onClick={showToast}>Enviar</button>
      </form>

      <ToastContainer />
    </div>
  );
}
