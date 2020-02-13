import React, { useEffect, useState, useRef } from 'react';
import '../App.css'

// practice React Hooks/ useEffect.
// this amazing useEffect() replaces componentDidMount() and componentDidUpdate()

function App_useRef() {

    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState('')
    const amountRef = useRef()
    const reachMaxRef = useRef(false)

    const countUp = () => {
        if (!reachMaxRef.current) {
            if (counter >= 10) {
                reachMaxRef.current = true
            } else {

                setCounter((c) => c + (+amountRef.current.value || 1))
            }
        } else {
            console.log("you reached max value")
        }

    }
    const handleTitle = () => {
        setTitle("Mohamed Abdel Nasser")
    }
    useEffect(() => {
        console.log("Mohamed will ace Hooks 1 ")
        document.title = title;
        return () => {
            setTimeout(() => {
                setTitle('')
                console.log('Clean up')
            }, 2000)
        }
    }, [title])

    useEffect(() => {
        console.log("Mohamed will ace Hooks 2")
        document.title = `Mohamed ${counter}`;
    }, [counter])

    useEffect(() => {
        amountRef.current.focus()
    })
    return (
        <div className="App content">
            <input ref={amountRef} />
            <br />
            <button onClick={countUp}>Count Up</button>
            <br />
            <button onClick={handleTitle}>Change Title</button>
            <br />
            <h1>{counter}</h1>
        </div>
    );
}

export default App_useRef;
