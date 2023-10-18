import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>
            <input ref={inputRef} type={ "text" } className={ "form-control" } placeholder={ "Your name" } />
            <br></br>
            <input ref={inputRef}  type={ "text" } className={ "form-control" } placeholder={ "Your last name" } />
            <button className={ "btn btn-outline-primary mt-5" } onClick={handleClick}>Focus</button>
        </>
    )
}