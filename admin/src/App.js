import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './template/header'
import './template/templateAssets'
import Dashboard from './main/dashboard/dashboard'
import Ticket from './main/tickets/tickets';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="wrapper">
                    <div className="container-fluid">
                        <Route exact path='/' component={Dashboard}/>
                        <Route exact path='/ticket' component={Ticket}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
