import React from 'react'

type Textprops ={
	size?: 'sm' | 'lg' | 'md'
	color?: 'primary' | 'secondary' 
	children?: React.ReactNode
	as?: React.ElementType
} 
export default function Text({size, color, children, as}:Textprops) {
	const Component  = as ||  "div"
	return (
		<Component>{`class-width: ${size}`}- {color}</Component>
	)
}
