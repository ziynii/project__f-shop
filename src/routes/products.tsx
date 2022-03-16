import React, { useEffect } from 'react';
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

	useEffect(() => {
		setHeaderGnb(shortName);
	}, [name]);

	return (
		<div className="products">
			{isLoading ? (
				<Loading />
			) : (
				<>
					<div
						className="products-title"
						style={{ backgroundImage: `url(/images/${shortName}.jpg)` }}
					>
						<h2>{shortName}</h2>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-sm-4">
								<div className="products-wrapper">
									<main className="products-content">
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
