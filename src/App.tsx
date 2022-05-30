import React from 'react';
import './styles/main.scss';
import '@fortawesome/fontawesome-free/js/all.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Home from './routes/home';
import Cart from './routes/cart';
import Products from './routes/products';
import ProductDetail from './routes/productDetail';
import { useRecoilValue } from 'recoil';
import { openSideBarState } from './atom';
import SideBar from './components/sideBar';
import ScrollToTop from './scrollTop';

function App() {
	const openSideBar = useRecoilValue(openSideBarState);

	return (
		<BrowserRouter basename="/project__f-shop">
			<ScrollToTop />
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="products/:name" element={<Products />} />
				<Route path="products/:name/:productId" element={<ProductDetail />} />
			</Routes>

			{openSideBar === true ? <SideBar /> : null}
		</BrowserRouter>
	);
}

export default App;
