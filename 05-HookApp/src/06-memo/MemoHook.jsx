import { useCounter }         from "../hooks/index.js";
import { useMemo , useState } from "react";


const heavyStuff = (iterationNumber = 5000) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log("Iterating...");
    }
    return `${iterationNumber} iterations done.`;
}


export const MemoHook = () => {

    const {counter , increment} = useCounter(5000);
    const [show, setShow] = useState(true);
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter <small>{counter}</small></h1>
            <hr/>

            <h4>{heavyStuff(memorizedValue)}</h4>
            <button className="btn btn-primary" onClick={() => increment(1)}>
                +1
            </button>
            <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}