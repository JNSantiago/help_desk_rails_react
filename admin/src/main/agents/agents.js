import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactPaginate from 'react-paginate'

import Title from './../utils/title'

import { search, remove } from './agentActions'

class Agents extends Component {
    componentWillMount() {
        this.props.search(1)
    }

    handlePageClick = (data) => {
        this.props.search(data.selected + 1)
    }

    render() {
        const list = this.props.list || []
        return(
            <div className="ticket">
                <div>
                    <div className="btn-group pull-right m-t-20">
                        <a href="/agent/new" className="btn btn-custom waves-effect waves-light">Cadastrar </a>
                    </div>
                    <Title title="Todos os Agentes" />
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
                            <th>Email</th>
                            <th>Criado em</th>
                        </tr>
                        </thead>
                        <tbody>
                        { list.map(agent => (
                            <tr key={agent.id}>
                                <th scope="row">{ agent.id }</th>
                                <td>{ agent.email }</td>
                                <td>{ agent.created_at }</td>
                                <td>
                                    <button className="btn btn-icon waves-effect btn-default m-b-5"> <i className="fa fa-edit"></i> </button>
                                    <button className="btn btn-icon waves-effect btn-danger m-b-5" onClick={ () => this.props.remove(agent.id) }> <i className="fa fa-trash"></i> </button>
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

const mapStateToProps = state => ({ list: state.agentReducer.list, count: state.agentReducer.count })
const mapDispatchToProps = dispatch => bindActionCreators({ search, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Agents)