import React from 'react';


function Card2(props) {


    return (
        <div className="background">
            <div className="card-body" background-color="green">
        
                <div className="card-title">
                   <h2>{props.name}</h2> 
                   <h2>{props.cuisine}</h2> 
                   <h2>{props.menu}</h2> 
                   <h2>{props.phone_numbers}</h2> 

                </div>
               
          </div>  
        </div>
    )
}

export default Card2