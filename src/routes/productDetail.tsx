import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { getSingleProduct, IProduct } from '../api';
import { goBackState } from '../atom';
import Loading from '../components/loading';

const ProductDetail = () => {
	const { productId } = useParams();
	const idToNum = Number(productId);
	const setIsGoBack = useSetRecoilState(goBackState);

	const { data, isLoading } = useQuery<IProduct>(['product', idToNum], () =>
		getSingleProduct(idToNum),
	);

	useEffect(() => {
		setIsGoBack(true);
	});

	return (
		<div className="product-detail">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						{isLoading ? (
							<Loading />
						) : (
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
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProductDetail;
