//exporting props type from one component to another

import React from 'react'
import Great from './Great'

export default function Greating({name}:React.ComponentProps<typeof Great>) {
	return (
		<div> {name}</div>
	)
}
