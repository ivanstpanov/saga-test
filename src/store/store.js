import { createStore, applyMiddleware } from "redux"; 
import createSagaMiddleware from "redux-saga"; 
//import logger from 'redux-logger';

import rootReducer from "../reducers/rootReducer"; 
import { onLoadPostStart } from "../components/sagaPost";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
export const store = createStore(rootReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(onLoadPostStart);

export default store;