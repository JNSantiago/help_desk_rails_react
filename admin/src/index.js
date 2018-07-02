import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import ReduxToastr from 'react-redux-toastr'

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes'

import { Reducers } from './reducers';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

export const Store = applyMiddleware(thunk, promise)(createStore)(Reducers, devTools);

ReactDOM.render(
    <Provider store={Store}>
        <div>
            <Routes />

            <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates
                position="top-left"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar/>
        </div>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
