import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getCategoryProducts, IProduct } from '../api';
import { headerGnbState } from '../atom';
import Loading from '../components/loading';
import ProductCard from '../components/productCard';

const Category = () => {
	let { name } = useParams();
	const { data, isLoading } = useQuery<IProduct[]>(
		['products', (name = name?.includes('men') ? name + "'s clothing" : name)],
		() => getCategoryProducts(name),
	);
	const shortName = name?.replace("'s clothing", '');
	const [headerGnb, setHeaderGnb] = useRecoilState<string | undefined>(headerGnbState);
	const [sortValue, setSortValue] = useState('best');
	if (sortValue === 'best') {
		data?.sort((a, b) => a.id - b.id);
	} else if (sortValue === 'low') {
		data?.sort((a, b) => a.price - b.price);
	} else if (sortValue === 'high') {
		data?.sort((a, b) => b.price - a.price);
	}

	useEffect(() => {
		setHeaderGnb(shortName);
		setSortValue('best');
	}, [name]);

	return (
		<div className="products">
			{isLoading ? (
				<Loading />
			) : (
				<>
					<div
						className="products-title"
						style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${shortName}.jpg)` }}
					>
						<h2>{shortName}</h2>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-sm-4">
								<div className="products-wrapper">
									<main className="products-content">
										<div className="products-sort">
											<button
												className={
													'price-sort-button best' + (sortValue === 'best' ? ' active' : '')
												}
												onClick={() => setSortValue('best')}
											>
												인기순
											</button>
											<button
												className={'price-sort-button low' + (sortValue === 'low' ? ' active' : '')}
												onClick={() => setSortValue('low')}
											>
												가격 낮은순
											</button>
											<button
												className={
													'price-sort-button high' + (sortValue === 'high' ? ' active' : '')
												}
												onClick={() => setSortValue('high')}
											>
												가격 높은순
											</button>
										</div>

										<ul className="products-list">
											{data?.map(product => {
												return (
													<li className="products-item" key={product.id}>
														<Link to={`/products/${shortName}/${product.id}`}>
															<ProductCard product={product} />
														</Link>
													</li>
												);
											})}
										</ul>
									</main>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Category;
