import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isAddCartState } from '../atom';

const AddCartModal = () => {
	const setIsAddCart = useSetRecoilState(isAddCartState);
	const navigate = useNavigate();

	const goCartPage = () => {
		setIsAddCart(false);
		navigate('/cart');
	};

	return (
		<div className="cart-modal">
			<div className="cart-modal-wrapper">
				<h4>
					<i className="fa-solid fa-check"></i>상품을 장바구니에 추가했습니다.
				</h4>
				<div className="button-group">
					<button className="go-cart" onClick={goCartPage}>
						장바구니로 이동
					</button>
					<button className="go-shop" onClick={() => setIsAddCart(false)}>
						쇼핑 계속하기
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddCartModal;
