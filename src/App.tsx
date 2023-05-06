  
import './App.css';
import Detail from './components/Detail';
import Great from './components/Great';
import Status from './components/Status';
function App() {
	const  persinalData ={
		firstName : "emmanauel",
		lastName: "eban" 
	}
  return (
    <div className="App"> 
		<Great name ={"vicar eban"} message={9} />
		<Detail data = {persinalData} />
		<Status status ={"loading"} />
		 </div>
 )
}

export default App;
 
