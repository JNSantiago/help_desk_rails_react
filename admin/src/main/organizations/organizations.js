import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactPaginate from 'react-paginate';

import Title from './../utils/title'

import { search, remove } from './organizationActions'

class Organization extends Component {
    componentWillMount() {
        this.props.search(1)
    }

    handlePageClick = (data) => {
        this.props.search(data.selected + 1)
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
                                <td>
                                    <button className="btn btn-icon waves-effect btn-default m-b-5"> <i className="fa fa-edit"></i> </button>
                                    <button className="btn btn-icon waves-effect btn-danger m-b-5" onClick={ () => this.props.remove(organization.id) }> <i className="fa fa-trash"></i> </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <ReactPaginate previousLabel={"anterior"}
                       nextLabel={"próximo"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={this.props.count / 5}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.organizationReducer.list, count: state.organizationReducer.count })
const mapDispatchToProps = dispatch => bindActionCreators({ search, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Organization)