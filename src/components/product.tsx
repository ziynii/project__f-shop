import React from 'react';
import { IProduct } from '../api';
import ProductSlide from '../productSlide';

interface IProductProps {
	data: IProduct | undefined;
	onClickAddCartButton: () => void;
}

const Product = ({ data, onClickAddCartButton }: IProductProps) => {
	return (
		<div className="product">
			<div className="product-left-section">
				<div className="product-image">
					<img src={data?.image} alt={data?.title + '이미지'} />
				</div>

				<div className="product-slide lg-only">
					<h2 className="product-slide-title">Recommend product</h2>
					<ProductSlide product={data} />
				</div>
			</div>

			<div className="product-right-section">
				<div className="product-category">{data?.category}</div>

				<div className="product-title">
					<h2>{data?.title}</h2>
				</div>

				<div className="product-price">
					<span>&#36;{data?.price}</span>
				</div>

				<p className="product-description">{data?.description}</p>

				<button type="button" className="add-cart-button lg-only" onClick={onClickAddCartButton}>
					장바구니에 담기
				</button>
			</div>
		</div>
	);
};

export default Product;
