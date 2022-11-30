import React, {useState} from "react";


const Counter = () => {
    const [counter, setCounter] = useState(1)
    const [counterDecrement, setCounterDecrement] = useState(2)

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1)
    }

    const decrementCounter = () => {
        setCounterDecrement((prevCounter) => prevCounter -1)
    }

    return (
        <>
            <button data-testid='increment' onClick={incrementCounter}>Sumar +</button>

            <button data-testid='decrement' onClick={decrementCounter}>Restar -</button>
            <p data-testid='counter'>{counter}</p>
            <p data-testid='counterDecrement'>{counterDecrement}</p>
        </>
    )
}

export default Counter