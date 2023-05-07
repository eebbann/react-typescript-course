import React from 'react'
type btn ={
 handleClick:(event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export default function Button({handleClick}:btn) {
	return (
		<button onClick={(event) => handleClick(event, 1)}> click </button>
	)
}
 