import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from './authAction';
import LoginForm from './formLogin'

class Login extends Component {
    render() {
        return(
            <div>
            <div className="account-pages"></div>
            <div className="clearfix"></div>
            <div className="wrapper-page">
                <div className="m-t-40 card-box">
                    <div className="text-center">
                        <h4 className="text-uppercase font-bold mb-0">Sign In</h4>
                    </div>
                    <div className="p-20">
                        <LoginForm onSubmit={ this.props.login } />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 text-center">
                        <p className="text-muted">Don't have an account? <a href="page-register.html" className="text-primary m-l-5"><b>Sign Up</b></a></p>
                    </div>
                </div>
                
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);
export default connect(null, mapDispatchToProps)(Login);