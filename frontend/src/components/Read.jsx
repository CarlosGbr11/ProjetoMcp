import React, { useState, useEffect } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Ler dados do banco</button>
      </form>

      <ol>
        {consultaDados.map((linha, index) => (
          <li key={index}>
            <span>Nome: {linha.nome}</span>
            <br />
            <span>Data Nascimento: {linha.dataNascimento} </span>
            <br />
            <span>Genero: {linha.genero} </span>
            <br />
            <span>CPF: {linha.cpf} </span>
            <br />
            <span>Telefone: {linha.telefone} </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
export default Read;