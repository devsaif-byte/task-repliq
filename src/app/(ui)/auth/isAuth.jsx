// "use client";

import React, { useEffect } from "react";

function checkUserAuthentication() {}

export default function isAuth(Component) {
	return function IsAuth(props) {
		const auth = isAuthenticated;

		useEffect(() => {
			if (!isAuth) return redirect("/");
		}, []);

		if (!isAuth) return null;
		return <Component {...props} />;
	};
}
