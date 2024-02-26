import { addToCart } from "@/app/slices/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Product = ({
	productName,
	genericName,
	company,
	price,
	quantity,
	category,
	expirationDate,
	description,
}) => {
	const cart = useSelector((state) => state.cart.cart);
	const dispatch = useDispatch();
	function handleAddToCart() {
		const product = {
			productName,
			price,
			quantity: 1,
		};
		dispatch(addToCart(product));
	}
	return (
		<div className="card flex flex-col justify-center p-10 bg-white rounded-none border hover:bg-slate-100 box-border">
			<div className="prod-title">
				<p className="text-2xl uppercase text-gray-900 font-bold">
					{productName}
				</p>
				<p className="uppercase text-sm text-gray-400 mb-3">{genericName}</p>
			</div>

			<div className="prod-info grid gap-4">
				<div>
					<ul className="flex flex-col ">
						<li className="mr-4 last:mr-0">Category: {category}</li>
						<li className="mr-4 last:mr-0">Company: {company}</li>
						<li className="mr-4 last:mr-0">Expire: {expirationDate}</li>
						<li className="mr-4 last:mr-0">Available: {quantity} pcs</li>
					</ul>
				</div>
				<div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
					<p className="font-bold text-xl">{price} $</p>
					<button
						className="px-4 py-2 transition ease-in uppercase hover:bg-green-600 hover:text-white border focus:outline-none"
						onClick={handleAddToCart}
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
