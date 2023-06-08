import { getCategoryAction } from "../store/reducers/categoriesReducer";
import { getProductsByCategoryAction } from "../store/reducers/productsReducer";


export const url =  'http://localhost:3333';

export const url_cat_list = 'http://localhost:3333/categories/all';
export const url_cat_item = 'http://localhost:3333/categories/';

export const getCategoriesAll = () => {
	return function (dispatch) {
	  fetch(url_cat_list)
		.then(res => res.json())
		.then(data => dispatch(getCategoryAction(data)))
	}
  }


export const getCategoriesById = (id) => {
	return function (dispatch) {
		fetch(`${url_cat_item}${id}`)
		.then(res => res.json())
		.then(data => dispatch(getCategoryAction(data)))
	}
}