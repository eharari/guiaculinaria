import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="fondoheader1">
       <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Busqueda">
              Inicia tu Busqueda
            </Link>
            
          </li>
         
        </ul>
      </nav>
    </header>
    )
}

export default Header
