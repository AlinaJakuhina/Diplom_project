import React from 'react'
import s from './SearchCheckBox.module.css'

function SearchChekBox(props) {

  const { text } = props;

  return (
  <div className={s.checkbox_container}>
  <p>{text}</p>
  <label className={s.filter_checkbox}>
    <input type="checkbox" id='checkbox' name="checkbox" />   
  </label>
  </div>
  )
}

export default SearchChekBox