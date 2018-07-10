import history from './../utils/history'

const INITIAL_STATE = { 
    list: [],
    count: ''
}

export const organizationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ORGANIZATION_ALL':
            return { ...state, list: action.payload.data, count: action.payload.headers.total }
        case 'REDIRECT_URL':
            history.push(action.payload);
        default:
            return state;
    }
}