import React, {useState, useEffect} from 'react'
import Header from "../layout/header/Header";
import Footer from "../layout/Footer";
import "./Home.css";
import axios from 'axios';
import Card from "../../Card/Card";
// import Geolocation from "../../components/Geolocation"

function  Home() {
    const [collections, setCollections] = useState([]);
    // const lat1 = debe ser default NY o lat de Geolocation
    // const lon1 = debe ser default NY o lon de Geolocation
    // // <Geolocation 
    // componentDidMount={(()=> 
    //   setLat(position.coords.latitude); 
    //   setLon(position.coords.longitude);
    // )}
    // >
    
    
    const URL = 'https://developers.zomato.com/api/v2.1/collections?city_id=280';
    useEffect(()=>{
      axios.get(URL, {headers:{
        'Authorization': `token: 497fa3288a3074bb6f83d495ad22312c`
    }})
      .then((response)=>{
        let allCollection = response.data
        setCollections(allCollection);
        
      })
      .catch((err)=>{
        console.log(err);
      });}, []);
    return (
        <div className="fondoprincipal">
            <Header/>
          
          <div className="ideas">
            <p>Algunas Ideas del Momento</p>
          </div>
          {collections.map((collection)=>{
              return <Card
              title = {collection.title}
              description = {collection.description}
              url = {collection.url}
              image_url = {collection.image_url}
              key = {collection._id}
              />
              
          })}
          <div className="footer1">
          <Footer/>
          </div>


        </div>
    )
}

export default Home
