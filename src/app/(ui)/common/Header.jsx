"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
	const cart = useSelector((state) => state.cart.cart);
	const [items, setItems] = useState([]);
	useEffect(() => {
		setItems(cart?.length);
	}, [cart]);
	return (
		<div className="navbar bg-base-100 border border-b">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link href="/products">Products</Link>
						</li>
						<li>
							<Link href="/cart">
								Cart
								{items && <div className="badge badge-secondary">{items}</div>}
							</Link>
						</li>
						<li>
							<Link href="/dashboard">Dashboard</Link>
						</li>
					</ul>
				</div>
				<Link href="/" className="btn btn-ghost text-xl uppercase">
					Admin E-commerce
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex navbar-end">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href="/products">Products</Link>
					</li>

					<li>
						<Link href="/cart">
							Cart
							{items && <div className="badge badge-secondary">{items}</div>}
						</Link>
					</li>
					<li>
						<Link href="/dashboard">Dashboard</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
