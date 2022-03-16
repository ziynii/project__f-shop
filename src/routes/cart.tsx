import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartItemsState, goBackState, headerGnbState } from '../atom';
import CartList from '../components/cartList';
import PriceBox from '../components/priceBox';

const Cart = () => {
	const cartItems = useRecoilValue(cartItemsState);
	const setIsGoBack = useSetRecoilState(goBackState);
	const setHeaderGnb = useSetRecoilState(headerGnbState);
	const priceList = cartItems.map(item => {
		return item.price;
	});
	const summaryPrice = priceList.reduce((a, b) => a + b, 0);

	useEffect(() => {
		setIsGoBack(false);
		setHeaderGnb('');
	}, []);

	return (
		<div className="cart">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="align-box">
							<div className="cart-content">
								{cartItems.length === 0 ? (
									<div className="cart-empty">
										<i className="fa-solid fa-cart-shopping"></i> 장바구니가 비어있습니다
									</div>
								) : (
									<CartList />
								)}
								<div className="total-price sm-only">
									<dl>
										<dt>TOTAL</dt>
										<dd>&#36;{summaryPrice}</dd>
									</dl>
								</div>
							</div>

							<button type="button" className="pay-button sm-only">
								주문하기
							</button>

							<PriceBox cartItems={cartItems} summaryPrice={summaryPrice} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
