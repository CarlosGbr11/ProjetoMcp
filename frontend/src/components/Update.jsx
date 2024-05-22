import './Update.css'
import {useState} from 'react' 

const Update = () =>{

    const [NovosDados, setNovosDados] = useState({
      nome: '',
      dataNascimento: '',
      genero: '',
      cpf: '',
      telefone: '',
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
            setNovosDados(prevState =>({...prevState, [name]:value}))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        try{
            
            const response = await fetch(`http://localhost:3000/pessoas/${NovosDados.id}`, {
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(NovosDados)
            })

            const json = await response.json()
            console.log(response)
            console.log(json)
             
        }catch (err){
            console.error("Erro ao enviar", err)
        }
    }

    return (
  
        <form onSubmit={handleSubmit}>
    
          <div className='container-update'>
            <div className='update'>
              <label>
                Nome
                <input type="text" name="nome" value={NovosDados.nome} onChange={handleChange} />
              </label>
              <label>
                Data de Nascimento
                <input type="date" name="dataNascimento" value={NovosDados.dataNascimento} onChange={handleChange} />
              </label>
              <label>
                Gênero
                <input type="text" name="genero" value={NovosDados.genero} onChange={handleChange} />
              </label>
              <label>
                CPF
                <input type="text" name="cpf" value={NovosDados.cpf} onChange={handleChange} />
              </label>
              <label>
                Telefone
                <input type="text" name="telefone" value={NovosDados.telefone} onChange={handleChange} />
              </label>
    
              <button type='submit'> Atualizar </button>
    
            </div>
          </div>
        </form>
      )
    
}

export default Update;