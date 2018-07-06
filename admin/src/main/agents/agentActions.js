import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import history from './../utils/history'

export const search = () => {
    const request = axios.get('http://localhost:3000/api/v1/admin/agents')
    return {
        type: 'AGENT_ALL',
        payload: request
    }
}

export const add = (values) => {
    return dispatch => {
        axios.post('http://localhost:3000/api/v1/auth', values)
            .then(resp => {
                history.push('/agents')
                toastr.success('Sucesso', 'Agente salvo com sucesso!')
            })
    }
}

export const remove = (id) => {
    return dispatch => {
        axios.delete(`http://localhost:3000/api/v1/auth/${id}`)
            .then(resp => {
                toastr.success('Sucesso', 'Agente excluído com sucesso!')
            })
    }
}
