import React from 'react'
import styles from "../index.module.css";
// import  "../index.module.css";


export default function ShopCard(key, props, visible) {

	console.log(props);

	if (visible === true) {
		return (
			<div className={styles.modal}>
				<div className={styles.modal_content}>
					<div className={styles.modal_header}>
						<h1 className={styles.modal_title}>{props.title}</h1>
					</div>
					<div className={styles.modal_body}>
						{props.images}
					</div>
					<div className={styles.modal_footer}>
						<button>"Купить"</button>
					</div>
				</div>



			</div>
		)
	}

}


	// <p>{props.title}</p>
	// 		<p>{props.id}</p>
