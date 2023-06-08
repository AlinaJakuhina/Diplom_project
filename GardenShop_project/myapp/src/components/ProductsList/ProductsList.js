import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import s from './ProductsList.module.css';

function ProductsList(props) {

  const { products, title } = props
  
  return (
    <div className={s.list_container}>
      <h2 className={s.products_list_title}>{title}</h2>
      <div className={s.products_list} >
        {products.map(elem => <ProductCard key={elem.id}
                                               {...elem}/>)}
      </div>
    </div>
  )
}

export default ProductsList