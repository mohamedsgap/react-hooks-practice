import React, {useEffect, useState} from 'react';
import '../App.css'

// practice React Hooks/ useEffect.
// this amazing useEffect() replaces componentDidMount() and componentDidUpdate()

function App_useEffect() {

    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState('')


    const countUp= () => {
        setCounter(counter +1)
    }
    const handleTitle= () => {
        setTitle("Mohamed Abdel Nasser")
    }
    useEffect(()=>{
        console.log("Mohamed will ace Hooks 1 ")
        document.title = title;
        return () => {
            setTimeout(()=>{
                setTitle('')
                console.log('Clean up')
            }, 2000)
        }
    }, [title])

    useEffect(()=>{
        console.log("Mohamed will ace Hooks 2")
        document.title = `Mohamed ${counter}`;
    }, [counter])
  return (
    <div className="App content">
      <button onClick={countUp}>Count Up</button>
      <button onClick={handleTitle}>Change Title</button>

      <h1>{counter}</h1>
    </div>
  );
}

export default App_useEffect;
