const INITIAL_STATE = { 
    list: [] 
}

export const subServiceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SUB_SERVICE_ALL':
            return { ...state, list: action.payload.data }
        default:
            return state;
    }
}