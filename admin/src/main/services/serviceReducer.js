const INITIAL_STATE = { 
    list: [] 
}

export const serviceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SERVICE_ALL':
            return { ...state, list: action.payload.data }
        default:
            return state;
    }
}