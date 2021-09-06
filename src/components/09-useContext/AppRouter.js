// Una app peude tener todos los routers que necesite 
import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            {/* Este es el fragment  */}
            <div>

                <NavBar />
                <div className="container">
                    <Switch>
                        <Route exact path='/' component={HomeScreen} />

                        <Route exact path='/about' component={AboutScreen} />
                        <Route exact path='/login' component={LoginScreen} />

                        {/* Estop es un default por si no encuentran nada, esto puede ser un 404 o se puede usar un redirect */}
                        {/* <Router component={ HomeScreen }/> */}
                        {/* Si no encuentra ninguna de estas direccion redirecciona al home  */}
                        <Redirect to='/' />

                    </Switch>
                </div>
            </div>
        </Router>
    )
}
