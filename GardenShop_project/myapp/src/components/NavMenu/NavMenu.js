import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavMenu.module.css'
import { BsHandbag } from "react-icons/bs";

function NavMenu() {
  return (
    <nav className={s.nav_conteiner}>
      <ul className={s.links}>
        <li className={s.nav_items_list}>
          <NavLink to="/" className={s.nav_item}>Main Page</NavLink>

          <NavLink to="/products/all" className={s.nav_item}>All products</NavLink>

          <NavLink to="/sales/all" className={s.nav_item}>All sales</NavLink>
        </li>
      </ul>

      <ul className={s.navigation_cart}>

        <NavLink to='/cart'>
          <BsHandbag className={s.bag} />
        </NavLink>
      </ul>

    </nav>
  )
}

export default NavMenu