"use client";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Product from "./Product";
import Loader from "../common/Loader";

const ProductList = ({ props }) => {
	console.log(props);
	// const data = [
	// 	{
	// 		drug_name: "Sanatos",
	// 		drug_generic_name:
	// 			"Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate",
	// 		drug_company: "Pharmalab Enterprises Inc",
	// 		price: 38.86,
	// 		quantity: 294,
	// 		expiration_date: "10/4/2023",
	// 		category: "Pain Relief",
	// 		description:
	// 			"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
	// 	},
	// ];
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// fetch data from api

	useEffect(() => {
		setIsLoading(true);
		async function fetchData() {
			try {
				const response = await axios.get(
					"https://raw.githubusercontent.com/devsaif-byte/drugs-api/main/MOCK_DATA.json"
				);
				const data = await response.data;
				setProducts(data);
				setIsLoading(false);
			} catch (err) {
				console.error(err.message);
			}
		}
		fetchData();
	}, []);

	if (isLoading) return <Loader />;
	return (
		<div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-2">
			{products.map((p) => (
				<Product
					key={p.name}
					productName={p.drug_name}
					genericName={p.drug_generic_name}
					company={p.drug_company}
					price={p.price}
					quantity={p.quantity}
					category={p.category}
					expirationDate={p.expiration_date}
					description={p.description}
				/>
			))}
		</div>
	);
};

export default ProductList;
