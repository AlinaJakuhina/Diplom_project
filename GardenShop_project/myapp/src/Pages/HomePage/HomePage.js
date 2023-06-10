import React, { useEffect } from 'react';
import BannerSale from '../../components/BannerSale/BannerSale'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import DiscountBox from '../../components/DiscountBox/DiscountBox'
import SaleList from '../../components/SaleList/SaleList'
import s from './HomePage.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { fetchGetCategoriesAll} from '../../asyncActions/categoriesAll';
import { fetchGetProductsAll } from '../../asyncActions/productsAll';

function HomePage() {

  const dispatch = useDispatch()
  const categories = useSelector(store => store.categories)

  useEffect(() => {dispatch(fetchGetCategoriesAll())
                   dispatch(fetchGetProductsAll())
                   window.scrollTo(0, 0);  // прокрутка страницы вверх
  }, [])

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