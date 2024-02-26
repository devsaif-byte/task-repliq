"use client";
import React, { useState } from "react";
import Button from "../common/Button";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
	// local states
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleLogin = async (event) => {
		event.preventDefault();
		const user = { phone, password };

		try {
			const { data } = await axios.post("/api/login", user);
			// const { users } = await axios.get("/api/login", user);
			console.log(data);
			alert("User matched!");
			if (data.message === "User Matched!") router.push("/dashboard");
		} catch (error) {
			console.error("Error when login:", error.message);
		}
	};

	return (
		<div className="hero w-svw grow">
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
					<form action="" className="card-body" onSubmit={handleLogin}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Phone Number</span>
							</label>
							<input
								name="phone"
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
								name="password"
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
