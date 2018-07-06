const INITIAL_STATE = { 
    list: [] 
}

export const agentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'AGENT_ALL':
            return { ...state, list: action.payload.data }
        default:
            return state;
    }
}