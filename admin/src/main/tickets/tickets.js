import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Title from './../utils/title'

import { search, remove } from './ticketActions'

class Ticket extends Component {
    componentWillMount() {
        this.props.search()
    }

    render() {
        const list = this.props.list || []
        return(
            <div className="ticket">
                <div>
                    <div className="btn-group pull-right m-t-20">
                        <a href="/ticket/new" className="btn btn-custom waves-effect waves-light">Cadastrar </a>
                    </div>
                    <Title title="Todos os Tickets" />
                </div>

                <div className="card-box">
                    <div className="dropdown pull-right">
                        <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                            <i className="mdi mdi-dots-vertical"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="javascript:void(0);" className="dropdown-item">Action</a>
                            <a href="javascript:void(0);" className="dropdown-item">Another action</a>
                            <a href="javascript:void(0);" className="dropdown-item">Something else</a>
                            <a href="javascript:void(0);" className="dropdown-item">Separated link</a>
                        </div>
                    </div>
                    <h4 className="m-t-0 header-title">Basic example</h4>
                    <p className="text-muted font-14 m-b-20">
                        For basic styling—light padding and only horizontal dividers—add the base className <code>.table</code> to any <code>&lt;table&gt;</code>.
                    </p>

                    <table className="table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Status</th>
                            <th>Solicitante</th>
                            <th>Agente</th>
                            <th>Criado em</th>
                        </tr>
                        </thead>
                        <tbody>
                        { list.map(ticket => (
                            <tr key={ticket.id}>
                                <th scope="row">{ ticket.id }</th>
                                <td>{ ticket.code }</td>
                                <td>{ ticket.description }</td>
                                <td>{ ticket.ticket_status_id }</td>
                                <td>{ ticket.caller }</td>
                                <td>{ ticket.agent }</td>
                                <td>{ ticket.created_at }</td>
                                <td>
                                    <button className="btn btn-icon waves-effect btn-default m-b-5"> <i className="fa fa-edit"></i> </button>
                                    <button className="btn btn-icon waves-effect btn-danger m-b-5" onClick={ () => this.props.remove(ticket.id) }> <i className="fa fa-trash"></i> </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.ticketReducer.list })
const mapDispatchToProps = dispatch => bindActionCreators({ search, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)