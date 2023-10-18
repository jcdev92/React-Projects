import { useLayoutEffect , useRef , useState } from "react";

export const Quotes = ({quote , author}) => {

    const pRef = useRef();

    useLayoutEffect(() => {

        const {height , width} = pRef.current.getBoundingClientRect();
        setBoxSize({height , width});

    } , []);

    const [boxSize , setBoxSize] = useState({width: 0 , height: 0});

    return (
        <>
            <blockquote className="blockquote text-right" style={{display: 'flex'}}>
                <p className="mb-0" ref={pRef}>{quote}</p>
                <br/>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}