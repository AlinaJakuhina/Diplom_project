const defaultState = {
  titlePage: {},
  productList: []
}


const GET_PRODUCTS_CATEGORY = "GET_PRODUCTS_CATEGORY"
const GET_PRODUCT_LIST_BY_SALE = "GET_PRODUCT_LIST_BY_SALE"
const FILTER_PRODUCTS_BY_SALE = "FILTER_PRODUCTS_BY_SALE"
const SORT_BY_RANGE = "SORT_BY_RANGE"
const SORT_BY_PRICE_DESC = 'SORT_BY_PRICE_DESC'
const SORT_BY_PRICE_ASCEND = 'SORT_BY_PRICE_ASCEND'
const SORT_BY_NAME_ASC = "SORT_BY_NAME_ASC"
const SORT_BY_NAME_DESC = "SORT_BY_NAME_DESC"
const SORT_BY_DEFAULT = "SORT_BY_DEFAULT"


export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {

    case GET_PRODUCTS_CATEGORY:
      // console.log(action.payload)
      if (action.payload.category.title) {
        return {
          titlePage: action.payload.category,
          productList: action.payload.data.map(elem => ({
            ...elem,
            showBySale: true,
            rangeActive: true,
          })),
        };
      } else {
        return {
          titlePage: { title: 'All products' },
          productList: action.payload.data.map(elem => ({
            ...elem,
            showBySale: true,
            rangeActive: true,
          })),
        };
      }

    case GET_PRODUCT_LIST_BY_SALE:
      return {
        titlePage: { title: 'Products with Sale' },
        productList: state.productList.filter(elem => elem.discont_price)
          .map(elem => ({ ...elem, showBySale: true, rangeActive: true })),
      };

    case FILTER_PRODUCTS_BY_SALE:
      if (action.payload) {
        return state.map(elem => {
          if ((elem.discont_price === null)) {
            elem.showBySale = false
          }
          return elem
        })
      } else {
        return state.map(elem => ({ ...elem, showBySale: true }))
      }


    case SORT_BY_RANGE:
      const { from, to } = action.payload;
      // console.log(action.payload);
      const fromTo = from !== '';
      const toTo = to !== '';

      return {
        ...state,
        productList: [...state.productList].map(elem => {
          const price = elem.discont_price || elem.price;
          const isInRange =
            (!fromTo || price >= +from) && (!toTo || price <= +to);
          return {
            ...elem,
            rangeActive: isInRange,
          };
        }),
      };

    case SORT_BY_PRICE_DESC:
      return [...state].sort((a, b) => a.price - b.price);

    case SORT_BY_PRICE_ASCEND:
      return [...state].sort((a, b) => b.price - a.price);

    case SORT_BY_NAME_ASC:
      return [...state].sort((a, b) => {
        const titleA = a.title || "";
        const titleB = b.title || "";
        return titleA.localeCompare(titleB);
      });

    case SORT_BY_NAME_DESC:
      return [...state].sort((a, b) => {
        const titleA = a.title || "";
        const titleB = b.title || "";
        return titleB.localeCompare(titleA);
      });

    case SORT_BY_DEFAULT:
      return [...state].sort((a, b) => a.id - b.id);


    default:
      return state
  }
}


export const getProductsCategoryAction = (payload) => ({ type: GET_PRODUCTS_CATEGORY, payload });
export const getProductListBySaleAction = () => ({ type: GET_PRODUCT_LIST_BY_SALE })
export const filterProductsBySale = (payload) => ({ type: FILTER_PRODUCTS_BY_SALE, payload });
export const sortByRangeAction = (payload) => ({ type: SORT_BY_RANGE, payload });
export const sortByPriceDescAction = () => ({ type: SORT_BY_PRICE_DESC });
export const sortByPriceAscendAction = () => ({ type: SORT_BY_PRICE_ASCEND });
export const sortByNameAscAction = () => ({ type: SORT_BY_NAME_ASC });
export const sortByNameDescAction = () => ({ type: SORT_BY_NAME_DESC });
export const sortByDefaultAction = () => ({ type: SORT_BY_DEFAULT });