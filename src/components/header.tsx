import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { cartItemsState, goBackState, headerGnbState, openSideBarState } from '../atom';
import HeaderGnb from './headerGnb';

const Header = () => {
	const navigate = useNavigate();
	const [isGoBack, setIsGoBack] = useRecoilState(goBackState);
	const cartItems = useRecoilValue(cartItemsState);
	const cartItemsQuan = cartItems.length;
	const setOpenSideBar = useSetRecoilState(openSideBarState);
	const setHeaderGnb = useSetRecoilState(headerGnbState);
	const onClickLogo = () => {
		navigate('/');
		setHeaderGnb('');
	};

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

							<div className="header-logo" onClick={onClickLogo}>
								<img src="https://ziynii.github.io/project__f-shop/logo.svg" alt="로고" />
							</div>

							<HeaderGnb />

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
