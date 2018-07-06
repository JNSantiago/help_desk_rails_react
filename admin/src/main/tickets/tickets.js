import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Title from './../utils/title'

import { search, remove } from './ticketActions'

class Ticket extends Component {
    render() {
        return(
            <div className="ticket">
                <div>
                    <div className="btn-group pull-right m-t-20">
                        <a href="/ticket/new" className="btn btn-custom waves-effect waves-light">Cadastrar </a>
                    </div>
                    <Title title="Todos os Tickets" />
                </div>

                <div class="card-box">
                            <div class="dropdown pull-right">
                                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                                    <i class="mdi mdi-dots-vertical"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                    <a href="javascript:void(0);" class="dropdown-item">Another action</a>
                                    <a href="javascript:void(0);" class="dropdown-item">Something else</a>
                                    <a href="javascript:void(0);" class="dropdown-item">Separated link</a>
                                </div>
                            </div>
                            <h4 class="m-t-0 header-title">Basic example</h4>
                            <p class="text-muted font-14 m-b-20">
                                For basic styling—light padding and only horizontal dividers—add the base class <code>.table</code> to any <code>&lt;table&gt;</code>.
                            </p>

                            <table class="table">
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.serviceReducer.list })
const mapDispatchToProps = dispatch => bindActionCreators({ search, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)