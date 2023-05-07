import React from 'react'
type nput={
	value: string,
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Input({value, handleChange}:nput) {
	return (
		<input value={value} onChange={handleChange}/>
	)
}
