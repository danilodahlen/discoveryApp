import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Login from '../pages/Login/login'
import Register from '../pages/Register/register'

export default props => (
    <Router history={hashHistory}>
        <Route>   
            <Route path="/" component={Login}/>
        </Route>   
    </Router>
)
