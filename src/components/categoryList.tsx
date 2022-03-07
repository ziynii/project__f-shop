import React from 'react';
import { Link } from 'react-router-dom';
import CategoryItem from '../components/categoryItem';

interface ICategoryListProps {
	data: string[] | undefined;
}

const CategoryList = ({ data }: ICategoryListProps) => {
	return (
		<div className="category-list">
			{data?.map((category, i) => {
				const categoryTitle = category.replace("'s clothing", '');

				return (
					<Link key={i} to={`/products/${categoryTitle}`}>
						<CategoryItem categoryTitle={categoryTitle} />
					</Link>
				);
			})}
		</div>
	);
};

export default CategoryList;
