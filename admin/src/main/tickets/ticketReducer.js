const INITIAL_STATE = { 
    list: [] 
}

export const ticketReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TICKET_ALL':
            return { ...state, list: action.payload.data }
        default:
            return state;
    }
}