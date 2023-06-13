import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './MobileMenu.module.css'

function MobileMenu({ active, setActive }) {
  return (
    <div className={active ? s.mobileMenu_active : s.mobileMenu}>
        <ul className={s.mobileMenu_wrapper}>
            <li onClick={() => setActive(!active)} className={s.mobileMenu_item}><NavLink to='/'>Main
                    Page</NavLink></li>
            <li onClick={() => setActive(!active)} className={s.mobile_item}><NavLink to='/products/all'>All
                    Products</NavLink></li>
            <li onClick={() => setActive(!active)} className={s.mobile_item}><NavLink to='/sales/all'>All
                    Sales</NavLink></li>
        </ul>
    </div>
  )
}

export default MobileMenu