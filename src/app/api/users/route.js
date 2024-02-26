import { users } from "@/app/api/users/data";

export async function GET() {
	const data = new Response(
		JSON.stringify(users, { statusText: "Data received" })
	);
	console.log(data.body);
	return data;
}

export async function POST(request) {
	try {
		const body = await request.json();
		const { id, phone, password, role } = body;

		console.log(body);

		// if (phone !== 123456 || isValidPassword(password) !== "admin") {
		// 	return NextResponse.json(
		// 		{ message: "UnAuthorized User" },
		// 		{ status: 401 }
		// 	);
		// }

		// create user and send to db/server
		const user = {
			id,
			phone,
			password,
			role,
		};
		// add new user
		users.push(user);

		return new Response(JSON.stringify("User Authenticated!", user), {
			status: 200,
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		});
	}
}
