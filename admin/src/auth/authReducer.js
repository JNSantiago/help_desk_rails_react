const userKey = '_auth_user_'
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if(action.payload) {
                return { ...state, validToken: true }
            }else{
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        case 'USER_FETCHED':
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }
        case 'USER_FETCHED_ERROR':
            localStorage.removeItem(userKey)
            return { ...state, validToken: false, user: null }
        default:
            return state;
    }
}