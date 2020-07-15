import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="fondoheader1">
       <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="nav">
          <li className="nav-item">
            <Link className=" inicio1 nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="busqueda2 nav-link" to="/Busqueda">
              Haz tu Busqueda
            </Link>
            </li>
          <li className="logo1">
            <p></p>
          </li>
         
        </ul>
      </nav>

      {/* <li className="logo1">
            <p></p>
          </li> */}


    </header>
    )
}

export default Header
