const INITIAL_STATE = { 
    list: [],
    count: '' 
}

export const agentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'AGENT_ALL':
            return { ...state, list: action.payload.data, count: action.payload.headers.total }
        default:
            return state;
    }
}