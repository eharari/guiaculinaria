import React, {useState, useEffect} from 'react'
import Header from "../layout/header/Header";
import Categoria from "../Categoria";
import Ciudad from "../Ciudad";
import "./Busqueda.css";
import axios from 'axios'
import Card2 from "../../Card/Card2";


function  Busqueda() {
    const [restaurants, setRestaurant] = useState([]);
    const URL = `https://developers.zomato.com/api/v2.1/search?entity_id="280"&cuisines="25"`;
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
    )
}

export default Busqueda
