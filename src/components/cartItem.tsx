import React from 'react';
import { IProduct } from '../api';

interface ICartItemProps {
	item: IProduct;
}

const CartItem = ({ item }: ICartItemProps) => {
	return (
		<li className="cart-item" key={item.id}>
			<div className="item-image">
				<img src={item.image} alt={item.title} />
			</div>

			<div className="align-box">
				<div className="item-info">
					<h4 className="title">{item.title}</h4>
					<span className="quan">1</span>
					<span className="option">ONE SIZE</span>
				</div>

				<button className="delete-button">Remove</button>
			</div>

			<div className="item-price">
				<span>&#36;{item.price}</span>
			</div>
		</li>
	);
};

export default CartItem;
