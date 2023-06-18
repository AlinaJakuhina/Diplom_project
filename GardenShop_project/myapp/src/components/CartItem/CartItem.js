import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './CartItem.module.css';
import { FiX } from "react-icons/fi";
import { IoMdRemove } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import { decrementProductAction, delateProductAction, incrementProductAction } from '../../store/reducers/cartReducers';

function CartItem(props) {

    const { id, title, image, count, discont_price, price } = props;

    const dispatch = useDispatch();
    const url = 'http://localhost:3333';


  return (
    <div className={s.cart_container}>
        <FiX className={s.delete_btn} onClick={() => dispatch(delateProductAction(id))}/>
        <NavLink to={`/products/${id}`}>
            <img src={`${url}${image}`} alt="img"/>
        </NavLink>

        <div className={s.product_info}>
            <h2>{title}</h2>

            <div className={s.quant_buttons}>
                <IoMdRemove className={s.minus_btn} 
                             onClick={() => dispatch(decrementProductAction(id))}/>

                             <p>{count}</p>

                <BsPlusLg className={s.plus_btn} 
                            onClick={() => dispatch(incrementProductAction(id))}/>
            </div>
        </div>
        <p className={s.discount_price}>{discont_price ? discont_price : price}<span>$</span></p>
        <p className={s.price}>{price}<span>$</span></p>

    </div>
  )
}

export default CartItem