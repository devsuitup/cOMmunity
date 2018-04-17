import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger'
import reducers from './reducers';

const middlewares = [
    promiseMiddleware()
];

if (__DEV__) {
    // const {logger} = require('redux-logger');
    // console.log(logger);

    middlewares.push(createLogger());
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    undefined,
    enhancers(applyMiddleware(...middlewares))
);


