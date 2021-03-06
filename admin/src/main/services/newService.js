import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Title from './../utils/title'
import ServiceForm from './serviceForm';

import { add } from './serviceActions'

class NewService extends Component {
    render() {
        return (
            <div className="newOrganization">
                <div>
                    <Title title="Cadastrar Organização" />
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card-box">
                            <div className="row">
                                <div className="col-12">
                                    <div className="p-20">
                                        <ServiceForm onSubmit={ this.props.add } />
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

const mapDispatchToProps = dispatch => bindActionCreators({ add }, dispatch)

export default connect(null, mapDispatchToProps)(NewService)