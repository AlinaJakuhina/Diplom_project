import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { IoIosArrowDown } from "react-icons/io"
import { filterProductsBySale, sortByDefaultAction, sortByNameAscAction, sortByNameDescAction, sortByPriceAscendAction, sortByPriceDescAction, sortByRangeAction} from '../../../store/reducers/productsReducer';


function Filter({ type }){

    const dispatch= useDispatch();

    const handlerSortOptions =(e) =>{
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

    // const [from, setFrom] = useState(0);
    // const [to, setTo] = useState(0);

    // const searchRange = (e) => {
    //     const difference = {
    //         from: from,
    //         to: to
    //     }
    //     const value = e.target.value;
    //     if ( e.target.name === 'from') {
    //         difference.from = value
    //         setFrom(Number(+value))
    //     } else {
    //         difference.to = value
    //         setTo(Number(+value))
    //     }
    //     dispatch(sortByRangeAction(difference))
    // }



    return( 
        <div className={s.filter_container}>
             <div className={s.filter_by_price}>
                <label className={s.filter_title}>Price</label>
                   <input type="number" placeholder="from" name="from"/>
                   <input type="number" placeholder="to"  name="to" />
             </div>

        { type !== 'sale' &&
        <div className={s.filter_by_checkbox}>
            <label className={s.filter_checkbox_title}>Discounted items
               <input type="checkbox" id="checkbox" name="checkbox" 
               onClick={(e)=> dispatch(filterProductsBySale(e.target.checked))}/>
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