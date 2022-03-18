import { useQuery } from 'react-query';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { getProducts, IProduct } from './api';
import { Link } from 'react-router-dom';

interface IProductSlideProps {
	product: IProduct | undefined;
}

const ProductSlide = ({ product }: IProductSlideProps) => {
	const { data } = useQuery<IProduct[]>('slideProducts', getProducts);
	const slideList = data?.filter(item => item.category === product?.category);
	console.log(slideList);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

	return (
		<div className="slide-list">
			<Slider {...settings}>
				{slideList?.map(item => {
					return (
						<div className="slide-item" key={item.id}>
							<div className="item-wrapper">
								<Link to={`/products/${item.category}/${item.id}`}>
									<div className="item-image">
										<img src={item.image} alt="" />
									</div>
									<div className="item-caption">
										<span>{item.title}</span>
									</div>
								</Link>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};
export default ProductSlide;
