const defaultState = [];

const ADD_TO_CART = '[CART] ADD_TO_CART';
const INCREMENT_PRODUCT = 'INCREMENT_PRODUCT';
const DECREMENT_PRODUCT = 'DECREMENT_PRODUCT';
const DELATE_PRODUCT = 'DELATE_PRODUCT';
const CLEAR_CART = '[CART] CLEAR_CART';


const checkProduct = (state, payload) => {
    const productInCart = state.find(el => el.id === payload.id);
    if(productInCart) {
      productInCart.count++
      return [...state]
    } else {
      return [...state, {...payload, count: 1}]
    }
  }

export const cartRreducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return checkProduct (state, action.payload)
        case INCREMENT_PRODUCT:
            state.find(el => el.id === action.payload).count++
            return [...state]
        case DECREMENT_PRODUCT:
            const target = state.find(el => el.id === action.payload);
            if (target.count === 1){
            state = state.filter(el => el.id !== action.payload)
            } else {
                target.count--
            }
            return[...state]
        case DELATE_PRODUCT:
            return state.filter(el => el.id !== action.payload)
        case CLEAR_CART:
            return []
            default:
                return state
    }
}

export const addToCartAction = payload => ({ type: ADD_TO_CART, payload });
export const delateProductAction = payload => ({ type: DELATE_PRODUCT, payload });
export const incrementProductAction = payload => ({ type: INCREMENT_PRODUCT, payload});
export const decrementProductAction = payload => ({ type: DECREMENT_PRODUCT, payload});
export const clearCartAction = payload => ({ type: CLEAR_CART, payload });