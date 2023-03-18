import { useState } from 'react'

export const useCounter = (initialcounter = 10) => {
  
    const [counter, setCounter] = useState(initialcounter);

    const increment = () => {
        setCounter(counter + 1);
    }

    const reset = () => {
        setCounter(initialcounter);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
