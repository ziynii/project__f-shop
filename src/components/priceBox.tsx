import React, { useState } from 'react';
import { IProduct } from '../api';
import CouponForm from './couponForm';

interface IPriceBoxProps {
	cartItems: IProduct[];
	summaryPrice: number;
}

const PriceBox = ({ cartItems, summaryPrice }: IPriceBoxProps) => {
	const [couponSelect, setCouponSelect] = useState('select');
	const totalPrice = couponSelect === 'free' ? summaryPrice - 3 : summaryPrice;
	const [openPriceBox, setOpenPriceBox] = useState(false);

	return (
		<div className={'price-box' + (openPriceBox === true ? ' active' : '')}>
			<h2 className="summary">summary</h2>
			<div className="summary-info">
				<span className="summary-quan">상품 총 {cartItems.length}개</span>
				<span className="summary-price">&#36;{summaryPrice}</span>
			</div>
			<CouponForm couponSelect={couponSelect} setCouponSelect={setCouponSelect} />

			<div className="total-price sm-hidden">
				{couponSelect === 'free' ? (
					<div className="discount">
						<span>[첫구매] 무료배송 쿠폰 적용</span>
						<span>-&#36;3</span>
					</div>
				) : null}

				<dl>
					<dt>TOTAL</dt>
					<dd>&#36;{summaryPrice === 0 ? summaryPrice : totalPrice}</dd>
				</dl>
			</div>
			<button type="button" className="pay-button">
				주문하기
			</button>

			<button className="open-button" onClick={() => setOpenPriceBox(prev => !prev)}>
				<i className="fa-solid fa-angle-left"></i>
			</button>
		</div>
	);
};
export default PriceBox;
