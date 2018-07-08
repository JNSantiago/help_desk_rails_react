import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form'

class TicketForm extends Component {
    render() {
        const listServices = this.props.listServices || []
        const listSubServices = this.props.listSubServices || []
        const listOrganizations = this.props.listOrganizations || []
        const listAgents = this.props.listAgents || []
        const { handleSubmit } = this.props
        return (
            <form className="form-horizontal" role="form" onSubmit={ handleSubmit }>
                <div className="form-group row">
                    <label className="col-2 col-form-label">Código</label>
                    <div className="col-10">
                        <Field type="text" className="form-control" component="input" name="code" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Title</label>
                    <div className="col-10">
                        <Field type="text" className="form-control" component="input" name="title" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Description</label>
                    <div className="col-10">
                        <Field type="text" className="form-control" component="input" name="description" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Solicitante</label>
                    <div className="col-10">
                        <Field type="text" className="form-control" component="input" name="caller" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Agente</label>
                    <div className="col-10">
                        <Field className="form-control" component="select" name="agent">
                        <option>Selecione um agente</option>
                        { listAgents.map(agent => (
                            <option value={agent.id}>{ agent.email }</option>
                        ))}
                        </Field>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Serviço</label>
                    <div className="col-10">
                        <Field className="form-control" component="select" name="service_id">
                        <option>Selecione um serviço</option>
                        { listServices.map(service => (
                            <option value={service.id}>{ service.name }</option>
                        ))}
                        </Field>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Sub Serviço</label>
                    <div className="col-10">
                        <Field className="form-control" component="select" name="sub_service_id">
                        <option>Selecione um subserviço</option>
                        { listSubServices.map(sub_service => (
                            <option value={sub_service.id}>{ sub_service.name }</option>
                        ))}
                        </Field>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Organização</label>
                    <div className="col-10">
                        <Field className="form-control" component="select" name="organization_id">
                        <option>Selecione uma organização</option>
                        { listOrganizations.map(organization => (
                            <option value={organization.id}>{ organization.name }</option>
                        ))}
                        </Field>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Status</label>
                    <div className="col-10">
                        <Field className="form-control" component="select" name="ticket_status_id">
                            <option>Selecione um status</option>
                            <option value="1">Aberto</option>
                            <option value="2">Pendente</option>
                        </Field>
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

export default reduxForm({form: 'ticketForm'})(TicketForm)