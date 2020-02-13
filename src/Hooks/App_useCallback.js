import React, { useEffect, useState, useRef, useCallback } from 'react';
import {Button} from './Button'
import '../App.css'

// practice React Hooks/ useEffect.
function App() {

    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState('')
    const amountRef = useRef()
   // const reachMaxRef = useRef(false)
    const listButtons= [1, 4, 7 , 25]
    const countUp = () => {
        setCounter(counter+ 1)
    }
    const handleTitle = () => {
        setTitle("Mohamed Abdel Nasser")
    }
    useEffect(() => {
        document.title = title;
        return () => {
            setTimeout(() => {
                setTitle('')
                console.log('Clean up')
            }, 2000)
        }
    }, [title])

    useEffect(() => {
        document.title = `Mohamed ${counter}`;
    }, [counter])
   /*
    useEffect(() => {
        amountRef.current.focus()
    })
    */
   const onClick = useCallback((n)=> setCounter((c) => c+n), [setCounter])

    return (
        <div className="App content">
            <input ref={amountRef} />
            <br />
            {listButtons.map((count) => {
                return (
            <Button counterFn={onClick} label={count} key={count} n={count}/>
                
            )
            })}
            <br/>
            <Button counterFn={onClick} label="Count up and up" n={1}/>
            <button onClick={countUp}>Count Up</button>
            <br />
            <button onClick={handleTitle}>Change Title</button>
            <br/>
            <br />
            <h1>{counter}</h1>
        </div>
    );
}

export default App
