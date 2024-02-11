"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/common/Button";
import axios from "axios";

const Login = () => {
	const dispatch = useDispatch();
	// local states
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		try {
			const response = await axios.post("http://localhost:3100/api/login", {
				phone,
				password,
			});
			console.log(response);

			if (response.status === 200) {
				console.log("Login successful");
			} else {
				console.error("Login failed");
			}
		} catch (error) {
			console.error("Error when login:", error.message);
		}
	};

	return (
		<div className="hero bg-base-200 w-svw grow">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Login now!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
				</div>
				<div className="card shrink-0 w-full max-w-sm shadow-sm bg-base-100">
					<form
						className="card-body"
						onSubmit={(e) => {
							e.preventDefault();
							handleLogin();
						}}
					>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Phone Number</span>
							</label>
							<input
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								type="text"
								placeholder="phone"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control mt-6">
							<Button text={"Login"} type={"success"} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
