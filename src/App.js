import { useRef, useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Screen from './components/Screen/Screen.jsx';
import TimePicker from './components/TimePicker/TimePicker.jsx';

function App() {
  let [time, setTime] = useState(0)
  let [up, isUp] = useState(false)

  return (
    <div className="App">
      <Screen />
      <TimePicker setTime={setTime} isOnScreen={isUp}/>
      <Board timer={time} isOnScreen={up}/>
    </div>
  );
}

export default App;
