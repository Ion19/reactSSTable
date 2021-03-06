import {createStore , applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const middleware = [thunk]; 

const initState = {};

export const store = createStore (
    rootReducer, 
    initState,
   
        
            compose(
                applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       
    )
);