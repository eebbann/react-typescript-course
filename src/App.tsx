import "./App.css";
import Detail from "./components/Detail";
import Great from "./components/Great";
import Header from "./components/Header";
import Status from "./components/Status";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import Reducer from "./components/Reducer";
import Box from "./components/context/Box";
import {  ThemeContextProvider } from "./components/context/ThemeContext";
 
function App() {
	const persinalData = {
		firstName: "emmanauel",
		lastName: "eban",
	};
	return (
		<div className="App">
			<Great name={"vicar eban"}/>
			<Detail data={persinalData} />
			<Status status={"loading"} />
			<Header>hello emmanauel</Header>
			<Oscar>
				<Header>  hello world</Header>
			</Oscar>
			<Button handleClick={(event, id)=>{
				console.log('clicked', event, id);
			}}/>
			
			 <Input value=" " handleChange={event => console.log('clicked', event)}/> 
			 <Container style={{border: '4px solid green', margin:'3em'}}/>
			<Reducer/>
			<ThemeContextProvider>
					<Box/>
			</ThemeContextProvider>
		
		</div>
	);
}

export default App;
