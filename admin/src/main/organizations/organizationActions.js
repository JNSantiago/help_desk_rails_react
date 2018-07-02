import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import history from './../utils/history'

export const search = () => {
    const request = axios.get('http://localhost:3000/api/v1/admin/organizations.json')
    return {
        type: 'ORGANIZATION_ALL',
        payload: request
    }
}

export const add = (values) => {
    return dispatch => {
        axios.post('http://localhost:3000/api/v1/admin/organizations', {organization: values})
            .then(resp => {
                history.push('/organizations')
                toastr.success('Sucesso', 'Organização salva com sucesso!')
            })
    }
}

export const remove = (id) => {
    return dispatch => {
        axios.delete(`http://localhost:3000/api/v1/admin/organizations/${id}`)
            .then(resp => {
                toastr.success('Sucesso', 'Organização excluída com sucesso!')
            })
    }
}