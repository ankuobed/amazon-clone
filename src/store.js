import { createStore, applyMiddleware, combineReducers } from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducer';
import thunk from 'redux-thunk';

const initialState = {};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
});

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;