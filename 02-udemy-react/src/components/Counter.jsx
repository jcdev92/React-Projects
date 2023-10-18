import React, {useState} from 'react';

const Counter = ({value}) => {

    const [count, setCount] = useState(value)

    const increment = () => (setCount(count + 1))
    const decrement = () => (setCount(count - 1))
    const reset = () => (setCount(value))

 return (
    <div className="counter__container">
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button aria-label="btn-reset" onClick={reset}>Reset</button>
    </div>
 )
};

export default Counter;