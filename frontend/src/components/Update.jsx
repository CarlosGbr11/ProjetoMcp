import React, { useState } from "react";
import './Update.css'

function Update() {

  const [formValores, setFormValores] = useState({
    id: '',
    nome: '',
    dataNascimento: '',
    genero: '',
    cpf: '',
    telefone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValores(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Dados a serem enviados: ", formValores.id);
      const response = await fetch(`http://localhost:3000/pessoas/${formValores.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValores)
      });

      const json = await response.json();
      console.log(response)
      console.log(json);
    } catch (err) {
      console.error("Erro ao enviar", err)
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="container-update">
      <div className="update">
      <label>
      ID a ser Atualizado
      <input type="text" name="id" value={formValores.id} onChange={handleChange} />
      </label>
      <label>
        Nome
        <input type="text" name="nome" value={formValores.nome} onChange={handleChange} />
      </label>
      <label>
        Data de Nascimento
        <input type="date" name="dataNascimento" value={formValores.dataNascimento} onChange={handleChange} />
      </label>
      <label>
        Gênero
        <input type="text" name="genero" value={formValores.genero} onChange={handleChange} />
      </label>
      <label>
        CPF
        <input type="text" name="cpf" value={formValores.cpf} onChange={handleChange} />
      </label>
      <label>
        Telefone
        <input type="text" name="telefone" value={formValores.telefone} onChange={handleChange} />
      </label>

      <button type='submit' onClick={handleChange}> ATUALIZAR </button>
      </div>
      </div>
    </form>
  );
}
export default Update;