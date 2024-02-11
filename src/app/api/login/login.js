import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
import axios from "axios";

export default async function loginHandler(req, res) {
	if (req.method === "POST") {
		const { phone, password } = req.body;

		// Validation
		if (!phone || !password) {
			return NextResponse.json(
				{ message: "Invalid credentials" },
				{ status: 401 }
			);
		}

		const userId = 1;

		if (phone === "0123456789" && password === "admin") {
			const token = jwt.sign({ userId, phone }, "admin", {
				expiresIn: "1h",
			});

			try {
				// POST request to set cookie on the signup API
				const signupResponse = await axios.post(
					"http://localhost:3100/api/signup",
					{
						phone,
						password,
					}
				);

				if (signupResponse.status === 200) {
					const response = NextResponse.next();
					response.cookies.set("token", token);

					return response.json(
						{ message: "Login successful" },
						{ userId, phone, token }
					);
				} else {
					return NextResponse.json(
						{ message: "Error in signup API" },
						{ status: 500 }
					);
				}
			} catch (error) {
				console.error("Error when making signup API request:", error.message);
				return NextResponse.json(
					{ message: "Internal Server Error" },
					{ status: 500 }
				);
			}
		} else {
			return NextResponse.json(
				{ message: "Invalid credentials" },
				{ status: 401 }
			);
		}
	} else {
		return NextResponse.next();
	}
}
