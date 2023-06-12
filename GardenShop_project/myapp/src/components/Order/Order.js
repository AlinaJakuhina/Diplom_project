import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { send_order } from '../../asyncActions/order';
import { clearCartAction } from '../../store/reducers/cartReducers';
import s from './Order.module.css'
function Order() {

    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart)
    const total = cart.reduce((accum, elem) => accum + elem.count * (elem.discont_price ? elem.discont_price : elem.price), 0).toFixed(2);

    const submit = (e) => {
        e.preventDefault()
        send_order(e.target.phone.value)
        e.target.reset()
        dispatch(clearCartAction())
      }
  return (
    <div className={s.order_container}>
        <h2 className={s.order_title}>Order details</h2>
            <div className={s.order_summ}>
               <p className={s.order_total}>Total</p>
               <p className={s.order_totalSum}>{total}<span> $</span></p>
            </div>

            <form onSubmit={submit}>
                <input className={s.order_input}
                       type={'phone'}
                       placeholder={'Phone number'}
                       name={'phone'}
                       pattern={'[+]{1}[0-9]{11}'}
                       required />

                <button className={s.order_button}>Order</button>   
            </form>
    </div>
  )
}

export default Order