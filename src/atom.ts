import { atom } from 'recoil';

export const loginState = atom({
	key: 'login',
	default: false,
});

export const goBackState = atom({
	key: 'goback',
	default: false,
});
