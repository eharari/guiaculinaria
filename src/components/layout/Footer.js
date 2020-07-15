import React from 'react';
import "./Footer.css";



function Footer() {
    return (
        <footer className="fondoheader1"> 
            <div className="container otro">
                <form action="">
                <div className="row row-cols-4">
                        <div className="col">
                            <input type="text" placeholder="40% de Descuento" className="form-control ancho"/>
                            
                            <button type="button" className="btn btn-primary ancho">Moshi.mx</button>
                        </div> 

                        <div className="col">
                            <input type="text" placeholder="2x1 en Pizza Mediana" className="form-control ancho"/>
                            
                            <button type="button" className="btn btn-primary ancho">Dominos</button>
                        </div> 
                        <div className="col">
                            <input type="text" placeholder="Postre gratis" className="form-control ancho"/>
                            
                            <button type="button" className="btn btn-primary ancho">Itallianis</button>
                        </div> 

                        <div className="col">
                            <input type="text" placeholder="Miercoles 3x2" className="form-control ancho"/>
                           
                            <button type="button" className="btn btn-primary ancho">Sushi-Itto</button>
                        </div> 
                    </div> 
                </form>
      
            </div>
            </footer>
    )
}

export default Footer
