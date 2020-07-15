import React, {useState, useEffect} from 'react'
import Header from "../layout/header/Header";
import "./Busqueda.css";
import FindCiudad from "../FindCiudad"
import FindCocina from "../FindCocina"
import Card2 from "../../Card/Card2"
import axios from 'axios'


function Busqueda1() {
    const [ciudad, setCiudad] = useState();
    const [restaurants, setRestaurant] = useState([]);
    // const URL = `https://developers.zomato.com/api/v2.1/search?entity_id=${props.cuidad._id}&cuisines=${props.cocina.cuisine_id}`;
    const URL = `https://developers.zomato.com/api/v2.1/search?entity_id=${280}&cuisines=${25}`;
    useEffect(()=>{
      axios.get(URL, {headers:{
        'Authorization': `token: 497fa3288a3074bb6f83d495ad22312c`
    }})
      .then((response)=>{
        let allRestaurants = response.data
        setRestaurant(allRestaurants);
        
      })
      .catch((err)=>{
        console.log(err);
      });}, []);
    
    
    return (
        
            <div className="fondoprincipal">
                    <Header/>
                        <input
                    className="form-control"
                    type="text"
                    placeholder="Escribe tu ciudad"
                    value={ciudad}
                    required
                    onChange={(event) => {
                        setCiudad(event.target.value);
                    }}
                    />
                    <FindCiudad seleccion={ciudad}/>
                    {/* <FindCocina seleccion={ciudadfinal}/> */}
                    <h2>Sugerencias</h2>
                    {restaurants.map((restaurant)=> {
                        return (
                    <Card2
                    name={restaurant.name}
                    cuisine={restaurant.cuisine}
                    menu={restaurant.menu}
                    phone={restaurant.phone_numbers}
                    _id={restaurant._id}
                    
                    />
                        )
                    })}


            </div>
    )
}

export default Busqueda1
