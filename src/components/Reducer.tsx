import React, { useReducer } from 'react'

type checkings = {
	count: number
}
type checkingsAction = {
	type:string,
	payload: number
}
const initial = {count : 0}
function reducer (state : checkings, action:checkingsAction){
   switch (action.type) {
		case 'increment':
			return  {count: state.count + action.payload};
			case 'decrement':
				return  {count: state.count - action.payload}
		default:
			return state;
	 }
}

export default function Reducer() {
	const [state, dispatch] = useReducer(reducer,initial)
	return (
		<>
		Count: {state.count}
		<button onClick={() => dispatch({type: 'increment', payload : 10})}/>
		<button onClick={() => dispatch({type: 'decrement', payload : 1})}/>


		</>
		 
	)
}
