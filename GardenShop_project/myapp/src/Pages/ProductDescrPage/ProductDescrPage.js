import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCartAction } from '../../store/reducers/cartReducers';
import s from './ProductDescrPage.module.css';


function ProductDescrPage() {

	const url = 'http://localhost:3333';
	const [product, setProduct] = useState([])
	const { id } = useParams();
	const dispatch = useDispatch();

	// const productInfo = useSelector((store) => store.productInfo);


	useEffect(() => {
		window.scrollTo(0, 0);
		fetch(`${url}/products/${id}`)
			.then(res => res.json())
			.then(data => setProduct(data))
	}, [id]);

	// useEffect(() => {
	// 	id && dispatch(fetchGetProductsInfo(`/products/${id}`));
	// }, [dispatch, id]);


	console.log(product);

	const addToCart = (e) => {
		e.preventDefault();
		dispatch(addToCartAction(product));
	};

	const productItem = product ? Object.assign({}, ...product) : {}
	const { title, image, price, discont_price, description } = productItem;
	return (

		<div className={s.product_info_container}>
			<div className={s.info}>
				<h2 className={s.title}>{title}</h2>
				<div className={s.info_wrapper}>
					<div className={s.info_image}>
						<img src={`${url}${image}`} alt={title} />
					</div>

					<div className={s.info_content}>
						<div className={s.price_description}>
            {discont_price !== null ? (
							<>
								<p className={s.discount_price}>{discont_price}<span>$</span> </p>
								<p className={s.price}>{price}$</p>
								<p className={s.discount}>
									{(((price - discont_price) / price) * 100).toFixed(0)}<span className={s.procent}>%</span>{" "}
								</p>
							</>
						) : (
							<p className={s.discount_price}>{price}$</p>
						)}
            </div>

						<button text="To cart" content="info" onClick={addToCart}>To cart</button>

						<div className={s.description_wrapper}>
              <p className={s.description_title}>Description</p>
							<p className={s.description_info}>{description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDescrPage;