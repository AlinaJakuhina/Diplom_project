import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem'
import s from './CartList.module.css'

function CartList() {

const  cart = useSelector(store => store.cart)

  return (
    <div className={s.cart}>
        {
          cart.map(elem => <CartItem key={elem.id} {...elem} /> )
        }
    </div>
  )
}

export default CartList