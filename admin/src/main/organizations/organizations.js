import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Title from './../utils/title'

import { search } from './organizationActions'

class Organization extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        const list = this.props.list || []
        return(
            <div className="organization">
                <div>
                    <div className="btn-group pull-right m-t-20">
                        <a href="/organization/new" className="btn btn-custom waves-effect waves-light">Cadastrar </a>
                    </div>
                    <Title title="Todos os Organizações" />
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
                            <th>Nome</th>
                            <th>Status</th>
                            <th>Criado em</th>
                        </tr>
                        </thead>
                        <tbody>
                        { list.map(organization => (
                            <tr key={organization.id}>
                                <th scope="row">{ organization.id }</th>
                                <td>{ organization.name }</td>
                                <td>{ 
                                    organization.status ? <span class="badge badge-success">Ativo</span> : <span class="badge badge-danger">Inativo</span> }</td>
                                <td>{ organization.created_at }</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.organizationReducer.list })
const mapDispatchToProps = dispatch => bindActionCreators({ search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Organization)