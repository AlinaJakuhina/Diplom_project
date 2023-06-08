import React from 'react'
import { Link} from 'react-router-dom'
import NavMenu from '../NavMenu/NavMenu'
import Button from '../UI/Button/Button'
import s from './Header.module.css'
import logo from './madia/logo.png'



function Header() {
  return (
    <header>
        <nav className={s.navigation}>
            <div className={s.nav_left}>
              <Link to='/' >
               <img src={logo} alt='logo' className={s.logo}/>
              </Link>

              <Link to='/categories'>
                <Button text="Catalog"/>
              </Link>
            </div>

            <div className={s.nav_right}>
                <NavMenu/>
            </div>
      </nav>
    </header>
  )
}

export default Header