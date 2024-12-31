import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [time, setTime] = useState(0);

let timeRef=useRef(null);

function startTimer(){
  timeRef.current = setInterval(()=>{
    setTime(time=>time+1)
  },1000)
}
function stopTimer(){
clearInterval(timeRef.current)
timeRef.current=null;
}
function resetTimer(){
stopTimer();
setTime(0);
}

  return (
    <>
    <div>
      <h1>StopWatch {time} Seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
    </div>
    <br/><br/>
    <div>
      
      <button onClick={stopTimer}>
        Stop
      </button>
    </div>
    <br/><br/>
    <div>
      
      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
    <br/><br/>
    </>
  )
}

export default App;
