import React from 'react';
import { useRecoilValue } from 'recoil';
import { cartItemsState } from '../atom';
import CartItem from '../components/cartItem';

const Cart = () => {
	const cartItems = useRecoilValue(cartItemsState);

	console.log(cartItems);

	return (
		<div className="cart">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<ul className="cart-list">
							{cartItems.map(item => {
								return <CartItem item={item} key={item.id} />;
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
