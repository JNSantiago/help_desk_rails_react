import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import history from './../utils/history'

export const search = () => {
    const request = axios.get('http://localhost:3000/api/v1/admin/sub_services.json')
    return {
        type: 'SUB_SERVICE_ALL',
        payload: request
    }
}

export const add = (values) => {
    return dispatch => {
        axios.post('http://localhost:3000/api/v1/admin/sub_services', {sub_service: values})
            .then(resp => {
                history.push('/sub_services')
                toastr.success('Sucesso', 'Sub Serviço salvo com sucesso!')
            })
    }
}

export const remove = (id) => {
    return dispatch => {
        axios.delete(`http://localhost:3000/api/v1/admin/sub_services/${id}`)
            .then(resp => {
                toastr.success('Sucesso', 'Sub Serviço excluído com sucesso!')
            })
    }
}
