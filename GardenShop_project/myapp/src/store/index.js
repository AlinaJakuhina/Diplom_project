import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsReducer } from './reducers/productsReducer';
import thunk from 'redux-thunk';
import { cartRreducer } from './reducers/cartReducers';


const rootReducer = combineReducers ({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartRreducer,    
});


export const store = createStore(rootReducer, applyMiddleware(thunk));