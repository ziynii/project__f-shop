import React from 'react';

interface ICouponFormProps {
	couponSelect: string;
	setCouponSelect: (value: string) => void;
}

const CouponForm = ({ couponSelect, setCouponSelect }: ICouponFormProps) => {
	return (
		<form className="coupon-form sm-hidden">
			<div className="coupon-select-box">
				<h3 className="coupon-box-title">COUPON</h3>
				<select
					name="coupons"
					id="coupon-select"
					value={couponSelect}
					onChange={event => setCouponSelect(event?.target.value)}
				>
					<option value="select">쿠폰 선택하기</option>
					<option value="free">[첫구매] 무료배송 쿠폰</option>
				</select>
			</div>
			<div className="coupon-code-box">
				<h3 className="coupon-box-title">CODE</h3>
				<input type="text" className="code" placeholder="쿠폰 코드를 입력하세요" />
				<button className="input-button">
					<i className="fa-solid fa-check"></i>
				</button>
			</div>
		</form>
	);
};

export default CouponForm;
