import React, {useState, useEffect} from 'react'
import "./Ciudad.css";
import axios from 'axios'

function FindCiudad(props) {
    
    const [seleccion, setseleccion] = useState();
    const [ciudadeszom, setciudadzom] = useState([]);
    const [ciudadfinal, setCiudadFinal] = useState();
    const URL = `https://developers.zomato.com/api/v2.1/cities?q=${props.seleccion}`;
    useEffect(()=>{
        axios.get(URL, {headers:{
            'Authorization': `token: 497fa3288a3074bb6f83d495ad22312c`
        }})
        .then((response)=>{
        let ciudadeszom = response.data
        setciudadzom(ciudadeszom.name);

        })
        .catch((err)=>{
        console.log(err);
         })}, []);

    return (
        <div>
             <form onSubmit={ciudadfinal}>  
        <label >En que Ciudad?</label>
    
                <select 
                className='form-control'
                name = "ciudad"
                value = {setCiudadFinal}
                onChange={(event) =>{
                setCiudadFinal(event.target.value);
                }}
                >
                
                <option value="0">Selecciona una opcion</option>
                    {ciudadeszom.map((ciudad) => {
                        return <option value={ciudad._id}>{ciudad.name}</option>
                    
                })}

                </select>
            <button type="submit" className="botoncategoria btn btn-danger">Selecionar Ciudad</button>
        </form>
            
        </div>
    )
}

export default FindCiudad
