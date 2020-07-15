import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/Pages/Home'
import Busqueda1 from '../components/Pages/Busqueda1'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Busqueda1" component={Busqueda1} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;