import React from 'react'

type Oscarprops ={
	children : React.ReactNode
}
export default function Oscar({children}:Oscarprops) {
	return (
		<div>{children}</div>
	)
}
