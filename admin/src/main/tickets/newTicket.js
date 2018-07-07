import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Title from './../utils/title'
import AgentForm from './ticketForm';

import { 
    add, 
    searchServices, 
    searchSubServices, 
    searchOrganizations,
    searchAgents
} from './ticketActions'

class NewTicket extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.searchServices()
        this.props.searchSubServices()
        this.props.searchOrganizations()
        this.props.searchAgents()
    }
    
    render() {
        const listServices = this.props.listServices || []
        const listSubServices = this.props.listSubServices || []
        const listOrganizations = this.props.listOrganizations || []
        const listAgents = this.props.listAgents || []
        return (
            <div className="newOrganization">
                <div>
                    <Title title="Cadastrar Ticket" />
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card-box">
                            <div className="row">
                                <div className="col-12">
                                    <div className="p-20">
                                        <AgentForm 
                                            listServices={listServices} 
                                            listSubServices={listSubServices}
                                            listOrganizations={listOrganizations}
                                            listAgents={listAgents}
                                            onSubmit={ this.props.add } 
                                        />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => (
    { 
        listServices: state.ticketReducer.listServices,
        listSubServices: state.ticketReducer.listSubServices,
        listOrganizations: state.ticketReducer.listOrganizations,
        listAgents: state.ticketReducer.listAgents
    }
)
const mapDispatchToProps = dispatch => bindActionCreators(
    { 
        add, 
        searchServices, 
        searchSubServices,
        searchOrganizations,
        searchAgents
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewTicket)