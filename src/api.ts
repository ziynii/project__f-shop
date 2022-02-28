export interface IProduct {
	category: string;
	description: string;
	id: number;
	image: string;
	price: number;
	title: string;
	rating: {
		rate: number;
		count: number;
	};
}

export async function getProducts() {
	const response = await fetch('https://fakestoreapi.com/products'); //
	return await response.json();
}

export async function getCategory() {
	const response = await fetch('https://fakestoreapi.com/products/categories'); //
	return await response.json();
}
