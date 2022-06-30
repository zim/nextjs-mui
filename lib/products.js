export const getProductsData = async () => {
	const response = await fetch("https://dummyjson.com/products");
	const data = await response.json();

	const products = data.products;

	return products;
};
