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

						<div className="total-price">
							<dl>
								<dt>TOTAL</dt>
								<dd>&#36;230</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>

			<button type="button" className="pay-button">
				주문하기
			</button>
		</div>
	);
};

export default Cart;
