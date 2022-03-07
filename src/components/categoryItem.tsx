import React from 'react';

interface ICategoryItemProps {
	categoryTitle: string;
}

const CategoryItem = ({ categoryTitle }: ICategoryItemProps) => {
	return (
		<div
			className={`category-box ${categoryTitle}`}
			style={{ backgroundImage: `url(/images/${categoryTitle}.jpg)` }}
		>
			<div className="category-title">
				<h2>{categoryTitle.toUpperCase()}</h2>
			</div>
		</div>
	);
};

export default CategoryItem;
