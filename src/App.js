import './App.css';
import { useEffect } from 'react';
import{useTelegram} from './hooks/useTelegram';


function App() {
  const {onToggleButton, TG} = useTelegram();

  useEffect( ()=>{
    TG.ready();
  } )

  // RENDER
  return (
    <div className="App">
      <button onClick={onToggleButton} className="button">Вкл./Выкл. меню</button>
    
    </div>
  );
}

export default App;
