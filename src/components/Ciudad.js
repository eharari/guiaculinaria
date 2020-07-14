import React, {useState, useEffect} from 'react'
import "./Ciudad.css";
import axios from 'axios'

function Ciudad() {
    
        const [ciudades, setCiudad] = useState([]);
        const URL = 'https://developers.zomato.com/api/v2.1/cities';
        useEffect(()=>{
        axios.get(URL, {headers:{
            'Authorization': `token: 497fa3288a3074bb6f83d495ad22312c`
        }})
        .then((response)=>{
        let allCiudades = response.data
        setCiudad(allCiudades);

        })
        .catch((err)=>{
        console.log(err);
         })}, []);

   
    return (
        <header className="principal1">
        
      
        <form onSubmit={Ciudad}>  
        <label >En que Ciudad?</label>
    
                <select 
                className='form-control'
                name = "ciudad"
                value = {setCiudad}
                onChange={(event) =>{
                setCiudad(event.target.value);
                }}
                >
                
                <option value="0">Selecciona una opcion</option>
                    {ciudades.map((ciudad) => {
                        return <option value={ciudad._id}>{ciudad.name}</option>
                    
                })}

                </select>
            <button type="submit" className="botoncategoria btn btn-danger">Selecionar Ciudad</button>
        </form>
       
        </header>
    )
}

export default Ciudad
