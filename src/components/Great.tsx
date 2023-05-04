import React from 'react'
type grid = {
 name : string,
 message : number,
}

export default function Great({name, message}:grid) {
	return (
		<div>Welcome Great ypur {name} {message}</div>
	)
}
