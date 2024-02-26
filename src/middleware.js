import { cookies } from "next/headers";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
// This function can be marked `async` if using `await` inside
export function middleware(request) {
	const cookie = cookies().get("AdminJWT");
	if (!cookie) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	// validate
	const secret = process.env.JWT_SECRET || "";
	const jwtToken = cookie.value;

	try {
		const { decoded } = jwt.verify(jwtToken, secret, {});
		console.log(decoded);

		return response;
	} catch (error) {
		if (!cookie) {
			return NextResponse.redirect(new URL("/login", request.url));
		}
	}
}

export const config = {
	matcher: "/dashboard/:path*",
};
