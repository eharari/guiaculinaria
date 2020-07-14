import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/Pages/Home'
import Busqueda from '../components/Pages/Busqueda'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Busqueda" component={Busqueda} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;