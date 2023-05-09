 
import React, { useReducer } from 'react'

 type initial ={
	count : number
 }

 type initialAction ={
	type : string,
	payload : number
 }
const initialState = {count : 10}
 function reducer(state:initial, action:initialAction){
   switch (action.type) {
		case 'Increment':
			return {count: state.count + action.payload};
			case 'Decrement':
				return {count: state.count - action.payload};
		default:
			return state;
	 }
 }
 
export default function Reducer() {
	const [state, dispatch] =  useReducer(reducer, initialState)
	return (
		<div>
			Counter:{state.count}
       <button onClick={()=>dispatch({type:"increment", payload:2})}>add</button>
       <button onClick={()=>dispatch({type:"decrement", payload:2})}>add</button>

		</div>
	)
}
