import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getCategory } from '../api';

const Home = () => {
	const { data } = useQuery<string[]>('category', getCategory);

	return (
		<div className="category-wrapper">
			{data?.map((category, i) => {
				const categoryTitle = category.replace("'s clothing", '');

				return (
					<Link key={i} to={`/category/${categoryTitle}`}>
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
	);
};

export default Home;
