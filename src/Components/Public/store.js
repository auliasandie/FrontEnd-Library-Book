import { createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware';

import Reducers from '../Public/reducers/index';

const logger = createLogger ();
const middleware = applyMiddleware(logger, promiseMiddleware)
const store = createStore(Reducers, middleware)

export default store