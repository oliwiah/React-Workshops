import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import DevTools from './app.devtools';

// middlewares
import thunkMiddleware from 'redux-thunk';

import appReducer from './app.duck';

export const history = createBrowserHistory();

const middlewares = [ 
    thunkMiddleware,
    routerMiddleware(history),
];

const store = createStore(
    connectRouter(history)(appReducer),
    compose(
        applyMiddleware(...middlewares),
        DevTools.instrument()
    ),
);

export default store;
