import React, {useState, useEffect} from 'react'
import "./Ciudad.css";
import axios from 'axios'

function Ciudad() {
    
        const [ciudades, setCiudad] = useState([]);
        const [name, setName] = useState('');
        const URL = `https://developers.zomato.com/api/v2.1/cuisines?city_id=${name}`;
        useEffect(()=>{
        axios.get(URL, {headers:{
            'Authorization': `token: 497fa3288a3074bb6f83d495ad22312c`
        }})
        .then((response)=>{
        let allCiudades = response.data
        setCiudad(allCiudades.name);

        })
        .catch((err)=>{
        console.log(err);
         })}, []);

   
    return (
        //AQUI SE ESCRIBE EL NOMBRE DE LA CIUDAD POR EL USUARIO
        <label> Escribe tu Ciudad </label>
        
        <input
              className="form-control"
              type="text"
              placeholder="Nombre"
              value={name}
              required
              onChange={(event) => {
                setName(event.target.value);
              }}
        />
            
        // AQUI SE MUESTRAN LAS CIUDADES ENCONTRADAS      
        <form onSubmit={Ciudad}>  
        <label >Selecciona tu  Ciudad?</label>
    
                <select 
                className='form-control'
                name = "ciudad"
                value = {setCiudad}
                onChange={(event) =>{
                setCiudad(event.target.value);
                }}
                >
                
                <option value="0">Selecciona una opcion</option>
                    {ciudades.map((ciudad.name) => {
                        return 
                        <option value={ciudad.name}>{ciudad.name}</option>
                    
                })}

                </select>


            <button type="submit" className="botoncategoria btn btn-danger">Selecionar Ciudad</button>
        </form>
    )
        <Categoria>
            return (
            <header className="principal2">
            <form onSubmit={Categoria}>  
            <label className="categoria1">Que tipo de Cocina?</label>
                
                <select 
                className='form-control'
                name = "cocina"
                onChange={(event) =>{
                setCocina(event.target.value);
                }}
                >
                
                <option value="0">Selecciona una opcion</option> 
                     {cocinas.map((cocina) => {
                    return 
                <option value={cocina.name}>{cocina.name}</option>
                    
                })}
                
                
                </form>
       
            </header>
            
            )

        </Categoria>

        <Busqueda>
        return (
        <div className="fondoprincipal">
            <Header/>
            <div className="container otro">
              <form action="">
                <div class="row row-cols-2">
                   <div class="col">
                      <Categoria/>
                    </div>
                    <div class="col">
                      <Ciudad/>
                     </div>
                     <div className="botonbusqueda">
                    <button type="submit" className="btn btn-info btn-lg">Buscar</button>
                    </div>
                </div>
            </form>
          </div>
            <Ciudad>
              props
            </Ciudad>
          
          <div className="container otro">
              <form action="">
                <div class="row row-cols-2">
                    <div className="sugerencias">
                      <p>Sugerencias</p>
                    </div>
                    <div>
                    {restaurants.map((restaurant)=>{
                        return <Card2
                        name = {restaurant.name}
                        cuisine = {restaurant.cuisine}
                        menu = {restaurant.menu}
                        phone_numbers = {restaurant.phone_numbers}
                        key = {restaurant._id}
                        />
                        
                    })}
                    </div>


                </div>
              </form>
            </div>
        </div>
                <button type="submit" onclick="Busqueda" className="botoncategoria btn btn-danger">Selecionar Cocina</button>

        </Busqueda>

       
}

export default Ciudad
