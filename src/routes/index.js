import React from "react";
import {Switch, Route } from 'react-router-dom'
import Home from '../component/Home'
import About from '../component/About'
import Contact from '../component/Contact'

function route(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
        </Switch>
    );
}
export default route;