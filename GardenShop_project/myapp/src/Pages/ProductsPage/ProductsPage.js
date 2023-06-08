import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategoriesById } from '../../asyncActions/categoriesAll';
import { getProductsAll } from '../../asyncActions/productsAll';
import ProductsList from '../../components/ProductsList/ProductsList';
import SearchChekBox from '../../components/SearchCheckBox/SearchCheckBox';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchSort from '../../components/SearchSort/SearchSort';
import Filter from '../../components/UI/Filter/Filter';
import { categoriesReducer } from '../../store/reducers/categoriesReducer';
import s from './ProductsPage.module.css';

function ProductPage({type}) {

  const dispatch = useDispatch();
  const products = useSelector(store => store.products)


  return (

    <div className={s.products_container}>
      
      <h2>All Products</h2>

      <div className={s.filter_container}>
        <Filter type={type}/>
      </div>

      <div className={s.products_container} id='products'>
        <ProductsList products={products}/>
      </div>
    </div>
  )
}

export default ProductPage