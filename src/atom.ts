import { IProduct } from './api';
import { atom, selector } from 'recoil';

export const loginState = atom({
	key: 'loginState',
	default: false,
});

export const goBackState = atom({
	key: 'goBackState',
	default: false,
});

export const isAddCartState = atom({
	key: 'isAddCartState',
	default: false,
});

export const cartItemsState = atom<IProduct[]>({
	key: 'cartItemsState',
	default: [],
});

export const openSideBarState = atom({
	key: 'openSideBarState',
	default: false,
});
