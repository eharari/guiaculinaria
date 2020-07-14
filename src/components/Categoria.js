import React, {useState, useEffect} from 'react'
import "./Categoria.css";
import axios from 'axios'

function Categoria() {
    const [cocinas, setCocina] = useState([]);
    const URL = 'https://developers.zomato.com/api/v2.1/cuisines';
    useEffect(()=>{
        axios.get(URL, {headers:{
            'Authorization': `token: 497fa3288a3074bb6f83d495ad22312c`
        }})
        .then((response)=>{
        let allCocinas = response.data
        setCocina(allCocinas);
        console.log(cocinas)
        

        })
        .catch((err)=>{
        console.log(err);
         })}, []);

   
    return (
        <header className="principal2">
        
      
        <form onSubmit={Categoria}>  
        <label>Que tipo de Cocina?</label>
    
                <select 
                className='form-control'
                name = "cocina"
              
                // onChange={(event) =>{
                // setCocina(event.target.value);
                // }}
                >
                
                <option value="0">Selecciona una opcion</option> 
                     {cocinas.map((cocina) => {
                        return <option value={cocina.name}>{cocina.name}</option>
                    
                })}
                
                </select>
            <button type="submit" className="btn btn-danger">Selecionar Cocina</button>
        </form>
       
        </header>
    )
}

export default Categoria
    
