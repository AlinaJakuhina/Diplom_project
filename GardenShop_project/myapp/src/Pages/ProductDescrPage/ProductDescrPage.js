import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './ProductDescrPage';
import { addToCartAction } from '../../store/reducers/cartReducers';

function ProductDescrPage() {

const dispatch = useDispatch();
const { id } = useParams();
const discountPrice = (100 - (discont_price / price) * 100).toFixed(0);
const url = "http://localhost:3333";

// const productList = useSelector(store => store.productList.productList)

const { title, image, description, price, discont_price} = product_info;
const [product, setProduct] = useState([])
useEffect(() => {
  window.scrollTo(0, 0)
  const products_url = url + '/products/';
  fetch (`${products_url}${id}`)
    .then (res => res.json())
    .then (data => setProduct(data))
}, [id])

const product_info = product ? Object.assign({}, ...product) : {} ;
const addToCart = () => dispatch(addToCartAction(id))

const priceDiscount =
discountPrice > 0 ? s.price_info : [s.price_info, s.price_info2].join(" ");


  return (
    <div className={s.info_prod}>
        <div className={s.product_descr}>
          <div>
            <h2 className={s.title}>{title}</h2>
            <img src={`${url}${image}`} alt={title} />
        </div>

        <div className={s.product_info}>
          <div className={priceDiscount}>
            <span>{discont_price}€ </span>
            {discountPrice > 0 && <span>{price}€ </span>}
            {discountPrice > 0 && <span>-{discountPrice}%</span>}
          </div>

          <button className={s.add_button} onClick={addToCart}>
            Add to Cart
          </button>

          <div className={s.description}>
            <h3>Description: </h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default ProductDescrPage