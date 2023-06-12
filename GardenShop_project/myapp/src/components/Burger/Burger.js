import React from 'react'
import s from './Burger.module.css'

function Burger({ active, setActive}) {
  return (
    <div onClick={() => setActive(!active)} className={active ? s.burger_active : s.burger}>
      <span className={s.line}></span>
      <span className={s.line}></span>
      <span className={s.line}></span>
    </div>
  )
}

export default Burger
