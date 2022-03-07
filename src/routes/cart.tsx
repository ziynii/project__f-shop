import React from 'react';
import { useRecoilValue } from 'recoil';
import { cartItemsState } from '../atom';
import CartList from '../components/cartList';

const Cart = () => {
	const cartItems = useRecoilValue(cartItemsState);

	const priceList = cartItems.map(item => {
		return item.price;
	});

	const totalPrice = priceList.reduce((a, b) => a + b, 0);

	return (
		<div className="cart">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						{cartItems.length === 0 ? (
							<div className="cart-empty">
								<i className="fa-solid fa-cart-shopping"></i> 장바구니가 비어있습니다
							</div>
						) : (
							<CartList />
						)}

						<div className="total-price">
							<dl>
								<dt>TOTAL</dt>
								<dd>&#36;{totalPrice}</dd>
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
