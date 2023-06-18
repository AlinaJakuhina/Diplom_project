import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoriesCard from '../CategoriesCard/CategoriesCard';
import s from './CategoriesList.module.css';

function CategoriesList(props) {

  const { title, categories, btn_category } = props 
  
  return (
   <div className={s.categories}>
    <div className={s.title}>
      <h1>{title}</h1>
        { btn_category && 
        <NavLink to='/categories'>
          <button className={s.category_button}>All categories</button>
        </NavLink>}
    </div>
    <div className={s.categories_container}>
      {categories.map(elem => <CategoriesCard key={elem.id} {...elem}/>)}
    </div>   
   </div>
  )
}

export default CategoriesList