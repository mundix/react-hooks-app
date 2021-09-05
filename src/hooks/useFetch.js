import { useEffect, useState } from "react"

export const useFetch = ( url ) => {
     
    // Se puede poenralguna condicion al url si no viene 
    const [state, setstate] = useState({ data: null, loading: null, error: null});

    useEffect( () => {
        fetch( url)
        .then( resp => resp.json())
        .then( data => {
            setstate({
                loading: false,
                error: null,
                data 
            })
        });
    }, [url]);

    return state;
}
