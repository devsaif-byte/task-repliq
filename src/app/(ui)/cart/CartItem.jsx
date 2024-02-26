import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/app/slices/cartSlice";
export default function CartItem({ item }) {
	const { productName, price, quantity } = item;

	const dispatch = useDispatch();

	return (
		<tbody class="divide-y divide-gray-100 text-sm">
			<tr>
				<td class="p-2">
					<div class="font-medium text-gray-800">{productName}</div>
				</td>
				<td class="p-2">
					<div class="text-left">{quantity}</div>
				</td>
				<td class="p-2">
					<div class="text-left font-medium text-green-500">{price}$</div>
				</td>
				<td class="p-2">
					<div class="flex justify-center">
						<button onClick={() => dispatch(removeFromCart(item))}>
							<svg
								class="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-slate-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
								></path>
							</svg>
						</button>
					</div>
				</td>
			</tr>
		</tbody>
	);
}
