import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getCategoryProducts, IProduct } from '../api';
import ProductCard from '../components/productCard';

const Category = () => {
	let { name } = useParams();

	const { data, isLoading } = useQuery<IProduct[]>(
		['products', (name = name?.includes('men') ? name + "'s clothing" : name)],
		() => getCategoryProducts(name),
	);

	const shortName = name?.replace("'s clothing", '');

	return (
		<div className="products">
			<div className="products-title" style={{ backgroundImage: `url(/images/${shortName}.jpg)` }}>
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
												<ProductCard product={product} />
											</li>
										);
									})}
								</ul>
							</main>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Category;
