import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { headerGnbState } from '../atom';

const HeaderGnb = () => {
	const headerGnb = useRecoilValue(headerGnbState);

	return (
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
	);
};
export default HeaderGnb;
