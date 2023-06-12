import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './ProductCard.module.css';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/reducers/cartReducers';


function ProductCard(productCard) {

  const {id , title, image, price, discont_price } = productCard;
  const dispatch = useDispatch();
  const url = "http://localhost:3333";

  const discount = discont_price && Math.round(((price - discont_price)  * 100) / price);

  const addToCart = (e) => {
    e.preventDefault();
    dispatch(addToCartAction(productCard))
  }

  return (
    <div className={s.product_card}>
      <NavLink to={`/products/${id}`}>
				<div className={s.img_wrapper}>
					<img src={`${url}${image}`} alt={title} />
					<button className={s.add_product_btn} onClick={addToCart}>Add to cart</button>
				</div>
				<div className={s.card_info} >
              <p className={s.discount_price}>{discont_price !== null ? discont_price : price }<span className={s.dollar}>$</span></p>
             {discount && <p className={s.price}>{price}$</p>}
             {discount && <p className={s.discount}>-{discount}%</p>}
            </div>
              <p className={s.product_title}>{title}</p>
			</NavLink>
    </div>
  )
}

export default ProductCard