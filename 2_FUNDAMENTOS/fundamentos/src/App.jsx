import { useState } from 'react'
//components
import Challenger from './components/challenger'
import Events from './components/events';

//CSS/Style
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>teste</p>
        <Challenger />
        <Events />
      </div>
    </>
  );
};

export default App
