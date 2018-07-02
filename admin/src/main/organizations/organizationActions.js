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

function redirect(path) {
    return {
        type: 'REDIRECT_URL',
        payload: path
    }
}