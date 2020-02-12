import React, {useState} from 'react';
import '../App.css'

// practice React Hooks/ useState.
// biuld a simple counter app with useState

function App_useState() {

    const [counter, setCounter] = useState(0)

    function countUp() {
        setCounter(counter +1)
    }
  return (
    <div className="App content">
      <button onClick={countUp}>Count Up</button>
      <h1>{counter}</h1>
    </div>
  );
}

export default App_useState;
