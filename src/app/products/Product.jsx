import Image from "next/image";
import React from "react";

const Product = ({
	image,
	productName,
	description,
	price,
	categories,
	tags,
}) => {
	return (
		<div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100 border">
			<div className="flex flex-col space-y-4">
				<div>
					<h2 className="text-2xl font-semibold">{productName}</h2>
					<span className="text-sm dark:text-gray-400">{categories[0]}</span>
				</div>
				<div className="space-y-1">
					<span className="flex items-center space-x-2">
						<span className="dark:text-gray-400">
							{description.slice(0, 90)}
						</span>
					</span>
					<span className="flex items-center space-x-2">
						<span>Price:</span>
						<span className="dark:text-green-500">{price}</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
