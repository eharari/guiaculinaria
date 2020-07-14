import React from 'react';


function Card(props) {


    return (
        <div className="background">
            <div className="card-body" background-color="green">
        
                <div className="card-title">
                   <h2>{props.title}</h2> 
                   <h2>{props.description}</h2> 
                   <h2>{props.url}</h2> 
                   <h2>{props.image_url}</h2> 
                   <h2>{props.collection_id}</h2>

                </div>
               
          </div>  
        </div>
    )
}

export default Card
