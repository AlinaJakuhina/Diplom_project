import React from 'react'
import { useDispatch } from 'react-redux';
import s from './SearchForm.module.css'

function SearchForm(props) {

    const {title} = props;

// const dispatch = useDispatch;


  return (
    <div className={s.form_container}>
      <p>{title}</p>
        <form className={s.search_form} >
            <input type="text" placeholder='from' name='min'></input>
            <input type="text" placeholder='to' name='max'></input>
        </form>
       
    </div>
  )
}

export default SearchForm