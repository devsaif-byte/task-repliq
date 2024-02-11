"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
const ProductList = () => {
	const [products, setProducts] = useState([]);

	// fetch data from api
	//** image, name, description, price, categories, tags */
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					"https://fakerapi.it/api/v1/products?_quantity=30&_categories_type=string"
				);
				const data = await response.data.data;
				console.log(data);
				setProducts(data);
			} catch (err) {
				console.error(err.message);
			}
		}
		fetchData();
	}, []);

	return (
		<div className="grid grid-cols-5 gap-2">
			{products.map((p) => (
				<Product
					key={p.id}
					image={p.image}
					productName={p.name}
					description={p.description}
					price={p.price}
					categories={p.categories}
					tags={p.tags}
				/>
			))}
		</div>
	);
};

export default ProductList;
