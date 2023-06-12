import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { MdChevronRight } from "react-icons/md";
import s from './ShoppingCartPage.module.css';
import { useSelector } from 'react-redux';
import CartList from '../../components/CartList/CartList';
import Order from '../../components/Order/Order';


function ShoppingCartPage() {

  const cart = useSelector(store => store.cart);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className={s.cartPage_container}>
      <div className={s.cart}>
        <div className={s.cart_title}>
          <h2>Shopping cart</h2>
          <div className={s.link_back}>
            <NavLink to='/products/all'>
              <p>Back to the store <MdChevronRight className={s.go_back} size={30} /></p>
            </NavLink>
          </div>
        </div>
        

        <div className={s.list_wrapper}>
          {cart.length !== 0 ? <CartList className={s.cartList}/> :
            (<p className={s.error}>No products in the cart</p>)
          }
          <Order className={s.order}/>
        </div>
        
      </div>
    </div>
  )
}

export default ShoppingCartPage