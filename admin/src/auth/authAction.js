import axios from 'axios'

export function login(values) {
    return submit(values, 'http://localhost:3000/api/v1/auth/sign_in')
}

export function signup(values) {
    return submit(values, 'http://localhost:3000/api/v1/auth')
}

function submit (values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch({type: 'USER_FETCHED', payload: resp})
            })
            .catch(e => {
                dispatch({type: 'USER_FETCHED_ERROR', payload: false})
            })
    }
}

export function logout() {
    return {type: 'TOKEN_VALIDATED', payload: false}
}