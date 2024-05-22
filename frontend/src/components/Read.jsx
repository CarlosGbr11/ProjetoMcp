import { useState } from "react"
import './Read.css'

const Read = () =>{

    const [FormValores, setFormValores] = useState([])



    const handleSubmit = async (e)=>{
        e.preventDefault()

        try{
            
            const response = await fetch('http://localhost:3000/pessoas', {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                },
                

            })

            const json = await response.json()
            const string = JSON.stringify(json)
            console.log(response)
            console.log(json)
            const objeto = JSON.parse(string)
            
            setFormValores((prevFormValores) => [...prevFormValores, ...objeto]);
        
           
        }catch (err){
            console.error("Erro ao enviar", err)
        }
    }

    return(

        <div className="consultar">
            <button onClick={handleSubmit}>Consultar</button> 
           <ul>
                {FormValores.map((valor, index) => (
                    <li key={index}>
                        {Object.entries(valor).map(([key, val]) => (
                            <div key={key}>
                                <strong>{key}:</strong> {val}
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
 
}

export default Read;