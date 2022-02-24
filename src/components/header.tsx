import React from 'react';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="header-wrapper">
							<button className="header-menu-button sm-only" type="button">
								<i className="fa-solid fa-bars" />
							</button>
							<div className="header-logo">
								<img src="/logo.svg" alt="로고" />
							</div>
							<button className="header-cart-button" type="button">
								<i className="fa-solid fa-cart-shopping"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
