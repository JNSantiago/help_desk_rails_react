import { authReducer } from './auth/authReducer'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'

import { organizationReducer } from './main/organizations/organizationReducer'
import { serviceReducer } from './main/services/serviceReducer'
import { subServiceReducer } from './main/subServices/subServiceReducer'
import { agentReducer } from './main/agents/agentReducer'

export const Reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    toastr: toastrReducer,
    organizationReducer: organizationReducer,
    serviceReducer: serviceReducer,
    subServiceReducer: subServiceReducer,
    agentReducer: agentReducer
});