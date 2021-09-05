import { useEffect, useState } from "react"

export const useFetch = ( url ) => {
     
    // Se puede poenralguna condicion al url si no viene 
    const [state, setState] = useState({ data: null, loading: true, error: null});

    useEffect( () => {

        setState({ data: null, loading: true, error: null}); //regresa un nuevo stado en el estado inicial.

        fetch( url)
        .then( resp => resp.json())
        .then( data => {
            setState({
                loading: false,
                error: null,
                data 
            })
        });
    }, [url]);

    return state;
}
