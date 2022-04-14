import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';


const enhancer = applyMiddleware(

)


const store = createStore(reducer, composeWithDevTools(enhancer));

export default store;
