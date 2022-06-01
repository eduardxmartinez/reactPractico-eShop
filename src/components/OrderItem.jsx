import React, { useContext } from 'react';
import "@styles/OrderItem.scss";
import AppContext from '../context/AppContext';

import close from "@icons/icon_close.png"

const OrderItem = ({product, index}) => {
	const {removeFromCart} = useContext(AppContext);
	const handleRemove = (product,indexValue) => {
		removeFromCart(product,indexValue);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.category.image} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price},00</p>
			<img src={close} alt="close" className='OrderItem-close' onClick={()=>handleRemove(product,index)} />
		</div>
	);
}

export default OrderItem;
