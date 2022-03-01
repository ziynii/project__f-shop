import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getCategory } from '../api';
import Loading from '../components/loading';

const Home = () => {
	const { data, isLoading } = useQuery<string[]>('category', getCategory);

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<div className="category-wrapper">
					{data?.map((category, i) => {
						const categoryTitle = category.replace("'s clothing", '');

						return (
							<Link key={i} to={`/products/${categoryTitle}`}>
								<div
									className={`category-box ${categoryTitle}`}
									style={{ backgroundImage: `url(/images/${categoryTitle}.jpg)` }}
								>
									<div className="category-title">
										<h2>{categoryTitle.toUpperCase()}</h2>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			)}
		</>
	);
};

export default Home;
