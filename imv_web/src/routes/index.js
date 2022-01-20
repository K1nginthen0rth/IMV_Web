import React from "react";

import {BrowserRouter,Switch} from "react-router-dom"
import Route from './Route';

import Login from '../pages/Login'
import Home from '../pages/Home'
import Erro from '../pages/Erro'
import About from '../pages/About'


const Routes = ()=> {
    return (
        <BrowserRouter>
<Switch>
 <Route component =  {Home} path ="/" exact />
 <Route component =  {Login} path = "/login"  />
 <Route component =  {About} path = "/about" />
 <Route component =  {Erro} path = "*" />
</Switch>
</BrowserRouter>

    )
}
export default Routes