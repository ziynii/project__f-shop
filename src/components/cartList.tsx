import React from 'react';
import { useRecoilValue } from 'recoil';
import { cartItemsState } from '../atom';
import CartItem from '../components/cartItem';

const CartList = () => {
	const cartItems = useRecoilValue(cartItemsState);

	return (
		<ul className="cart-list">
			{cartItems.map(item => (
				<CartItem item={item} key={item.id} />
			))}
		</ul>
	);
};

export default CartList;
