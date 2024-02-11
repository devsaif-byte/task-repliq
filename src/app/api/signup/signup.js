import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
import { createRouter, expressWrapper } from "next-connect";

export default function signupHandler(req, res) {
	if (req.method === "POST") {
		const { phone, password } = req.body;
		if ((!phone, !password))
			return NextResponse.json({ massage: "Fields can not be empty" });

		const userId = 1;

		const token = jwt.sign({ userId, phone }, "admin", { expiresIn: "1h" });

		const response = NextResponse.next();
		response.cookies.set("token", token);
		return response.json({ msg: "ok" }, { userId, phone, token });
	} else return NextResponse.next();
}
