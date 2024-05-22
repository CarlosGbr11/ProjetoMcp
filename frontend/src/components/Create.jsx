import {useState} from 'react' 
import './Create.css'

function Create() {

    const [formValores, setFormValores] = useState({
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
        console.log("Dados a serem enviados: ", formValores);
        const response = await fetch('http://localhost:3000/pessoas', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
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
  
        <div className='container-create'>
          <div className='formulario'>
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
  
            <button type='submit'> CADASTRAR </button>
  
          </div>
  
        </div>
  
      </form>
    )
  
  }
  export default Create;