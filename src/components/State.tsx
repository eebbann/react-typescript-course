import React from "react";
import { useState } from "react";

type Auth={
	name: string,
	email: string,
}
export default function() {
	const [isLoggedIn, setisLoggedIn] = useState<Auth | null>(null); // types inferred is noted here so if boolean is not provided in return you get error

	const handleLogin = () => {

		setisLoggedIn({
			name : 'ebann',
			email: 'ebann@gmail.com',
		});
	};
	const handleLogout = () => {
		setisLoggedIn(null);
	};
	return (
		<div>
			<button type="button" onClick={handleLogin} />
			<button type="button" onClick={handleLogout} />
			<p>User is {isLoggedIn ? "login " : "loggedout"}</p>
		</div>
	);
}
