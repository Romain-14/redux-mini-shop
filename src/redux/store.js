import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import products from './reducers/product';
import cart from './reducers/cart';

const rootReducer = combineReducers({
    products,
    cart,
});

const store = legacy_createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;