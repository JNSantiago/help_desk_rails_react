import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './../App'
import Login from './../auth/Login'
import ProtectedRoute from './ProtectedRoute'

class Routes extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <ProtectedRoute path='/' component={App} />
                </Switch>
            </Router>
        )
    }
}

export default Routes