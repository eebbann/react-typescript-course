import React from 'react'
type sty = {
	style : React.CSSProperties
}
export default function Container({style}:sty) {
	return (
		<div style={style}>Container</div>
	)
}
