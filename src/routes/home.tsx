import React from 'react';

const Home = () => {
	return (
		<div className="category-wrapper">
			<div className="category-box men" style={{ backgroundImage: 'url(/images/men.jpg)' }}>
				<div className="category-title">
					<h2>MEN</h2>
				</div>
			</div>
			<div className="category-box women" style={{ backgroundImage: 'url(/images/women.jpg)' }}>
				<div className="category-title">
					<h2>WOMEN</h2>
				</div>
			</div>
			<div
				className="category-box jewelery"
				style={{ backgroundImage: 'url(/images/jewelery.jpg)' }}
			>
				<div className="category-title">
					<h2>JEWELERY</h2>
				</div>
			</div>
			<div
				className="category-box electronics"
				style={{ backgroundImage: 'url(/images/electronics.jpg)' }}
			>
				<div className="category-title">
					<h2>ELECTRONICS</h2>
				</div>
			</div>
		</div>
	);
};

export default Home;
