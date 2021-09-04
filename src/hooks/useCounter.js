import { useState } from 'react';
//un custom hook no es mas que una simple function 

export const useCounter = (initialState = 10) => {
    
    const [state, setState] = useState( initialState);

    // const increment = () => {
    const increment = (factor = 1) => {
        // setState( state + 1);
        setState( state + factor);
    }

    const decrement = (factor = 1) => {
        // setState( state - 1);
        setState( state - factor);
    }

    const reset = () => {
        setState(initialState);
    }

    // se peude refresar un objeto por si necesito incrementar o decrementar 
    return  {
        state,
        increment,
        decrement,
        reset
    }

}