import React, {useState, useEffect} from 'react'
import "./Cocina.css";
import axios from 'axios'

function FindCocina(props) {
    const [ciudadfinal, setCiudadFinal] = useState()
    const [cocinas, setCocina] = useState([]);
    const [cocinaFinal, setCocinaFinal] = useState();
    const URL = `https://developers.zomato.com/api/v2.1/cuisines?city_id=${props.ciudadfinal.city_id}`;
    useEffect(()=>{
        axios.get(URL, {headers:{
            'Authorization': `token: 497fa3288a3074bb6f83d495ad22312c`
        }})
        .then((response)=>{
        let allCocinas = response.data
        setCocina(allCocinas.cuisine_name);
        

        })
        .catch((err)=>{
        console.log(err);
         })}, []);
    return (
        <div>
             <form onSubmit={cocinaFinal}>  
        <label className="categoria1">Que tipo de Cocina?</label>
    
                <select 
                className='form-control'
                name = "cocina"
              
                onChange={(event) =>{
                setCocina(event.target.value);
                }}
                >
                
                <option value="0">Selecciona una opcion</option> 
                     {cocinas.cuisine_name.map((cocina) => {
                        return <option value={cocina.cuisine_id}>{cocina.cuisine_name}</option>
                    
                })}
                
                </select>
           
        </form>
            
        </div>
    )
}

export default FindCocina
