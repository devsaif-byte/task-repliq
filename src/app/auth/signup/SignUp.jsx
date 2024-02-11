import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/common/Button";
import axios from "axios";

const SignUp = () => {
	const dispatch = useDispatch();
	// local states
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = async () => {
		try {
			const response = await axios.post("/api/signUp", {
				phone: phone,
				password: password,
			});
			console.log(response);

			if (response.status === 201) {
				console.log("signup successful");
			} else {
				console.error("signup failed");
			}
		} catch (error) {
			console.error("Error during signup:", error.message);
		}
	};

	return (
		<div className="hero bg-base-200 w-svw grow">
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
					<form
						className="card-body"
						onSubmit={(e) => {
							e.preventDefault();
							handleSignUp();
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
