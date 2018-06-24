import { authReducer } from './auth/authReducer';
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    auth: authReducer,
    form: formReducer
});