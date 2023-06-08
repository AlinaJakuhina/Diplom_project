import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAll } from '../../asyncActions/productsAll';
import ProductsList from '../ProductsList/ProductsList';
import s from './SaleList.module.css';


function SaleList() {

  const dispatch = useDispatch()
  const products = useSelector(store => store.products)

  useEffect(() => {dispatch(getProductsAll())}, [])

 

  const products_cards = products.filter((elem) => elem.discont_price)
                                 .sort(()=> Math.random() - 0.5)
                                 .slice(0,3);

                                                     
  return (
    <div className={s.sale_wrapper}>
     <ProductsList products={products_cards} title="Sale" />
    </div>
  )
}

export default SaleList