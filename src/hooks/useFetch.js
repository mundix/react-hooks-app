import { useEffect, useState, useRef } from "react"

export const useFetch = ( url ) => {
     

    //Se agrego el useRef , la idea que mantenga la referncia cuando este hook esta vivo,  es para mantener la referencia al valor
    const isMounted = useRef(true);

    //Este efect cuando se desmonta, para manipualr la variable
    useEffect(() => {
        return () => {
            // Se usa .current por que es un 'useRef' 
            isMounted.current = false;
        }
    }, []); // no quiero que haga nada solo que cuando se desmonte, cambie el valor de isMounted.current = false

    // Se puede poenralguna condicion al url si no viene 
    const [state, setState] = useState({ data: null, loading: true, error: null});
    
    //Este efecto se acrtiva cuando llega valor en le url 
    useEffect( () => {

        setState({ data: null, loading: true, error: null}); //regresa un nuevo stado en el estado inicial.

        fetch( url)
        .then( resp => resp.json())
        .then( data => {
            // Intencioalmente voy a poner este setState un poco mas lento , uno 4 segundos, para probar.
            // Esto genera un error al momento de cerrarlo , que tiene que ver con el uso excesivo de memoria, 
            // o nos siguiere cancelar la subscripcion, para solucionarlo usaremos el useRef
            // setTimeout( ()=> {
            //     //ahi me confima que esta montado 
            //     if( isMounted.current) {
            //         setState({
            //             loading: false,
            //             error: null,
            //             data 
            //         });
            //     } else {
            //         // El mensaje de prevenir el error
            //         console.log('setState no se llamo');
            //     }
            // }, 4000);
            
                //ahi me confima que esta montado 
                if( isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data 
                    });
                } 

        });
    }, [url]);

    return state;
}
