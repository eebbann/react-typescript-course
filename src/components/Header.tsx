import React from 'react'
type comp = {
	children: string
}

function Header({children}:comp) {
	return (
		<div>{children}</div>
	)
}

export default Header