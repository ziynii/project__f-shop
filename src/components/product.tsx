import React from 'react';
import { IProduct } from '../api';

interface IProductProps {
	data: IProduct | undefined;
}

const Product = ({ data }: IProductProps) => {
	return (
		<div className="product">
			<div className="product-image">
				<img src={data?.image} alt={data?.title + '이미지'} />
			</div>

			<div className="product-category">{data?.category}</div>

			<div className="product-title">
				<h2>{data?.title}</h2>
			</div>

			<div className="product-price">
				<span>&#36;{data?.price}</span>
			</div>

			<p className="product-description">{data?.description}</p>
		</div>
	);
};

export default Product;
