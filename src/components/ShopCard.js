import React from 'react'
import styles from "../index.module.css";
// import  "../index.module.css";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


// export default function ShopCard(key, props, visible) {
export default function ShopCard() {

	// console.log(props);

	const params = useParams()


	let url = `https://fakestoreapi.com/products/${params.productId}`;
	let [product, stateProduct] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((result) => {
				return result.json();
			})
			.then((jsonResult) => {
				stateProduct(jsonResult);
			});
	}, []);




	return (
		<>
			<h2>Detail</h2>
			{/* {product?.id}  */}
			{product && (
				<div className={styles.modal}>
					<div className={styles.modal_content}>
						<div className={styles.modal_header}>
							<h1 className={styles.modal_title}>{product.title}</h1>
						</div>
						<div className={styles.modal_body}>
							<img src={product.image}></img>
						</div>
						<div className={styles.price}>{product.price}</div>
						<div className={styles.modal_footer}>
							<button>"Купить"</button>
						</div>
						<div>{product.description}</div>
					</div>
				</div>
			)}

		</>
	)
}