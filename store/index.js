import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import albumReducer from './reducer/top.one.hundred.list.reducer';

const store = combineReducers({
    albums: albumReducer,
})

export default createStore(store, applyMiddleware(thunk));