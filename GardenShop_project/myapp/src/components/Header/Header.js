import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import Burger from '../Burger/Burger'
import MobileMenu from '../MobileMenu/MobileMenu'
import NavMenu from '../NavMenu/NavMenu'
import Button from '../UI/Button/Button'
import s from './Header.module.css'
import logo from './madia/logo.png'



function Header() {
  
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
		const handleChange = () => {
			const widthScreen = window.innerWidth;
			if (widthScreen > 600) setActive(false);
		};
		window.addEventListener('resize', handleChange);

		handleChange();
		return () => {
			window.removeEventListener('resize', handleChange);
		};
	}, []);

	useEffect(() => {
		const handleScroll = (event) => {
			if (active) {
				event.preventDefault();
				event.stopPropagation();
			}
		};
		const options = { passive: false };
		document.addEventListener('wheel', handleScroll, options);
		document.addEventListener('touchmove', handleScroll, options);

		return () => {
			document.removeEventListener('wheel', handleScroll);
			document.removeEventListener('touchmove', handleScroll);
		};
	}, [active]);


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
              <Burger className={`${s.burger_menu} ${active ? s.open : ''}`} 
                      active={active} 
                      setActive={setActive} 
                      onClick={toggleActive}/>
              
              <MobileMenu className={`${s.mobile_item}${s.mobileMenu_active}`}
                          active={active}
                          setActive={setActive}/>
                <NavMenu/>
            </div>         
      </nav>
    </header>

  )
}

export default Header