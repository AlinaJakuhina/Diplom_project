import React from 'react'
import s from './Button.module.css'

function Button(props) {
 
  const{ text , onClick } = props

  return (
    <button className={s.button_catalog} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button