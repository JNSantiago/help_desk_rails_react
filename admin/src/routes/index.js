import React, {Component} from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import App from './../App'
import Login from './../auth/Login'
import ProtectedRoute from './ProtectedRoute'

import history from './../main/utils/history'

class Routes extends Component {
    render() {
        return(
            <Router history={history}>
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <ProtectedRoute path='/' component={App} />
                </Switch>
            </Router>
        )
    }
}

export default Routes