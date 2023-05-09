import   { useReducer } from 'react'


type initial ={
	count : number
}

type initialAction ={
	type : 'addition' | 'subtraction',
	payload : number
 }
const initialState = {count : 0}
function reducer(state:initial, action:initialAction){
	switch (action.type){
		case  'addition':
		return {count: state.count + action.payload}
		case 'subtraction':
		return {count: state.count - action.payload}
   default:
	 return state
}
	}
	function Reducer_two() {
		const [state, dispatch] =  useReducer(reducer, initialState)
		return (
			<div>Reducer_two : {state.count}
			 <button onClick={()=> dispatch({type:"addition", payload:9})}>add it</button>
			</div>
		)
	}
	
export default Reducer_two