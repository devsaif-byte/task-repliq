"use client";
import React, { useState } from "react";
import Button from "../common/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { uid } from "uid";
const SignUp = () => {
	const router = useRouter();
	// local states
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = async (event) => {
		event.preventDefault();
		const id = uid();
		const newUser = {
			id,
			phone,
			password,
			role: "regular",
		};

		try {
			const { data } = await axios.post("/api/users", newUser);
			console.log(data);
			alert(JSON.stringify(data));
			router.push("/login");
		} catch (error) {
			console.error("Error during signup:", error.message);
			alert(error.message);
		}
	};

	return (
		<div className="hero w-svw grow">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Register Here</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
				</div>
				<div className="card shrink-0 w-full max-w-sm shadow-sm bg-base-100">
					<form className="card-body" onSubmit={handleSignUp}>
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
								type="password"
								onChange={(e) => setPassword(e.target.value)}
								placeholder="password"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control mt-6">
							<Button text={"Register"} type={"primary"} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
