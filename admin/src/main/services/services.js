import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Title from './../utils/title'

import { search, remove } from './serviceActions'

class Service extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        const list = this.props.list || []
        return(
            <div className="service">
                <div>
                    <div className="btn-group pull-right m-t-20">
                        <a href="/service/new" className="btn btn-custom waves-effect waves-light">Cadastrar </a>
                    </div>
                    <Title title="Todos os Serviços" />
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
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Criado em</th>
                        </tr>
                        </thead>
                        <tbody>
                        { list.map(service => (
                            <tr key={service.id}>
                                <th scope="row">{ service.id }</th>
                                <td>{ service.name }</td>
                                <td>{ service.description }</td>
                                <td>
                                    <button className="btn btn-icon waves-effect btn-default m-b-5"> <i className="fa fa-edit"></i> </button>
                                    <button className="btn btn-icon waves-effect btn-danger m-b-5" onClick={ () => this.props.remove(service.id) }> <i className="fa fa-trash"></i> </button>
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

const mapStateToProps = state => ({ list: state.serviceReducer.list })
const mapDispatchToProps = dispatch => bindActionCreators({ search, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Service)