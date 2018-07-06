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
