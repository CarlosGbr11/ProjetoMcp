import React, { useState, useEffect } from "react";
import './Read.css';

function Read() {

  const [consultaDados, setconsultaDados] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/pessoas', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      setconsultaDados(data);
    } catch (err) {
      console.error("Erro ao buscar dados no banco", err);
    }
  };

  useEffect(() => {
    handleSubmit(); 
  }, []);

  return (
    <div className="read-container">
      <form onSubmit={handleSubmit} className="read-form">
        <button type="submit" className="read-button">Ler dados do banco</button>
      </form>

      <ol className="read-list">
        {consultaDados.map((linha, index) => (
          <li key={index} className="read-dados">
            <div className="dados">Nome: {linha.nome}</div>
            <div className="dados">Data Nascimento: {linha.dataNascimento}</div>
            <div className="dados">Genero: {linha.genero}</div>
            <div className="dados">CPF: {linha.cpf}</div>
            <div className="dados">Telefone: {linha.telefone}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Read;
