import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes'

import { Reducers } from './reducers';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

export const Store = applyMiddleware(thunk)(createStore)(Reducers, devTools);

ReactDOM.render(
    <Provider store={Store}>
        <Routes />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
