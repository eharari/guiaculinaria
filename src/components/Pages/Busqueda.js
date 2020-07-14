import React, {useState, useEffect} from 'react'
import Header from "../layout/header/Header";
import Categoria from "../Categoria";
import Ciudad from "../Ciudad";
import "./Busqueda.css";
import axios from 'axios'
import Card2 from "../../Card/Card2";


function  Busqueda() {
    const [restaurants, setRestaurant] = useState([]);
    const URL = 'https://developers.zomato.com/api/v2.1/search?entity_id={props.entity_id}&cuisines={props.cuisine_id}';
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
            
        
            <Categoria/>
            <Ciudad/>
            

            <button type="submit" className="btn btn-danger">Buscar</button>
            <h3>Sugerencias</h3>
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
    )
}

export default Busqueda
