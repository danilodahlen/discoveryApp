import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Login from '../pages/Login/login'
import Register from '../pages/Register/register'
import DiscoveryForm from '../pages/Discovery/discoveryForm'
import DiscoveryList from '../pages/Discovery/discoveryList'

export default props => (
    <Router history={hashHistory}>
        <Route>
            <Route path="/login" component={Login}/>
            <Route path="/" component={DiscoveryList}/>
            <Route path="/new-discovery" component={DiscoveryForm}/>
            <Route path="/register" component={Register}/>
        </Route>
    </Router>
);