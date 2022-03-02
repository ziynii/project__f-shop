import React, { useEffect } from 'react';
import './styles/main.scss';
import '@fortawesome/fontawesome-free/js/all.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Home from './routes/home';
import Cart from './routes/cart';
import Products from './routes/products';
import ProductDetail from './routes/productDetail';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="products/:name" element={<Products />} />
					<Route path="products/:name/:productId" element={<ProductDetail />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
