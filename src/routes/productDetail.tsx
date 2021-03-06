import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getSingleProduct, IProduct } from '../api';
import { cartItemsState, goBackState, isAddCartState } from '../atom';
import AddCartModal from '../components/addCartModal';
import Loading from '../components/loading';
import Product from '../components/product';

const ProductDetail = () => {
	const { productId } = useParams();
	const idToNum = Number(productId);
	const setIsGoBack = useSetRecoilState(goBackState);
	const [isAddCart, setIsAddCart] = useRecoilState(isAddCartState);
	const [cartItems, setCartItems] = useRecoilState<IProduct[]>(cartItemsState);
	const navigate = useNavigate();
	const { data, isLoading } = useQuery<IProduct>(['product', idToNum], () =>
		getSingleProduct(idToNum),
	);

	const hasItem = cartItems.some(item => item.id === data?.id);

	const onClickAddCartButton = () => {
		if (!hasItem) {
			setIsAddCart(true);
			setCartItems(cartItems.concat(data! as IProduct));
		} else {
			alert('이미 장바구니에 담긴 상품입니다.');
		}
	};

	useEffect(() => {
		setIsGoBack(true);
	}, []);

	return (
		<div className="product-detail">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						{isLoading ? (
							<Loading />
						) : (
							<Product data={data} onClickAddCartButton={onClickAddCartButton} />
						)}
					</div>
				</div>
			</div>

			<button className="go-back-button sm-hidden" onClick={() => navigate(-1)}>
				<i className="fa-solid fa-arrow-left"></i>
			</button>

			<button type="button" className="add-cart-button lg-hidden" onClick={onClickAddCartButton}>
				장바구니에 담기
			</button>

			{isAddCart === true && <AddCartModal />}
		</div>
	);
};
export default ProductDetail;
