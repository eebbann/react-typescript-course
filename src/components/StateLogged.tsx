import React from "react";
import { useState } from "react";

export default function() {
	const [isLoggedIn, setisLoggedIn] = useState(false); // types inferred is noted here so if boolean is not provided in return you get error

	const handleLogin = () => {
		setisLoggedIn(true);
	};
	const handleLogout = () => {
		setisLoggedIn(false);
	};
	return (
		<div>
			<button type="button" onClick={handleLogin} />
			<button type="button" onClick={handleLogout} />
			<p>User is {isLoggedIn ? "login " : "loggedout"}</p>
		</div>
	);
}
