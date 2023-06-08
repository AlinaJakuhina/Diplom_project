import React, { useEffect } from 'react';
import BannerSale from '../../components/BannerSale/BannerSale'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import DiscountBox from '../../components/DiscountBox/DiscountBox'
import SaleList from '../../components/SaleList/SaleList'
import s from './HomePage.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { getCategoriesAll } from '../../asyncActions/categoriesAll';

function HomePage() {

  const dispatch = useDispatch()
  const categories = useSelector(store => store.categories)

  useEffect(() => {dispatch(getCategoriesAll())}, [])

  const categories_cards = categories.slice(0,4)

  

  return (
    <div className={s.container}>
      <BannerSale/>
      <CategoriesList categories={categories_cards} title='Catalog' btn_category={true}/>
      <DiscountBox/>
      <SaleList/>
    </div>
  )
}

export default HomePage;