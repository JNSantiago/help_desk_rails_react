import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form'

class ServiceForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form className="form-horizontal" role="form" onSubmit={ handleSubmit }>
                <div className="form-group row">
                    <label className="col-2 col-form-label">Nome</label>
                    <div className="col-10">
                        <Field type="text" className="form-control" component="input" name="name" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Descrição</label>
                    <div className="col-10">
                        <Field type="text" className="form-control" component="input" name="description" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label"></label>
                    <div className="col-10">
                        <button className="btn btn-primary" type="submit">Salvar</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'serviceForm'})(ServiceForm)