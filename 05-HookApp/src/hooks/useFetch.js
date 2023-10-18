import { useEffect , useState } from "react";

export const useFetch = (url) => {
    const [state , setState] = useState({data: null , isLoading: true , hasError: null});

    const getFetch = async () => {

        setState({
                     ...state ,
                     isLoading: true ,
                 })

        try {
            const resp = await fetch(url);
            const data = await resp.json();

            setState({
                         data ,
                         loading: false ,
                         hasError: null
                     });

        } catch (error) {
            setState({
                         ...state ,
                         hasError: true ,
                         isLoading: false ,
                     })
        }
    }

    useEffect(() => {
        getFetch();
    } , [url]);

    return state;
}