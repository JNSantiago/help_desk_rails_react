import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './template/header'
import './template/templateAssets'
import Dashboard from './main/dashboard/dashboard'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="wrapper">
                    <div className="container-fluid">
                        <Router>
                            <Switch>
                                <Route exact path='/' component={Dashboard}/>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
