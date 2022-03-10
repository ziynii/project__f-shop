import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { getCategory } from '../api';
import { openSideBarState } from '../atom';
import SnsLink from './snsLink';

const SideBar = () => {
	const { data } = useQuery<string[]>('category', getCategory);
	const setOpenSideBar = useSetRecoilState(openSideBarState);

	return (
		<div className="side-bar">
			<div className="side-nav">
				<ul className="nav-list">
					{data?.map((item: string) => {
						const itemName = item.replace("'s clothing", '');
						return (
							<li className="nav-item" onClick={() => setOpenSideBar(false)}>
								<Link to={`/products/${itemName}`}>
									<h2>{itemName}</h2>
								</Link>
							</li>
						);
					})}
				</ul>

				<SnsLink />
			</div>

			<button className="close-button" type="button" onClick={() => setOpenSideBar(false)}>
				<i className="fa-solid fa-xmark"></i>
			</button>
		</div>
	);
};

export default SideBar;
