import React from 'react'
import s from './SearchSort.module.css'

function SearchSort(props) {

  const {title_sort} = props

  return (
    <div className={s.sort_container}>
      <p>{title_sort}</p>
      <select className={s.sort_select}>
        <option value="">by default</option>
        <option value="0">title</option>
        <option value="1">price</option>
      </select>
    </div>
  )
}

export default SearchSort