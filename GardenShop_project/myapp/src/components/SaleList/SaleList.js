import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetProductsAll } from '../../asyncActions/productsAll';
import ProductsList from '../ProductsList/ProductsList'
import s from './SaleList.module.css'

function SaleList() {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchGetProductsAll('sale')), [dispatch])

  const products = useSelector(store => store.products.productList)
  const products_cards = products.sort(() => Math.random() - 0.5).slice(0, 3);
  console.log(products_cards);


  return (
    <div className={s.sale_wrapper} id='sale'>
      <ProductsList products={products_cards} title="Sale" />
    </div>
  )
}

export default SaleList