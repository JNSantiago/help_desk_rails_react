import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './template/header'
import './template/templateAssets'
import Dashboard from './main/dashboard/dashboard'
import Ticket from './main/tickets/tickets'
import Services from './main/services/services'
import Organizations from './main/organizations/organizations'
import NewOrganization from './main/organizations/newOrganization'
import newService from './main/services/newService'
import SubService from './main/subServices/subServices'
import newSubService from './main/subServices/newSubService'
import Agents from './main/agents/agents';
import newAgent from './main/agents/newAgent';

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
                        <Route exact path='/sub_services' component={SubService}/>
                        <Route exact path='/sub_services/new' component={newSubService}/>
                        <Route exact path='/organizations' component={Organizations}/>
                        <Route exact path='/organization/new' component={NewOrganization}/>
                        <Route exact path='/agents' component={Agents}/>
                        <Route exact path='/agent/new' component={newAgent}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
