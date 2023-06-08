import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAll } from '../../asyncActions/categoriesAll';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import s from './CategoriesPage.module.css';

function CategoriesPage() {

  const dispatch = useDispatch();

  const categories = useSelector(store => store.categories)

  useEffect(() => { dispatch(getCategoriesAll())}, [])


  return (
    <div className={s.categories_container}>
      <h2>Categories</h2>
      <CategoriesList categories={categories}/>
    </div>
  )
}

export default CategoriesPage