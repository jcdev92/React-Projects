import { useState } from "react";

export const useCounter = (initialState = 0) => {
    const [counter , setCounter] = useState(initialState);
    const increment = (value) => setCounter(counter + value);
    const decrement = (value) => setCounter(counter - value);
    const reset = () => setCounter(initialState);
    return {counter , increment , decrement , reset};
}
