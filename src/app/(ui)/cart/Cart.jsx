"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import Link from "next/link";
import Button from "@/app/(ui)/common/Button";

export default function Cart() {
	const [items, setItems] = useState([]);
	const cart = useSelector((state) => state.cart.cart);
	const dispatch = useDispatch();
	console.log(cart);

	useEffect(() => {
		setItems(cart);
	}, [cart]);

	return (
		<div className="mx-auto w-[1000px] text-gray-600 bg-white">
			<header className="border-b border-gray-100 px-5 py-4">
				<div className="font-semibold text-3xl text-gray-800">Manage Carts</div>
			</header>

			<div className="overflow-x-auto p-3">
				<table className="w-full table-auto">
					<thead className="bg-gray-50 text-xl font-semibold uppercase text-gray-400">
						<tr>
							<th className="p-2">
								<header className="text-left font-semibold">
									Product Name
								</header>
							</th>
							<th className="p-2">
								<header className="text-left font-semibold">Quantity</header>
							</th>
							<th className="p-2">
								<header className="text-left font-semibold">Total</header>
							</th>
							<th className="p-2">
								<header className="text-center font-semibold">Action</header>
							</th>
						</tr>
					</thead>

					{/* cart items */}
					{items.length === 0 ? (
						<div className="mx-auto w-full bg-white p-3 text-xl">
							No items in cart
						</div>
					) : (
						items.map((item) => <CartItem key={item.name} item={item} />)
					)}
				</table>
			</div>

			{/* <!-- total amount --> */}
			<div className="flex justify-end space-x-4 border-t  border-gray-100 px-5 py-4 text-2xl font-bold">
				<div>Total</div>
				<div>
					${" "}
					<span x-text="total.toFixed(2)">
						{items.reduce((acc, currVal) => acc + currVal.price, 0)}
					</span>
				</div>
				<Link href="/checkout" className="text-sm">
					<Button type={"success"} text={"Checkout"} />
				</Link>
			</div>

			<div className="flex justify-end">
				{/* <!-- send this data to backend (note: use class 'hidden' to hide this input) --> */}
				<input
					type="hidden"
					className="border border-black bg-gray-50"
					x-model="selected"
				/>
			</div>
		</div>
	);
}
