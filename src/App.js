import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Home from './views/Home';
import injectContext from './store/appContext';
import {Navbar} from './components/Navbar';
import Cardinfo from './views/Info';
import Planetsinfo from './views/Planetsinfo';
import Vehiclesinfo from './views/Vehiclesinfo';


const App = () => {
    return <Router>
        <Navbar />
        <Switch>
            <Route exact path = "/">
                <Home />
            </Route>
            <Route exact path = "/Info/">
                <Cardinfo />
            </Route>
            <Route exact path = "/Planetsinfo/">
                <Planetsinfo />
            </Route>
            <Route exact path = "/Vehiclesinfo/">
                <Vehiclesinfo />
            </Route>
         
        </Switch>
    </Router>

}
  

export default injectContext(App);
