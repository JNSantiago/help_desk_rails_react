import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import history from './../utils/history'

export const search = () => {
    const request = axios.get('http://localhost:3000/api/v1/admin/tickets.json')
    return {
        type: 'TICKETS_ALL',
        payload: request
    }
}

export const searchServices = () => {
    const request = axios.get('http://localhost:3000/api/v1/admin/services.json')
    return {
        type: 'TICKET_SERVICE_ALL',
        payload: request
    }
}

export const searchSubServices = () => {
    const request = axios.get('http://localhost:3000/api/v1/admin/sub_services.json')
    return {
        type: 'TICKET_SUB_SERVICE_ALL',
        payload: request
    }
}

export const searchOrganizations = () => {
    const request = axios.get('http://localhost:3000/api/v1/admin/organizations.json')
    return {
        type: 'TICKET_ORGANIZATION_ALL',
        payload: request
    }
}

export const searchAgents = () => {
    const request = axios.get('http://localhost:3000/api/v1/admin/agents.json')
    return {
        type: 'TICKET_AGENTS_ALL',
        payload: request
    }
}

export const add = (values) => {
    return dispatch => {
        axios.post('http://localhost:3000/api/v1/admin/tickets', {ticket: values})
            .then(resp => {
                history.push('/tickets')
                toastr.success('Sucesso', 'Ticket salvo com sucesso!')
            })
    }
}

export const remove = (id) => {
    return dispatch => {
        axios.delete(`http://localhost:3000/api/v1/admin/tickets/${id}`)
            .then(resp => {
                toastr.success('Sucesso', 'Ticket excluído com sucesso!')
            })
    }
}
