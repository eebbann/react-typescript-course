//simple props passing using types to states data type note this is single string data 
//in the type we can have multiple properties with different types
// we passed the name and message props to the type called grid 

import React from 'react'
type grid = {
 name : string, // defining name prop 
 message? : number, // defining message prop passed
}

export default function Great({name, message}:grid) {
	return (
		<div>Welcome Great ypur {name} {message}</div>
	)
}
