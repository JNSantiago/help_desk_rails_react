import history from './../utils/history'

const INITIAL_STATE = { 
    list: [] 
}

export const organizationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ORGANIZATION_ALL':
            return { ...state, list: action.payload.data }
        case 'REDIRECT_URL':
            history.push(action.payload);
        default:
            return state;
    }
}