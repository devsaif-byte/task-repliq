// "use server";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { serialize } from "cookie";
import { users } from "../users/data";

// const secret = process.env.JWT_SECRET || "";
// export async function GET() {
// 	const cookieStore = cookies();
// 	const token = cookieStore.get("AdminJWT");

// 	if (!token) {
// 		return NextResponse.json({ message: "Unauthorize" }, { status: 401 });
// 	}
// 	try {
// 		const decodedVal = verifyToken(token.value, secret);
// 		return new Response(JSON.stringify({ user: "user found!", decodedVal }));
// 	} catch (err) {
// 		return NextResponse.json(
// 			{ message: "Something wrong with the user" },
// 			{ status: 400 }
// 		);
// 	}
// }

export async function POST(request) {
	try {
		const body = await request.json();
		const { id, phone, password, role } = body;

		console.log(body);

		// match the body user to server user data
		const isCorrectPassword = users.find((user) => user.password === password);
		if (!isCorrectPassword) {
			alert("Password didn't match!");
			return NextResponse.json({ message: "Unauthorize" }, { status: 401 });
		}

		// jwt secret
		const secret = process.env.JWT_SECRET || "";
		// create token
		const token = jwt.sign({ id, phone }, secret, {
			expiresIn: "1h",
		});

		const serialized = serialize("AdminJWT", token, {
			httpOnly: true,
			secure: false,
			sameSite: "strict",
			maxAge: 3600000, // equivalent to one hour
			path: "/",
		});

		// cookies().set("Authorization", token);

		return new Response(
			JSON.stringify({
				message: "User Matched!",
				userId: id,
				userPhone: phone,
				userRole: role,
			}),
			{
				status: 200,
				headers: { "Set-Cookie": serialized },
			}
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Something wrong with the user" },
			{ status: 400 }
		);
	}
}
