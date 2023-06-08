import React from 'react'
import ProductsList from '../../components/ProductsList/ProductsList';
import SearchChekBox from '../../components/SearchCheckBox/SearchCheckBox';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchSort from '../../components/SearchSort/SearchSort';
import Filter from '../../components/UI/Filter/Filter';
import s from './SaleProductPage.module.css';

function SaleProductPage() {

  
  
  return (
    <div>
      <div className={s.sale_page_container}>
        <h2 className={s.title}>Products with sale</h2>

         <div className={s.filter_container}>
            <Filter/>
         </div>
         
      
      </div>
    </div>
  )
}

export default SaleProductPage