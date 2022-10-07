import { useEffect } from 'react';
import './App.css';



function App() {
  // FUNCTIONS
  useEffect( ()=>{
    TG.ready();
  } )



  // RENDER
  return (
    <div className="App">
     works!
     <button onClick={onClose}>Close Window!</button>
    </div>
  );
}

export default App;
