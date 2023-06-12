import React from 'react'
import { Link } from 'react-router-dom';
import s from './CategoriesCard.module.css'

function CategoriesCard({id , title , image}) {

    const url = 'http://localhost:3333';

  return (
    <div className={s.card}>
        <Link to={`/categories/${id}`} className={s.card_image}>
          <img src={`${url}${image}`} alt={title}/>
          <h6 className={s.title}>{title}</h6>
        </Link>
    </div>
  )
}

export default CategoriesCard