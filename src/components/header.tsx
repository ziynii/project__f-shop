import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { cartItemsState, goBackState, headerGnbState, openSideBarState } from '../atom';

const Header = () => {
	const navigate = useNavigate();
	const [isGoBack, setIsGoBack] = useRecoilState(goBackState);
	const cartItems = useRecoilValue(cartItemsState);
	const cartItemsQuan = cartItems.length;
	const setOpenSideBar = useSetRecoilState(openSideBarState);
	const headerGnb = useRecoilValue(headerGnbState);

	const goBackLocate = () => {
		setIsGoBack(false);
		navigate(-1);
	};

	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="header-wrapper">
							{isGoBack === false ? (
								<button
									className="header-menu-button sm-only"
									type="button"
									onClick={() => setOpenSideBar(true)}
								>
									<i className="fa-solid fa-bars" />
								</button>
							) : null}

							{isGoBack === true ? (
								<button className="header-back-button sm-only" type="button" onClick={goBackLocate}>
									<i className="fa-solid fa-arrow-left"></i>
								</button>
							) : null}

							<div className="header-logo" onClick={() => navigate('/')}>
								<img src="/logo.svg" alt="로고" />
							</div>

							<div className="header-gnb sm-hidden">
								<ul className="gnb-list">
									<li className={'gnb-item' + (headerGnb === 'men' ? ' active' : '')}>
										<Link to="/products/men">MEN</Link>
									</li>
									<li className={'gnb-item' + (headerGnb === 'women' ? ' active' : '')}>
										<Link to="/products/women">WOMEN</Link>
									</li>
									<li className={'gnb-item' + (headerGnb === 'jewelery' ? ' active' : '')}>
										<Link to="/products/jewelery">JEWELERY</Link>
									</li>
									<li className={'gnb-item' + (headerGnb === 'electronics' ? ' active' : '')}>
										<Link to="/products/electronics">ELECTRONICS</Link>
									</li>
								</ul>
							</div>

							<div className="header-cart-button" onClick={() => navigate('/cart')}>
								<i className="fa-solid fa-cart-shopping"></i>
								<div className="quantity">{cartItemsQuan}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
