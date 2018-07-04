import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './template/header'
import './template/templateAssets'
import Dashboard from './main/dashboard/dashboard'
import Ticket from './main/tickets/tickets'
import Services from './main/services/services'
import Organizations from './main/organizations/organizations'
import NewOrganization from './main/organizations/newOrganization'
import newService from './main/services/newService';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="wrapper">
                    <div className="container-fluid">
                        <Route exact path='/' component={Dashboard}/>
                        <Route exact path='/ticket' component={Ticket}/>
                        <Route exact path='/services' component={Services}/>
                        <Route exact path='/service/new' component={newService}/>
                        <Route exact path='/organizations' component={Organizations}/>
                        <Route exact path='/organization/new' component={NewOrganization}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
