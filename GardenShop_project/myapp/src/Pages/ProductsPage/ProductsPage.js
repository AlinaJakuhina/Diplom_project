import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGetCategoriesById } from '../../asyncActions/categoriesAll';
import { fetchGetProductsAll } from '../../asyncActions/productsAll';
import ProductsList from '../../components/ProductsList/ProductsList';
import Filter from '../../components/UI/Filter/Filter';
import { getProductListBySaleAction } from '../../store/reducers/productsReducer';
import s from './ProductsPage.module.css';

function ProductPage({ type }) {

  const { id } = useParams();

  const dispatch = useDispatch();
  const titlePage = useSelector(store => store.products.titlePage)
  const productList = useSelector(store => store.products.productList).filter((product) =>
    product.showBySale && product.rangeActive);


// eslint-disable-next-line react-hooks/exhaustive-deps 
  useEffect(() => {
    // console.log(type)
    if (type === 'categories') {
      dispatch(fetchGetCategoriesById(id))
    } else {
      dispatch(fetchGetProductsAll(type))
      if (type === 'sale') {
        dispatch(getProductListBySaleAction())
      }
    }
  }, [id, type]);

  return (

    <div className={s.products_container}>
      <h2 className={s.title}>{titlePage.title}</h2>
      <Filter type={type} />
      <ProductsList products={productList} />
    </div>

  )
}

export default ProductPage