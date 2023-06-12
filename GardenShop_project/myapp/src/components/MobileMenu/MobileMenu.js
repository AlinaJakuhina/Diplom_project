import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './MobileMenu.module.css'

function MobileMenu({ active, setActive }) {
  return (
    <div>
         <ul className={s.mobileMenu_wrapper}>
                <li className={s.mobile_item} onClick={() => setActive(!active)}><NavLink to='/'>Main
                    Page</NavLink></li>
                <li className={s.mobile_item} onClick={() => setActive(!active)}><NavLink to='/products/all'>All
                    Products</NavLink></li>
                <li className={s.mobile_item} onClick={() => setActive(!active)}><NavLink to='/sales/all'>All
                    Sales</NavLink></li>
            </ul>
    </div>
  )
}

export default MobileMenu