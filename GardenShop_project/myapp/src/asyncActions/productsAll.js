import {  getProductsAction  } from "../store/reducers/productsReducer";

export const url = 'http://localhost:3333';
export const url_prod_list = 'http://localhost:3333/products/all';
export const url_prod_item = 'http://localhost:3333/products/';

export const getProductsAll = () => {
    return function (dispatch) {
      fetch(url_prod_list)
        .then(res => res.json())
        .then(data => {
          dispatch(getProductsAction(data))
        })
    }
  }

export const getProductsInfo = (id) => {
     return function (dispatch) {
       fetch(`${url_prod_item}${id}`)
        .then(res => res.json())
        .then(data => dispatch(getProductsAction(data)))
    }
}

