import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="header-wrapper">
							<button className="header-menu-button sm-only" type="button">
								<i className="fa-solid fa-bars" />
							</button>

							<div className="header-logo" onClick={() => navigate('/')}>
								<img src="/logo.svg" alt="로고" />
							</div>

							<div className="header-cart-button" onClick={() => navigate('/cart')}>
								<i className="fa-solid fa-cart-shopping"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
