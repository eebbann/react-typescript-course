//resstricting multiple props so type selects just one

import React from 'react'

type valueInput={
	value : number
}

type positiveInput= valueInput &{
  positive: boolean,
	negative?:  never,
	empty?: never
}

type negativeInput= valueInput &{
  positive?: never,
	negative:  boolean,
	empty?: never
}
type emptyInput= valueInput &{
  positive?: never,
	negative?:  never,
	empty: boolean
}

type combo = positiveInput | negativeInput | emptyInput


export default function Restriction({value,positive, negative, empty}:combo) {
	return (
		<div> {value} {positive}</div>
	)
}
