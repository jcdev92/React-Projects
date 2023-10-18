import { useFetch , useCounter }  from "../hooks";
import { Quotes , LoadingQuotes } from "./";

export const MultipleCustomHooks = () => {
    const {counter , increment , decrement} = useCounter(1);
    const {data , isLoading , hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author , quote} = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr/>
            {hasError && <div className="alert alert-danger text-center">Error: {hasError}</div>}
            {isLoading ? <LoadingQuotes/> : <Quotes author={author} quote={quote}/>}
            <button className="btn btn-primary" onClick={() => decrement(1)}
                    disabled={counter === 1 || isLoading}>Previous Quote
            </button>
            <button className="btn btn-primary" onClick={() => increment(1)} disabled={isLoading}>Next Quote</button>
        </>
    )
}