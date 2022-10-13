import './App.css';
import { useEffect } from 'react';
import{useTelegram} from './hooks/useTelegram';
import Header from './components/Header/Header'
import {Route, Routes, Link} from 'react-router-dom'
import Form from './components/Form/Form';
import Hello from './components/Hello';
import Roadmap from './components/Roadmap';
import ButtonIcon from './components/ButtonIcon';

function App() {

  const {onToggleButton, TG} = useTelegram();

  useEffect( ()=>{
    TG.ready();
  }, [] )

  // RENDER
  return (
    <div className="App">
      <Header />
      <ul className={'links__list'}>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/roadmap">Планы</Link></li>
      </ul>
      <Routes>
        <Route index  element={<Hello />} />
        <Route path={'/roadmap'} element={<Roadmap />} />
      </Routes>
    </div>
  );
}

export default App;
