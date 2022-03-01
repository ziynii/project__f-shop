import React from 'react';
import { IProduct } from '../api';

interface ICardProps {
	product: IProduct;
}

const ProductCard = ({ product }: ICardProps) => {
	return (
		<div className="item-wrapper">
			<div className="item-image">
				<img src={product?.image} alt={product.title + '이미지'} />
			</div>
			<h3 className="item-title">{product.title}</h3>
			<span className="item-price">&#36;{product.price}</span>
		</div>
	);
};

export default ProductCard;
