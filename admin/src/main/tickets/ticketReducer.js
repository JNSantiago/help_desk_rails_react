const INITIAL_STATE = { 
    list: [],
    listServices: [],
    listSubServices: [],
    listOrganizations: [],
    listAgents: []
}

export const ticketReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TICKET_ALL':
            return { ...state, list: action.payload.data }
        case 'TICKET_SERVICE_ALL':
            return { ...state, listServices: action.payload.data }
        case 'TICKET_SUB_SERVICE_ALL':
            return { ...state, listSubServices: action.payload.data }
        case 'TICKET_ORGANIZATION_ALL':
            return { ...state, listOrganizations: action.payload.data }
        case 'TICKET_AGENTS_ALL':
            return { ...state, listAgents: action.payload.data }
        default:
            return state;
    }
}