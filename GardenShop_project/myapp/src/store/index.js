import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsReducer } from './reducers/productsReducer';
import thunk from 'redux-thunk';
import { cartRreducer } from './reducers/cartReducers';
import { productInfoReducer } from './reducers/productInfoReducer';


const rootReducer = combineReducers ({
    categories: categoriesReducer,
    products: productsReducer,
    productInfo: productInfoReducer,
    cart: cartRreducer,    
});


export const store = createStore(rootReducer, applyMiddleware(thunk));