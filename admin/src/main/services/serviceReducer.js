const INITIAL_STATE = { 
    list: [],
    count: ''
}

export const serviceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SERVICE_ALL':
            return { ...state, list: action.payload.data, count: action.payload.headers.total }
        default:
            return state;
    }
}