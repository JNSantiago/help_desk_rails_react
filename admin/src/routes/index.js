import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './../App'
import Login from './../auth/Login'

class Routes extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route path='/' component={App} />
                </Switch>
            </Router>
        )
    }
}

export default Routes