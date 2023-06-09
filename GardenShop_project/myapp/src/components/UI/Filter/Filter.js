import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { filterProductsBySale, sortByDefaultAction, sortByNameAscAction, sortByNameDescAction, sortByPriceAscendAction, sortByPriceDescAction, sortByRangeAction} from '../../../store/reducers/productsReducer';


function Filter({ type }){

    const dispatch= useDispatch();

    const handlerSale = (e) => {
      dispatch(filterProductsBySale(e.target.checked))
    }

    const handlerSortOptions =(e) => {
        // console.log((e.target.value));
          e.preventDefault()
          switch (e.target.value) {
              case 'default':
                  dispatch(sortByDefaultAction())
                  break
              case 'priceDesc':
                  dispatch(sortByPriceDescAction())   
                  break
              case 'priceAsc':
                      dispatch(sortByPriceAscendAction())   
                      break
              case 'nameAZ':
				dispatch(sortByNameDescAction());
				break;
			  case 'nameZA':
				dispatch(sortByNameAscAction());
				break;
              default:
                  break;
          }
        }

        const [fromValue, setFromValue] = useState('');
        const [toValue, setToValue] = useState('');

        const handleChange = (e) => {
        const range = {
              from: fromValue,
              to: toValue
              }
        const { value } = e.target;
          if (e.target.name === 'from') {
              range.from = +value
              setFromValue(value)
          } else {
              range.to = +value
              setToValue(value)
          }
              dispatch(sortByRangeAction(range))
          }
  

    return( 
        <div className={s.filter_container}>
             <div className={s.filter_by_price}>
                <label className={s.filter_title}>Price</label>
                   <input type="number" placeholder="from" name="from" min="0" value={fromValue} onChange={handleChange}/>
                   <input type="number" placeholder="to"  name="to" min="0" value={toValue} onChange={handleChange}/>
             </div>

        { type !== 'sale' &&
        <div className={s.filter_by_checkbox}>
            <label className={s.filter_checkbox_title}>Discounted items
               <input type="checkbox" id="checkbox" name="checkbox" onClick={handlerSale} 
              />
            </label>
        </div>
        } 

      <div className={s.filter_by_sort}>
        <label className={s.sort_title}>Sorted</label>
          <select className={s.sort_wrapper} onChange={handlerSortOptions}>
            <option value='default'>by default</option>
            <option value='nameAZ'>by title A to Z </option>
            <option value='nameZA'>by title Z to A </option>
            <option value='priceAsc'>price by ascending</option>
            <option value="priceDesc">price by descending</option>
          </select>
        </div>
        </div>
    )
}
export default Filter