import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import history from './../utils/history'

export const search = (page) => {
    const request = axios.get(`http://localhost:3000/api/v1/admin/services?page=${page}`)
    return {
        type: 'SERVICE_ALL',
        payload: request
    }
}

export const add = (values) => {
    return dispatch => {
        axios.post('http://localhost:3000/api/v1/admin/services', {service: values})
            .then(resp => {
                history.push('/services')
                toastr.success('Sucesso', 'Serviço salvo com sucesso!')
            })
    }
}

export const remove = (id) => {
    return dispatch => {
        axios.delete(`http://localhost:3000/api/v1/admin/services/${id}`)
            .then(resp => {
                toastr.success('Sucesso', 'Serviço excluído com sucesso!')
            })
    }
}
