import React, {Component} from 'react'
import { reduxForm, Field } from 'redux-form'

class FormLogin extends Component {
    render() {
        const { handleSubmit } = this.props
        return(
            <form className="form-horizontal m-t-20" role="form" onSubmit={ handleSubmit }>

                <div className="form-group">
                    <div className="col-xs-12">
                        <Field className="form-control" name="email" component="input" required="" placeholder="Username" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-xs-12">
                        <Field className="form-control" name="password" type="password" component="input" required="" placeholder="Password" />
                    </div>
                </div>

                <div className="form-group ">
                    <div className="col-xs-12">
                        <div className="checkbox checkbox-custom">
                            <Field id="checkbox-signup" component="input" type="checkbox" />
                            <label htmlFor="checkbox-signup">
                                Remember me
                            </label>
                        </div>

                    </div>
                </div>

                <div className="form-group text-center m-t-30">
                    <div className="col-xs-12">
                        <button className="btn btn-custom btn-bordred btn-block waves-effect waves-light" type="submit">Log In</button>
                    </div>
                </div>

                <div className="form-group m-t-30 mb-0">
                    <div className="col-sm-12">
                        <a href="page-recoverpw.html" className="text-muted"><i className="fa fa-lock m-r-5"></i> Forgot your password?</a>
                    </div>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'loginForm'})(FormLogin)