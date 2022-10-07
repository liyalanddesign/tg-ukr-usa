import { useEffect } from 'react';
import './App.css';

const TG = window.Telegram.WebApp;

function App() {
  // FUNCTIONS
  useEffect( ()=>{
    TG.ready();
  } )

  const onClose = () => {
    TG.close()
    console.log("Window supposed to be closed")
  }

  // RENDER
  return (
    <div className="App">
     works!
     <button onClick={onClose}>Close Window!</button>
    </div>
  );
}

export default App;
