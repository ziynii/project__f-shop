import React from 'react';
import { useRecoilState } from 'recoil';
import { IProduct } from '../api';
import { cartItemsState } from '../atom';

interface ICartItemProps {
	item: IProduct;
}

const CartItem = ({ item }: ICartItemProps) => {
	const [cartItems, setCartItems] = useRecoilState(cartItemsState);

	const deleteItem = () => {
		const setItems = cartItems.filter(cartItem => cartItem.id !== item.id);
		setCartItems(setItems);
	};

	return (
		<li className="cart-item" key={item.id}>
			<div className="align-box">
				<div className="item-image">
					<img src={item.image} alt={item.title} />
				</div>

				<div className="item-center-box">
					<div className="item-info">
						<h4 className="title">{item.title}</h4>
						<span className="quan">QUANTITY : 1 /</span>
						<span className="option"> ONE SIZE</span>
					</div>
					<button className="delete-button" onClick={deleteItem}>
						Remove
					</button>
				</div>
			</div>

			<div className="item-price">
				<span>&#36;{item.price}</span>
			</div>
		</li>
	);
};

export default CartItem;
